/**
 * Centralni podaci o aplikaciji i sajtu.
 * Kad izdaš novu verziju: promijeni `version`, `versionCode`, `releaseDate`
 * i zamijeni fajl public/downloads/repwise-latest.apk.
 * Veličina i SHA-256 APK-a se čitaju automatski iz fajla pri buildu.
 */

// Domen: postavi NEXT_PUBLIC_SITE_URL na Vercelu čim kupiš pravi domen.
// Dok toga nema, koristi se produkcioni Vercel URL, a lokalno localhost.
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProd ? `https://${vercelProd}` : "http://localhost:3000");

export const app = {
  name: "Repwise",
  tagline: "TRAIN. TRACK. PROGRESS.",

  // Iz AndroidManifest.xml dostavljenog APK-a (v1.0, versionCode 1, minSdk 24).
  version: "1.0",
  versionCode: 1,
  minimumAndroid: "7.0",

  // TODO: potvrdi stvarni datum izdanja ove verzije (ISO format YYYY-MM-DD).
  releaseDate: "2026-10-16",

  // Stabilna putanja. Uvijek zamijeni samo sadržaj ovog fajla.
  apkUrl: "/downloads/repwise-latest.apk",
  apkFileName: "Repwise.apk",
  // Rezerva ako fajl nije dostupan pri buildu (normalno se čita iz fajla).
  apkFileSizeBytes: 21_250_833,

  // TODO: zamijeni pravom adresom za podršku (.example je namjerni placeholder).
  supportEmail: "support@repwise.example",

  siteUrl,
} as const;
