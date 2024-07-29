import React from 'react'
import openLink from '@/functions/openLink'
import Image from 'next/image'
import style from './hoverSection.module.scss'

import arrow from '../../../../public/assets/svg/linkImg.svg'

interface HoverSectionProps {
  name: string
  link: string
  text: React.ReactNode
}

function HoverSection({ name, text, link }: HoverSectionProps) {
  return (
    <button
      onClick={openLink(link)}
      className={`${style.revert} flex w-[14rem] flex-col items-start gap-1 rounded-3xl border bg-color-bg-gray px-7 text-color-dark hover:text-white`}
    >
      <div className={`mt-7 flex flex-col items-start gap-2`}>
        <h3 className="max-w-4 text-left text-xl font-medium leading-5">{name}</h3>
        <span className={`max-w-44 text-left text-xs font-normal`}>{text}</span>
      </div>
      <Image
        alt="arrow"
        src={arrow as string}
        width="40"
        height="40"
        className={`${style.arrow} relative bottom-4 left-32`}
      />
    </button>
  )
}

export default HoverSection
