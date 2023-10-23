/** @type {import('tailwindcss').Config} */
const themeSwapper = require("tailwindcss-theme-swapper");
const themes = [
  // The only required theme is `base`. Every property used in
  // other themes must exist in here.
  {
    name: "base",
    selectors: [":root"],
    theme: {
      colors: {
        primary: {
          50: "#fef3f2",
          100: "#fee5e2",
          200: "#ffcfc9",
          300: "#fdaea4",
          400: "#fa7e6f",
          500: "#f04935", // main
          600: "#de3824",
          700: "#bb2b1a",
          800: "#9a281a",
          900: "#80271c",
          950: "#461009",
        },
        secondary: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
      },
    },
  },
  {
    name: "dark",
    selectors: [".dark"],
    mediaQuery: "@media (prefers-color-scheme: dark)",
    theme: {
      colors: {
        primary: "#fff",
      },
    },
  },
  {
    name: "matrix",
    selectors: [".matrix"],
    theme: {
      colors: {
        primary: "#0f0",
      },
    },
  },
];

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [themeSwapper({ themes })],
};
