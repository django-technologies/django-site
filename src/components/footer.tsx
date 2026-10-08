import Image from 'next/image';
import Link from 'next/link';

const FOOTER_COLUMNS = [
  {
    title: 'Produto',
    links: [
      { href: '/#produto', label: 'Django AI' },
      { href: '/#tecnologia', label: 'Tecnologia' },
      { href: '/#download', label: 'Download' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { href: '/about', label: 'Sobre' },
      { href: '/contact', label: 'Contato' },
    ],
  },
  {
    title: 'Research',
    links: [
      { href: '/#research', label: 'Pesquisa' },
      { href: '/insights', label: 'Insights' },
      { href: '/memorando', label: 'Memorando' },
      { href: '/reports', label: 'Arquivo de relatórios' },
    ],
  },
];

const LEGAL_DISCLAIMER =
  'Conteúdo exclusivamente informacional, educacional e analítico. Não constitui recomendação de investimento, consultoria de valores mobiliários, análise de valores mobiliários, gestão de carteira, oferta pública, intermediação, distribuição, solicitação de compra ou venda de ativos, nem promessa de rentabilidade. Investimentos envolvem riscos, incluindo perda parcial ou total do capital. Rentabilidade passada, simulações e backtests não garantem resultados futuros.';

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-white">
      <div className="mx-auto max-w-screen-xl px-5 pb-8 pt-14 md:px-8 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div>
            <Link href="/" aria-label="Django Technologies — início" className="relative block h-10 w-44">
              <Image
                src="/logo_djangotech_horizontal_transparent.png"
                alt="Django Technologies"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-5 max-w-[34ch] text-[15px] leading-7 text-[var(--color-ink-soft)]">
              Software, dados e pesquisa quantitativa para inteligência de mercado. Criadores do Django AI.
            </p>
            <a
              href="mailto:django@djangotechnologies.com"
              className="mt-5 inline-flex text-sm font-medium text-[var(--brand-black)] underline decoration-[color:rgb(81_214_59_/_50%)] underline-offset-4 transition-colors hover:decoration-[var(--brand-green)]"
            >
              django@djangotechnologies.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)]">{column.title}</p>
                <nav aria-label={column.title} className="mt-4 flex flex-col gap-2.5 text-[14px]">
                  {column.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="w-fit text-[color:rgb(5_5_5_/_72%)] transition-colors duration-200 hover:text-[var(--brand-black)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-[color:var(--color-border)] pt-6">
          <p className="max-w-[120ch] text-[12px] leading-[1.7] text-[color:rgb(5_5_5_/_56%)]">{LEGAL_DISCLAIMER}</p>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-[color:rgb(5_5_5_/_62%)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Django Technologies</p>
          <p>Conteúdo não personalizado. Sem promessa de rentabilidade.</p>
        </div>
      </div>
    </footer>
  );
}
