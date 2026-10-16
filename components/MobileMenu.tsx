"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/config/nav";
import { app } from "@/config/app";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Zatvori meni" : "Otvori meni"}
        className="flex h-11 w-11 items-center justify-center rounded-full text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
      >
        <span className="relative block h-3.5 w-5" aria-hidden="true">
          <span className={`absolute left-0 h-[2px] w-5 rounded bg-current transition-all duration-200 ${open ? "top-[6px] rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 top-[6px] h-[2px] w-5 rounded bg-current transition-opacity duration-150 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute left-0 h-[2px] w-5 rounded bg-current transition-all duration-200 ${open ? "top-[6px] -rotate-45" : "top-[12px]"}`} />
        </span>
      </button>

      <nav
        id="mobile-menu"
        aria-label="Glavni meni"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-ink/95 px-5 pb-6 pt-2 backdrop-blur-md"
      >
        <ul className="flex flex-col">
          {navLinks.map((l) => (
            <li key={l.href} className="border-b border-line">
              <Link href={l.href} onClick={close} className="flex min-h-12 items-center text-base text-fg">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={app.apkUrl}
          download={app.apkFileName}
          onClick={close}
          className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-lime text-[15px] font-semibold text-ink"
        >
          Preuzmi aplikaciju
        </a>
      </nav>
    </div>
  );
}
