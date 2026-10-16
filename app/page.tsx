import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Showcase from "@/components/Showcase";
import Faq from "@/components/Faq";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { app } from "@/config/app";
import { getApkInfo } from "@/lib/apk";
import { formatFileSize } from "@/lib/format";

export default function Home() {
  const { sizeBytes } = getApkInfo();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Repwise",
          description: "Android aplikacija za planiranje treninga, praćenje serija i opterećenja i pregled napretka.",
          applicationCategory: "HealthApplication",
          operatingSystem: `Android ${app.minimumAndroid}+`,
          softwareVersion: app.version,
          inLanguage: "sr",
          url: app.siteUrl,
          downloadUrl: `${app.siteUrl}${app.apkUrl}`,
          fileSize: formatFileSize(sizeBytes),
          image: `${app.siteUrl}/og/repwise-og.png`,
        }}
      />
      <Header />
      <main id="sadrzaj">
        <Hero />
        <Features />
        <Showcase />
        <HowItWorks />
        <Faq />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
