import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 py-12">
      <div className="mx-auto max-w-content px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="8" fill="#AEEF3F" />
            <path d="M7 14h2.5l1.8-4.6L14 18l2.2-4h4.8" stroke="#08090A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className="font-display font-bold text-bone">Trening</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footer.links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-bone-muted hover:text-bone transition-colors focus-ring">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-bone-faint">{footer.copyright}</p>
      </div>
    </footer>
  );
}
