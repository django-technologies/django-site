import Header from '../../components/header';
import Footer from '../../components/footer';

export const metadata = { title: 'Insights' };

export default function Insights() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="max-w-screen-xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-medium">Insights</h1>
        <p className="mt-4 text-[var(--color-muted)]">
          Notas sobre dados, validação de modelos, observabilidade e automação em pesquisa quantitativa. Em breve.
        </p>
      </section>
      <Footer />
    </main>
  );
}
