import { showcase } from "@/lib/content";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";

export default function Showcase() {
  return (
    <section className="py-24 md:py-32 border-t border-ink-700">
      <div className="mx-auto max-w-content px-5 md:px-8 flex flex-col gap-24 md:gap-32">
        {showcase.map((item) => (
          <div
            key={item.key}
            className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
              item.align === "right" ? "" : ""
            }`}
          >
            <div className={`flex justify-center ${item.align === "right" ? "md:order-2" : "md:order-1"}`}>
              <Reveal>
                <PhoneMockup src={`/screenshots/${item.key}.svg`} alt={`${item.title} — ekran aplikacije Trening`} />
              </Reveal>
            </div>
            <div className={item.align === "right" ? "md:order-1" : "md:order-2"}>
              <Reveal>
                <h3 className="font-display font-bold text-display-md text-bone max-w-[16ch]">
                  {item.title}
                </h3>
                <p className="mt-5 text-bone-muted leading-relaxed max-w-[42ch]">{item.text}</p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
