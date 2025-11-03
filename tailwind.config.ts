import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
        accent: { DEFAULT: "hsl(var(--accent))", fg: "hsl(var(--accent-fg))" }
      },
      fontFamily: {
        sans: ["PlusJakartaSans", "system-ui", "sans-serif"],
        display: ["Sora", "PlusJakartaSans", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 10px 30px -10px hsl(var(--accent)/0.25)" },
      borderRadius: { xl2: "1.25rem" },
      animation: { "slow-pulse": "slow-pulse 6s ease-in-out infinite" },
      keyframes: {
        "slow-pulse": {
          "0%,100%": { opacity: "0.55" }, // strings, not numbers
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
};

export default config;
