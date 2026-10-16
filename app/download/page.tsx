import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import DownloadButton from "@/components/DownloadButton";
import { LogoMark } from "@/components/Logo";
import { app } from "@/config/app";
import { installSteps } from "@/config/content";
import { getApkInfo } from "@/lib/apk";
import { formatDate, formatFileSize } from "@/lib/format";

export const metadata: Metadata = {
  title: "Preuzmi Repwise za Android",
  description: "Preuzmi najnoviji APK Repwise aplikacije za Android, uz uputstvo za instalaciju i ažuriranje.",
  alternates: { canonical: "/download" },
};

export default function DownloadPage() {
  const { sizeBytes, sha256 } = getApkInfo();
  const rows: [string, string][] = [
    ["Verzija", app.version],
    ["Datum izdanja", formatDate(app.releaseDate)],
    ["Veličina", formatFileSize(sizeBytes)],
    ["Potreban Android", `${app.minimumAndroid} ili novije`],
    ["Format", "APK"],
  ];

  return (
    <>
      <Header />
      <main id="sadrzaj">
        <section>
          <div className="mx-auto grid max-w-page gap-12 px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <LogoMark className="h-14 w-auto" />
              <h1 className="mt-8 text-balance font-display text-h1 font-extrabold text-fg">Preuzmi Repwise</h1>
              <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-muted">
                Najnovija verzija za Android, direktno kao APK fajl.
              </p>
              <div className="mt-9">
                <DownloadButton size="lg">Preuzmi APK</DownloadButton>
              </div>
              <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-muted">
                Već imaš Repwise? Preuzmi novu verziju i instaliraj je preko postojeće aplikacije. Šta je novo možeš
                vidjeti u{" "}
                <Link href="/changelog" className="text-fg underline underline-offset-4 hover:text-lime">
                  changelogu
                </Link>
                .
              </p>
            </div>

            <dl className="self-start rounded-2xl border border-line bg-surface p-7 md:p-8">
              {rows.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 border-b border-line py-3.5 first:pt-0 last:border-0 last:pb-0">
                  <dt className="text-sm text-muted">{k}</dt>
                  <dd className="font-display font-semibold text-fg">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto grid max-w-page gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <h2 className="font-display text-h3 font-bold text-fg">Instalacija</h2>
            <div>
              <ol className="flex flex-col gap-6">
                {installSteps.map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-lime/40 font-display text-sm font-bold text-lime">
                      {i + 1}
                    </span>
                    <span className="pt-1 leading-relaxed text-muted">{s}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 max-w-[56ch] text-sm leading-relaxed text-muted">
                Android može prikazati upozorenje jer aplikacija ne dolazi iz prodavnice. To je uobičajeno za APK
                instalaciju.
              </p>
              {sha256 && (
                <p className="mt-6 text-sm text-muted">
                  SHA-256 ovog fajla:
                  <code className="mt-2 block break-all rounded-lg bg-surface px-3 py-2 font-mono text-xs text-fg">{sha256}</code>
                </p>
              )}
            </div>
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
