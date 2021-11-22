import * as React from 'react'
import Link from 'next/link'
import {isEmpty} from 'lodash'

type PostTagsAndDateProps = {
  tags: JSX.Element[]
  // TODO:
  // wtf??
  date: JSX.Element
}

export const PostTagsAndDate: React.FC<PostTagsAndDateProps> = ({
  tags,
  date,
}) => {
  const tagsLinks = tags.map((tag, index) => {
    ;<Link href={`/blog/posts/${tag}`}>
      <a>{tag}</a>
    </Link>
  })
  return (
    (date || tags) && (
      <div className="flex flex-col justify-between w-full max-w-3xl space-y-4 md:flex-row xl:max-w-4xl md:space-y-0 md:space-x-8">
        {!isEmpty(tags) && (
          <div className="flex space-x-2">
            <span className="font-semibold font-heading">Tags:</span>
            <span className="flex">{tags.join(', ')}</span>
          </div>
        )}
        {!isEmpty(date) && (
          <div className="flex items-center space-x-2">
            <span className="font-semibold font-heading">date:</span>
            <span className="text-champagne">{date}</span>
          </div>
        )}
      </div>
    )
  )
}
