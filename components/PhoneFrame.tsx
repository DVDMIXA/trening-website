import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** CSS telefon-frame. Slika je stvarni screenshot (1080×2290), bez okvira u samoj slici. */
export default function PhoneFrame({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 320px, 280px",
  className = "",
}: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[2.6rem] bg-elevated p-[6px] ring-1 ring-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.95)]">
        <div className="overflow-hidden rounded-[2.15rem] bg-ink">
          <Image
            src={src}
            alt={alt}
            width={1080}
            height={2290}
            sizes={sizes}
            quality={90}
            priority={priority}
            className="block h-auto w-full"
          />
        </div>
      </div>
      <span aria-hidden="true" className="absolute -right-[2px] top-[22%] h-14 w-[3px] rounded-r bg-line" />
      <span aria-hidden="true" className="absolute -left-[2px] top-[18%] h-8 w-[3px] rounded-l bg-line" />
      <span aria-hidden="true" className="absolute -left-[2px] top-[27%] h-14 w-[3px] rounded-l bg-line" />
    </div>
  );
}
