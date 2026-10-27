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
        nexus: {
          midnight: "#07111F",
          deep: "#0B1728",
          surface: "#101F35",
          border: "#1E314B",
          cyan: "#42D9F5",
          "cyan-glow": "rgba(66, 217, 245, 0.15)",
          violet: "#9B8CFF",
          "violet-glow": "rgba(155, 140, 255, 0.15)",
          textDark: "#152235",
          mutedText: "#8E9EBA",
          softBg: "#F5F7FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, rgba(66, 217, 245, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(66, 217, 245, 0.05) 1px, transparent 1px)",
        "grid-subtle": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow": "flow 20s linear infinite",
      },
      keyframes: {
        flow: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "50px 50px" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
