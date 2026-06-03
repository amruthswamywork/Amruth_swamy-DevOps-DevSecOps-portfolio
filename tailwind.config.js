/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
};