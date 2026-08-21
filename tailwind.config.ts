import type { Config } from "tailwindcss";

/**
 * Design tokens are derived directly from the client's existing brand
 * assets (see src/styles/*.css in the legacy codebase):
 *   - Primary action blue: #2D80FE / #2F79FF
 *   - Deep navy (footer / dark sections): #0B2858
 *   - Typeface: Outfit (100–900)
 * The scale below extends those two anchor colors into a full,
 * production-ready palette rather than introducing new, off-brand hues.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3fb",
          100: "#dbe6f4",
          200: "#aec6e3",
          300: "#7fa5d1",
          400: "#3f6dab",
          500: "#204a82",
          600: "#173a6b",
          700: "#122f57",
          800: "#0b2858", // brand navy — footer / dark surfaces
          900: "#081d40",
          950: "#050f24",
        },
        brand: {
          50: "#f0f6ff",
          100: "#dce9ff",
          200: "#b3d0ff",
          300: "#8fb8ff",
          400: "#5f9dff",
          500: "#2d80fe", // brand primary blue — CTAs / accents
          600: "#1f68e0",
          700: "#1750b3",
          800: "#123c85",
          900: "#0e2e63",
        },
        ink: "#081327",
        slate: {
          50: "#f6f8fb",
          100: "#eef2f8",
          200: "#dfe6f0",
          400: "#8493a8",
          500: "#5b6b83",
          600: "#3f4d63",
        },
        paper: "#f7f9fc",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(11,40,88,0) 0%, rgba(11,40,88,1) 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(8,19,39,0.04), 0 12px 32px -12px rgba(8,19,39,0.12)",
        glow: "0 0 0 1px rgba(45,128,254,0.15), 0 20px 60px -20px rgba(45,128,254,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        marquee: "marquee 55s linear infinite",
        "marquee-reverse": "marquee-reverse 55s linear infinite",
        pulse2: "pulse2 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
