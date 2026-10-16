import Link from "next/link";
import { app } from "@/config/app";
import { Wordmark } from "./Logo";

const links = [
  { label: "Download", href: "/download" },
  { label: "Changelog", href: "/changelog" },
  { label: "Privacy", href: "/privacy" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-5 py-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <Wordmark />
          <p className="mt-3 font-display text-xs font-bold tracking-[0.22em] text-muted">{app.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-8 items-center text-sm text-muted transition-colors hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`mailto:${app.supportEmail}`} className="inline-flex min-h-8 items-center text-sm text-muted transition-colors hover:text-fg">
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-page px-5 py-6 text-xs text-muted md:px-8">© {new Date().getFullYear()} Repwise</p>
      </div>
    </footer>
  );
}
