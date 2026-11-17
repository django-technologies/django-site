import { describe, expect, it } from 'vitest';
import nextConfig from '../../next.config';

describe('next.config security headers', () => {
  it('applies the security headers and a Report-Only CSP to every path', async () => {
    const rules = await nextConfig.headers!();
    const all = rules.find((r) => r.source === '/:path*');
    const map = Object.fromEntries(all!.headers.map((h) => [h.key, h.value]));
    expect(map['X-Content-Type-Options']).toBe('nosniff');
    expect(map['X-Frame-Options']).toBe('DENY');
    expect(map['Referrer-Policy']).toBe('strict-origin-when-cross-origin');
    expect(map['Permissions-Policy']).toContain('camera=()');
    expect(map['Content-Security-Policy-Report-Only']).toContain("frame-ancestors 'none'");
    expect(map['Content-Security-Policy-Report-Only']).toContain("object-src 'none'");
  });

  it('never ships an enforcing CSP or changes HSTS (includeSubDomains/preload need approval)', async () => {
    const keys = (await nextConfig.headers!()).flatMap((r) => r.headers.map((h) => h.key.toLowerCase()));
    expect(keys).not.toContain('content-security-policy');
    expect(keys).not.toContain('strict-transport-security');
  });

  it('does not advertise the framework', () => {
    expect(nextConfig.poweredByHeader).toBe(false);
  });
});
