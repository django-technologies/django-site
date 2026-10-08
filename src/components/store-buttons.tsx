import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../lib/app-links';

type Tone = 'dark' | 'light';

function AppleGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.17-1.54 2.66-.39 6.59 1.1 8.75.73 1.05 1.6 2.24 2.73 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.5ZM14.2 6.13c.6-.73 1.01-1.74.9-2.75-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.68-.92 2.67.97.08 1.96-.49 2.56-1.23Z" />
    </svg>
  );
}

function PlayGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4.2 2.9 13.6 12l-9.4 9.1a1.5 1.5 0 0 1-.6-1.2V4.1c0-.5.2-.9.6-1.2Z" fill="currentColor" opacity="0.9" />
      <path d="m16.7 8.9-3.1 3.1-9.4-9.1c.4-.3 1-.3 1.5 0l11 6Z" fill="currentColor" opacity="0.65" />
      <path d="m16.7 15.1-11 6c-.5.3-1.1.3-1.5 0l9.4-9.1 3.1 3.1Z" fill="currentColor" opacity="0.65" />
      <path d="m20.3 10.9-3.6-2-3.1 3.1 3.1 3.1 3.6-2c.8-.5.8-1.7 0-2.2Z" fill="#51d63b" />
    </svg>
  );
}

const TONES: Record<Tone, string> = {
  dark: 'bg-[var(--brand-black)] text-white border-[var(--brand-black)] hover:bg-[#1a1c1a] shadow-[0_10px_30px_rgba(5,5,5,0.18)]',
  light: 'bg-white text-[var(--brand-black)] border-white hover:bg-[#ecefe9] shadow-[0_10px_30px_rgba(0,0,0,0.3)]',
};

const BASE =
  'group inline-flex h-[3.25rem] min-w-0 items-center gap-3 whitespace-nowrap rounded-2xl border px-3.5 pr-4 sm:min-w-[11.5rem] sm:flex-none sm:px-4 sm:pr-5 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]';

function StoreButton({
  href,
  tone,
  overline,
  label,
  icon,
  stack,
}: {
  stack: boolean;
  href: string;
  tone: Tone;
  overline: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE} ${TONES[tone]} ${stack ? 'w-full flex-none sm:w-auto' : 'flex-1 sm:flex-none'}`}
    >
      <span className="shrink-0">{icon}</span>
      {/* O nome acessível é o próprio texto visível ("Baixar na App Store"), mais o aviso de nova aba. */}
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-medium tracking-[0.02em] opacity-80">{overline} </span>
        <span className="mt-1 font-display text-[17px] font-semibold tracking-[-0.01em]">{label}</span>
      </span>
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}

/**
 * `stack` empilha os botões em telas estreitas (usado dentro de painéis com padding próprio).
 * Uma loja sem URL configurada simplesmente não aparece — ver src/lib/app-links.ts.
 */
export default function StoreButtons({
  tone = 'dark',
  stack = false,
  className = '',
}: {
  tone?: Tone;
  stack?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex gap-3 ${stack ? 'flex-col sm:flex-row' : 'max-w-[24rem] sm:max-w-none'} ${className}`}>
      {APP_STORE_URL ? (
        <StoreButton
          href={APP_STORE_URL}
          tone={tone}
          stack={stack}
          overline="Baixar na"
          label="App Store"
          icon={<AppleGlyph className="h-6 w-6" />}
        />
      ) : null}
      {GOOGLE_PLAY_URL ? (
        <StoreButton
          href={GOOGLE_PLAY_URL}
          tone={tone}
          stack={stack}
          overline="Disponível no"
          label="Google Play"
          icon={<PlayGlyph className="h-6 w-6" />}
        />
      ) : null}
    </div>
  );
}
