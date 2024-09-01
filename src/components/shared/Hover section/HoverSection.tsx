import React from 'react'
import openLink from '@/functions/openLink'
import Image from 'next/image'
import style from './hoverSection.module.scss'

import arrow from '../../../../public/assets/svg/linkImg.svg'
import Link from 'next/link'

interface HoverSectionProps {
  name: string
  link: string
  text: React.ReactNode
}

const HoverSection: React.FC<HoverSectionProps> = ({ name, text, link }) => {
  return (
    <Link
      href={link}
      className={`${style.revert} flex min-h-[12rem] w-[15rem] flex-col items-start gap-1 rounded-3xl bg-color-bg-gray px-7 text-color-dark hover:text-white`}
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
    </Link>
  )
}

export default HoverSection
