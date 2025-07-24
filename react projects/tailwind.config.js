/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Scan App.js, index.js in the root
    "./App.js",
    "./index.js",
    // Scan all JS/JSX/TS/TSX files within the src/ directory
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on 'dark' class
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as default font
      },
    },
  },
  plugins: [],
}