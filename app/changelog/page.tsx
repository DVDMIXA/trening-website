import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { changelog } from "@/config/changelog";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Spisak izmjena u svim verzijama aplikacije Repwise.",
  alternates: { canonical: "/changelog" },
};

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <main id="sadrzaj">
        <div className="mx-auto max-w-page px-5 pb-24 pt-14 md:px-8 md:pt-20">
          <h1 className="font-display text-h1 font-extrabold text-fg">Changelog</h1>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-muted">
            Šta je novo u svakoj verziji.{" "}
            <Link href="/download" className="text-fg underline underline-offset-4 hover:text-lime">
              Preuzmi najnoviju
            </Link>
            .
          </p>

          <ol className="mt-14 border-t border-line">
            {changelog.map((e) => (
              <li key={e.version} className="grid gap-4 border-b border-line py-10 md:grid-cols-[14rem_1fr] md:gap-12">
                <div>
                  <h2 className="font-display text-2xl font-bold text-fg">Verzija {e.version}</h2>
                  <p className="mt-1 text-sm text-muted">
                    <time dateTime={e.date}>{formatDate(e.date)}</time>
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {e.changes.map((c) => (
                    <li key={c} className="flex gap-3 leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-lime" />
                      {c}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <Footer />
    </>
  );
}
