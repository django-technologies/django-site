// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não informados.' },
        { status: 400 }
      );
    }

    if (!user || !pass || !toEnv || !transporter) {
      console.error('Configuração de e-mail ausente. Verifique .env.');
      return NextResponse.json(
        { error: 'Configuração de e-mail não encontrada no servidor.' },
        { status: 500 }
      );
    }

    // Suporta múltiplos destinatários separados por vírgula em CONTACT_TO
    const to = toEnv
      .split(',')
      .map((addr) => addr.trim())
      .filter(Boolean);

    const subject = `Contato pelo site - ${name}`;
    const text = `
Nome: ${name}
E-mail: ${email}

Mensagem:
${message}
    `.trim();

    const html = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; color: #111418;">
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Django Technologies" <${user}>`,
      replyTo: email,
      to,
      subject,
      text,
      html,
    });

    console.log('Nova mensagem de contato:', { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Erro ao processar contato:', err);
    return NextResponse.json(
      { error: 'Erro ao processar a requisição.' },
      { status: 500 }
    );
  }
}
