import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A66C2",
        accent: "#2563EB",
        darkbg: "#0F172A",
        lightbg: "#F8FAFC",
      },
    },
  },
  plugins: [],
} satisfies Config;