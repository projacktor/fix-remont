import React from 'react'

interface ReasonBlockProps {
  text1: React.ReactNode
  text2: React.ReactNode
  description: string
}

const ReasonBlock: React.FC<ReasonBlockProps> = ({ text1, text2, description }) => {
  return (
    <div className="w-full rounded-3xl bg-color-dark p-12 text-white even:bg-white even:text-black">
      <h2 className="headingStruct text-4xl">
        {text1} <br /> {text2}
      </h2>
      <p className="mt-4 max-w-full text-lg">{description}</p>
    </div>
  )
}

export default ReasonBlock
