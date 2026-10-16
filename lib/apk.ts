import { createHash } from "node:crypto";
import { readFileSync, statSync } from "node:fs";
import path from "node:path";
import { app } from "@/config/app";

export type ApkInfo = { sizeBytes: number; sha256: string | null };

/**
 * Čita stvarnu veličinu i SHA-256 APK fajla pri buildu, pa se ti podaci
 * sami osvježe kad zamijeniš public/downloads/repwise-latest.apk.
 * Koristi se samo u Server Components (statički prerender).
 */
export function getApkInfo(): ApkInfo {
  try {
    const file = path.join(process.cwd(), "public", app.apkUrl);
    const sizeBytes = statSync(file).size;
    const sha256 = createHash("sha256").update(readFileSync(file)).digest("hex");
    return { sizeBytes, sha256 };
  } catch {
    return { sizeBytes: app.apkFileSizeBytes, sha256: null };
  }
}
