import React from 'react'
import Image from 'next/image'

interface TapeSectionProps {
  svg: string
  altName: string
  text: React.ReactNode
  mode?: boolean
}

function TapeSection({ svg, altName, text, mode = true }: TapeSectionProps) {
  return (
    <div
      className={`flex min-h-28 min-w-[17rem] flex-col gap-6 rounded-3xl bg-white p-5 ${mode ? 'bg-white text-color-dark' : 'bg-[#161616]'}`}
    >
      <Image alt={altName} src={svg} className={`self-end`} />
      <span
        className={`max-w-48 text-sm ${mode ? 'font-medium' : 'font-light text-white'} leading-5`}
      >
        {text}
      </span>
    </div>
  )
}

export default TapeSection
