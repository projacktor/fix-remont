import React from 'react'
import Image from 'next/image'

interface TapeSectionProps {
  svg: string
  altName: string
  text: React.ReactNode
}

function TapeSection({ svg, altName, text }: TapeSectionProps) {
  return (
    <div className={`flex min-h-28 min-w-[17.5rem] flex-col gap-6 rounded-3xl bg-white p-5`}>
      <Image alt={altName} src={svg} className={`self-end`} />
      <span className={`max-w-56 text-sm font-medium leading-5`}>{text}</span>
    </div>
  )
}

export default TapeSection
