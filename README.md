# Repwise: web sajt

Zvanični sajt za Android aplikaciju Repwise. Next.js 16, React 19, TypeScript, Tailwind CSS 3.

## Pokretanje

    npm install
    npm run dev        # http://localhost:3000
    npm run build      # produkcioni build
    npm run typecheck  # TypeScript provjera
    npm run lint

## Šta gdje mijenjaš

| Šta | Gdje |
| --- | --- |
| Novi APK | zamijeni `public/downloads/repwise-latest.apk` (ime fajla ostaje isto) |
| Verzija, datum izdanja | `config/app.ts` (`version`, `versionCode`, `releaseDate`) |
| Veličina i SHA-256 APK-a | automatski se čitaju iz fajla pri buildu |
| Changelog | `config/changelog.ts` (novi unos ide na vrh liste) |
| Screenshotovi | `public/screenshots/*.webp` (1080×2290, isti nazivi), alt tekstovi u `config/content.ts` |
| Logo / ikonice | `public/brand/`, `app/icon.svg`, `app/apple-icon.png` |
| OG slika | `public/og/repwise-og.png` (1200×630) |
| Tekstovi | `config/content.ts` |
| Email za podršku | `config/app.ts` (`supportEmail`) |
| Politika privatnosti | `config/privacy.ts` (postavi `reviewed: true` kad potvrdiš sadržaj) |
| Domen | env varijabla `NEXT_PUBLIC_SITE_URL` na Vercelu (npr. `https://repwise.app`) |

## Izdavanje nove verzije

1. Zamijeni `public/downloads/repwise-latest.apk`.
2. U `config/app.ts` promijeni `version`, `versionCode`, `releaseDate`.
3. Dodaj unos na vrh `config/changelog.ts`.
4. `git add . && git commit -m "Repwise 1.1" && git push` (Vercel sam deploy-uje).

Napomena: svaki novi APK ulazi u Git istoriju (~20 MB). Ako repozitorijum postane
težak, APK se može hostovati na GitHub Releases, a `app.apkUrl` usmjeriti na taj link.
