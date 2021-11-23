import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {isEmpty} from 'lodash'
import {Post} from 'types/blog/'

type PostCardProps = {
  // post: Post
  post: any
}

export const PostCard: React.FC<PostCardProps> = ({post}) => {
  const {data, slug, content} = post
  console.log('post:', post)
  const {title, excerpt, date, postImage} = data
  return (
    <div className="flex flex-col py-4 pl-4 pr-4 space-y-4 lg:pr-10 md:space-y-0 md:space-x-6 lg:space-x-10 md:flex-row rounded-xl bg-viridian-blue-dark">
      {postImage?.url && (
        <div className="flex-shrink-0 w-full overflow-hidden h-52 md:w-72 rounded-xl">
          <Link href={`/blog/posts/${slug}`}>
            <a className="relative block w-full h-full text-inherit">
              <Image
                src={postImage.url}
                layout="fill"
                quality={75}
                objectFit="cover"
              />
            </a>
          </Link>
        </div>
      )}
      <div className="flex flex-col flex-grow space-y-3">
        <h3 className="leading-tight line-clamp-2 text-orange-aloy">
          <Link href={`/blog/posts/${slug}`}>
            <a className="text-inherit">{title}</a>
          </Link>
        </h3>
        <div className="flex-grow">
          {excerpt && (
            <div className="text-champagne line-clamp-3">{excerpt}</div>
          )}
        </div>

        {!isEmpty(date) && (
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-viridian-blue font-heading">
              date:
            </span>
            <span className="text-viridian-blue-light">{date}</span>
          </div>
        )}
      </div>
    </div>
  )
}
