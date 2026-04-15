import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main id="conteudo" className="flex-1">
        {/* Hero */}
        <section className="max-w-screen-xl mx-auto px-6 pt-10 pb-8 md:pt-14 md:pb-10">
          <h1 className="text-4xl md:text-6xl font-medium max-w-[20ch] leading-tight">
            Gestora quantitativa de investimentos
          </h1>

          <p className="mt-5 max-w-[60ch] text-lg text-[var(--color-muted)]">
            Utilizamos métodos matemáticos e estatísticos para desenvolver e executar estratégias sistemáticas
            de investimento.
          </p>

          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center px-5 py-3 rounded-2xl bg-[var(--brand-black)] text-white
                        hover:bg-[var(--brand-black-600)] active:bg-[var(--brand-black-700)]
                        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgb(17_20_24_/_35%)]"
            >
              Fale conosco
            </a>
          </div>
        </section>

        {/* Cards */}
        <section className="max-w-screen-xl mx-auto px-6 pt-4 pb-10 md:pt-6 md:pb-12 grid md:grid-cols-3 gap-6">
          {[
            {
              t: 'Abordagem Quantitativa',
              d: 'Modelos matemáticos, ciência de dados e investimentos baseados em evidências estatísticas.',
            },
            {
              t: 'Big Data',
              d: 'Algoritmos computacionais, engenharia de dados e grandes volumes de dados analisados em tempo real.',
            },
            {
              t: 'Inteligência Artificial',
              d: 'Processos automatizados, aprendizado de máquina e redes neurais profundas.',
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-[24px] border border-[color:rgb(17_20_24_/_8%)] bg-white p-7 shadow-[0_10px_24px_rgba(17,20,24,0.04)]"
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--color-text)]">
                {c.t}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[color:rgb(17_20_24_/_72%)]">{c.d}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
