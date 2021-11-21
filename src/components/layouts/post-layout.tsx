import * as React from 'react'
import Image from 'next/image'

import Header from 'components/app/header'
import Footer from 'components/app/footer'

type metaProps = {
  title?: string
  excerpt?: string
  date?: string
  tags?: string[]
  postImage?: string
}

type pageProps = {
  meta: metaProps
  children: React.ReactNode
}

const PostLayout: React.FC<pageProps> = ({meta, children}) => {
  const {title, excerpt, date, tags, postImage} = meta
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="container space-y-16 ">
          <div className="flex flex-col items-center space-y-4">
            {title && <h2>{title}</h2>}
            {postImage && (
              <div className="relative w-full overflow-hidden h-56 sm:h-72 md:h-96 lg:h-[28rem] xl:h-[36rem] rounded-xl">
                <Image src={postImage} layout="fill" objectFit="cover" />
              </div>
            )}
            {excerpt && <div>{excerpt}</div>}
            {date && <div>{date}</div>}
            {tags && (
              <div className="flex space-x-2">
                <div>Tags:</div>
                <div className="flex">{tags.join(', ')}</div>
              </div>
            )}
          </div>
          <div className="w-full prose">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PostLayout
