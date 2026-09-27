"use client";

import { useRef } from "react";
import { gallery } from "@/lib/content";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";

export default function ScreenshotGallery() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    rowRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="screenshotovi" className="py-24 md:py-32 border-t border-ink-700">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display font-bold text-display-md text-bone max-w-[16ch]">
              Aplikacija iz svakog ugla
            </h2>
          </Reveal>

          <div className="hidden md:flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Prethodni screenshot"
              className="w-11 h-11 rounded-full border border-ink-500 flex items-center justify-center text-bone hover:border-bone-muted transition-colors focus-ring"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Sljedeći screenshot"
              className="w-11 h-11 rounded-full border border-ink-500 flex items-center justify-center text-bone hover:border-bone-muted transition-colors focus-ring"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div
        ref={rowRef}
        className="snap-row mt-12 flex gap-6 overflow-x-auto px-5 md:px-8 pb-4 snap-x snap-mandatory"
      >
        {gallery.map((g) => (
          <figure key={g.key} className="snap-start shrink-0 flex flex-col items-center gap-4">
            <PhoneMockup src={`/screenshots/${g.key}.svg`} alt={`${g.label} — ekran aplikacije Trening`} />
            <figcaption className="text-sm text-bone-muted">{g.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
