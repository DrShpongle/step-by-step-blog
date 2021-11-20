const defaultTheme = require('tailwindcss/defaultTheme')

const bodyFontFamily = '"Poppins", sans-serif'
const headingFontFamily = '"Ribeye Marrow", cursive'

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultTheme.colors,
      terracota: '#E74802',
    },
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
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#ff0000',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
