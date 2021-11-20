import {useRouter} from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'
import Image from 'next/image'

const navLinks = [
  {title: 'Home', path: '/'},
  {title: 'Blog', path: '/blog'},
  {title: 'About', path: '/about'},
]

const Header = () => {
  const router = useRouter()
  return (
    <header className="py-4 bg-gray-100 border-b border-gray-300">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <a className="relative block w-12 h-12">
              <Image src="/logo.svg" layout="fill" />
            </a>
          </Link>
          <ul className="flex flex-shrink-0 space-x-8 flex-nowrap font-heading">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path} passHref>
                    <a
                      className={classNames(
                        'hover:text-orange duration-100',
                        router.pathname === item.path
                          ? 'text-orange border-b border-orange'
                          : '',
                      )}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
