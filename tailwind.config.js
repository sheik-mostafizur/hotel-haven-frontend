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
        primary: {
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
    name: "royal-blue",
    selectors: [".royal-blue"],
    theme: {
      colors: {
        primary: {
          50: "#eff7ff",
          100: "#dbebfe",
          200: "#bfddfe",
          300: "#92c9fe",
          400: "#5fabfb",
          500: "#3a89f7",
          600: "#2c70ed",
          700: "#1c54d9",
          800: "#1d45b0",
          900: "#1d3e8b",
          950: "#172754",
        },
        secondary: {
          50: "#ecf8ff",
          100: "#d3edff",
          200: "#b1e1ff",
          300: "#7cd1ff",
          400: "#3fb5ff",
          500: "#1390ff",
          600: "#006cff",
          700: "#0054ff",
          800: "#0044ce",
          900: "#073ea1",
          950: "#092358",
        },
      },
    },
  },
  {
    name: "matrix",
    selectors: [".matrix"],
    theme: {
      colors: {
        primary: {
          50: "#f2fcf1",
          100: "#defadf",
          200: "#bff3c0",
          300: "#8de88f",
          400: "#54d458",
          500: "#32cd37",
          600: "#209924",
          700: "#1c7920",
          800: "#1b601e",
          900: "#184f1c",
          950: "#082b0a",
        },
        secondary: {
          50: "#f1f8fa",
          100: "#dcecf1",
          200: "#bedae3",
          300: "#90bed0",
          400: "#5b9bb5",
          500: "#407f9a",
          600: "#386982",
          700: "#33576b",
          800: "#2f4858",
          900: "#2c3f4d",
          950: "#192833",
        },
      },
    },
  },
];

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", " sans-serif"],
      },
    },
  },
  plugins: [themeSwapper({themes})],
};
