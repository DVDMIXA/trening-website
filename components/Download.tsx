import { download } from "@/lib/content";
import Reveal from "./Reveal";

export default function Download() {
  return (
    <section id="preuzmi" className="py-24 md:py-32 border-t border-ink-700 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-volt/40 to-transparent" />
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <Reveal>
            <h2 className="font-display font-bold text-display-lg text-bone max-w-[16ch]">
              {download.title}
            </h2>
            <p className="mt-5 text-bone-muted max-w-[42ch] leading-relaxed">{download.text}</p>

            <a
              href={download.apkPath}
              download
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-volt text-ink-950 px-7 py-4 text-sm font-semibold hover:bg-volt-dim transition-colors focus-ring"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.32 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.51-3.74 4.25z"
                  fill="#08090A"
                />
              </svg>
              {download.cta}
            </a>

            <p className="mt-4 text-xs text-bone-faint">{download.minVersion}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-lg border border-ink-700 bg-ink-900 p-8">
              <h3 className="font-display font-semibold text-bone text-base">Instalacija u tri koraka</h3>
              <ol className="mt-5 flex flex-col gap-4">
                {download.installSteps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-volt/10 border border-volt/30 text-volt text-xs font-semibold flex items-center justify-center font-tabular">
                      {i + 1}
                    </span>
                    <span className="text-sm text-bone-muted leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
