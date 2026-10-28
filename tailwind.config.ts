import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        finance: {
          obsidian: "#05080E",
          navy: "#070B12",
          surface: "#0B111D",
          card: "#0E1726",
          elevated: "#121D30",
          border: "#1A2536",
          borderGold: "rgba(212, 175, 55, 0.22)",
          champagne: "#D4AF37",
          champagneLight: "#E5C378",
          champagneMuted: "#C5A880",
          bronze: "#9E825A",
          ivory: "#FBF9F5",
          ivoryMuted: "#C8CED8",
          subtleText: "#7E8B9E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FBF9F5 0%, #E5C378 50%, #C5A880 100%)",
        "gold-metallic": "linear-gradient(135deg, #D4AF37 0%, #F5DE98 50%, #9E825A 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(14, 23, 38, 0.8) 0%, rgba(11, 17, 29, 0.95) 100%)",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-reverse-slow": "spin-reverse 45s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;