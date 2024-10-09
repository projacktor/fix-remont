'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import GroupPhoto from '@/components/widgets/GroupPhoto/GroupPhoto'
import Responsibility from '@/components/widgets/Responsibility/Responsibility'
import Consulting from '@/components/widgets/Consulting/Consulting'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import Crumb from '@/components/shared/Crumb/Crumb'
import GalleryElement from '@/components/shared/Gallery Element/GalleryElement'
import FilterButtons from '@/components/shared/Filter Buttons/FilterButtons'

import work1 from '../../../../public/assets/img/works gallery/work1.png'
import work2 from '../../../../public/assets/img/works gallery/work2.png'

function Portfolio() {
  const path = ['Портфолио']
  const links = ['/pages/dashboard/portfolio']
  const works = [
    {
      image: work1,
      title: 'Дом из кирпича 560 м² на Барвихе',
      link: '/pages/portfolio/works',
      category: 'Строительство домов'
    },
    {
      image: work2,
      title: 'Квартира 300 м² на Баумана',
      link: '/pages/portfolio/works',
      category: 'Ремонт квартир'
    },
    {
      image: work2,
      title: 'Квартира 300 м² на Баумана',
      link: '/pages/portfolio/works',
      category: 'Ремонт квартир'
    },
    {
      image: work1,
      title: 'Дом из кирпича 560 м² на Барвихе',
      link: '/pages/portfolio/works',
      category: 'Строительство домов'
    }
  ]

  const filters = ['Все', 'Ремонт квартир', 'Строительство домов']
  const [activeFilter, setActiveFilter] = useState<string>('Все')

  const handleActiveFilter = (filter: string) => {
    setActiveFilter(filter)
  }

  const filteredWorks =
    activeFilter === 'Все' ? works : works.filter((work) => work.category === activeFilter)

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
          <FilterButtons
            filters={filters}
            activeFilter={activeFilter}
            onFilterClick={handleActiveFilter}
          />
        </div>
        <section className="grid auto-rows-max grid-cols-2 gap-4">
          {filteredWorks.slice(0, 4).map((work, index) => (
            <div key={index} className={`flex items-center justify-center`}>
              <GalleryElement
                image={work.image as unknown as string}
                title={work.title}
                link={work.link}
              />
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
