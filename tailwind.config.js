/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.js',
    './src/App.js',
    './src/partials/Header.js',
    './src/partials/HeaderItem.js',
  ],
  theme: {
    extend: {
      colors: {
        'space-cadet': '#1e2e56',
        'cyan':'#06c4de',
        'dark-cornflower':'#2a4078',
        'purple-pizzazz':'#ff39fa',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
