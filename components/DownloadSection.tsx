import Link from "next/link";
import { app } from "@/config/app";
import { installSteps } from "@/config/content";
import { getApkInfo } from "@/lib/apk";
import { formatFileSize } from "@/lib/format";
import DownloadButton from "./DownloadButton";

export default function DownloadSection() {
  const { sizeBytes } = getApkInfo();
  return (
    <section id="preuzmi" className="border-t border-line">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div data-reveal>
          <h2 className="max-w-[14ch] text-balance font-display text-h2 font-bold text-fg">Spreman za sljedeći trening?</h2>
          <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-muted">
            Preuzmi Repwise direktno na svoj Android uređaj.
          </p>
          <div className="mt-9">
            <DownloadButton size="lg">Preuzmi Repwise za Android</DownloadButton>
          </div>
          <p className="mt-5 text-sm text-muted">
            Verzija {app.version}, Android {app.minimumAndroid} ili novije, {formatFileSize(sizeBytes)}.{" "}
            <Link href="/download" className="text-fg underline underline-offset-4 hover:text-lime">
              Detalji i uputstvo
            </Link>
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-7 md:p-8" data-reveal>
          <h3 className="font-display text-lg font-semibold text-fg">Instalacija u tri koraka</h3>
          <ol className="mt-6 flex flex-col gap-5">
            {installSteps.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-lime/40 font-display text-sm font-bold text-lime">
                  {i + 1}
                </span>
                <span className="pt-0.5 leading-relaxed text-muted">{s}</span>
              </li>
            ))}
          </ol>
          <p className="mt-7 border-t border-line pt-5 text-sm leading-relaxed text-muted">
            Već imaš Repwise? Preuzmi novu verziju i instaliraj je preko postojeće aplikacije.
          </p>
        </div>
      </div>
    </section>
  );
}
