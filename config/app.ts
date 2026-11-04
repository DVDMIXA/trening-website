/**
 * Centralni podaci o aplikaciji i sajtu.
 * Kad izdaš novu verziju: promijeni `version`, `versionCode`, `releaseDate`
 * i zamijeni fajl public/downloads/xqrep-latest.apk.
 * Veličina i SHA-256 APK-a se čitaju automatski iz fajla pri buildu.
 */

// Domen: postavi NEXT_PUBLIC_SITE_URL na Vercelu čim kupiš pravi domen.
// Dok toga nema, koristi se produkcioni Vercel URL, a lokalno localhost.
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProd ? `https://${vercelProd}` : "http://localhost:3000");

export const app = {
  name: "XQRep",
  tagline: "TRAIN. TRACK. PROGRESS.",

  // Iz AndroidManifest.xml dostavljenog APK-a (v1.4.1, versionCode 6, minSdk 24).
  version: "1.4.1",
  versionCode: 6,
  minimumAndroid: "7.0",

  // TODO: potvrdi stvarni datum izdanja ove verzije (ISO format YYYY-MM-DD).
  releaseDate: "2026-11-04",

  // Stabilna putanja. Uvijek zamijeni samo sadržaj ovog fajla.
  apkUrl: "/downloads/xqrep-latest.apk",
  apkFileName: "XQRep.apk",
  // Rezerva ako fajl nije dostupan pri buildu (normalno se čita iz fajla).
  apkFileSizeBytes: 47_145_540,

  // TODO: zamijeni pravom adresom za podršku (.example je namjerni placeholder).
  supportEmail: "support@xqrep.example",

  siteUrl,
} as const;
