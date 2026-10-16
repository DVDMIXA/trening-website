import type { MetadataRoute } from "next";
import { app } from "@/config/app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/downloads/" }],
    sitemap: `${app.siteUrl}/sitemap.xml`,
  };
}
