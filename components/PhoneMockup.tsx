import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  tilt?: number;
};

/**
 * Realističan, čist telefon-frame. Ako se u /public/screenshots/ zamijeni
 * placeholder SVG pravim PNG/JPG screenshotom aplikacije (iste putanje ili
 * ažurirane u lib/content.ts), mockup automatski prikazuje pravi ekran.
 */
export default function PhoneMockup({ src, alt, priority = false, className = "", tilt = 0 }: PhoneMockupProps) {
  return (
    <div
      className={`relative w-[240px] sm:w-[272px] md:w-[300px] aspect-[9/19] shrink-0 ${className}`}
      style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined }}
    >
      <div className="absolute inset-0 rounded-[2.4rem] bg-ink-700 shadow-panel ring-1 ring-white/[0.06]" />
      <div className="absolute inset-[6px] rounded-[2rem] bg-ink-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-ink-700 rounded-b-xl z-10" />
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 240px, 300px"
          className="object-cover"
        />
      </div>
      <div className="absolute -right-[2px] top-24 w-[3px] h-10 bg-ink-600 rounded-r-sm" />
      <div className="absolute -left-[2px] top-20 w-[3px] h-6 bg-ink-600 rounded-l-sm" />
      <div className="absolute -left-[2px] top-32 w-[3px] h-10 bg-ink-600 rounded-l-sm" />
    </div>
  );
}
