/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0D9488",        // teal
          primaryDark: "#0F766E",    // darker teal
          secondary: "#DDAA38",      // warm gold
          secondaryDark: "#C3922F",  // darker gold
        },
      },
    },
  },
  plugins: [],
}
