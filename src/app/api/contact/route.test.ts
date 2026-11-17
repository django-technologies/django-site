import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const sendMail = vi.fn();
vi.mock('nodemailer', () => ({
  default: { createTransport: vi.fn(() => ({ sendMail })) },
}));

const valid = { name: 'Maria Silva', email: 'maria@example.com', message: 'Olá <b>equipe</b>' };
let ipCounter = 0;

function request(body: unknown, init: { origin?: string | null; ip?: string; raw?: string } = {}) {
  const headers = new Headers({ 'content-type': 'application/json', host: 'www.djangotechnologies.com' });
  if (init.origin !== null) headers.set('origin', init.origin ?? 'https://www.djangotechnologies.com');
  headers.set('x-forwarded-for', init.ip ?? `198.51.100.${++ipCounter}`);
  return new Request('https://www.djangotechnologies.com/api/contact', {
    method: 'POST',
    headers,
    body: init.raw ?? JSON.stringify(body),
  });
}

async function loadRoute() {
  vi.resetModules();
  return (await import('./route')).POST;
}

const logs: unknown[][] = [];

beforeEach(() => {
  vi.stubEnv('GMAIL_USER', 'sender@example.com');
  vi.stubEnv('GMAIL_PASS', 'app-password');
  vi.stubEnv('CONTACT_TO', 'team@example.com');
  sendMail.mockReset().mockResolvedValue({});
  logs.length = 0;
  for (const level of ['log', 'info', 'warn', 'error'] as const) {
    vi.spyOn(console, level).mockImplementation((...args: unknown[]) => {
      logs.push(args);
    });
  }
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe('POST /api/contact', () => {
  it('sends the e-mail with escaped HTML and the original Reply-To', async () => {
    const POST = await loadRoute();
    const res = await POST(request(valid));
    expect(res.status).toBe(200);
    expect(sendMail).toHaveBeenCalledTimes(1);
    const mail = sendMail.mock.calls[0][0];
    expect(mail.replyTo).toBe('maria@example.com');
    expect(mail.to).toEqual(['team@example.com']);
    expect(mail.html).toContain('Olá &lt;b&gt;equipe&lt;/b&gt;');
    expect(mail.html).not.toContain('<b>equipe</b>');
  });

  it('never logs personal data (name, e-mail, message)', async () => {
    const POST = await loadRoute();
    await POST(request(valid));
    sendMail.mockRejectedValueOnce(Object.assign(new Error('auth failed for maria@example.com'), { code: 'EAUTH' }));
    await POST(request(valid));
    const all = JSON.stringify(logs);
    expect(all).not.toContain('Maria');
    expect(all).not.toContain('maria@example.com');
    expect(all).not.toContain('equipe');
  });

  it('rejects invalid input with 400 and does not send', async () => {
    const POST = await loadRoute();
    const res = await POST(request({ ...valid, email: 'nope' }));
    expect(res.status).toBe(400);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('rejects malformed JSON with 400', async () => {
    const POST = await loadRoute();
    const res = await POST(request(null, { raw: '{not json' }));
    expect(res.status).toBe(400);
  });

  it('rejects oversized bodies with 413', async () => {
    const POST = await loadRoute();
    const res = await POST(request(null, { raw: JSON.stringify({ ...valid, message: 'a'.repeat(20_000) }) }));
    expect(res.status).toBe(413);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('rejects cross-origin and origin-less posts with 403', async () => {
    const POST = await loadRoute();
    expect((await POST(request(valid, { origin: 'https://evil.example' }))).status).toBe(403);
    expect((await POST(request(valid, { origin: null }))).status).toBe(403);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('silently drops honeypot submissions (200, no e-mail)', async () => {
    const POST = await loadRoute();
    const res = await POST(request({ ...valid, website: 'spam' }));
    expect(res.status).toBe(200);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('rate-limits repeated messages from the same IP (429 + Retry-After)', async () => {
    const POST = await loadRoute();
    for (let i = 0; i < 5; i++) expect((await POST(request(valid, { ip: '203.0.113.9' }))).status).toBe(200);
    const res = await POST(request(valid, { ip: '203.0.113.9' }));
    expect(res.status).toBe(429);
    expect(Number(res.headers.get('retry-after'))).toBeGreaterThan(0);
    expect(sendMail).toHaveBeenCalledTimes(5);
  });

  it('returns 500 without leaking details when the mail provider fails', async () => {
    const POST = await loadRoute();
    sendMail.mockRejectedValueOnce(new Error('smtp down'));
    const res = await POST(request(valid));
    expect(res.status).toBe(500);
    expect(JSON.stringify(await res.json())).not.toContain('smtp');
  });
});
