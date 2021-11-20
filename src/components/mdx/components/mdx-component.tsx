import * as React from 'react'

type Props = {
  children: React.ReactNode
}

const MdxComponent: React.FC<Props> = ({children}: Props) => {
  return (
    <p>
      <div className="p-8 mt-6 text-white bg-blue rounded-xl">{children}</div>
    </p>
  )
}

export default MdxComponent
