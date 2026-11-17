import { describe, expect, it } from 'vitest';
import {
  ContactRateLimiter,
  buildContactEmail,
  clientIp,
  escapeHtml,
  isSameOrigin,
  parseContact,
} from './contact';

const valid = { name: 'Maria Silva', email: 'maria@example.com', message: 'Olá, gostaria de conversar.' };

describe('parseContact', () => {
  it('accepts a valid submission and trims fields', () => {
    expect(parseContact({ ...valid, name: '  Maria Silva ' })).toEqual({ ok: true, value: valid });
  });

  it.each([
    ['missing name', { ...valid, name: '' }],
    ['non-string field', { ...valid, email: { $ne: '' } }],
    ['invalid e-mail', { ...valid, email: 'not-an-email' }],
    ['name too long', { ...valid, name: 'a'.repeat(121) }],
    ['message too long', { ...valid, message: 'a'.repeat(5001) }],
    ['header injection in name', { ...valid, name: 'Maria\r\nBcc: victim@example.com' }],
    ['header injection in e-mail', { ...valid, email: 'maria@example.com\nBcc: x@example.com' }],
    ['not an object', 'hello'],
    ['null', null],
  ])('rejects %s', (_label, body) => {
    expect(parseContact(body)).toEqual({ ok: false, reason: 'invalid' });
  });

  it('flags the honeypot as spam', () => {
    expect(parseContact({ ...valid, website: 'http://spam.example' })).toEqual({ ok: false, reason: 'spam' });
  });

  it('ignores an empty honeypot', () => {
    expect(parseContact({ ...valid, website: '' }).ok).toBe(true);
  });

  it('is stable across repeated calls (no regex state leak)', () => {
    for (let i = 0; i < 3; i++) expect(parseContact(valid).ok).toBe(true);
  });
});

describe('escapeHtml / buildContactEmail', () => {
  it('escapes HTML special characters', () => {
    expect(escapeHtml(`<script>alert("x")</script>&'`)).toBe(
      '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;&amp;&#39;',
    );
  });

  it('never puts raw user HTML in the e-mail body', () => {
    const { html, subject } = buildContactEmail({
      name: '<img src=x onerror=alert(1)>',
      email: 'a@example.com',
      message: '<a href="https://phish.example">clique</a>',
    });
    expect(html).not.toContain('<img');
    expect(html).not.toContain('<a href');
    expect(html).toContain('&lt;img src=x onerror=alert(1)&gt;');
    expect(subject.length).toBeLessThanOrEqual(160);
  });
});

describe('isSameOrigin', () => {
  it('accepts same host', () => {
    expect(isSameOrigin('https://www.djangotechnologies.com', 'www.djangotechnologies.com')).toBe(true);
  });
  it.each([
    ['https://evil.example', 'www.djangotechnologies.com'],
    [null, 'www.djangotechnologies.com'],
    ['not a url', 'www.djangotechnologies.com'],
    ['https://www.djangotechnologies.com', null],
  ])('rejects origin=%s host=%s', (origin, host) => {
    expect(isSameOrigin(origin, host)).toBe(false);
  });
});

describe('ContactRateLimiter', () => {
  it('allows 5 messages per IP per window, then blocks with Retry-After', () => {
    let now = 0;
    const rl = new ContactRateLimiter(5, 600_000, 100, () => now);
    for (let i = 0; i < 5; i++) expect(rl.check('1.1.1.1').allowed).toBe(true);
    expect(rl.check('1.1.1.1')).toEqual({ allowed: false, retryAfterSeconds: 600 });
    expect(rl.check('2.2.2.2').allowed).toBe(true);
    now = 600_000;
    expect(rl.check('1.1.1.1').allowed).toBe(true);
  });

  it('stays bounded in memory', () => {
    const rl = new ContactRateLimiter(5, 600_000, 2, () => 0);
    rl.check('a');
    rl.check('b');
    rl.check('c');
    expect(rl.check('c').allowed).toBe(true);
  });
});

describe('clientIp', () => {
  it('uses the first X-Forwarded-For hop', () => {
    expect(clientIp(new Headers({ 'x-forwarded-for': '203.0.113.5, 10.0.0.1' }))).toBe('203.0.113.5');
  });
  it('falls back to unknown', () => {
    expect(clientIp(new Headers())).toBe('unknown');
  });
});
