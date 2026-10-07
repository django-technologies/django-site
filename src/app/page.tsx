import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import FormulaWall from '../components/formula-wall';

const PRODUCT_CARDS = [
  {
    title: 'Dados de mercado',
    description:
      'Séries históricas, ativos, retornos, liquidez e métricas quantitativas organizadas em uma experiência única.',
  },
  {
    title: 'Indicadores quantitativos',
    description:
      'Scores, rankings estatísticos e sinais informacionais calculados por metodologia própria.',
  },
  {
    title: 'Risco e simulação',
    description:
      'Volatilidade, drawdown, exposição, backtests hipotéticos e comparações históricas.',
  },
  {
    title: 'Carteiras-modelo hipotéticas',
    description:
      'Composições teóricas para estudo e acompanhamento, sem personalização e sem recomendação individualizada.',
  },
];

const PRINCIPLES = [
  'Dados antes de opinião',
  'Hipóteses testáveis',
  'Risco explícito',
  'Transparência metodológica',
  'Disciplina sistemática',
  'Nenhuma promessa de resultado',
];

const METRICS = [
  { label: 'Risk', value: 'CVaR' },
  { label: 'Signal', value: 'IC rank' },
  { label: 'Portfolio', value: 'wTΣw' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main id="conteudo" className="flex-1">
        <section className="relative overflow-hidden bg-[var(--brand-black)] text-white">
          <div className="absolute inset-0 opacity-[0.28]" aria-hidden="true">
            <FormulaWall variant="hero" decorative className="h-full min-h-[620px]" />
          </div>
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.9)_42%,rgba(5,5,5,0.68)_100%)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-screen-xl px-6 py-16 md:py-20 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(380px,0.82fr)] lg:items-end">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-3 border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/[0.68]">
                  <span className="h-2 w-2 bg-[var(--brand-green)]" />
                  Plataforma de inteligência quantitativa
                </div>

                <div className="mt-10 h-px w-[4.5rem] bg-[color:rgb(81_214_59_/_78%)]" />

                <h1 className="mt-8 max-w-[13ch] text-[clamp(2.5rem,5.6vw,5.6rem)] font-medium leading-[0.9] text-white">
                  Inteligência quantitativa para acompanhar mercados com mais dados, método e transparência.
                </h1>

                <p className="mt-7 max-w-[64ch] text-[17px] leading-8 text-white/[0.72] md:text-xl md:leading-9">
                  A Django oferece painéis, indicadores e carteiras-modelo hipotéticas baseadas em metodologia
                  quantitativa. O conteúdo é informacional, não personalizado e não constitui recomendação de
                  investimento.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact?assunto=acesso"
                    className="inline-flex items-center justify-center border border-[var(--brand-green)] bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-[var(--brand-black)] shadow-[0_14px_34px_rgba(81,214,59,0.22)] transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]"
                  >
                    Entrar na lista de acesso
                  </Link>

                  <Link
                    href="/memorando"
                    className="inline-flex items-center justify-center border border-white/[0.18] bg-white/[0.06] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-white/[0.34] hover:bg-white/[0.10] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]"
                  >
                    Ler o Memorando
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="border border-white/[0.12] bg-white/[0.05] p-5 shadow-[0_32px_90px_rgba(0,0,0,0.34)]">
                  <div className="flex items-center justify-between border-b border-white/[0.10] pb-4 text-[11px] uppercase tracking-[0.16em] text-white/[0.46]">
                    <span>Django Lab</span>
                    <span>Market intelligence</span>
                  </div>
                  <div className="grid gap-3 py-5">
                    {METRICS.map((metric) => (
                      <div key={metric.label} className="grid grid-cols-[0.8fr_1fr] items-center gap-4">
                        <span className="text-xs uppercase tracking-[0.14em] text-white/[0.40]">{metric.label}</span>
                        <span className="border border-white/[0.10] bg-black/[0.28] px-3 py-2 font-mono text-sm text-white/[0.82]">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/[0.10] pt-4">
                    <div className="h-2 w-full bg-white/[0.08]">
                      <div className="h-2 w-[72%] bg-[var(--brand-green)]" />
                    </div>
                    <p className="mt-4 text-xs leading-6 text-white/[0.50]">
                      Painéis, sinais informacionais, rankings estatísticos e simulações históricas em um ambiente de
                      pesquisa quantitativa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="produto" className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                O que é a Django
              </p>
              <h2 className="mt-4 max-w-[12ch] text-4xl font-medium leading-[0.98] md:text-5xl">
                Tecnologia quantitativa aplicada a mercados.
              </h2>
            </div>
            <p className="max-w-[68ch] text-[17px] leading-8 text-[color:rgb(5_5_5_/_72%)] md:text-xl md:leading-9">
              A Django Technologies desenvolve tecnologia para inteligência quantitativa aplicada a mercados
              financeiros. Organizamos dados, modelos estatísticos e visualizações objetivas em uma plataforma para
              acompanhar mercados com mais clareza, método e transparência.
            </p>
          </div>
        </section>

        <section className="border-y border-[color:var(--color-border)] bg-white">
          <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  O produto
                </p>
                <h2 className="mt-4 text-3xl font-medium md:text-5xl">
                  Uma camada analítica para acompanhar mercados.
                </h2>
              </div>
              <p className="max-w-[36rem] text-sm leading-7 text-[var(--color-muted)]">
                Conteúdo não personalizado para estudo, acompanhamento e transparência metodológica.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {PRODUCT_CARDS.map((card, index) => (
                <article
                  key={card.title}
                  className="group border border-[color:var(--color-border)] bg-[color:rgb(250_250_250)] p-6 shadow-[0_14px_32px_rgba(17,20,24,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[color:rgb(81_214_59_/_32%)] hover:bg-white hover:shadow-[0_22px_46px_rgba(17,20,24,0.08)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-[color:rgb(5_5_5_/_36%)]">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-[color:rgb(5_5_5_/_8%)]" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[var(--color-text)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[color:rgb(17_20_24_/_72%)]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--brand-black)] text-white">
          <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/[0.48]">
                  Como pensamos
                </p>
                <h2 className="mt-4 max-w-[12ch] text-4xl font-medium leading-[0.98] md:text-5xl">
                  Pesquisa como processo, não narrativa.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {PRINCIPLES.map((principle) => (
                  <div key={principle} className="border border-white/[0.10] bg-white/[0.04] px-4 py-4">
                    <span className="block h-1 w-8 bg-[var(--brand-green)]" />
                    <p className="mt-4 text-[15px] font-medium text-white/[0.82]">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
          <div className="grid gap-10 border-b border-[color:var(--color-border)] pb-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:pb-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Memorando Django
              </p>
              <h2 className="mt-4 text-4xl font-medium md:text-5xl">
                Os princípios que guiam nossa pesquisa, nosso produto e nossa visão de longo prazo.
              </h2>
            </div>
            <div>
              <p className="text-[17px] leading-8 text-[color:rgb(5_5_5_/_72%)]">
                O Memorando permanece como peça institucional e aspiracional da Django: uma síntese de cultura,
                disciplina quantitativa e ambição de longo prazo.
              </p>
              <Link
                href="/memorando"
                className="mt-7 inline-flex items-center justify-center border border-[var(--brand-black)] bg-[var(--brand-black)] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-[var(--brand-green)] hover:bg-[var(--brand-green)] hover:text-[var(--brand-black)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]"
              >
                Ler o Memorando
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 pb-16 md:pb-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Para quem
              </p>
              <h2 className="mt-4 text-3xl font-medium md:text-5xl">
                Para acompanhar mercados com estrutura.
              </h2>
            </div>
            <p className="max-w-[64ch] text-[17px] leading-8 text-[color:rgb(5_5_5_/_72%)]">
              Para pessoas e equipes que querem acompanhar mercados com estrutura, método e transparência, sem
              depender de narrativas soltas, ruído de curto prazo ou decisões impulsivas.
            </p>
          </div>

          <div className="mt-12 border border-[color:var(--color-border)] bg-white p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Acesso
              </p>
              <h2 className="mt-3 text-2xl font-medium md:text-3xl">
                Entre na lista de acesso ao produto.
              </h2>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
              <Link
                href="/contact?assunto=acesso"
                className="inline-flex items-center justify-center border border-[var(--brand-black)] bg-[var(--brand-black)] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-[var(--brand-green)] hover:bg-[var(--brand-green)] hover:text-[var(--brand-black)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]"
              >
                Entrar na lista de acesso
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[color:rgb(5_5_5_/_14%)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:border-[color:rgb(81_214_59_/_34%)] hover:text-[var(--brand-green-dark)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]"
              >
                Fale com a Django
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
