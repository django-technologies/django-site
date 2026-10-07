import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import FormulaWall from '../../components/formula-wall';

export const metadata = {
  title: 'Memorando Django',
  description: 'Princípios, visão e filosofia de pesquisa da Django Technologies.',
};

const PRINCIPLES = [
  {
    title: 'Dados antes de opinião',
    body: 'Toda hipótese começa pela pergunta que os dados conseguem responder, não pela narrativa que gostaríamos de confirmar.',
  },
  {
    title: 'Risco explícito',
    body: 'Toda métrica precisa conviver com sua incerteza: volatilidade, drawdown, concentração, liquidez e fragilidade operacional.',
  },
  {
    title: 'Método auditável',
    body: 'Modelos, rankings e simulações devem ser compreensíveis, testáveis e revisados antes de virarem produto.',
  },
  {
    title: 'Disciplina sistemática',
    body: 'O processo importa mais que a intuição isolada. A Django busca rotinas, critérios e documentação que reduzam improviso.',
  },
];

export default function MemorandoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main id="conteudo" className="flex-1">
        <section className="relative overflow-hidden bg-[var(--brand-black)] text-white">
          <div className="absolute inset-0 opacity-[0.2]" aria-hidden="true">
            <FormulaWall variant="hero" decorative className="h-full min-h-[520px]" />
          </div>
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.9)_52%,rgba(5,5,5,0.72)_100%)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-screen-xl px-6 py-16 md:py-20 lg:py-24">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/[0.68]">
                <span className="h-2 w-2 bg-[var(--brand-green)]" />
                Memorando institucional
              </div>

              <div className="mt-10 h-px w-[4.5rem] bg-[color:rgb(81_214_59_/_78%)]" />

              <h1 className="mt-8 max-w-[12ch] text-[clamp(2.6rem,5.4vw,5.25rem)] font-medium leading-[0.9] text-white">
                A cultura quantitativa que guia a Django.
              </h1>

              <p className="mt-7 max-w-[66ch] text-[17px] leading-8 text-white/[0.72] md:text-xl md:leading-9">
                Este memorando reúne os princípios que orientam nossa pesquisa, nosso produto e nossa visão de longo
                prazo. Ele é uma peça institucional e aspiracional, não uma oferta de fundo ou chamada de investimento.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Nossa visão
              </p>
              <h2 className="mt-4 text-4xl font-medium leading-[0.98] md:text-5xl">
                Construir infraestrutura quantitativa com clareza, método e responsabilidade.
              </h2>
            </div>
            <div className="space-y-5 text-[17px] leading-8 text-[color:rgb(5_5_5_/_72%)]">
              <p>
                A Django nasceu da convicção de que mercados devem ser acompanhados com mais estrutura do que ruído. A
                combinação de dados, estatística, engenharia e disciplina operacional permite observar relações, testar
                hipóteses e explicitar riscos de forma mais objetiva.
              </p>
              <p>
                A plataforma atual traduz essa cultura em painéis, indicadores, rankings estatísticos, métricas de risco
                e carteiras-modelo hipotéticas. A ambição de longo prazo permanece: aplicar tecnologia quantitativa a uma
                infraestrutura de decisão cada vez mais robusta.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[color:var(--color-border)] bg-white">
          <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Princípios de pesquisa
                </p>
                <h2 className="mt-4 text-3xl font-medium md:text-5xl">
                  O que não abrimos mão.
                </h2>
              </div>
              <p className="max-w-[34rem] text-sm leading-7 text-[var(--color-muted)]">
                O produto pode mudar de forma. A disciplina que sustenta a Django não.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {PRINCIPLES.map((principle) => (
                <article
                  key={principle.title}
                  className="border border-[color:var(--color-border)] bg-[color:rgb(250_250_250)] p-6 shadow-[0_14px_32px_rgba(17,20,24,0.04)]"
                >
                  <span className="block h-1 w-8 bg-[var(--brand-green)]" />
                  <h3 className="mt-5 text-xl font-semibold">{principle.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[color:rgb(17_20_24_/_72%)]">{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
          <div className="border border-[color:var(--color-border)] bg-white p-6 md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Aviso institucional
            </p>
            <p className="mt-4 max-w-[82ch] text-sm leading-7 text-[color:rgb(5_5_5_/_68%)]">
              Este memorando descreve princípios, visão e filosofia de pesquisa da Django. Não constitui oferta,
              recomendação de investimento ou solicitação de aplicação em qualquer fundo ou produto financeiro.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center border border-[var(--brand-black)] bg-[var(--brand-black)] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-[var(--brand-green)] hover:bg-[var(--brand-green)] hover:text-[var(--brand-black)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]"
            >
              Fale com a Django
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
