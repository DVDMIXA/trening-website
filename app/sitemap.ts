import type { MetadataRoute } from "next";
import { app } from "@/config/app";
import { privacy } from "@/config/privacy";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(app.releaseDate);
  const pages = ["", "/download", "/changelog", ...(privacy.reviewed ? ["/privacy"] : [])];
  return pages.map((p) => ({ url: `${app.siteUrl}${p}`, lastModified }));
}
