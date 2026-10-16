import Link from "next/link";
import { navLinks } from "@/config/nav";
import { app } from "@/config/app";
import { Wordmark } from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-page items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Repwise, početna" className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime">
          <Wordmark />
        </Link>

        <nav aria-label="Glavni meni" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded text-sm text-muted transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={app.apkUrl}
            download={app.apkFileName}
            className="inline-flex min-h-10 items-center rounded-full bg-lime px-5 text-sm font-semibold text-ink transition-colors hover:bg-lime-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          >
            Preuzmi
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
