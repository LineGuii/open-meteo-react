/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: ['Roboto', 'sans-serif'],
      textColor: (theme) => theme('colors'),
    },
  },
  plugins: [],
};
