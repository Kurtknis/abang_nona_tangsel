import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: "#0E4D45",
          900: "#12665C",
          800: "#167E72",
        },
        gold: {
          500: "#C7A35A",
          400: "#D4B76E",
          600: "#B08D4A",
        },
        ivory: "#FAF7F2",
        neutral: {
          dark: "#1B1B1B",
          light: "#F8F8F8",
        },
        success: "#16A34A",
        warning: "#F59E0B",
        error: "#DC2626",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-hero": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["48px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h2: ["36px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["30px", { lineHeight: "1.3" }],
        body: ["18px", { lineHeight: "1.6" }],
        small: ["14px", { lineHeight: "1.5" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(14, 77, 69, 0.08)",
        card: "0 4px 24px 0 rgba(27, 27, 27, 0.06)",
        elevated: "0 12px 40px 0 rgba(14, 77, 69, 0.12)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
