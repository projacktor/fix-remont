import React from 'react'
import Image from 'next/image'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import BlackButton from '@/components/shared/buttons/Black Button/BlackButton'
import HoverSection from '@/components/shared/Hover section/HoverSection'

import style from './megabox.module.scss'

import bg from '../../../../public/assets/img/megaBoxBackground.png'

function MegaboxSection() {
  return (
    <section className="flex h-max w-full flex-row items-center gap-6">
      <div className={`relative flex h-max rounded-3xl bg-cover`}>
        <Image src={bg as unknown as string} alt="backgraund" quality={100} />
        <h1
          className="absolute bottom-20 left-14 w-96 font-normal leading-tight tracking-tight text-white"
          style={{ fontSize: '2.6rem' }}
        >
          Первый в России онлайн-сервис по ремонту и строительству с фиксированной стоимостью
        </h1>
      </div>

      <div className="max-w-1/2 flex w-1/2 flex-col items-center justify-between self-stretch">
        <div className="flex h-[26rem] w-full flex-col justify-between gap-32 rounded-3xl bg-color-dark p-11">
          <h3 className="w-60 text-2xl font-normal leading-snug tracking-tight text-white">
            Воплотим вашу мечту в реальность без визитов на объект
          </h3>
          <div className={`${style.button_container} flex flex-row items-center space-x-8`}>
            <div className="button_container h-[4.6rem] w-1/2">
              <OrangeButton text="Онлайн-калькулятор" link="/calculator/step1" />
            </div>
            <div className="button_container w-1/2 rounded-full border border-white">
              <BlackButton text="Стать партнёром" link="/pages/partnership" />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-row justify-between space-x-4">
          <HoverSection
            name="Ремонт"
            text={
              <p>
                Без визитов на объект. <br /> Заезжайте в готовую <br /> квартиру уже через <br />{' '}
                6-8 месяцев
              </p>
            }
            link={'/pages/services/apartments'}
          />
          <HoverSection
            name="Строительство"
            text={
              <p>
                Без визитов на объект. <br /> Заезжайте в готовую <br /> квартиру уже через <br />{' '}
                6-8 месяцев
              </p>
            }
            link={'/pages/services/building'}
          />
          <HoverSection
            name="Партнерская программа"
            text={
              <p>
                Подходит для физ.лиц, <br /> застройщиков, <br /> риелторов
              </p>
            }
            link={'/pages/partnership'}
          />
        </div>
      </div>
    </section>
  )
}

export default MegaboxSection
