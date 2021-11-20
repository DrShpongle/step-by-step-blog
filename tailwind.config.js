// const defaultTheme = require('tailwindcss/defaultTheme')

const bodyFontFamily = '"Poppins", sans-serif'
const headingFontFamily = '"Ribeye Marrow", cursive'

const customColors = {
  black: '#001219',
  white: '#001219',
  blue: {
    DEFAULT: '#0a9396',
    light: '#94d2bd',
    dark: '#005f73',
  },
  champagne: '#e9d8a6',
  gambodge: 'ee9b00',
  orange: '#ca6702',
  red: {
    DEFAULT: '#ae2012',
    light: '#bb3e03',
    dark: '#9b2226',
  },
}

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...customColors,
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: customColors.black,
            a: {
              color: customColors.orange,
              textDecoration: 'none',
              transition: 'all 100ms',
              '&:hover': {
                color: customColors.red,
                textDecoration: 'underline',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: theme('fontWeight.semibold'),
              fontFamily: headingFontFamily,
              lineHeight: theme('lineHeight.normal'),
            },
            h1: {
              fontSize: theme('fontSize.4xl'),
            },
            h2: {
              fontSize: theme('fontSize.3xl'),
            },
            h3: {
              fontSize: theme('fontSize.2xl'),
            },
            h4: {
              fontSize: theme('fontSize.xl'),
            },
            h5: {
              fontSize: theme('fontSize.base'),
            },
            h6: {
              fontSize: theme('fontSize.xs'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
