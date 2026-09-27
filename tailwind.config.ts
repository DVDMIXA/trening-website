import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08090A",
          950: "#050605",
          900: "#0B0D0B",
          800: "#121412",
          700: "#191C19",
          600: "#232722",
          500: "#33372F",
        },
        bone: {
          DEFAULT: "#EDEFEA",
          muted: "#9CA69A",
          faint: "#5C645B",
        },
        volt: {
          DEFAULT: "#AEEF3F",
          dim: "#7FAE3A",
          deep: "#4E6B2C",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw + 1rem, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 3vw + 1rem, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 2vw + 1rem, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: { content: "1240px" },
      borderRadius: { xs: "6px", sm: "10px", md: "16px", lg: "22px", xl: "28px" },
      boxShadow: {
        volt: "0 0 0 1px rgba(174,239,63,0.35), 0 18px 40px -18px rgba(174,239,63,0.35)",
        panel: "0 24px 60px -30px rgba(0,0,0,0.65)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px) rotate(-1.5deg)" },
          "50%": { transform: "translateY(-10px) rotate(-1.5deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
