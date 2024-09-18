import React from 'react'
import openLink from '@/functions/openLink'
import Image from 'next/image'
import style from './hoverSectionBig.module.scss'

import arrow from '../../../../public/assets/svg/linkImg.svg'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import Link from 'next/link'

interface HoverSectionProps {
  name: string
  link: string
  lists: React.ReactNode
}

function HoverSectionBig({ name, lists, link }: HoverSectionProps) {
  return (
    <div
      className={`${style.revert} relative flex w-[26rem] flex-col items-start rounded-3xl border bg-color-bg-gray px-7 py-8 text-color-dark hover:text-white`}
    >
      <div className={`flex w-full flex-col items-start gap-6`}>
        <h3 className="text-left text-2xl font-medium leading-5 tracking-tighter">{name}</h3>
        <span className={`max-w-44 text-left text-xs font-normal ${style.lists}`}>{lists}</span>
        <div className="flex w-full flex-row justify-between">
          <Link
            href={link}
            className={`${style.h} orangeButton flex h-12 w-40 items-center justify-center`}
          >
            Подробнее
          </Link>

          <Image
            alt="arrow"
            width={45}
            height={45}
            src={arrow as unknown as string}
            className={`${style.arrow}`}
          />
        </div>
      </div>
    </div>
  )
}

export default HoverSectionBig
