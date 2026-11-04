import Image from "next/image";

/** X znak (ikonica). */
export function LogoMark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 878 574" className={className} aria-hidden="true" focusable="false">
      <path fill="#F3F4F6" d="M190 572 L291 513 L455 406 L611 572 L813 573 L741 483 L605 326 L392 326 L266 476Z" />
      <path fill="#F3F4F6" d="M877 0 L626 0 L504 160 L422 274 L638 275Z" />
      <path fill="#A3FF3F" d="M322 0 L36 0 L252 247 L0 573 L149 573 L372 297 L466 175Z" />
    </svg>
  );
}

/** Glavni logo: XQRep wordmark (providan PNG, public/brand/xqrep-wordmark.png). */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/xqrep-wordmark.png"
      alt="XQRep"
      width={560}
      height={118}
      unoptimized
      className={`h-7 w-auto ${className}`}
    />
  );
}
