import { features } from "@/lib/content";
import Reveal from "./Reveal";

const spanByIndex = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
];

export default function Features() {
  return (
    <section id="funkcije" className="py-24 md:py-32 border-t border-ink-700">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal>
          <h2 className="font-display font-bold text-display-md text-bone max-w-[18ch]">
            Sve što ti treba za ozbiljan trening
          </h2>
          <p className="mt-4 text-bone-muted max-w-[52ch]">
            Od planiranja do analize napretka — jedna aplikacija prati svaki dio procesa.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[150px]">
          {features.map((f, i) => {
            const isLead = i === 0;
            return (
              <Reveal key={f.title} delay={i * 60} className={spanByIndex[i]}>
                <div
                  className={`h-full rounded-lg p-7 md:p-8 flex flex-col justify-between border transition-colors duration-300 ${
                    isLead
                      ? "bg-volt/[0.07] border-volt/25 hover:border-volt/45"
                      : "bg-ink-900 border-ink-700 hover:border-ink-500"
                  }`}
                >
                  <h3 className={`font-display font-semibold text-xl ${isLead ? "text-bone" : "text-bone"}`}>
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-bone-muted max-w-[42ch]">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
