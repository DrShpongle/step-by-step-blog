import * as React from 'react'

type Props = {
  children: React.ReactNode
}

const Mark: React.FC<Props> = ({children}: Props) => {
  return (
    <>
      <h2>Mark Component</h2>
      <div className="p-8 mt-6 text-white bg-gray-600 rounded-xl">
        {children}
      </div>
    </>
  )
}

export default Mark
