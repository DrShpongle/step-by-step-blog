const defaultTheme = require('tailwindcss/defaultTheme')
console.log('fontSize:', defaultTheme.fontSize)

const bodyFontFamily = '"Poppins", sans-serif'
const headingFontFamily = '"Ribeye Marrow", cursive'

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: bodyFontFamily,
      heading: headingFontFamily,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2.5rem',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
