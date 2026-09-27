# Trening — web sajt aplikacije

Marketinški sajt za Android fitness aplikaciju **Trening**. Napravljen u
Next.js 14 (App Router), TypeScript-u i Tailwind CSS-u, bez nepotrebnih
dependency-ja (nema animacione biblioteke — fade-in efekti su rađeni preko
`IntersectionObserver`-a u `components/Reveal.tsx`).

## Pokretanje

```bash
npm install
npm run dev
```

Sajt se otvara na `http://localhost:3000`.

Za produkciju:

```bash
npm run build
npm run start
```

## Struktura

```
app/
  layout.tsx          — fontovi (Manrope + Inter), SEO/OpenGraph metadata
  page.tsx             — sastavlja sve sekcije
  privatnost/page.tsx   — placeholder stranica
  kontakt/page.tsx      — placeholder stranica
  globals.css
components/
  Header.tsx           — sticky nav + mobilni hamburger meni
  Hero.tsx
  Features.tsx          — bento grid funkcija
  HowItWorks.tsx
  Showcase.tsx          — naizmjenični tekst/telefon prikaz
  ScreenshotGallery.tsx — horizontalni carousel (scroll-snap)
  Download.tsx
  Footer.tsx
  PhoneMockup.tsx       — realistični phone-frame, prima bilo koji src
  Reveal.tsx            — scroll-reveal wrapper (bez biblioteka)
lib/
  content.ts            — SAV tekst sajta na jednom mjestu (srpski, ijekavica)
public/
  screenshots/           — placeholder SVG ekrani aplikacije (vidi napomenu ispod)
  downloads/              — ovdje ide trening.apk (vidi downloads/README.md)
```

## Šta treba zamijeniti prije objave

1. **APK fajl** — `public/downloads/trening.apk` (uputstvo u tom folderu).
2. **Screenshotovi** — `public/screenshots/*.svg` su ilustrovani placeholderi
   u stilu sajta, ne pravi snimci ekrana. Uputstvo za zamjenu je u
   `public/screenshots-source/README.md`.
3. **OG slika** — `app/layout.tsx` referencira `/og-image.png` (1200×630px) koji
   trenutno ne postoji; dodaj ga u `public/`.
4. **Kontakt e-mail i politika privatnosti** — `app/kontakt/page.tsx` i
   `app/privatnost/page.tsx` sadrže placeholder tekst.
5. Ako se promijeni ime ili domen aplikacije, ažuriraj `seo.url` u
   `lib/content.ts`.

## Dizajn

- Pozadina: skoro crna (`#08090A` / `#0B0D0B`), bez čistog crnog.
- Akcenat: kontrolisana volt-lime (`#AEEF3F`), korišćena namjerno i rijetko —
  ne farba se svaki element.
- Tipografija: Manrope (naslovi) + Inter (tekst), preko `next/font/google`.
- Animacije: suptilne (fade-up na scroll, mali parallax na hero telefonu),
  poštuje `prefers-reduced-motion`.
- Sve statistike, ocjene i recenzije na sajtu su namjerno izostavljene —
  dodaj ih tek kad budu stvarne.
