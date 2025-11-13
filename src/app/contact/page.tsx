// app/contact/page.tsx
import Header from '../../components/header';
import Footer from '../../components/footer';
import ContactForm from './ContactForm';

export const metadata = { title: 'Contact' };

export default function Contact() {
  return (
    <main className="min-h-screen bg-[var(--page-bg,white)] flex flex-col">
      <Header />

      {/* Section ocupa o espaço disponível entre header e footer */}
      <section className="flex-1 flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-10 lg:py-12 w-full">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            {/* Coluna de texto / info */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-medium">Contato</h1>
              <p className="mt-4 text-[var(--color-muted)] max-w-lg">
                Use o formulário
                <span className="hidden lg:inline"> ao lado</span>
                {' '}ou envie um e-mail direto para a equipe.
                Respondemos apenas a mensagens relacionadas à Django Technologies.
              </p>

              <div className="mt-6 grid gap-4 rounded-2xl border border-[color:rgb(42_47_54_/_10%)] bg-[color:rgb(246_248_251)] p-4 lg:p-5">
                <div>
                  <h2 className="text-xs font-semibold tracking-wide uppercase text-[var(--color-muted-strong,#2A2F36)]">
                    Contato direto
                  </h2>
                  <p className="mt-2 text-sm">
                    E-mail:{' '}
                    <a
                      className="underline underline-offset-2"
                      href="mailto:django@djangotechnologies.com"
                    >
                      django@djangotechnologies.com
                    </a>
                  </p>
                </div>

                <div className="border-t border-[color:rgb(42_47_54_/_10%)] pt-3 text-sm text-[var(--color-muted)]">
                  <p className="font-medium text-[color:rgb(17_20_24)]">
                    Assuntos comuns
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>• Informações institucionais</li>
                    <li>• Parcerias e mídia</li>
                    <li>• Oportunidades profissionais</li>
                    <li>• Questões gerais sobre a Django Technologies</li>
                  </ul>
                </div>

                <p className="mt-1 text-[0.7rem] text-[var(--color-muted)]">
                  Não enviamos recomendações de investimento por este canal.
                </p>
              </div>
            </div>

            {/* Coluna do formulário */}
            <div className="lg:justify-self-end w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
