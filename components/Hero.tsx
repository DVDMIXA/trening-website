import Link from "next/link";
import { app } from "@/config/app";
import { getApkInfo } from "@/lib/apk";
import { formatFileSize } from "@/lib/format";
import DownloadButton from "./DownloadButton";
import PhoneFrame from "./PhoneFrame";

export default function Hero() {
  const { sizeBytes } = getApkInfo();
  return (
    <section id="pocetna" className="overflow-x-clip">
      <div className="mx-auto grid max-w-page items-center gap-14 px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <p className="hero-in font-display text-sm font-bold tracking-[0.22em] text-lime">{app.tagline}</p>
          <h1 className="hero-in hero-in-2 mt-5 max-w-[14ch] text-balance font-display text-h1 font-extrabold text-fg">
            Trening koji pamti tvoj napredak.
          </h1>
          <p className="hero-in hero-in-3 mt-6 max-w-[44ch] text-lg leading-relaxed text-muted">
            Planiraj treninge, bilježi serije i opterećenje i na jednom mjestu pregledaj kako napreduješ.
          </p>
          <div className="hero-in hero-in-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <DownloadButton size="lg" />
            <Link
              href="/#aplikacija"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-line px-7 text-base font-semibold text-fg transition-colors hover:border-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              Pogledaj aplikaciju
            </Link>
          </div>
          <p className="hero-in hero-in-4 mt-5 text-sm text-muted">
            Verzija {app.version} za Android {app.minimumAndroid} i novije, APK {formatFileSize(sizeBytes)}.
          </p>
        </div>

        <div className="hero-in hero-in-3 relative mx-auto flex w-full max-w-[560px] justify-center lg:justify-end">
          <PhoneFrame
            src="/screenshots/pocetna.webp"
            alt="Početni ekran aplikacije Repwise sa sedmičnim ritmom i dugmetom Započni trening"
            priority
            sizes="(min-width: 1024px) 320px, 70vw"
            className="relative z-10 w-[min(70vw,300px)] lg:w-[320px]"
          />
          <PhoneFrame
            src="/screenshots/trening-u-toku.webp"
            alt="Ekran treninga u toku sa listom vježbi u aplikaciji Repwise"
            sizes="260px"
            className="absolute left-2 top-16 hidden w-[240px] sm:block lg:left-0 xl:left-4 xl:w-[260px]"
          />
        </div>
      </div>
    </section>
  );
}
