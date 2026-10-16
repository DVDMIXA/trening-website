import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { privacy } from "@/config/privacy";
import { app } from "@/config/app";

export const metadata: Metadata = {
  title: "Privatnost",
  description: "Kako Repwise postupa sa podacima na tvom uređaju.",
  alternates: { canonical: "/privacy" },
  // Dok politika nije potvrđena, ne indeksirati.
  robots: privacy.reviewed ? undefined : { index: false, follow: true },
};

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-3">
      {items.map((i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-muted">
          <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-lime" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  const { facts, toConfirm } = privacy;
  return (
    <>
      <Header />
      <main id="sadrzaj">
        <div className="mx-auto max-w-[760px] px-5 pb-24 pt-14 md:px-8 md:pt-20">
          <h1 className="font-display text-h1 font-extrabold text-fg">Privatnost</h1>

          {!privacy.reviewed && (
            <div role="note" className="mt-8 rounded-2xl border border-amber-400/40 bg-amber-400/5 p-5">
              <p className="font-display font-semibold text-amber-300">Nacrt: potvrdi prije objave</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Ova stranica sadrži samo tehničke činjenice potvrđene iz verzije {app.version} aplikacije. Prije javne
                objave potvrdi stavke ispod i postavi <code className="text-fg">reviewed: true</code> u{" "}
                <code className="text-fg">config/privacy.ts</code>.
              </p>
              <List items={toConfirm} />
            </div>
          )}

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-fg">Podaci na tvom uređaju</h2>
            <p className="mt-4 leading-relaxed text-muted">Repwise čuva sljedeće podatke lokalno, u aplikaciji na telefonu:</p>
            <List items={facts.storedOnDevice} />
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-fg">Dozvole</h2>
            <List items={facts.permissions} />
            <p className="mt-4 leading-relaxed text-muted">{facts.noInternetPermission}</p>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-fg">Kontakt</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Pitanja o privatnosti:{" "}
              <a href={`mailto:${app.supportEmail}`} className="text-fg underline underline-offset-4 hover:text-lime">
                {app.supportEmail}
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
