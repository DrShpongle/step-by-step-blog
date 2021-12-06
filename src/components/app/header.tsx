import * as React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'
import Image from 'next/image'

import DarkModeToggler from 'components/dark-mode-toggler'

const navLinks = [
  {title: 'Home', path: '/'},
  {title: 'Blog', path: '/blog'},
  {title: 'About', path: '/about'},
]

const Header = () => {
  const [mounted, setMounted] = React.useState(false)
  const router = useRouter()
  React.useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <header className="py-4 transition-colors duration-500 bg-viridian-blue-light dark:bg-viridian-blue-dark">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <a className="relative block w-12 h-12">
              <Image src="/logo.svg" layout="fill" alt="logo" />
            </a>
          </Link>
          <div className="flex items-center space-x-8">
            <ul className="flex flex-shrink-0 space-x-6 sm:space-x-8 flex-nowrap font-heading">
              {navLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.path} passHref>
                      <a
                        className={classNames(
                          'hover:text-orange-aloy duration-100',
                          router.pathname === item.path
                            ? ' text-orange-aloy border-b border-orange-aloy'
                            : 'text-viridian-blue-dark dark:text-champagne',
                        )}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
            {mounted && <DarkModeToggler />}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
