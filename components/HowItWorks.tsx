import { steps } from "@/config/content";

export default function HowItWorks() {
  return (
    <section id="kako-radi" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
        <h2 className="font-display text-h2 font-bold text-fg" data-reveal>
          Kako radi
        </h2>

        <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative border-t border-line pt-6" data-reveal>
              <span aria-hidden="true" className="absolute -top-px left-0 h-px w-10 bg-lime" />
              <span className="font-display text-sm font-bold text-lime">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-fg">{s.title}</h3>
              <p className="mt-2 max-w-[28ch] leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
