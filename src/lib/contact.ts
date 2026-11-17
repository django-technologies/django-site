// Contact form: validation, escaping and abuse limits for /api/contact.
// Pure functions (no I/O) so they can be unit-tested.

export const LIMITS = { name: 120, email: 254, message: 5000, bodyBytes: 16_384 } as const

export type ContactInput = { name: string; email: string; message: string }

export type ParseResult =
  | { ok: true; value: ContactInput }
  | { ok: false; reason: 'invalid' }
  | { ok: false; reason: 'spam' }

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g
const HAS_CONTROL_CHAR = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/
const LINE_BREAKS = /[\r\n\u2028\u2029]/

function str(v: unknown): string | null {
  return typeof v === 'string' ? v : null
}

export function parseContact(body: unknown): ParseResult {
  if (!body || typeof body !== 'object') return { ok: false, reason: 'invalid' }
  const b = body as Record<string, unknown>

  // Honeypot: a field real users never see or fill. Bots that fill every
  // input are dropped silently (the route answers 200 so they do not adapt).
  const trap = str(b.website)
  if (trap && trap.trim() !== '') return { ok: false, reason: 'spam' }

  const name = str(b.name)?.trim()
  const email = str(b.email)?.trim()
  const message = str(b.message)?.replace(CONTROL_CHARS, '').trim()
  if (!name || !email || !message) return { ok: false, reason: 'invalid' }
  if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
    return { ok: false, reason: 'invalid' }
  }
  // name and e-mail end up in mail headers (Subject, Reply-To): no line breaks.
  if (LINE_BREAKS.test(name) || LINE_BREAKS.test(email) || HAS_CONTROL_CHAR.test(name)) {
    return { ok: false, reason: 'invalid' }
  }
  if (!EMAIL_RE.test(email)) return { ok: false, reason: 'invalid' }
  return { ok: true, value: { name, email, message } }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function buildContactEmail(input: ContactInput) {
  const subject = `Contato pelo site - ${input.name}`.slice(0, 160)
  const text = `Nome: ${input.name}\nE-mail: ${input.email}\n\nMensagem:\n${input.message}`
  const html = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; color: #111418;">
        <p><strong>Nome:</strong> ${escapeHtml(input.name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(input.email)}</p>
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-line;">${escapeHtml(input.message)}</p>
      </div>
    `
  return { subject, text, html }
}

// Requests must come from a page on the same host (blocks cross-site form
// posting / scripted abuse from other origins; same-origin fetch always sends
// Origin on POST).
export function isSameOrigin(origin: string | null, host: string | null): boolean {
  if (!origin || !host) return false
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

// Best-effort per-instance limiter (no shared store on this project): a few
// messages per IP per window. Bounded memory, no timers.
export class ContactRateLimiter {
  private hits = new Map<string, { count: number; resetAt: number }>()
  constructor(
    private readonly limit = 5,
    private readonly windowMs = 10 * 60_000,
    private readonly maxKeys = 5_000,
    private readonly now: () => number = Date.now,
  ) {}

  check(key: string): { allowed: true } | { allowed: false; retryAfterSeconds: number } {
    const now = this.now()
    let entry = this.hits.get(key)
    if (!entry || entry.resetAt <= now) {
      if (this.hits.size >= this.maxKeys) {
        for (const [k, e] of this.hits) if (e.resetAt <= now) this.hits.delete(k)
        while (this.hits.size >= this.maxKeys) {
          const oldest = this.hits.keys().next().value
          if (oldest === undefined) break
          this.hits.delete(oldest)
        }
      }
      entry = { count: 0, resetAt: now + this.windowMs }
      this.hits.set(key, entry)
    }
    entry.count += 1
    if (entry.count > this.limit) {
      return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)) }
    }
    return { allowed: true }
  }
}

// Vercel overwrites X-Forwarded-For with the real client IP (no spoofing).
export function clientIp(headers: Pick<Headers, 'get'>): string {
  return headers.get('x-forwarded-for')?.split(',')[0]?.trim() || headers.get('x-real-ip')?.trim() || 'unknown'
}
