import * as React from 'react'
// import Image from 'next/image'
import {PostImageSource} from 'types/blog/'

import Header from 'components/app/header'
import Footer from 'components/app/footer'
import {PostImage, PostExcerpt, PostTagsAndDate} from 'components/blog/'
import {PostMeta} from 'types/blog/'

type pageProps = {
  meta: PostMeta
  children: React.ReactNode
}

const PostLayout: React.FC<pageProps> = ({meta, children}) => {
  // How to destructure just inside destructure?
  const {title, excerpt, date, tags, postImage} = meta
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container space-y-10 md:space-y-14 lg:space-y-16 xl:space-y-20">
          <div className="flex flex-col items-center">
            {title && (
              <h2 className="mx-auto text-center lg:max-w-3xl">{title}</h2>
            )}
            {(date || tags) && <PostTagsAndDate tags={tags} date={date} />}
            {postImage && (
              <div className="w-full mt-8 md:mt-10 lg:mt-12 xl:mt-16">
                <PostImage source={postImage} />
              </div>
            )}
            {excerpt && (
              <div className="mt-16">
                <PostExcerpt text={excerpt} />
              </div>
            )}
          </div>
          <div className="max-w-3xl mx-auto prose xl:max-w-4xl">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PostLayout
