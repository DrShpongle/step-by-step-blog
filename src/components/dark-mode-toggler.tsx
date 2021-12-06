import * as React from 'react'
import {useTheme} from 'next-themes'
import {motion} from 'framer-motion'

const DarkModeToggler = () => {
  const {theme, setTheme} = useTheme()
  const handleClick = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }
  return (
    <div className="flex-shrink-0">
      <div className="w-16 h-10">
        <div
          className="w-full h-full p-1 bg-opacity-50 rounded-full dark:bg-opacity-50 dark:bg-champagne bg-viridian-blue-darkest"
          onClick={handleClick}
          aria-label="Toggle Dark Mode"
          role="button"
        >
          <motion.div
            variants={{
              hidden: {x: theme === 'dark' ? '24px' : 0},
              light: {
                x: 0,
                opacity: 1,
              },
              dark: {
                x: '24px',
                opacity: 1,
              },
            }}
            animate={theme === 'dark' ? 'dark' : 'light'}
            initial="hidden"
            className="flex items-center justify-center w-8 h-8 rounded-full shadow-md bg-champagne dark:bg-viridian-blue-darkest"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 duration-100 text-viridian-blue-darkest dark:text-champagne"
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              )}
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DarkModeToggler
