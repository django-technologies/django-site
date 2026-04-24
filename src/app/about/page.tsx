import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from 'next/image';
import FormulaWall from '../../components/formula-wall';

export const metadata = {
  title: 'Sobre — Django Technologies',
  description: 'Gestora quantitativa orientada por pesquisa, engenharia de dados e execução sistemática.',
};

export default function About() {
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

              <h1 className="mt-8 max-w-[12.5ch] text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-[0.94] tracking-[-0.035em] text-[var(--color-text)]">
                Sobre
              </h1>

              <div className="mt-6 max-w-[64ch] space-y-5 text-[17px] leading-8 text-[color:rgb(5_5_5_/_72%)]">
                <p>
                  A Django Technologies é uma gestora quantitativa. Combinamos pesquisa quantitativa,
                  engenharia de dados e execução sistemática para o desenvolvimento e a implementação
                  de estratégias de investimento.
                </p>
                <p>
                  Nosso processo segue princípios claros: qualidade dos dados, hipóteses testáveis,
                  validação estatística rigorosa, governança e disciplina operacional. A implementação
                  das estratégias é apoiada por tecnologia proprietária e rotinas automatizadas.
                </p>
                <p>
                  O escopo de pesquisa abrange mercados globais, incluindo ações, derivativos, renda fixa,
                  câmbio e criptoativos. As estratégias são estruturadas a partir de métodos estatísticos,
                  critérios objetivos de alocação e monitoramento contínuo dos processos de execução.
                </p>
              </div>
            </div>

            <div className="hidden h-[420px] lg:-ml-8 lg:block xl:-ml-12 xl:h-[460px]" aria-hidden="true">
              <FormulaWall variant="hero" decorative />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 pb-14 md:pb-16">
          <div className="border-t border-[color:var(--color-border)] pt-8 md:pt-10">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-green)]" />
              Fundadores
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <article className="group relative rounded-[28px] border border-[color:var(--color-border)] bg-white p-7 shadow-[0_16px_40px_rgba(17,20,24,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[color:rgb(81_214_59_/_24%)] hover:shadow-[0_22px_46px_rgba(17,20,24,0.08)] md:p-8">
                <a
                  href="https://www.linkedin.com/in/pedroarthurcantarutti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir o LinkedIn de Pedro Cantarutti em nova aba"
                  className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:rgb(255_255_254_/_92%)] text-[var(--color-muted)] shadow-[0_8px_20px_rgba(17,20,24,0.05)] transition-colors hover:border-[color:rgb(81_214_59_/_24%)] hover:bg-[color:rgb(81_214_59_/_8%)] hover:text-[var(--brand-green-dark)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn de Pedro Cantarutti</span>
                </a>

                <span className="mb-5 block h-1.5 w-10 rounded-full bg-[color:rgb(81_214_59_/_18%)] transition-colors duration-200 group-hover:bg-[var(--brand-green)]" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="shrink-0">
                    <Image
                      src="/team/pedro-ceo.png"
                      alt="Pedro Cantarutti"
                      width={88}
                      height={88}
                      className="h-[5.5rem] w-[5.5rem] rounded-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 space-y-3.5 text-sm md:text-base sm:pr-10">
                    <div className="space-y-2.5">
                      <h2 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-text)]">
                        Pedro Cantarutti
                      </h2>
                      <p className="inline-flex w-fit items-center rounded-full border border-[color:rgb(81_214_59_/_18%)] bg-[color:rgb(81_214_59_/_8%)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--brand-green-dark)]">
                        Co-fundador · CEO
                      </p>
                    </div>

                    <ul className="max-w-[34ch] list-disc space-y-1.5 pl-4 leading-6 text-[color:rgb(17_20_24_/_82%)] marker:text-[color:rgb(81_214_59_/_48%)]">
                      <li>Engenheiro Químico pela UFMG, com pós-graduação em Data Science pela PUC-Rio.</li>
                      <li>Formação avançada em Machine Learning pelo IMPA, em nível de mestrado.</li>
                      <li>Experiência em consultoria estratégica, com atuação em projetos para empresas de tecnologia.</li>
                    </ul>
                  </div>
                </div>
              </article>

              <article className="group relative rounded-[28px] border border-[color:var(--color-border)] bg-white p-7 shadow-[0_16px_40px_rgba(17,20,24,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[color:rgb(81_214_59_/_24%)] hover:shadow-[0_22px_46px_rgba(17,20,24,0.08)] md:p-8">
                <a
                  href="https://www.linkedin.com/in/bernardo-byrro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir o LinkedIn de Bernardo Marques em nova aba"
                  className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:rgb(255_255_254_/_92%)] text-[var(--color-muted)] shadow-[0_8px_20px_rgba(17,20,24,0.05)] transition-colors hover:border-[color:rgb(81_214_59_/_24%)] hover:bg-[color:rgb(81_214_59_/_8%)] hover:text-[var(--brand-green-dark)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn de Bernardo Marques</span>
                </a>

                <span className="mb-5 block h-1.5 w-10 rounded-full bg-[color:rgb(81_214_59_/_18%)] transition-colors duration-200 group-hover:bg-[var(--brand-green)]" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="shrink-0">
                    <Image
                      src="/team/bernardo-cto-site.png"
                      alt="Bernardo Marques"
                      width={88}
                      height={88}
                      className="h-[5.5rem] w-[5.5rem] rounded-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 space-y-3.5 text-sm md:text-base sm:pr-10">
                    <div className="space-y-2.5">
                      <h2 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-text)]">
                        Bernardo Marques
                      </h2>
                      <p className="inline-flex w-fit items-center rounded-full border border-[color:rgb(81_214_59_/_18%)] bg-[color:rgb(81_214_59_/_8%)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--brand-green-dark)]">
                        Co-fundador · CTO
                      </p>
                    </div>

                    <ul className="max-w-[34ch] list-disc space-y-1.5 pl-4 leading-6 text-[color:rgb(17_20_24_/_82%)] marker:text-[color:rgb(81_214_59_/_48%)]">
                      <li>Engenheiro de Produção pela PUC Minas, com pós-graduação em Data Science pelo ITA.</li>
                      <li>Formação avançada em Machine Learning pelo IMPA, em nível de mestrado.</li>
                      <li>Experiência no mercado financeiro, com atuação em equities e derivativos.</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
