"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/#produto", label: "Produto" },
  { href: "/#research", label: "Research" },
  { href: "/#tecnologia", label: "Tecnologia" },
  { href: "/about", label: "Sobre" },
];

const DOWNLOAD_HREF = "/#download";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M4 9h16" />
      <path d="M4 15h16" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </svg>
  );
}

function DownArrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3v9M4 8.5 8 12l4-3.5" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeMenu(returnFocus: boolean) {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color] duration-300",
          scrolled || open
            ? "border-[color:var(--color-border)] bg-[color:rgb(255_255_255_/_90%)]"
            : "border-transparent bg-[color:rgb(247_247_244_/_70%)]",
        ].join(" ")}
      >
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm"
        >
          Pular para o conteúdo
        </a>

        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-6 px-5 md:px-8 lg:h-[4.5rem]">
          <Link href="/" aria-label="Django Technologies — início" className="relative block h-9 w-[9.5rem] shrink-0 lg:h-10 lg:w-[11rem]">
            <Image
              src="/logo_djangotech_horizontal_transparent.png"
              alt="Django Technologies"
              fill
              priority
              sizes="176px"
              className="object-contain object-left"
            />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 text-[14px] font-medium text-[color:rgb(5_5_5_/_72%)] transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--brand-green)] after:transition-transform after:duration-300 hover:text-[var(--brand-black)] hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={DOWNLOAD_HREF}
              className="group hidden h-10 items-center gap-2 whitespace-nowrap rounded-full bg-[var(--brand-black)] px-5 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-[#1d201d] focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)] sm:inline-flex"
            >
              Baixar o app
              <DownArrow />
            </Link>

            <button
              ref={toggleRef}
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => (open ? closeMenu(false) : setOpen(true))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:rgb(5_5_5_/_10%)] bg-white text-[var(--brand-black)] transition-colors duration-200 hover:border-[color:rgb(5_5_5_/_24%)] focus-visible:ring-4 focus-visible:ring-[color:var(--focus-ring)] lg:hidden"
            >
              {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fora do <header>: o backdrop-filter do header faria os elementos fixed se posicionarem nele. */}
      {open ? (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-[color:rgb(5_5_5_/_45%)] backdrop-blur-[2px]"
            onClick={() => closeMenu(true)}
            aria-hidden="true"
          />
          <div className="fixed inset-x-0 top-16 z-[45] max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-[color:var(--color-border)] bg-white shadow-[0_24px_60px_rgba(5,5,5,0.16)]">
            <nav id="mobile-navigation" aria-label="Menu" className="mx-auto flex max-w-screen-xl flex-col px-5 pb-6 pt-2 md:px-8">
              {NAV.map((item, index) => (
                <Link
                  key={item.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => closeMenu(false)}
                  className="flex items-center justify-between border-b border-[color:var(--color-border)] py-4 font-display text-xl font-medium tracking-[-0.02em] text-[var(--brand-black)]"
                >
                  {item.label}
                  <span className="text-[color:rgb(5_5_5_/_30%)]" aria-hidden="true">→</span>
                </Link>
              ))}
              <Link
                href={DOWNLOAD_HREF}
                onClick={() => closeMenu(false)}
                className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-black)] text-[15px] font-medium text-white"
              >
                Baixar o app
                <DownArrow />
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
