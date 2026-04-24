'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    const form = event.currentTarget;
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
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Não foi possível enviar a mensagem.');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-[28px] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_16px_36px_rgba(5,5,5,0.05)] lg:p-8"
    >
      <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
        <span className="h-2 w-2 rounded-full bg-[var(--brand-green)]" />
        Mensagem
      </div>

      <h2 className="text-lg font-medium">Envie uma mensagem</h2>

      <label className="grid gap-2 text-sm">
        <span className="text-[color:rgb(5_5_5_/_78%)]">Nome</span>
        <input
          name="name"
          required
          className="rounded-xl border bg-[color:rgb(255_255_255_/_96%)] px-3 py-2.5 text-base outline-none transition-colors duration-200 border-[color:rgb(42_47_54_/_18%)] hover:border-[color:rgb(81_214_59_/_24%)] focus-visible:ring-2 focus-visible:ring-[color:var(--focus-ring)] focus-visible:border-[var(--brand-green)]"
        />
      </label>

      <label className="grid gap-2 text-sm">
        <span className="text-[color:rgb(5_5_5_/_78%)]">E-mail</span>
        <input
          type="email"
          name="email"
          required
          className="rounded-xl border bg-[color:rgb(255_255_255_/_96%)] px-3 py-2.5 text-base outline-none transition-colors duration-200 border-[color:rgb(42_47_54_/_18%)] hover:border-[color:rgb(81_214_59_/_24%)] focus-visible:ring-2 focus-visible:ring-[color:var(--focus-ring)] focus-visible:border-[var(--brand-green)]"
        />
      </label>

      <label className="grid gap-2 text-sm">
        <span className="text-[color:rgb(5_5_5_/_78%)]">Mensagem</span>
        <textarea
          name="message"
          rows={6}
          required
          className="resize-y rounded-xl border bg-[color:rgb(255_255_255_/_96%)] px-3 py-2.5 text-base outline-none transition-colors duration-200 border-[color:rgb(42_47_54_/_18%)] hover:border-[color:rgb(81_214_59_/_24%)] focus-visible:ring-2 focus-visible:ring-[color:var(--focus-ring)] focus-visible:border-[var(--brand-green)]"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-2 justify-self-start rounded-2xl border border-transparent bg-[var(--brand-black)] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(5,5,5,0.12)] transition-colors duration-200 hover:border-[color:var(--brand-green-dark)] hover:bg-[var(--brand-green)] hover:text-[var(--brand-black)] active:bg-[var(--brand-green-dark)] active:text-[var(--brand-black)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Enviando…' : 'Enviar'}
      </button>

      {status === 'success' && (
        <p className="text-xs text-[var(--brand-green-dark)]">Mensagem enviada com sucesso.</p>
      )}

      {status === 'error' && (
        <p className="text-xs text-[color:rgb(220_38_38)]">
          {errorMessage ?? 'Ocorreu um erro ao enviar sua mensagem.'}
        </p>
      )}

      <p className="mt-2 text-xs text-[var(--color-muted)]">
        Caso tenha problemas com o formulário, envie e-mail direto para{' '}
        <a
          className="underline decoration-[color:rgb(81_214_59_/_32%)] underline-offset-4 transition-colors duration-200 hover:text-[var(--brand-green-dark)] hover:decoration-[var(--brand-green)]"
          href="mailto:django@djangotechnologies.com"
        >
          django@djangotechnologies.com
        </a>
        .
      </p>
    </form>
  );
}
