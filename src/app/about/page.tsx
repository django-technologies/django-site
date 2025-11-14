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
            <article className="rounded-2xl border border-[#e0e3ea] bg-[#f5f6fa] p-6 md:p-7 flex flex-col md:flex-row gap-4 items-start">
              <div className="shrink-0">
                <Image
                  src="/team/pedro-ceo.png" // ajuste o caminho/arquivo
                  alt="Pedro Cantarutti"
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>
              <div className="space-y-2 text-sm md:text-base">
                <div>
                  <h3 className="font-semibold text-[var(--color-text)]">Pedro Cantarutti</h3>
                  <p className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
                    Co-fundador · CEO
                  </p>
                </div>
                <p className="text-[var(--color-text)]">
                  <li>Graduação em Engenharia Química pela UFMG.</li>
                  <li>Pós-Graduação em Data Science pela PUC-RIO.</li>
                  <li>Experiência em Consultoria Estratégica, com diversos projetos em empresas Tech.</li>
                </p>
              </div>
            </article>

            {/* Seu sócio */}
            <article className="rounded-2xl border border-[#e0e3ea] bg-[#f5f6fa] p-6 md:p-7 flex flex-col md:flex-row gap-4 items-start">
              <div className="shrink-0">
                <Image
                  src="/team/bernardo-cto.jpg" // ajuste o caminho/arquivo
                  alt="Bernardo Marques"
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>
              <div className="space-y-2 text-sm md:text-base">
                <div>
                  <h3 className="font-semibold text-[var(--color-text)]">Bernardo Marques</h3>
                  <p className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
                    Co-fundador · CTO
                  </p>
                </div>
                <p className="text-[var(--color-text)]">
                  <li>Graduação em Engenharia de Produção pela PUC-MG.</li>
                  <li>Pós-Graduação em Data Science pelo ITA.</li>
                  <li>Experiência no Mercado Financeiro, com principal atuação na Mesa de Equities & Derivatives.</li>
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
