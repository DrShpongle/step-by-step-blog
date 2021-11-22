import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {isEmpty} from 'lodash'
import {Post} from 'types/blog/'

type PostCardProps = {
  post: Post
}

export const PostCard: React.FC<PostCardProps> = ({post}) => {
  const {meta, slug} = post
  const {title, excerpt, date, postImage} = meta
  return (
    <div className="flex flex-col py-4 pl-4 pr-10 space-y-4 md:space-y-0 md:space-x-10 md:flex-row rounded-xl bg-viridian-blue-dark">
      {postImage?.url && (
        <div className="relative flex-shrink-0 w-full h-48 overflow-hidden md:w-64 rounded-xl">
          <Link href={`/blog/posts/${slug}`}>
            <a className="text-inherit">
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
        {excerpt && (
          <div className="flex-grow">
            <div className="text-champagne line-clamp-3">{excerpt}</div>
          </div>
        )}
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
