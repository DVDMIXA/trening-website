"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink-950/85 backdrop-blur-md border-b border-ink-600" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-content px-5 md:px-8 h-[72px] flex items-center justify-between">
        <Link href="#pocetna" className="flex items-center gap-2.5 focus-ring" aria-label="Trening — početna">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="8" fill="#AEEF3F" />
            <path d="M7 14h2.5l1.8-4.6L14 18l2.2-4h4.8" stroke="#08090A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-bone">Trening</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-bone-muted hover:text-bone transition-colors focus-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#preuzmi"
          className="hidden md:inline-flex items-center rounded-full bg-volt text-ink-950 px-5 py-2.5 text-sm font-semibold hover:bg-volt-dim transition-colors focus-ring"
        >
          Preuzmi aplikaciju
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
          className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] focus-ring"
        >
          <span
            className={`block h-[2px] w-6 bg-bone transition-transform duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-bone transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-[2px] w-6 bg-bone transition-transform duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-smooth border-b ${
          menuOpen ? "max-h-96 opacity-100 border-ink-600" : "max-h-0 opacity-0 border-transparent"
        } bg-ink-950/95 backdrop-blur-md`}
      >
        <nav className="flex flex-col px-5 pb-6 pt-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base text-bone border-b border-ink-700 last:border-0 focus-ring"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#preuzmi"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-volt text-ink-950 px-5 py-3 text-sm font-semibold focus-ring"
          >
            Preuzmi aplikaciju
          </a>
        </nav>
      </div>
    </header>
  );
}
