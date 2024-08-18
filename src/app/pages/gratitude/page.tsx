'use client'
import React from 'react'
import Image from 'next/image'

import style from './gratitude.module.scss'

import BlackButton from '@/components/shared/buttons/Black Button/BlackButton'

import bg from '../../../../public/assets/img/thankYou.png'

const Gratitude = () => {
  return (
    <main className="mb-5 flex w-full items-center justify-center rounded-2xl bg-cover">
      <Image src={bg as unknown as string} alt={'thank you'} className="relative h-full w-full" />
      <div className="absolute flex flex-col items-center gap-8">
        <h1 className="heading text-center text-white">
          Благодарим
          <br />
          за обращение!
        </h1>
        <h2 className="text-2xl font-medium leading-[131%] tracking-[-0.06em] text-white">
          Ожидайте звонка с номера +375 (800)-00-00
        </h2>
        <div className={`button_container w-72 ${style.noBroder}`}>
          <BlackButton text="Вернуться на сайт" link="/" />
        </div>
      </div>
    </main>
  )
}

export default Gratitude
