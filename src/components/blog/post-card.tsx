import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Post} from 'types/blog/'

type PostCardProps = {
  post: Post
}

export const PostCard: React.FC<PostCardProps> = ({post}) => {
  const {meta = {}, slug} = post
  const {title, excerpt, date, tags, postImage} = meta
  return (
    <div className="flex flex-col p-4 border border-gray-400 md:flex-row">
      {postImage?.url && (
        <div className="relative w-64 h-48 overflow-hidden rounded-xl">
          <Image src={postImage.url} layout="fill" objectFit="cover" />
        </div>
      )}
      <div>
        <h3>
          <Link href={`/blog/posts/${slug}`}>
            <a className="text-white">{title}</a>
          </Link>
        </h3>
        <p>{excerpt}</p>
        <p>{date}</p>
        {(date || tags) && (
          <div className="flex flex-col justify-between w-full max-w-3xl mt-8 space-y-4 md:mt-10 md:flex-row xl:max-w-4xl md:space-y-0">
            {tags && (
              <div className="flex space-x-2">
                <span className="font-semibold">Tags:</span>
                <span className="flex">{tags.join(', ')}</span>
              </div>
            )}
            {date && (
              <div className="flex items-center space-x-2">
                <span className="font-semibold">date:</span>
                <span>{date}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
