import * as React from 'react'
import Link from 'next/link'
import {isEmpty} from 'lodash'

type PostTagsAndDateProps = {
  tags?: JSX.Element[]
  // TODO:
  // wtf??
  date?: JSX.Element
}

export const PostTagsAndDate: React.FC<PostTagsAndDateProps> = ({
  tags = [],
  date,
}) => {
  const tagsLinks = tags.map((tag, index) => {
    return (
      <>
        <Link href={`/blog/posts/${tag}`} key={index}>
          <a className="text-orange-aloy">{tag}</a>
        </Link>
        {index !== tags.length - 1 && ','}
      </>
    )
  })
  return (
    (date || tags) && (
      <div className="flex flex-col justify-between w-full max-w-3xl space-y-4 md:flex-row xl:max-w-4xl md:space-y-0 md:space-x-8">
        {!isEmpty(tags) && (
          <div className="flex space-x-2">
            <span className="font-semibold font-heading">Tags:</span>
            <span className="flex space-x-2">{tagsLinks}</span>
          </div>
        )}
        {!isEmpty(date) && (
          <div className="flex items-center space-x-2">
            <span className="font-semibold font-heading">date:</span>
            <span className="text-viridian-blue">{date}</span>
          </div>
        )}
      </div>
    )
  )
}
