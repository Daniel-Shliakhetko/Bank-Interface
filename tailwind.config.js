/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.js',
    './src/App.js',
    './src/partials/Header.js',
    './src/partials/Loader.js',
    './src/partials/Cards.js',
    './src/partials/Button.js',
    './src/partials/Form.js',
    './src/partials/Balance.js',
    './src/partials/Icon.js',
    './src/partials/Titles.js',
    './src/partials/Decorative.js',
    './src/pages/FrontPage.js',
    './src/pages/CardsPage.js',
    './src/pages/BillPage.js',
    './src/pages/ExpensesPage.js',
    './src/pages/Login.js',
  ],
  theme: {
    extend: {
      colors: {
        'space-cadet': '#1e2e56',
        'cyan':'#06c4de',
        'dark-cornflower':'#2a4078',
        'purple':'#ff39fa',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
