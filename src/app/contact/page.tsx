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
        <div className="max-w-screen-xl mx-auto w-full px-6 py-10 lg:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-10 items-start md:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              {/* Coluna de texto / info */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-medium">Contato</h1>
                <p className="mt-5 max-w-lg text-[var(--color-muted)]">
                  Use o formulário
                  <span className="hidden lg:inline"> ao lado</span>
                  {' '}ou envie um e-mail direto para a equipe.
                  Respondemos apenas a mensagens relacionadas à Django Technologies.
                </p>

                <div className="mt-6 grid gap-5 rounded-[26px] border border-[color:rgb(17_20_24_/_8%)] bg-white p-6 shadow-[0_14px_34px_rgba(17,20,24,0.05)] lg:p-7">
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

                  <div className="border-t border-[color:rgb(17_20_24_/_8%)] pt-4 text-sm text-[var(--color-muted)]">
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

                  <p className="mt-1.5 text-[0.7rem] text-[var(--color-muted)]">
                    Não enviamos recomendações de investimento por este canal.
                  </p>
                </div>
              </div>

              {/* Coluna do formulário */}
              <div className="w-full lg:justify-self-end">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
