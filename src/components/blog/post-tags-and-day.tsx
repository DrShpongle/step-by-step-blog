import * as React from 'react'
import {isEmpty} from 'lodash'

type PostTagsAndDateProps = {
  tags: string[]
  // TODO:
  // wtf??
  date: any
}

export const PostTagsAndDate: React.FC<PostTagsAndDateProps> = ({
  tags,
  date,
}) => {
  return (
    (date || tags) && (
      <div className="flex flex-col justify-between w-full max-w-3xl space-y-4 md:flex-row xl:max-w-4xl md:space-y-0 md:space-x-8">
        {!isEmpty(tags) && (
          <div className="flex space-x-2">
            <span className="font-semibold">Tags:</span>
            <span className="flex">{tags.join(', ')}</span>
          </div>
        )}
        {!isEmpty(date) && (
          <div className="flex items-center space-x-2">
            <span className="font-semibold">date:</span>
            <span>{date}</span>
          </div>
        )}
      </div>
    )
  )
}
