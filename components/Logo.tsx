export function LogoMark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 740 693" className={className} aria-hidden="true" focusable="false">
      <path
        fill="#A3FF3F"
        d="M86 186 L86 464 L280 692 L280 425Z M0 2 L110 137 L555 137 L560 142 L497 224 L192 223 L559 691 L739 690 L476 348 L573 346 L731 152 L603 0Z"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="font-display text-xl font-bold tracking-tight text-fg">Repwise</span>
    </span>
  );
}
