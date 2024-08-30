'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'

import work1 from '../../../../public/assets/img/works gallery/work1.png'
import work2 from '../../../../public/assets/img/works gallery/work2.png'
import GroupPhoto from '@/components/widgets/GroupPhoto/GroupPhoto'
import Responsibility from '@/components/widgets/Responsibility/Responsibility'
import Consulting from '@/components/widgets/Consulting/Consulting'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import Crumb from '@/components/shared/Crumb/Crumb'
import GalleryElement from '@/components/shared/Gallery Element/GalleryElement'

function Portfolio() {
  const path = ['Портфолио']
  const links = ['/pages/dashboard/portfolio']
  const works = [
    {
      image: work1,
      title: 'Дом из кирпича 560 м² на Барвихе',
      link: '/pages/portfolio/works'
    },
    {
      image: work2,
      title: 'Квартира 300 м² на Баумана',
      link: '/pages/portfolio/works'
    },
    {
      image: work2,
      title: 'Квартира 300 м² на Баумана',
      link: '/pages/portfolio/works'
    },
    {
      image: work1,
      title: 'Дом из кирпича 560 м² на Барвихе',
      link: '/pages/portfolio/works'
    }
  ]
  return (
    <main>
      <Crumb path={path} links={links} />
      <section className="flex h-full w-full flex-col justify-around gap-4">
        <div className="flex w-full flex-col items-start justify-around gap-4">
          <div>
            <p className="w-11/12">
              Работаем одинаково хорошо, как на крупных объектах, так и в небольших квартирах
            </p>
            <h1 className="heading">
              Посмотрите на наши <span className="orange-bold">выполненные проекты</span>
            </h1>
          </div>
          <div className="flex w-[30rem] flex-row items-center gap-8">
            <button className="flex items-center justify-center rounded-full border-transparent bg-gray-100 px-4 py-3 text-sm font-medium active:bg-color-dark active:text-white">
              Все
            </button>
            <button className="flex items-center justify-center rounded-full border-transparent bg-gray-100 px-4 py-3 text-sm font-medium active:bg-color-dark active:text-white">
              Ремонт квартир
            </button>
            <button className="flex items-center justify-center rounded-full border-transparent bg-gray-100 px-4 py-3 text-sm font-medium active:bg-color-dark active:text-white">
              Строительство дома
            </button>
          </div>
        </div>
        <section className="grid h-full grid-cols-2 grid-rows-2 justify-around gap-4">
          {/*<div className="relative flex items-center justify-center">*/}
          {works.map((work, index) => (
            <div key={index} className={`flex items-center justify-center`}>
              <GalleryElement image={work.image as string} title={work.title} link={work.link} />
            </div>
          ))}
        </section>
        <div className="button_container h-16 w-full">
          <CheckButton text="Показать больше" link="/portfolio" />
        </div>
      </section>

      <GroupPhoto />

      <Responsibility />

      <Consulting />

      <SeoPart />
    </main>
  )
}

export default Portfolio
