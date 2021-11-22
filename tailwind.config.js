const defaultTheme = require('tailwindcss/defaultTheme')

const bodyFontFamily = '"Poppins", sans-serif'
const headingFontFamily = '"Ribeye Marrow", cursive'

// https://coolors.co/001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226
const customColors = {
  black: '#001219',
  'viridian-blue': {
    DEFAULT: '#0a9396',
    light: '#94d2bd',
    dark: '#005f73',
  },
  champagne: '#e9d8a6',
  gambodge: '#ee9b00',
  ['orange-aloy']: '#ca6702',
  rufous: {
    DEFAULT: '#ae2012',
    light: '#bb3e03',
    dark: '#9b2226',
  },
}

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      ...defaultTheme.colors,
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
      screens: {
        DEFAULT: '100%',
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: customColors.black,
            a: {
              color: customColors['orange-aloy'],
              textDecoration: 'none',
              transition: 'all 100ms',
              '&:hover': {
                color: customColors.rufous,
                textDecoration: 'underline',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: theme('fontWeight.semibold'),
              fontFamily: headingFontFamily,
              lineHeight: theme('lineHeight.normal'),
            },
            // h1: {
            //   fontSize: theme('fontSize.5xl'),
            // },
            // h2: {
            //   fontSize: theme('fontSize.4xl'),
            // },
            // h3: {
            //   fontSize: theme('fontSize.3xl'),
            // },
            // h4: {
            //   fontSize: theme('fontSize.xl'),
            // },
            // h5: {
            //   fontSize: theme('fontSize.base'),
            // },
            // h6: {
            //   fontSize: theme('fontSize.xs'),
            // },
          },
        },
        dark: {
          css: {
            color: customColors.champagne,
            'h1, h2, h3, h4, h5, h6': {
              color: customColors.champagne,
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
