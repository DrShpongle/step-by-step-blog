import * as React from 'react'
import {useRouter} from 'next/router'
import {MdxComponent} from 'components/mdx'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'

import Header from 'components/app/header'
import Footer from 'components/app/footer'
import {PostImage, PostExcerpt, PostTagsAndDate} from 'components/blog/'
import {FrontMatter} from 'types/blog/'

const components = {
  MdxComponent,
}

type PostLayoutProps = {
  source: MDXRemoteSerializeResult
  frontMatter: FrontMatter
}

const PostLayout: React.FC<PostLayoutProps> = ({source, frontMatter}) => {
  const router = useRouter()
  const {title, excerpt, date, tags = [], postImage} = frontMatter
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-full">
              {title && (
                <h2 className="mx-auto text-center lg:max-w-3xl">{title}</h2>
              )}
              {(date || tags) && (
                <div className="mt-8">
                  <PostTagsAndDate tags={tags} date={date} />
                </div>
              )}
              {postImage && (
                <div className="w-full mt-8 md:mt-10 lg:mt-12 xl:mt-16">
                  <PostImage source={postImage} />
                </div>
              )}
              {excerpt && (
                <div className="mt-12 md:mt-16">
                  <PostExcerpt text={excerpt} />
                </div>
              )}
            </div>
            <div className="max-w-3xl mx-auto mt-10 prose md:prose-xl dark:prose-dark xl:max-w-4xl md:mt-14 lg:mt-16 xl:mt-20">
              <MDXRemote {...source} components={components} />
            </div>
            <button
              className="px-6 py-3 mt-12 duration-100 md:mt-16 lg:mt-20 xl:mt-24 bg-viridian-blue-light rounded-xl hover:bg-viridian-blue hover:cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                router.push('/blog')
              }}
            >
              Back to Posts
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PostLayout
