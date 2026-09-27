import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontakt — Trening",
  description: "Kontaktiraj tim aplikacije Trening.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-24 min-h-[60vh]">
        <div className="mx-auto max-w-[70ch] px-5 md:px-8">
          <h1 className="font-display font-bold text-display-md text-bone">Kontakt</h1>
          <p className="mt-6 text-bone-muted leading-relaxed">
            Pitanja, prijedlozi ili prijava problema — javi se na:
          </p>
          <a
            href="mailto:kontakt@trening.app"
            className="mt-3 inline-block text-volt font-medium focus-ring"
          >
            kontakt@trening.app
          </a>
          <p className="mt-4 text-bone-faint text-sm">
            Placeholder e-mail adresa — zamijeni pravom kontakt adresom prije objave sajta.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
