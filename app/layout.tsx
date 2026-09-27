import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { seo } from "@/lib/content";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: seo.title,
  description: seo.description,
  keywords: [
    "Trening aplikacija",
    "Android fitness aplikacija",
    "praćenje treninga",
    "trening plan Android",
    "fitness tracker Android",
  ],
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.url,
    siteName: "Trening",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        // TODO: zamijeniti pravim OG image-om, 1200x630px, prije produkcije.
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trening — Android aplikacija za praćenje treninga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-ink text-bone">
        {children}
      </body>
    </html>
  );
}
