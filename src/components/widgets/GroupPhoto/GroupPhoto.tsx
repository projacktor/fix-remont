import React from 'react'
import Image from 'next/image'

import style from './groupPhoto.module.scss'

import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'

import tick from '../../../../public/assets/svg/tickBlack.svg'

function Presentation() {
  return (
    <section className="flex w-full flex-col items-center gap-6">
      <h1 className="heading">
        Над вашим объектом будет работать команда{' '}
        <span className="orange-bold">настоящих фанатов</span> своего дела
      </h1>
      <div className={`${style.bg} flex h-screen w-full flex-col-reverse rounded-3xl p-10`}>
        <div className="grid w-full grid-cols-3">
          <div className="flex flex-row items-center justify-center gap-x-4">
            <Image src={tick as string} alt="black tick" width={20} />
            <p className="text-bas4 font-normal text-white">На рынке с 2013 года</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-x-4">
            <Image src={tick as string} alt="black tick" width={20} />
            <p className="text-bas4 font-normal text-white">
              Построили более 1 500 домов по всей РФ
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-x-4">
            <Image src={tick as string} alt="black tick" width={20} />
            <p className="text-bas4 font-normal text-white">Стаж строителей - 15 лет</p>
          </div>
        </div>
      </div>
      <div className="button_container h-16 w-full">
        <CheckButton
          text="Оставить заявку на консультацию от специалиста"
          link="/pages/contacts/"
          blank={true}
        />
      </div>
    </section>
  )
}

export default Presentation
