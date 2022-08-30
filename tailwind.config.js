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
          textPrimary: "var(--neutralDark)",
          textSecondary: "var(--neutralLight)",
          textHoverPrimary: "var(--primary)",
          buttonPrimary: "var(--primary)",
          buttonSecondary: "var(--neutralLight)",
          buttonHoverPrimary: "var(--secondary)",
          buttonHoverSecondary: "var(--neutralDark)",
          star: "var(--accent)",
          borderDark: "var(--neutralDark)",
          loadingScreenBgPrimary: "var(--primary)",
          loadingScreenBgSecondary: "var(--neutralDark)",
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
