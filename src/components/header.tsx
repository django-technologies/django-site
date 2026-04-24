"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },
  { href: "/reports", label: "Relat\u00f3rios" },
  { href: "/contact", label: "Contato" },
];

const LOGO_SOURCES = [
  "/logo_djangotech_horizontal_transparent.png",
  "/logo_djangotech_horizontal.png",
  "/logo_djangotech.png",
  "/django-logo.svg",
  "/django-logo.png",
  "/logo-mark.svg",
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
  const [logoIndex, setLogoIndex] = useState(0);
  const logoSrc = LOGO_SOURCES[Math.min(logoIndex, LOGO_SOURCES.length - 1)];
  const showWordmarkFallback = logoSrc === "/logo-mark.svg";

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function handleLogoError() {
    setLogoIndex((current) => Math.min(current + 1, LOGO_SOURCES.length - 1));
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:rgb(255_255_255_/_94%)] backdrop-blur">
      <div className="mx-auto flex h-[4.75rem] max-w-screen-xl items-center justify-between gap-4 px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span
            className={[
              "relative shrink-0 overflow-hidden",
              showWordmarkFallback
                ? "h-10 w-10 rounded-xl border border-[color:var(--color-border)] bg-white p-1"
                : "h-11 w-44 sm:h-12 sm:w-56",
            ].join(" ")}
          >
            <Image
              src={logoSrc}
              alt="Django Technologies"
              fill
              priority
              sizes={showWordmarkFallback ? "40px" : "(max-width: 640px) 176px, 224px"}
              className={["object-contain", showWordmarkFallback ? "p-0.5" : "object-left"].join(" ")}
              onError={handleLogoError}
            />
          </span>

          {showWordmarkFallback ? (
            <span className="min-w-0 leading-[1.05]">
              <span className="block truncate text-sm font-semibold tracking-[0.02em] text-[var(--color-text)]">
                Django
              </span>
              <span className="block truncate text-sm font-semibold tracking-[0.02em] text-[var(--color-muted)]">
                Technologies
              </span>
            </span>
          ) : null}
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[color:rgb(5_5_5_/_76%)] transition-colors duration-200 hover:text-[var(--brand-green-dark)] focus-visible:text-[var(--brand-green-dark)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className={[
            "inline-flex h-11 w-11 items-center justify-center rounded-2xl text-[var(--color-text)] md:hidden",
            "border border-[color:var(--color-border)] bg-white",
            "transition-colors duration-200",
            "hover:border-[color:var(--brand-green)] hover:bg-[color:rgb(81_214_59_/_8%)] hover:text-[var(--brand-green-dark)]",
            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)]",
          ].join(" ")}
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden">
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed left-0 right-0 top-[4.75rem] border-b border-[color:var(--color-border)] bg-white shadow-[0_24px_60px_rgba(5,5,5,0.08)]">
            <div className="mx-auto max-w-screen-xl px-6 py-5">
              <nav id="mobile-navigation" className="flex flex-col gap-2">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-base text-[color:rgb(5_5_5_/_84%)] transition-colors duration-200 hover:bg-[color:rgb(81_214_59_/_8%)] hover:text-[var(--brand-green-dark)] focus-visible:text-[var(--brand-green-dark)]"
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
