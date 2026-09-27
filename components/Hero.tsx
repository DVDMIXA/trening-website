import { hero } from "@/lib/content";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section id="pocetna" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-content px-5 md:px-8 grid md:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-volt border border-volt/30 bg-volt/[0.06] rounded-full px-3 py-1">
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display font-extrabold text-display-xl text-bone text-balance">
            {hero.title}
          </h1>

          <p className="mt-6 text-lg text-bone-muted max-w-[46ch] leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
            <a
              href="#preuzmi"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-volt text-ink-950 px-6 py-3.5 text-sm font-semibold hover:bg-volt-dim transition-colors focus-ring"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#screenshotovi"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-500 text-bone px-6 py-3.5 text-sm font-semibold hover:border-bone-muted transition-colors focus-ring"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute -inset-x-10 -inset-y-14 [mask-image:radial-gradient(closest-side,black,transparent)] pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(174,239,63,0.10),transparent_65%)]" />
          </div>

          <div className="relative hidden sm:block -mr-16 opacity-70 translate-y-6">
            <PhoneMockup src="/screenshots/progress.svg" alt="Grafikon napretka u aplikaciji Trening" tilt={-6} />
          </div>

          <div className="relative z-10 motion-safe:animate-drift">
            <PhoneMockup src="/screenshots/workout.svg" alt="Ekran toka treninga u aplikaciji Trening" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
