import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {PostTagsAndDate} from 'components/blog'
import {Post} from 'types/blog/'

type PostCardProps = {
  post: Post
}

export const PostCard: React.FC<PostCardProps> = ({post}) => {
  const {meta, slug} = post
  const {title, excerpt, date, tags, postImage} = meta
  return (
    <div className="flex flex-col py-4 pl-4 pr-10 space-x-10 md:flex-row rounded-xl bg-viridian-blue-light">
      {postImage?.url && (
        <div className="relative flex-shrink-0 w-64 h-48 overflow-hidden rounded-xl">
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
        <h3 className="line-clamp-2 text-orange-aloy">
          <Link href={`/blog/posts/${slug}`}>
            <a className="text-inherit">{title}</a>
          </Link>
        </h3>
        {excerpt && (
          <div className="flex-grow">
            <div className="line-clamp-3">{excerpt}</div>
          </div>
        )}
        <PostTagsAndDate tags={tags} date={date} />
      </div>
    </div>
  )
}
