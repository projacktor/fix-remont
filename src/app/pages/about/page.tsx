'use client'
import React from 'react'
import Image from 'next/image'

import style from './about.module.scss'

import CEOgreeting from '@/components/widgets/CEO Greeting/CEOGreeting'
import Inviting from '@/components/widgets/Inviting/Inviting'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import Consulting from '@/components/widgets/Consulting/Consulting'
import SocialMedia from '@/components/widgets/Social Media/SocialMedia'
import RiskSlide from '@/components/widgets/Risk Side/RiskSlide'
import Responsibility from '@/components/widgets/Responsibility/Responsibility'
import GroupPhoto from '@/components/widgets/GroupPhoto/GroupPhoto'
import TapeSection from '@/components/shared/Tape Section/TapeSection'
import TapeSectionBlack from '@/components/shared/Tape Section Black/TapeSectionBlack'

import src1 from '../../../../public/assets/svg/digit icons/15000.svg'
import src2 from '../../../../public/assets/svg/digit icons/998.svg'
import src3 from '../../../../public/assets/svg/digit icons/10.svg'
import pseudoVid from '../../../../public/assets/img/pseudo videos/pseudoVid.png'
import russia from '../../../../public/assets/img/Russia.png'
import materialsImg from '../../../../public/assets/img/creditCardMaterials.png'
import Crumb from '@/components/shared/Crumb/Crumb'

function About() {
  const blackBullet1 = <p>Ремонт, строительство и обслуживание квартир, жилых домов под ключ</p>
  const blackBullet2 = (
    <p>
      Повысить культуру и сервис сферы строительства, чтобы каждый заказчик мог получить качество
      без переделок и контроля исполнителей
    </p>
  )
  const blackBullet3 = (
    <ul className="ml-5 list-disc">
      <li>Создание управляющей компании-регулятора</li>
      <li>Повышение качеств услуг за счёт разработки единых стандартов</li>
      <li>Перемены в сфере, чтобы для людей ремонт перестал быть больной темой</li>
    </ul>
  )

  const path = ['О компании']
  const links = ['/pages/about']
  return (
    <main className="flex flex-col items-center justify-around gap-12">
      <Crumb path={path} links={links} />
      <h1 className="heading w-full text-left">О компании FIX-ремонт</h1>

      <div className={`${style.whiteTapes} flex w-full justify-between`}>
        <TapeSection altName="white bullet" text={<p>Реализовано проектов</p>} svg={src1} />
        <TapeSection altName="white bullet" text={<p>Довольных клиентов</p>} svg={src2} />
        <TapeSection altName="white bullet" text={<p>Лет на рынке РФ</p>} svg={src3} />
      </div>

      <div className="flex w-full justify-around space-x-3">
        <TapeSectionBlack head="Сфера деятельности" description={blackBullet1} />
        <TapeSectionBlack head="Миссия" description={blackBullet2} />
        <TapeSectionBlack head="Цели" description={blackBullet3} />
      </div>

      <div className="pseudo_vid">
        <Image src={pseudoVid as string} alt="pseudo_video" className="h-auto w-full" />
      </div>

      <CEOgreeting />

      <div className="relative">
        <div className="absolute top-7 w-full space-y-4 text-left tracking-tighter">
          <h2 className="heading6">
            Работаем с клиентами по всей <br /> территории Российской Федерации
          </h2>
          <p className="text-lg font-medium">Несколько бригад в каждом регионе страны</p>
        </div>
        <Image alt="Russia" src={russia as string} className="w-full" />
      </div>

      <Inviting />

      <GroupPhoto />

      <Responsibility />

      <RiskSlide button_text="Рассчитать стоимость" background={materialsImg as string} />

      <SocialMedia />

      <Consulting />

      <SeoPart />
    </main>
  )
}

export default About
