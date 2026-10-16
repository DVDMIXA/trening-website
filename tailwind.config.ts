import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0B0D",
        surface: "#14171A",
        elevated: "#1E2227",
        line: "#2A3038",
        fg: "#F3F4F6",
        muted: "#8B95A7",
        lime: { DEFAULT: "#A3FF3F", deep: "#7ED321" },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(2.5rem, 4.4vw + 1rem, 4.5rem)", { lineHeight: "1.03", letterSpacing: "-0.035em" }],
        h2: ["clamp(1.875rem, 2.4vw + 1rem, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        h3: ["clamp(1.5rem, 1.2vw + 1rem, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.025em" }],
      },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};

export default config;
