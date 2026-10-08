import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import StoreButtons from '../components/store-buttons';
import ProductTour from '../components/product-tour';
import TechPipeline from '../components/tech-pipeline';
import ResearchFigure from '../components/research-figure';
import { DeviceFrame, HeroShowcase } from '../components/product-showcase';
import { BrandSymbol, Crosshair, Eyebrow, Pillars, Pins } from '../components/brand-system';
import { SCREENS } from '../lib/product-screens';

const RESEARCH_AREAS = [
  { area: 'Ações', note: 'Fatores, rankings e comportamento de preços no mercado brasileiro.' },
  { area: 'Renda fixa', note: 'Curva de juros, crédito e relações entre classes de ativos.' },
  { area: 'Séries temporais', note: 'Modelagem estatística de preços, volumes e indicadores.' },
  { area: 'Risco', note: 'Volatilidade, drawdown, concentração e liquidez.' },
  { area: 'Modelos quantitativos', note: 'Construção, validação e monitoramento de modelos.' },
  { area: 'Dados de mercado', note: 'Qualidade, tratamento e profundidade histórica das bases.' },
];

const METHOD = ['Hipótese', 'Dados', 'Teste', 'Validação', 'Produto'];

const CTA_PINS = [
  { left: '46%', top: '22%', height: 140 },
  { left: '52%', top: '58%', height: 90, muted: true },
];

function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main id="conteudo" className="flex-1 overflow-x-clip">
        {/* ------------------------------------------------------------ HERO */}
        <section className="relative -mt-16 bg-[linear-gradient(180deg,#f7f7f4_0%,#efefeb_100%)] pt-16 lg:-mt-[4.5rem] lg:pt-[4.5rem]">
          <div className="relative mx-auto grid max-w-screen-xl items-center gap-10 px-5 pb-14 pt-8 md:px-8 md:pb-20 md:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6 lg:pb-20 lg:pt-14">
            <div className="dj-rise">
              <p className="inline-flex items-center gap-2.5 rounded-full border border-[color:rgb(5_5_5_/_8%)] bg-white/85 py-1.5 pl-1.5 pr-3.5 text-[12.5px] text-[var(--color-ink-soft)]">
                <BrandSymbol flat className="h-6 w-6" />
                <span className="font-semibold text-[var(--brand-black)]">Django AI</span>
                <span className="text-[color:rgb(5_5_5_/_28%)]" aria-hidden="true">·</span>
                by Django Technologies
              </p>

              <h1 className="mt-7 max-w-[22ch] text-balance font-display text-[clamp(2.2rem,3.6vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.032em] text-[var(--brand-black)]">
                Inteligência de mercado e pesquisa quantitativa{' '}
                <span className="text-[var(--app-green-text)]">em um só app.</span>
              </h1>

              <p className="mt-6 max-w-[48ch] text-[16px] leading-[1.65] text-[var(--color-ink-soft)] md:text-[18px]">
                Top Ações do mês, ranking das ações analisadas, notícias com resumo e a análise de cada empresa
                pela Django IA — com os fatores explicados.
              </p>

              <StoreButtons className="mt-8" />

              <Link
                href="#tecnologia"
                className="group mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-[var(--brand-black)] underline decoration-[color:rgb(5_5_5_/_18%)] underline-offset-[6px] transition-colors hover:decoration-[var(--brand-green)]"
              >
                Como funciona
                <ArrowRight />
              </Link>
            </div>

            <HeroShowcase />
          </div>
        </section>

        {/* --------------------------------------------------------- PRODUTO */}
        <section id="produto" className="bg-white">
          <div className="mx-auto max-w-screen-xl px-5 py-16 md:px-8 md:py-24">
            <Eyebrow>Produto</Eyebrow>
            <h2 className="mt-5 max-w-[22ch] text-balance font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Um app para acompanhar ações com método.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.65] text-[var(--color-ink-soft)] md:text-[17px]">
              Quatro áreas sobre a mesma base de dados e a mesma metodologia. Você vê o resultado e entende de onde
              ele vem.
            </p>

            <div className="mt-8 md:mt-12">
              <ProductTour />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ TECNOLOGIA */}
        <section id="tecnologia" className="relative overflow-hidden bg-[var(--brand-black)] text-white">
          <Pillars tone="dark" className="pointer-events-none absolute -top-28 right-[6%] hidden h-[440px] w-[300px] lg:flex" />
          <Crosshair tone="dark" className="left-[58%] top-[18%] hidden lg:block" />
          <div className="relative mx-auto max-w-screen-xl px-5 py-16 md:px-8 md:py-24">
            <Eyebrow tone="light">Tecnologia</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] text-balance font-display text-[clamp(2rem,3.8vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
              O motor por trás do app.
            </h2>
            <p className="mt-4 max-w-[50ch] text-[16px] leading-[1.65] text-white/[0.62] md:text-[17px]">
              Cada tela do Django AI é a última etapa de uma cadeia de dados, pesquisa e engenharia que a Django
              desenvolve e opera internamente.
            </p>

            <div className="mt-10 md:mt-16">
              <TechPipeline />
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- RESEARCH */}
        <section id="research" className="bg-[var(--color-paper)]">
          <div className="mx-auto grid max-w-screen-xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
            <div>
              <Eyebrow>Research</Eyebrow>
              <h2 className="mt-5 max-w-[16ch] text-balance font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
                Pesquisa empírica aplicada a mercados.
              </h2>
              <p className="mt-4 max-w-[44ch] text-[16px] leading-[1.65] text-[var(--color-ink-soft)] md:text-[17px]">
                A Django conduz pesquisa quantitativa própria. É ela que define o que entra no produto — e o que
                fica de fora.
              </p>

              <ol className="mt-8 flex flex-wrap items-center gap-y-2 text-[10.5px] font-medium uppercase tracking-[0.22em] text-[color:rgb(5_5_5_/_66%)]" aria-label="Método de pesquisa">
                {METHOD.map((m, i) => (
                  <li key={m} className="flex items-center">
                    <span className={i === METHOD.length - 1 ? 'text-[var(--app-green-text)]' : ''}>{m}</span>
                    {i < METHOD.length - 1 ? (
                      <span className="mx-2.5 h-px w-4 bg-[color:rgb(5_5_5_/_25%)]" aria-hidden="true" />
                    ) : null}
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                <ResearchFigure />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href="/memorando"
                  className="group inline-flex h-11 items-center gap-2 rounded-full border border-[var(--brand-black)] px-5 text-[14px] font-medium text-[var(--brand-black)] transition-colors hover:bg-[var(--brand-black)] hover:text-white"
                >
                  Princípios de pesquisa
                  <ArrowRight />
                </Link>
                <Link
                  href="/reports"
                  className="text-[13px] text-[var(--color-muted)] underline decoration-[color:rgb(5_5_5_/_18%)] underline-offset-4 transition-colors hover:text-[var(--brand-black)]"
                >
                  Arquivo de relatórios
                </Link>
              </div>
            </div>

            <ul className="self-start border-t border-[color:rgb(5_5_5_/_14%)] lg:mt-[4.25rem]">
              {RESEARCH_AREAS.map((item, i) => (
                <li
                  key={item.area}
                  className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 border-b border-[color:rgb(5_5_5_/_14%)] py-6 md:grid-cols-[2.75rem_minmax(0,1.3fr)_minmax(0,1fr)] md:items-baseline md:py-8"
                >
                  <span className="text-[11px] font-medium tracking-[0.18em] text-[color:rgb(5_5_5_/_62%)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="flex items-center gap-3 font-display text-[clamp(1.3rem,1.8vw,1.6rem)] font-semibold tracking-[-0.025em] md:whitespace-nowrap">
                    {item.area}
                    <span className="h-[5px] w-0 rounded-full bg-[var(--brand-green)] transition-[width] duration-300 group-hover:w-5" aria-hidden="true" />
                  </h3>
                  <p className="col-start-2 mt-1.5 max-w-[38ch] text-[14.5px] leading-[1.55] text-[var(--color-ink-soft)] md:col-start-3 md:mt-0">
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --------------------------------------------------------- EMPRESA */}
        <section aria-labelledby="empresa-title" className="bg-white">
          <div className="mx-auto grid max-w-screen-xl gap-8 px-5 py-16 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12 md:px-8 md:py-24">
            <BrandSymbol className="h-16 w-16 md:h-20 md:w-20" />
            <div>
              <Eyebrow>Empresa</Eyebrow>
              <h2 id="empresa-title" className="sr-only">
                Django Technologies
              </h2>
              <p className="mt-5 max-w-[42ch] text-pretty font-display text-[clamp(1.35rem,2.1vw,1.85rem)] font-medium leading-[1.3] tracking-[-0.02em] text-[var(--brand-black)]">
                A Django Technologies é uma empresa de tecnologia financeira que combina software, dados e pesquisa
                quantitativa.{' '}
                <span className="text-[color:rgb(5_5_5_/_58%)]">
                  O Django AI é o primeiro produto público da infraestrutura de inteligência de mercado que estamos
                  construindo.
                </span>
              </p>
              <Link
                href="/about"
                className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-[var(--brand-black)] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#1d201d]"
              >
                Sobre a Django
                <ArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- DOWNLOAD */}
        <section id="download" className="bg-white px-5 pb-5 md:px-8 lg:pt-24">
          <div className="relative mx-auto max-w-screen-xl rounded-[28px] bg-[var(--brand-black)] text-white md:rounded-[40px]">
            <div className="pointer-events-none absolute inset-0 hidden overflow-hidden rounded-[inherit] lg:block" aria-hidden="true">
              <Pins pins={CTA_PINS} tone="dark" />
            </div>

            <div className="relative grid gap-10 px-6 pt-12 md:px-12 md:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:pt-0">
              <div className="lg:py-24">
                <Eyebrow tone="light">Download</Eyebrow>
                <h2 className="mt-5 max-w-[12ch] text-balance font-display text-[clamp(2.1rem,4.2vw,3.6rem)] font-semibold leading-[1] tracking-[-0.04em]">
                  Leve o Django AI no bolso.
                </h2>
                <p className="mt-5 max-w-[40ch] text-[16px] leading-[1.65] text-white/[0.62] md:text-[17px]">
                  Disponível para iPhone e Android. Top Ações, análises, notícias e conteúdo educacional em um só
                  lugar.
                </p>
                <StoreButtons tone="light" stack className="mt-8" />
              </div>

              {/* Telas reais saindo do painel no desktop; cortadas na base em todos os tamanhos. */}
              <div className="relative h-[380px] overflow-hidden sm:h-[460px] lg:absolute lg:-top-24 lg:bottom-0 lg:right-12 lg:h-auto lg:w-[560px]">
                <div className="absolute left-1/2 top-0 flex -translate-x-1/2 items-start gap-6 lg:left-auto lg:right-0 lg:translate-x-0">
                  <DeviceFrame screen={SCREENS.educacional} className="hidden w-[264px] sm:block lg:mt-28" sizes="264px" />
                  <DeviceFrame screen={SCREENS.fatores} className="w-[250px] sm:w-[264px]" sizes="(max-width: 640px) 250px, 264px" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
