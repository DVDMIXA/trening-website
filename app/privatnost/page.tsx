import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privatnost — Trening",
  description: "Politika privatnosti aplikacije Trening.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-24 min-h-[60vh]">
        <div className="mx-auto max-w-[70ch] px-5 md:px-8">
          <h1 className="font-display font-bold text-display-md text-bone">Privatnost</h1>
          <p className="mt-6 text-bone-muted leading-relaxed">
            Ovdje dolazi politika privatnosti aplikacije Trening — koji se podaci čuvaju lokalno na
            uređaju (npr. istorija treninga, tjelesna masa, fotografije napretka), kako se koriste i
            da li se dijele sa trećim stranama.
          </p>
          <p className="mt-4 text-bone-faint text-sm">
            Placeholder stranica — zamijeni ovaj tekst konačnom politikom prije objave sajta.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
