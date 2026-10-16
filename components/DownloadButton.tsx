import { app } from "@/config/app";

function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M17.6 9.48l1.84-3.18a.38.38 0 0 0-.66-.38l-1.86 3.22a11.4 11.4 0 0 0-9.84 0L5.22 5.92a.38.38 0 0 0-.66.38L6.4 9.48A10.78 10.78 0 0 0 1 18h22a10.78 10.78 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
    </svg>
  );
}

type Props = {
  children?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
};

export default function DownloadButton({ children = "Preuzmi Repwise za Android", size = "md", className = "" }: Props) {
  const sizes = size === "lg" ? "min-h-14 px-8 text-base" : "min-h-12 px-6 text-[15px]";
  return (
    <a
      href={app.apkUrl}
      download={app.apkFileName}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-lime font-semibold text-ink transition duration-200 hover:bg-lime-deep active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime ${sizes} ${className}`}
    >
      <AndroidIcon />
      {children}
    </a>
  );
}
