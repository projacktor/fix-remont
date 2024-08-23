import React from 'react'

interface DescriptionProps {
  name: string
  heading: string
}

function Description({ name, heading }: DescriptionProps) {
  return (
    <section className="flex flex-col space-y-2">
      <p className="label">{name}:</p>
      <h4 className="headingStruct text-xl">{heading}</h4>
    </section>
  )
}

export default Description
