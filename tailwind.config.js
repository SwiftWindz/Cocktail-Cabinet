/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cocktailbw': "url('../src/assets/alcohol-bar-black-and-white-4295-832750849.jpg')",
      },
      fontFamily: {
        outfit: "'Outfit', sans-serif",
        pacifico: "'Pacifico', cursive",
      }
    },
  },
  plugins: [],
}
