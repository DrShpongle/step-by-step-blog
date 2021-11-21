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
    <div className="flex flex-col p-4 space-x-16 md:flex-row rounded-xl bg-viridian-blue-light">
      {postImage?.url && (
        <div className="relative flex-shrink-0 w-64 h-48 overflow-hidden rounded-xl">
          <Image
            src={postImage.url}
            layout="fill"
            quality={75}
            objectFit="cover"
          />
        </div>
      )}
      <div>
        <h3 className="text-white line-clamp-2">
          <Link href={`/blog/posts/${slug}`}>
            <a className="text-inherit">{title}</a>
          </Link>
        </h3>
        <p>{excerpt}</p>
        <PostTagsAndDate tags={tags} date={date} />
      </div>
    </div>
  )
}
