/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': "320px",
      'md': "1023",
      'lg': "1440px"
    },
    extend: {
      fontFamily: {
        sans: ['rubik', ...defaultTheme.fontFamily.sans],
     },
    },
    colors: {
      black: '#000000',
      'white': "#ffffff",
      'gray': {
        dark: '#969696',
        'very-dark': '#2b2b2b' 
      },
      'purple': {
        dark: "#210930"
      },
      'grayish-violet': {
        DEFAULT: '#dedddf',
        dark: '#8e8593',
        'very-dark': '#21092f',
      },
      red: '#ff5252',
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'light-blue': '#6448fe',
      'metallic-violet': '#600594'
    })
  },
  plugins: [],
}
