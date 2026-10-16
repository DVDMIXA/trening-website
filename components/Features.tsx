import { features } from "@/config/content";

export default function Features() {
  return (
    <section id="funkcije" className="border-t border-line">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
          <h2 className="max-w-[16ch] text-balance font-display text-h2 font-bold text-fg">
            Sve za trening na jednom mjestu
          </h2>
          <p className="mt-5 max-w-[40ch] leading-relaxed text-muted">
            Od plana do posljednje serije i pregleda napretka. Bez tabela i bez papira.
          </p>
        </div>

        <ol className="border-t border-line">
          {features.map((f, i) => (
            <li key={f.title} className="grid gap-2 border-b border-line py-7 sm:grid-cols-[3.5rem_1fr] sm:gap-6" data-reveal>
              <span className="font-display text-sm font-bold text-lime" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-fg">{f.title}</h3>
                <p className="mt-2 max-w-[52ch] leading-relaxed text-muted">{f.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
