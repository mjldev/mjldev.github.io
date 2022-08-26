/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", ...defaultTheme.fontFamily.sans],
        oswald: ["Oswald", "sans-serif"],
        "fira-code": ["Fira Code", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        personal: {
          primary: "#F24150",
          secondary: "#F2B705",
          accent: "#F244C4",
          neutralDark: "#261C1F",
          neutralLight: "#A69286",

          textPrimary: "#261C1F",
          textSecondary: "#A69286",
          textHoverPrimary: "#F24150",

          buttonPrimary: "#F24150",
          buttonSecondary: "#A69286",
          buttonHoverPrimary: "#D93636",
          buttonHoverSecondary: "#261C1F",

          borderDark: "#261C1F",
        },
      },
      container: {
        center: true,
      },
      screens: {
        tablet: "640px",
        //min-width: 640px

        laptop: "1024px",
        //min-width: 1024px

        desktop: "1280px",
        //min-width: 1280px
      },
    },
  },
  plugins: [],
};