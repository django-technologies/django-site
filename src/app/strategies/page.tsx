import Header from '../../components/header';
import Footer from '../../components/footer';
import Equalize from '../../components/equalize';
import FormulaWall from '../../components/formula-wall';

export const metadata = { title: 'Strategies' };

export default function Strategies() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="max-w-screen-xl mx-auto px-6 py-16">
        {/* título: linha inteira */}
        <h1 className="text-3xl font-medium mb-6">Strategies</h1>

        {/* Equalize garante MESMA altura entre colunas */}
        <Equalize
          left={
            <div className="max-w-[var(--maxw-copy)] text-[var(--color-muted)]">
              <p>
                Pesquisamos estruturas sistemáticas com foco em robustez do processo e controle de risco.
                Abaixo, alguns domínios de estudo — descritos em termos metodológicos.
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li><b>Time-series</b>: sinais de tendência, reversão e regimes de volatilidade.</li>
                <li><b>Cross-sectional</b>: classificadores e rankings sob restrições de risco.</li>
                <li><b>Microestrutura</b>: sinais intradiários e execução informada por liquidez.</li>
                <li><b>Overlays de risco</b>: dimensionamento, limites e controles de exposição.</li>
              </ul>
              <p className="mt-4">
                Este conteúdo é informativo; não constitui oferta, solicitação ou recomendação de investimento.
              </p>
            </div>
          }
          right={
            // A arte recebe a ALTURA medida do texto (nada de moldura)
            <FormulaWall />
          }
        />
      </section>

      <Footer />
    </main>
  );
}
