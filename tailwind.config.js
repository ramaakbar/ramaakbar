const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      serif: ['serif'],
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography'),
  ],
};
