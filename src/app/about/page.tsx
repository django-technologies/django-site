// app/about/page.tsx
import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from 'next/image';
import FormulaWall from '../../components/formula-wall';

export const metadata = { title: 'Sobre' };

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main id="conteudo" className="flex-1">
        {/* Sobre a empresa + FormulaWall à direita */}
        <section className="max-w-screen-xl mx-auto px-6 pt-12 pb-10 md:pt-16 md:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Texto à esquerda */}
            <div className="md:col-span-7">
              <h1 className="text-3xl md:text-4xl font-medium mb-6">Sobre</h1>

              <div className="max-w-[72ch] leading-relaxed space-y-4">
                <p>
                  A Django Technologies é uma empresa de gestão quantitativa. Combinamos pesquisa acadêmica,
                  engenharia de dados e execução sistemática para alocação de patrimônio.
                </p>
                <p>
                  Nosso trabalho segue princípios claros: qualidade dos dados, validação rigorosa, automação,
                  governança e ética. A alocação é guiada por métricas objetivas, eliminando vieses humanos.
                </p>
                  <p>
                  Atuamos no mercado global, com foco em ações, derivativos, renda fixa, câmbio e criptoativos. Nossas estratégias são desenvolvidas para
                  oferecer retornos consistentes, ajustados ao risco, independentemente das condições de mercado.
                </p>
              </div>
            </div>

            {/* FormulaWall à direita */}
            <div className="md:col-span-5">
                <div className="aspect-[6/4]">
                  <FormulaWall />
                </div>
              </div>
          </div>
        </section>

        {/* Sobre nós – fundadores */}
        <section className="max-w-screen-xl mx-auto px-6 pb-14 md:pb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Fundadores</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Você */}
            <article className="relative rounded-[28px] border border-[color:rgb(17_20_24_/_8%)] bg-white p-7 shadow-[0_16px_40px_rgba(17,20,24,0.06)] md:p-8">
              <a
                href="https://www.linkedin.com/in/pedroarthurcantarutti/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir o LinkedIn de Pedro Cantarutti em nova aba"
                className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:rgb(17_20_24_/_8%)] bg-[color:rgb(255_255_254_/_92%)] text-[var(--color-muted)] shadow-[0_8px_20px_rgba(17,20,24,0.05)] transition-colors hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgb(17_20_24_/_12%)]"
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

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="shrink-0">
                  <Image
                    src="/team/pedro-ceo.png" // ajuste o caminho/arquivo
                    alt="Pedro Cantarutti"
                    width={88}
                    height={88}
                    className="h-[5.5rem] w-[5.5rem] rounded-full object-cover"
                  />
                </div>

                <div className="min-w-0 space-y-3.5 text-sm md:text-base sm:pr-10">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-text)]">
                      Pedro Cantarutti
                    </h3>
                    <p className="inline-flex w-fit items-center rounded-full border border-[color:rgb(17_20_24_/_8%)] bg-[color:rgb(17_20_24_/_3%)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                      Co-fundador · CEO
                    </p>
                  </div>

                  <ul className="max-w-[34ch] list-disc space-y-1.5 pl-4 leading-6 text-[color:rgb(17_20_24_/_88%)] marker:text-[color:rgb(17_20_24_/_48%)]">
                    <li>Engenheiro Químico pela UFMG, com pós-graduação em Data Science pela PUC-Rio.</li>
                    <li>Formação avançada em Machine Learning pelo IMPA, em nível de mestrado.</li>
                    <li>Experiência em consultoria estratégica, com atuação em projetos para empresas de tecnologia.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Seu sócio */}
            <article className="relative rounded-[28px] border border-[color:rgb(17_20_24_/_8%)] bg-white p-7 shadow-[0_16px_40px_rgba(17,20,24,0.06)] md:p-8">
              <a
                href="https://www.linkedin.com/in/bernardo-byrro/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir o LinkedIn de Bernardo Marques em nova aba"
                className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:rgb(17_20_24_/_8%)] bg-[color:rgb(255_255_254_/_92%)] text-[var(--color-muted)] shadow-[0_8px_20px_rgba(17,20,24,0.05)] transition-colors hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgb(17_20_24_/_12%)]"
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

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="shrink-0">
                  <Image
                    src="/team/bernardo-cto-site.png" // ajuste o caminho/arquivo
                    alt="Bernardo Marques"
                    width={88}
                    height={88}
                    className="h-[5.5rem] w-[5.5rem] rounded-full object-cover"
                  />
                </div>

                <div className="min-w-0 space-y-3.5 text-sm md:text-base sm:pr-10">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-text)]">
                      Bernardo Marques
                    </h3>
                    <p className="inline-flex w-fit items-center rounded-full border border-[color:rgb(17_20_24_/_8%)] bg-[color:rgb(17_20_24_/_3%)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                      Co-fundador · CTO
                    </p>
                  </div>

                  <ul className="max-w-[34ch] list-disc space-y-1.5 pl-4 leading-6 text-[color:rgb(17_20_24_/_88%)] marker:text-[color:rgb(17_20_24_/_48%)]">
                    <li>Engenheiro de Produção pela PUC Minas, com pós-graduação em Data Science pelo ITA.</li>
                    <li>Formação avançada em Machine Learning pelo IMPA, em nível de mestrado.</li>
                    <li>Experiência no mercado financeiro, com atuação em equities e derivativos.</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
