import Header from '../../components/header';
import Footer from '../../components/footer';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contato — Django Technologies',
  description: 'Entre em contato com a Django Technologies para assuntos institucionais.',
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main id="conteudo" className="flex-1">
        <section className="mx-auto max-w-screen-xl px-6 pb-16 pt-14 md:pb-20 md:pt-18">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--color-border)] bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)] shadow-[0_8px_24px_rgba(5,5,5,0.04)]">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-green)]" />
                Django Technologies
              </div>

              <div className="mt-8 h-px w-[4.5rem] bg-[color:rgb(81_214_59_/_78%)]" />

              <h1 className="mt-8 text-4xl font-medium tracking-[-0.04em] md:text-5xl">Contato</h1>
              <p className="mt-6 max-w-[32rem] text-[17px] leading-8 text-[color:rgb(5_5_5_/_70%)]">
                Use o formulário ou envie um e-mail direto para a equipe. Respondemos a mensagens de caráter
                institucional relacionadas à Django Technologies.
              </p>

              <div className="mt-8 grid gap-5 rounded-[28px] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_14px_34px_rgba(17,20,24,0.05)] lg:p-7">
                <div>
                  <h2 className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    Contato direto
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[color:rgb(5_5_5_/_76%)]">
                    E-mail:{' '}
                    <a
                      className="underline decoration-[color:rgb(81_214_59_/_32%)] underline-offset-4 transition-colors duration-200 hover:text-[var(--brand-green-dark)] hover:decoration-[var(--brand-green)]"
                      href="mailto:django@djangotechnologies.com"
                    >
                      django@djangotechnologies.com
                    </a>
                  </p>
                </div>

                <div className="border-t border-[color:var(--color-border)] pt-4 text-sm text-[var(--color-muted)]">
                  <p className="font-medium text-[var(--color-text)]">Assuntos comuns</p>
                  <ul className="mt-3 space-y-2">
                    <li>• Informações institucionais</li>
                    <li>• Parcerias e mídia</li>
                    <li>• Oportunidades profissionais</li>
                    <li>• Questões gerais sobre a Django Technologies</li>
                  </ul>
                </div>

                <p className="text-[0.72rem] leading-6 text-[var(--color-muted)]">
                  Não enviamos recomendações de investimento por este canal.
                </p>
              </div>
            </div>

            <div className="w-full lg:justify-self-end">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
