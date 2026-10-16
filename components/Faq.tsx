import Link from "next/link";
import { app } from "@/config/app";

const items = [
  {
    q: "Kako instalirati Repwise?",
    a: (
      <>Preuzmi APK na telefon, otvori fajl i, ako Android to zatraži, dozvoli instalaciju iz izvora iz kojeg si ga preuzeo. Zatim potvrdi instalaciju.</>
    ),
  },
  {
    q: "Kako ažurirati aplikaciju?",
    a: <>Već imaš Repwise? Preuzmi novu verziju i instaliraj je preko postojeće aplikacije.</>,
  },
  {
    q: "Koja Android verzija je potrebna?",
    a: <>Android {app.minimumAndroid} ili novija.</>,
  },
  {
    q: "Hoću li izgubiti podatke nakon ažuriranja?",
    a: (
      <>Kada novu verziju instaliraš preko postojeće, podaci aplikacije na telefonu ostaju sačuvani. Nemoj deinstalirati aplikaciju prije ažuriranja, jer se time brišu podaci sa uređaja.</>
    ),
  },
  {
    q: "Gdje mogu vidjeti šta je novo?",
    a: (
      <>
        Spisak izmjena po verzijama nalazi se na stranici{" "}
        <Link href="/changelog" className="text-fg underline underline-offset-4 hover:text-lime">
          Changelog
        </Link>
        .
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-t border-line">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <h2 className="font-display text-h2 font-bold text-fg" data-reveal>
          Česta pitanja
        </h2>
        <div className="border-t border-line" data-reveal>
          {items.map((it) => (
            <details key={it.q} className="group border-b border-line">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-lg font-semibold text-fg [&::-webkit-details-marker]:hidden">
                {it.q}
                <span
                  aria-hidden="true"
                  className="relative h-3 w-3 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-3 before:-translate-y-1/2 before:bg-lime after:absolute after:left-1/2 after:top-0 after:h-3 after:w-[2px] after:-translate-x-1/2 after:bg-lime after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-[60ch] pb-6 leading-relaxed text-muted">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
