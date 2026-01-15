"use client";

import React, { useMemo, useState } from "react";

export type ResearchItemKind = "monthly" | "annual" | "market" | "article";

export type ResearchItem = {
  kind: ResearchItemKind;
  title: string;
  period?: string;
  publishedAt: string; // ISO
  href: string;
  cover?: string;
  external?: boolean;
};

const KIND_LABEL: Record<ResearchItemKind, string> = {
  monthly: "Mensal",
  annual: "Anual",
  market: "Mercado",
  article: "Artigo",
};

function formatDateBR(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(d);
}

function yearOf(iso: string) {
  return new Date(iso).getFullYear();
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 3v10" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

type Order = "newest" | "oldest";

function SelectField({
  value,
  onChange,
  children,
  ariaLabel,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel}
        className={[
          "h-9 appearance-none rounded-2xl",
          "border border-[#e6e9f0] bg-white",
          "pl-3 pr-9 text-sm",
          "text-[var(--color-text)]",
          "hover:bg-[#fbfbfd]",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgb(17_20_24_/_12%)]",
        ].join(" ")}
      >
        {children}
      </select>

      <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-muted)]" />
    </div>
  );
}

function CoverImage({ src }: { src?: string }) {
  const fallback = "/reports/covers/django-cover.png";
  const [imgSrc, setImgSrc] = useState(src || fallback);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgSrc}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      onError={() => setImgSrc(fallback)}
    />
  );
}

function isPdfHref(href: string) {
  const h = href.toLowerCase();
  return h.endsWith(".pdf") || h.startsWith("/reports/");
}

export default function ReportsClient({ items }: { items: ResearchItem[] }) {
  const years = useMemo(() => {
    const ys = Array.from(new Set(items.map((i) => yearOf(i.publishedAt))));
    ys.sort((a, b) => b - a);
    return ys;
  }, [items]);

  const [year, setYear] = useState<string>("all");
  const [kind, setKind] = useState<string>("all");
  const [order, setOrder] = useState<Order>("newest");

  const filtered = useMemo(() => {
    const base = items
      .filter((i) => (year === "all" ? true : String(yearOf(i.publishedAt)) === year))
      .filter((i) => (kind === "all" ? true : i.kind === kind))
      .sort((a, b) => {
        const da = +new Date(a.publishedAt);
        const db = +new Date(b.publishedAt);
        return order === "newest" ? db - da : da - db;
      });

    return base;
  }, [items, year, kind, order]);

  const isFiltered = year !== "all" || kind !== "all" || order !== "newest";

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-14 md:pb-16">
      <div className="flex items-baseline justify-between gap-6">
        
        <p className="text-sm text-[var(--color-muted)]">
          {filtered.length} {filtered.length === 1 ? "item" : "itens"}
        </p>
      </div>

      {/* Toolbar minimalista — sem “card de filtros” */}
      <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[var(--color-muted)]">Ano</span>
            <SelectField value={year} onChange={setYear} ariaLabel="Filtrar por ano">
              <option value="all">Todos</option>
              {years.map((y) => (
                <option key={y} value={String(y)}>
                  {y}
                </option>
              ))}
            </SelectField>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[var(--color-muted)]">Tipo</span>
            <SelectField value={kind} onChange={setKind} ariaLabel="Filtrar por tipo">
              <option value="all">Todos</option>
              <option value="monthly">Mensal</option>
              <option value="annual">Anual</option>
              <option value="market">Mercado</option>
              <option value="article">Artigo</option>
            </SelectField>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[var(--color-muted)]">Ordem</span>
            <SelectField value={order} onChange={(v) => setOrder(v as Order)} ariaLabel="Ordenação">
              <option value="newest">Mais recentes</option>
              <option value="oldest">Mais antigos</option>
            </SelectField>
          </div>

          {isFiltered ? (
            <button
              type="button"
              onClick={() => {
                setYear("all");
                setKind("all");
                setOrder("newest");
              }}
              className={[
                "text-sm font-medium",
                "text-[var(--color-text)]",
                "opacity-70 hover:opacity-100 transition",
                "underline decoration-[#d6dbe6] underline-offset-4 hover:decoration-[#b8c0d2]",
                "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgb(17_20_24_/_12%)] rounded-xl px-2 py-2",
              ].join(" ")}
            >
              Limpar
            </button>
          ) : null}
        </div>

        <p className="text-sm text-[var(--color-muted)]">
          Mostrando {filtered.length} de {items.length}
        </p>
      </div>

      {/* Lista editorial “luxo” */}
      <div className="mt-6 rounded-[28px] border border-[#e0e3ea] bg-white overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-10 text-sm text-[var(--color-muted)]">
            Nenhum item encontrado com esses filtros.
          </div>
        ) : (
          filtered.map((r, idx) => {
            const isPdf = !r.external && isPdfHref(r.href);
            const primaryLabel = r.kind === "article" ? "Ler" : "Abrir";

            return (
              <article
                key={`${r.href}-${idx}`}
                className={[
                  "group transition",
                  idx === 0 ? "" : "border-t border-[#eef1f6]",
                  "hover:bg-[#fbfbfd]",
                ].join(" ")}
              >
                <div className="p-6 md:p-7">
                  <div className="grid gap-6 lg:grid-cols-[420px_1fr_auto] lg:items-center">
                    {/* Thumbnail premium (2:1) */}
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block"
                      aria-label={`Abrir: ${r.title}`}
                    >
                      <div
                        className={[
                          "relative overflow-hidden rounded-[26px]",
                          "border border-[#e0e3ea] bg-[#0b0f14]",
                          "shadow-[0_22px_70px_rgba(0,0,0,0.12)]",
                          "ring-1 ring-black/5",
                          "transition",
                          "group-hover:shadow-[0_30px_95px_rgba(0,0,0,0.16)]",
                          "group-hover:-translate-y-[2px]",
                        ].join(" ")}
                      >
                        <div className="relative aspect-[2/1]">
                          <CoverImage src={r.cover} />
                        </div>
                      </div>
                    </a>

                    {/* Meta ultra mínima (mais “institucional”) */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                        <span>{KIND_LABEL[r.kind]}</span>
                        <span className="h-1 w-1 rounded-full bg-[#c7cdda]" />
                        <span>{formatDateBR(r.publishedAt)}</span>
                      </div>

                      {/* linha estética discreta */}
                      <div className="mt-4 h-px w-10 bg-[#e6e9f0]" />
                    </div>

                    {/* Ações */}
                    <div className="flex flex-wrap items-center gap-4 lg:justify-end">


                      <a
                        href={r.href}
                        target="_blank"
                        rel="noreferrer"
                        className={[
                          "inline-flex items-center justify-center",
                          "px-6 py-3 rounded-2xl",
                          "bg-[var(--brand-black)] text-white",
                          "hover:bg-[var(--brand-black-600)] active:bg-[var(--brand-black-700)]",
                          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgb(17_20_24_/_35%)]",
                          "shadow-[0_10px_30px_rgba(0,0,0,0.14)]",
                        ].join(" ")}
                      >
                        {primaryLabel}
                      </a>

                      {isPdf ? (
                        <a
                          href={r.href}
                          download
                          className={[
                            "inline-flex items-center gap-2",
                            "text-sm font-medium",
                            "text-[var(--color-text)]",
                            "opacity-75 hover:opacity-100",
                            "transition",
                            "underline decoration-[#d6dbe6] underline-offset-4",
                            "hover:decoration-[#b8c0d2]",
                            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgb(17_20_24_/_12%)] rounded-xl px-2 py-2",
                          ].join(" ")}
                        >
                          <DownloadIcon className="h-4 w-4" />
                          Baixar PDF
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
