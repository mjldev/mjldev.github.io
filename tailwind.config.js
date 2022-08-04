/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        personal: {
          primary: "#F24150",
          secondary: "#D93636",
          tertiary: "#731F1F",
          neutralDark: "#261C1F",
          neutralLight: "#A69286",

          textPrimary: "#261C1F",

          buttonPrimary: "#F24150",
          buttonHover: "#D93636",
        },
      },
      fontFamily: {
        'sans': ['Fira Code', ...defaultTheme.fontFamily.sans],
        'oswald' : ['Oswald', 'sans-serif'],
        'fira-code' : ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'menu-icon': "url('/menu.svg')",
        'close-icon': "url('/close.svg')",
        'shopping-bag-icon': "url('/shopping-bag.svg')",
        'search-icon': "url('/search.svg')",
      },
      container: {
        center: true,
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
