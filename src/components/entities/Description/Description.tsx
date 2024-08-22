import React from 'react'

interface DescriptionProps {
  name: string
  heading: string
}

function Description({ name, heading }: DescriptionProps) {
  return (
    <article className="flex flex-col space-y-2">
      <p className="text-xs font-medium text-gray-400">{name}:</p>
      <h4 className="headingStruct text-xl">{heading}</h4>
    </article>
  )
}

export default Description
