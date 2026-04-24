import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import FormulaWall from '../components/formula-wall';

const HOME_PILLARS = [
  {
    title: 'Pesquisa Quantitativa',
    description:
      'Modelos estatísticos, ciência de dados e investimentos baseados em evidências estatísticas.',
  },
  {
    title: 'Infraestrutura de Dados',
    description:
      'Processamento, organização e análise de grandes volumes de dados para suportar decisões de investimento baseadas em evidências.',
  },
  {
    title: 'Inteligência Artificial',
    description:
      'Processos automatizados, aprendizado de máquina e redes neurais profundas.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main id="conteudo" className="flex-1">
        <section className="mx-auto max-w-screen-xl px-6 pb-[4.5rem] pt-16 md:pb-[5.5rem] md:pt-[5.5rem] lg:pb-24 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.96fr)_minmax(420px,1.04fr)] lg:items-center lg:gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--color-border)] bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)] shadow-[0_8px_24px_rgba(5,5,5,0.04)]">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-green)]" />
                Django Technologies
              </div>

              <div className="mt-10 h-px w-[4.5rem] bg-[color:rgb(81_214_59_/_78%)]" />

              <h1 className="mt-8 max-w-[12.5ch] text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[0.94] tracking-[-0.035em] text-[var(--color-text)]">
                Gestora quantitativa de investimentos
              </h1>

              <p className="mt-6 max-w-[58ch] text-[17px] leading-8 text-[color:rgb(5_5_5_/_68%)] md:text-xl md:leading-9">
                Desenvolvemos estratégias sistemáticas de investimento combinando pesquisa quantitativa,
                engenharia de dados e execução disciplinada.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-[var(--brand-black)] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(5,5,5,0.12)] transition-colors duration-200 hover:border-[color:var(--brand-green-dark)] hover:bg-[var(--brand-green)] hover:text-[var(--brand-black)] active:bg-[var(--brand-green-dark)] active:text-[var(--brand-black)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]"
                >
                  Fale conosco
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-2xl border border-[color:rgb(5_5_5_/_12%)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-text)] shadow-[0_8px_20px_rgba(5,5,5,0.04)] transition-colors duration-200 hover:border-[color:rgb(81_214_59_/_32%)] hover:bg-[color:rgb(81_214_59_/_7%)] hover:text-[var(--brand-green-dark)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]"
                >
                  Sobre a empresa
                </Link>
              </div>
            </div>

            <div className="hidden h-[440px] lg:-ml-8 lg:block xl:-ml-12 xl:h-[480px]" aria-hidden="true">
              <FormulaWall variant="hero" decorative />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 pb-16 md:pb-20 lg:pb-[5.5rem]">
          <div className="grid gap-6 border-t border-[color:var(--color-border)] pt-8 md:grid-cols-3 md:pt-10">
            {HOME_PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className="group rounded-[28px] border border-[color:var(--color-border)] bg-white p-7 shadow-[0_10px_24px_rgba(17,20,24,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[color:rgb(81_214_59_/_28%)] hover:shadow-[0_18px_38px_rgba(17,20,24,0.07)]"
              >
                <span className="block h-1.5 w-10 rounded-full bg-[color:rgb(81_214_59_/_18%)] transition-colors duration-200 group-hover:bg-[var(--brand-green)]" />

                <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[var(--color-text)]">
                  {pillar.title}
                </h2>

                <p className="mt-3 text-[15px] leading-7 text-[color:rgb(17_20_24_/_72%)]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
