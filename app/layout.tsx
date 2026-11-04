import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { app } from "@/config/app";
import RevealObserver from "@/components/RevealObserver";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const title = "XQRep – Android aplikacija za praćenje treninga";
const description = "Planiraj treninge, prati serije, opterećenje i napredak uz XQRep za Android.";

export const metadata: Metadata = {
  metadataBase: new URL(app.siteUrl),
  title: { default: title, template: "%s – XQRep" },
  description,
  applicationName: "XQRep",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "XQRep",
    locale: "sr_RS",
    title,
    description,
    url: "/",
    images: [{ url: "/og/xqrep-og.png", width: 1200, height: 630, alt: "XQRep: Train. Track. Progress." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/xqrep-og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0B0D",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr-Latn" className={`${manrope.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Omogućava reveal animacije tek kad JS radi, da sadržaj nikad ne ostane skriven. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="bg-ink font-body text-fg antialiased">
        <a
          href="#sadrzaj"
          className="sr-only z-[60] rounded-full bg-lime px-5 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Preskoči na sadržaj
        </a>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
