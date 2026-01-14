'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Sobre' },
  { href: '/reports', label: 'Relatórios' },
  { href: '/contact', label: 'Contato' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 border-b border-[var(--color-surface)]
                 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60
                 shadow-[0_1px_6px_rgba(15,23,42,0.12)]"
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:m-4 focus:px-3 focus:py-2 focus:bg-white focus:rounded"
      >
        Pular para o conteúdo
      </a>

      <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <Image
            src="/logo-mark.svg"
            alt="Django Technologies"
            width={28}
            height={28}
            priority
          />
          <span>Django Technologies</span>
        </Link>

        <nav aria-label="Principal" className="flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
              className="hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 rounded"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
