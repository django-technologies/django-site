import Image from 'next/image';
import Link from 'next/link';

const FOOTER_NAV = [
  { href: '/#produto', label: 'Produto' },
  { href: '/memorando', label: 'Memorando' },
  { href: '/about', label: 'Sobre' },
  { href: '/contact', label: 'Contato' },
];

const ARCHIVE_NAV = [
  { href: '/reports', label: 'Relatórios' },
  { href: '/insights', label: 'Insights' },
  { href: '/strategies', label: 'Strategies' },
];

const LEGAL_DISCLAIMER =
  'Conteúdo exclusivamente informacional, educacional e analítico. Não constitui recomendação de investimento, consultoria de valores mobiliários, análise de valores mobiliários, gestão de carteira, oferta pública, intermediação, distribuição, solicitação de compra ou venda de ativos, nem promessa de rentabilidade. Investimentos envolvem riscos, incluindo perda parcial ou total do capital. Rentabilidade passada, simulações e backtests não garantem resultados futuros.';

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:rgb(255_255_255_/_96%)]">
      <div className="mx-auto max-w-screen-xl px-6 py-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center">
              <span className="relative h-10 w-44 sm:h-11 sm:w-52">
                <Image
                  src="/logo_djangotech_horizontal_transparent.png"
                  alt="Django Technologies"
                  fill
                  sizes="(max-width: 640px) 176px, 208px"
                  className="object-contain object-left"
                />
              </span>
            </Link>

            <p className="mt-3 max-w-[32rem] text-[13px] leading-6 text-[color:rgb(5_5_5_/_68%)]">
              Inteligência quantitativa, dados de mercado e infraestrutura analítica para decisões mais estruturadas.
            </p>

            <div className="mt-4 h-px w-12 bg-[color:rgb(81_214_59_/_28%)]" />

            <p className="mt-4 max-w-[82ch] text-[12px] leading-6 text-[var(--color-muted)]">
              {LEGAL_DISCLAIMER}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Navegação
              </p>
              <nav className="mt-3 flex flex-col gap-2 text-sm">
                {FOOTER_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[color:rgb(5_5_5_/_72%)] transition-colors duration-200 hover:text-[var(--brand-green-dark)] focus-visible:text-[var(--brand-green-dark)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Arquivo
              </p>
              <nav className="mt-3 flex flex-col gap-2 text-sm">
                {ARCHIVE_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[color:rgb(5_5_5_/_62%)] transition-colors duration-200 hover:text-[var(--brand-green-dark)] focus-visible:text-[var(--brand-green-dark)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Contato
              </p>
              <div className="mt-3 text-sm text-[color:rgb(5_5_5_/_72%)]">
                <a
                  href="mailto:django@djangotechnologies.com"
                  className="inline-flex transition-colors duration-200 hover:text-[var(--brand-green-dark)] focus-visible:text-[var(--brand-green-dark)]"
                >
                  django@djangotechnologies.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-[color:var(--color-border)] pt-4 text-xs text-[color:rgb(5_5_5_/_52%)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Django Technologies</p>
          <p>Conteúdo não personalizado. Sem promessa de rentabilidade.</p>
        </div>
      </div>
    </footer>
  );
}
