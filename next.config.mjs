/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Screenshotovi koriste quality 90 da UI tekst ostane oštar.
    qualities: [75, 90],
  },
  async redirects() {
    return [
      // Stare stranice iz prve (probne) verzije sajta.
      { source: "/privatnost", destination: "/privacy", permanent: true },
      { source: "/kontakt", destination: "/", permanent: false },
    ];
  },
  async headers() {
    const asset = "public, max-age=86400, stale-while-revalidate=604800";
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // APK ima stabilnu putanju, pa se ne smije dugo keširati.
        source: "/downloads/:path*",
        headers: [
          { key: "Content-Type", value: "application/vnd.android.package-archive" },
          { key: "Content-Disposition", value: 'attachment; filename="Repwise.apk"' },
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
      { source: "/brand/:path*", headers: [{ key: "Cache-Control", value: asset }] },
      { source: "/og/:path*", headers: [{ key: "Cache-Control", value: asset }] },
    ];
  },
};

export default nextConfig;
