import React from 'react'
import openLink from '@/functions/openLink'
import Image from 'next/image'
import style from './hoverSection.module.scss'

import arrow from '../../../../public/assets/svg/linkImg.svg'

interface HoverSectionProps {
  name: string
  link: string
  text: React.ReactNode
  blank?: boolean
}

const HoverSection: React.FC<HoverSectionProps> = ({ name, text, link, blank = false }) => {
  const handleClick = openLink(link as string, blank)
  return (
    <button
      onClick={handleClick}
      className={`${style.revert} flex w-[15rem] flex-col items-start gap-1 rounded-3xl border bg-color-bg-gray px-7 text-color-dark hover:text-white`}
    >
      <div className={`mt-6 flex flex-col items-start gap-2`}>
        <h3 className="max-w-4 text-left text-xl font-medium leading-5">{name}</h3>
        <span className={`max-w-44 text-left text-xs font-normal`}>{text}</span>
      </div>
      <Image
        alt="arrow"
        src={arrow as unknown as string}
        width={40}
        height={40}
        quality={100}
        className={`${style.arrow} relative bottom-4 left-36`}
      />
    </button>
  )
}

export default HoverSection
