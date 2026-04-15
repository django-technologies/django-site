'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    const form = event.currentTarget; // 👈 guarda a referência do form aqui
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Erro ao enviar mensagem.');
      }

      setStatus('success');
      form.reset(); // 👈 usa a referência guardada, não o event
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Não foi possível enviar a mensagem.'
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-[color:rgb(42_47_54_/_15%)] bg-white p-6 shadow-sm lg:p-7"
    >
      <h2 className="text-lg font-medium">Envie uma mensagem</h2>

      <label className="grid gap-2 text-sm">
        <span>Nome</span>
        <input
          name="name"
          required
          className="border rounded-xl px-3 py-2 text-base outline-none
                     border-[color:rgb(42_47_54_/_25%)]
                     focus-visible:ring-2 focus-visible:ring-[color:rgb(45_106_227_/_55%)]
                     focus-visible:border-[color:rgb(45_106_227)]"
        />
      </label>

      <label className="grid gap-2 text-sm">
        <span>E-mail</span>
        <input
          type="email"
          name="email"
          required
          className="border rounded-xl px-3 py-2 text-base outline-none
                     border-[color:rgb(42_47_54_/_25%)]
                     focus-visible:ring-2 focus-visible:ring-[color:rgb(45_106_227_/_55%)]
                     focus-visible:border-[color:rgb(45_106_227)]"
        />
      </label>

      <label className="grid gap-2 text-sm">
        <span>Mensagem</span>
        <textarea
          name="message"
          rows={6}
          required
          className="border rounded-xl px-3 py-2 text-base outline-none resize-y
                     border-[color:rgb(42_47_54_/_25%)]
                     focus-visible:ring-2 focus-visible:ring-[color:rgb(45_106_227_/_55%)]
                     focus-visible:border-[color:rgb(45_106_227)]"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-2 justify-self-start px-5 py-3 rounded-2xl bg-[var(--brand-black)]
                   text-white text-sm font-medium
                   hover:bg-[var(--brand-black-600)]
                   active:bg-[var(--brand-black-700)]
                   focus-visible:outline-none focus-visible:ring-4
                   focus-visible:ring-[color:rgb(17_20_24_/_35%)]
                   disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando…' : 'Enviar'}
      </button>

      {status === 'success' && (
        <p className="text-xs text-[color:rgb(34_197_94)]">
          Mensagem enviada com sucesso.
        </p>
      )}

      {status === 'error' && (
        <p className="text-xs text-[color:rgb(220_38_38)]">
          {errorMessage ?? 'Ocorreu um erro ao enviar sua mensagem.'}
        </p>
      )}

      <p className="mt-2 text-xs text-[var(--color-muted)]">
        Caso tenha problemas com o formulário, envie e-mail direto para{' '}
        <a
          className="underline underline-offset-2"
          href="mailto:django@djangotechnologies.com"
        >
          django@djangotechnologies.com
        </a>
        .
      </p>
    </form>
  );
}
