/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kalakaPurple: '#1b1030',
        kalakaGold: '#d4a646',
      },
    },
  },
  plugins: [],
};
