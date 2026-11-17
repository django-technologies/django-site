// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  ContactRateLimiter,
  LIMITS,
  buildContactEmail,
  clientIp,
  isSameOrigin,
  parseContact,
} from '@/lib/contact';

// Garante que estamos no runtime Node.js (necessário para Nodemailer)
export const runtime = 'nodejs';

// Lê variáveis de ambiente
const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;
const toEnv = process.env.CONTACT_TO || process.env.GMAIL_USER;

// Cria o transporter do Nodemailer (Gmail)
const transporter =
  user && pass
    ? nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user,
          pass,
        },
      })
    : null;

// Limite por IP (melhor esforço, por instância): evita uso do formulário para spam.
const limiter = new ContactRateLimiter();

const INVALID = { error: 'Verifique os campos e tente novamente.' };

export async function POST(request: Request) {
  // Logs nunca contêm nome, e-mail ou mensagem (dados pessoais).
  try {
    if (!isSameOrigin(request.headers.get('origin'), request.headers.get('host'))) {
      return NextResponse.json({ error: 'Origem não permitida.' }, { status: 403 });
    }

    const declaredLength = Number(request.headers.get('content-length') ?? '0');
    if (declaredLength > LIMITS.bodyBytes) {
      return NextResponse.json(INVALID, { status: 413 });
    }

    const rate = limiter.check(clientIp(request.headers));
    if (!rate.allowed) {
      return NextResponse.json(
        { error: 'Muitas mensagens em pouco tempo. Tente novamente mais tarde.' },
        { status: 429, headers: { 'Retry-After': String(rate.retryAfterSeconds) } },
      );
    }

    const raw = await request.text();
    if (raw.length > LIMITS.bodyBytes) {
      return NextResponse.json(INVALID, { status: 413 });
    }

    let body: unknown;
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json(INVALID, { status: 400 });
    }

    const parsed = parseContact(body);
    if (!parsed.ok) {
      if (parsed.reason === 'spam') {
        console.warn('[contact] dropped: honeypot');
        return NextResponse.json({ ok: true });
      }
      return NextResponse.json(INVALID, { status: 400 });
    }

    if (!user || !pass || !toEnv || !transporter) {
      console.error('[contact] e-mail transport not configured');
      return NextResponse.json(
        { error: 'Configuração de e-mail não encontrada no servidor.' },
        { status: 500 },
      );
    }

    // Suporta múltiplos destinatários separados por vírgula em CONTACT_TO
    const to = toEnv
      .split(',')
      .map((addr) => addr.trim())
      .filter(Boolean);

    const { subject, text, html } = buildContactEmail(parsed.value);

    await transporter.sendMail({
      from: `"Django Technologies" <${user}>`,
      replyTo: parsed.value.email,
      to,
      subject,
      text,
      html,
    });

    console.info('[contact] message sent');
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] failed to process request', {
      error: err instanceof Error ? err.name : 'unknown',
      code: (err as { code?: unknown } | null)?.code,
    });
    return NextResponse.json(
      { error: 'Erro ao processar a requisição.' },
      { status: 500 },
    );
  }
}
