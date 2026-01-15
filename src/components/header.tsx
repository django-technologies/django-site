"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },       // ajuste se sua rota for /about
  { href: "/reports", label: "Relatórios" },
  { href: "/contact", label: "Contato" },   // ajuste se sua rota for /contact
];

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  // trava scroll quando drawer abre
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC fecha
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#e6e9f0]">
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo (imagem NÃO some) */}
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <span className="shrink-0">
            {/* Troque o src abaixo pelo MESMO caminho que você já usa hoje */}
            <Image
              src="/logo-mark.svg"
              alt="Django Technologies"
              width={26}
              height={26}
              priority
            />
          </span>

          {/* Texto do logo: no mobile fica em 2 linhas e não invade o menu */}
          <span className="min-w-0 leading-tight">
            <span className="block font-semibold tracking-[-0.01em] truncate">
              Django
            </span>
            <span className="block font-semibold tracking-[-0.01em] truncate">
              Technologies
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--color-text)] opacity-80 hover:opacity-100 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={[
            "md:hidden inline-flex items-center justify-center",
            "h-10 w-10 rounded-2xl",
            "border border-[#e6e9f0] bg-white",
            "hover:bg-[#fbfbfd]",
            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgb(17_20_24_/_12%)]",
          ].join(" ")}
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open ? (
        <div className="md:hidden">
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* panel */}
          <div className="fixed top-16 left-0 right-0 bg-white border-b border-[#e6e9f0] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <div className="max-w-screen-xl mx-auto px-6 py-5">
              <nav className="flex flex-col gap-2">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-2 text-base text-[var(--color-text)] opacity-90 hover:opacity-100 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
