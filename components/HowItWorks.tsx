import { steps } from "@/lib/content";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="kako-radi" className="py-24 md:py-32 border-t border-ink-700">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal>
          <h2 className="font-display font-bold text-display-md text-bone max-w-[20ch]">
            Kako radi
          </h2>
        </Reveal>

        <div className="mt-14 relative">
          <div className="hidden md:block absolute top-[22px] left-0 right-0 h-px bg-ink-600" />
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className="relative">
                <div className="relative z-10 w-11 h-11 rounded-full bg-ink-950 border border-ink-500 flex items-center justify-center font-tabular text-sm font-semibold text-volt">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-bone">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-bone-muted max-w-[34ch]">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
