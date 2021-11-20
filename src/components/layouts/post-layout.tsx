import * as React from 'react'

import Header from 'components/app/header'
import Footer from 'components/app/footer'

type metaProps = {
  title?: string
  excerpt?: string
  date?: string
  tags?: string[]
}

const PostLayout: React.FC<{meta: metaProps; children: React.ReactNode}> = ({
  meta,
  children,
}) => {
  const {title, excerpt, date, tags} = meta
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="container space-y-16 ">
          <div className="flex flex-col items-center space-y-4">
            {title && <h2>{title}</h2>}
            {excerpt && <div>{excerpt}</div>}
            {date && <div>{date}</div>}
            {tags && (
              <div className="flex space-x-2">
                <div>Tags:</div>
                <div className="flex">{tags.join(', ')}</div>
              </div>
            )}
          </div>
          <div className="w-full prose max-w-none">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PostLayout
