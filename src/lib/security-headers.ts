// Security headers for every response (applied in next.config.ts).
// HSTS is left to Vercel's default (max-age=63072000); includeSubDomains /
// preload are intentionally NOT set — they would affect every subdomain.
//
// CSP ships as Report-Only: it blocks nothing; violations show up in the
// browser console. The site loads no third-party scripts, styles or fonts
// (next/font self-hosts them), so the policy is 'self'-only. 'unsafe-inline'
// is required by the inline scripts Next.js App Router emits.

export type HeaderEntry = { key: string; value: string };

export function buildContentSecurityPolicy(isDev = false): string {
  const script = ["'self'", "'unsafe-inline'"];
  if (isDev) script.push("'unsafe-eval'");
  return [
    "default-src 'self'",
    `script-src ${script.join(' ')}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-src 'none'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');
}

export function buildSecurityHeaders(isDev = false): HeaderEntry[] {
  return [
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    { key: 'Content-Security-Policy-Report-Only', value: buildContentSecurityPolicy(isDev) },
  ];
}
