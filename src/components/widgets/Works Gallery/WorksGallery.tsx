import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import work1 from '../../../../public/assets/img/works gallery/work1.png'
import work2 from '../../../../public/assets/img/works gallery/work2.png'

import Scroller from '@/components/shared/Scroller/Scroller'

function WorksGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const works = [
    {
      image: work1,
      title: 'Дом из кирпича 560 м² на Барвихе',
      link: '#'
    },
    {
      image: work2,
      title: 'Квартира 300 м² на Баумана',
      link: '#'
    },
    {
      image: work2,
      title: 'Квартира 300 м² на Баумана',
      link: '#'
    },
    {
      image: work1,
      title: 'Дом из кирпича 560 м² на Барвихе',
      link: '#'
    }
  ]

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : works.length - 2))
  }

  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex < works.length - 2 ? prevIndex + 1 : 0))
  }

  return (
    <div className="flex h-[80vh] flex-col items-start gap-4">
      <div className="flex flex-row items-center gap-8 overflow-hidden">
        {works.map((work, index) => (
          <div
            key={index}
            className={`relative w-1/2 transform transition-all duration-300 ${
              index === currentIndex || index === currentIndex + 1
                ? 'translate-x-0'
                : 'hidden translate-x-full'
            }`}
          >
            <Image src={work.image as unknown as string} alt={work.title} quality={100} />
            <div className="absolute bottom-12 left-9 flex w-max flex-col gap-y-4">
              <h4 className="text-3xl font-semibold leading-tight text-white">{work.title}</h4>
              <Link href={work.link} className={`font-normal text-color-orange underline`}>
                Узнать стоимость
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center">
        <Scroller currentIndex={currentIndex} moveLeft={moveLeft} moveRight={moveRight} />
      </div>
    </div>
  )
}

export default WorksGallery
