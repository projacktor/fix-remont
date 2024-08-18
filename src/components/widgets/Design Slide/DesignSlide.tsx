import React from 'react'
import Image from 'next/image'
import CheckButton from '../../shared/buttons/Check Button/CheckButton'
import designsBackground from '../../../../public/assets/img/designsBackground.png'
import { ButtonProps } from '@/types/ButtonProps'
import openLink from '@/functions/openLink'

function DesignsSlide() {
  return (
    <div className="relative h-[740px] w-full">
      <Image src={designsBackground} alt="Designs Background" className="relative w-full" />
      <div className="absolute left-[4rem] top-[22rem] flex w-[87rem] flex-col space-y-8">
        <div className="w-[41rem] space-y-4 text-left">
          <h1 className="heading text-white">
            FIX-ремонт — это более <br />{' '}
            <span className="orange-bold">36 готовых дизайнерских решений</span> под любой бюджет
          </h1>
          <p className="font-light leading-[123%] tracking-tight text-white">
            с реализацией “под ключ” и без финансовых и репутационных рисков для партнёров
          </p>
        </div>
        <button
          className="flex h-16 w-11/12 items-center justify-center rounded-full border border-white bg-transparent px-4 py-2 text-base font-semibold text-white"
          onClick={() => openLink('')}
        >
          Пройти 3D-тур по проектам
        </button>
      </div>
    </div>
  )
}

export default DesignsSlide
