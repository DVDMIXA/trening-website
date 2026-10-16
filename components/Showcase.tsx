import { showcase } from "@/config/content";
import PhoneFrame from "./PhoneFrame";

export default function Showcase() {
  return (
    <section id="aplikacija" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-[18ch] text-balance font-display text-h2 font-bold text-fg" data-reveal>
          Ovako izgleda Repwise
        </h2>
        <p className="mt-5 max-w-[46ch] leading-relaxed text-muted" data-reveal>
          Stvarni ekrani aplikacije, bez uljepšavanja.
        </p>

        <div className="mt-16 flex flex-col gap-24 md:mt-20 md:gap-32">
          {showcase.map((item, i) => {
            const flip = i % 2 === 1;
            const two = item.shots.length > 1;
            return (
              <article key={item.id} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={flip ? "md:order-2" : ""} data-reveal>
                  <h3 className="max-w-[16ch] text-balance font-display text-h3 font-bold text-fg">{item.title}</h3>
                  <p className="mt-5 max-w-[46ch] leading-relaxed text-muted">{item.text}</p>
                </div>

                <div className={`flex justify-center ${flip ? "md:order-1 md:justify-start" : "md:justify-end"}`} data-reveal>
                  {two ? (
                    <div className="flex items-start gap-4 sm:gap-6">
                      <PhoneFrame
                        src={item.shots[0].src}
                        alt={item.shots[0].alt}
                        sizes="(min-width: 768px) 240px, 42vw"
                        className="w-[42vw] max-w-[240px]"
                      />
                      <PhoneFrame
                        src={item.shots[1].src}
                        alt={item.shots[1].alt}
                        sizes="(min-width: 768px) 240px, 42vw"
                        className="mt-10 w-[42vw] max-w-[240px]"
                      />
                    </div>
                  ) : (
                    <PhoneFrame
                      src={item.shots[0].src}
                      alt={item.shots[0].alt}
                      sizes="(min-width: 768px) 320px, 72vw"
                      className="w-[min(72vw,300px)] md:w-[320px]"
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
