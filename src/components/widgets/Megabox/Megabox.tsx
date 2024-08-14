import React from 'react'
import Image from 'next/image'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import BlackButton from '@/components/shared/buttons/Black Button/BlackButton'
import HoverSection from '@/components/shared/Hover section/HoverSection'

import style from './megabox.module.scss'

import bg from '../../../../public/assets/img/megaBoxBackground.png'

function MegaboxSection() {
  return (
    <div className="flex min-h-screen w-full flex-row items-center gap-6">
      <div className={`relative flex h-auto rounded-3xl bg-cover`}>
        <Image src={bg as unknown as string} alt="backgraund" />
        <p className="absolute left-14 top-64 w-80 text-4xl font-medium leading-tight tracking-tight text-white">
          Первый в России <br />
          онлайн-сервис <br />
          по ремонту и строительству <br />с фиксированной стоимостью
        </p>
      </div>

      <div className="max-w-1/2 flex w-1/2 flex-col items-center gap-4">
        <div className="flex h-[26rem] w-full flex-col gap-32 rounded-3xl bg-color-dark p-10">
          <p className="text-2xl font-medium leading-snug tracking-tight text-white">
            Воплотим вашу
            <br />
            мечту в реальность
            <br /> без визитов на
            <br /> объект
          </p>
          <div
            className={`${style.button_container} button_container flex flex-row items-center space-x-8`}
          >
            <OrangeButton text="Онлайн-калькулятор" link="" />
            <BlackButton text="Стать партнёром" link="" />
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <HoverSection
            name="Ремонт"
            text={
              <p>
                Без визитов на объект. <br /> Заезжайте в готовую <br /> квартиру уже через <br />{' '}
                6-8 месяцев
              </p>
            }
            link={''}
          />
          <HoverSection
            name="Строительство"
            text={
              <p>
                Без визитов на объект. <br /> Заезжайте в готовую <br /> квартиру уже через <br />{' '}
                6-8 месяцев
              </p>
            }
            link={''}
          />
          <HoverSection
            name="Партнерская программа"
            text={
              <p>
                Подходит для физ.лиц, <br /> застройщиков, <br /> риелторов
              </p>
            }
            link={''}
          />
        </div>
      </div>
    </div>
  )
}

export default MegaboxSection
