import {useRouter} from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'

const navLinks = [
  {title: 'Home', path: '/'},
  {title: 'About', path: '/about'},
]

const Header = () => {
  const router = useRouter()
  return (
    <header className="py-4 bg-gray-100 border-b border-gray-300">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <a>Header</a>
          </Link>
          <ul className="flex flex-shrink-0 space-x-8 flex-nowrap font-heading">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path} passHref>
                    <a
                      className={classNames(
                        'hover:text-terracota',
                        router.pathname === item.path
                          ? 'text-terracota border-b border-terracota'
                          : '',
                      )}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
                // <Link key={index} href={item.path}>
                //   <a
                //     className={`cursor-pointer ${
                //       router.pathname === item.path
                //         ? 'text-blue-500'
                //         : 'hover:bg-gray-900 hover:text-blue-500'
                //     }`}
                //   >
                //     {item.title}
                //   </a>
                // </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
