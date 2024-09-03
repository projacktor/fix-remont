'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import openLink from '@/functions/openLink'

import Card from '@/components/shared/Clac Card/Card'
import ContentFilter from '@/components/shared/Content Filter/ContentFilter'
import SingleFaq from '@/components/entities/Single Faq/SingleFaq'
import CalcHeading from '@/components/widgets/Calc Heading/CalcHeading'

import mock from '../../../../public/assets/img/mockImg.png'
import Link from 'next/link'

function Page() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const handleCardSelect = (title: string) => {
    setSelectedCard(title)
  }

  const buttons = ['Кухня', 'Санузел', 'Комната']
  const options = [
    'Стены',
    'Пол',
    'Плинтус',
    'Двери',
    'Светильники',
    'Подоконники',
    'Электрика',
    'Галтеи'
  ]

  return (
    <main className="whiteContainer w-full p-20">
      <CalcHeading />

      <div className="space-y-3">
        <h2 className="headingStruct text-2xl">
          Третий шаг <span className="text-gray-400">3 / 4</span>
        </h2>
        <p className="headingStruct">Выберите понравившийся готовый стиль</p>
        <div className="flex flex-col space-y-5">
          <div className="flex w-full flex-row justify-around">
            <Card
              title="Cold Caramel"
              price={5637000}
              selected={selectedCard === 'Cold Caramel'}
              onSelect={handleCardSelect}
            />
            <Card
              title="Peach Dreams"
              price={5782000}
              selected={selectedCard === 'Peach Dreams'}
              onSelect={handleCardSelect}
            />
            <Card
              title="Vivaro Alpine"
              price={5871000}
              selected={selectedCard === 'Vivaro Alpine'}
              onSelect={handleCardSelect}
            />
            <Card
              title="Elegant White"
              price={5935000}
              selected={selectedCard === 'Elegant White'}
              onSelect={handleCardSelect}
            />
          </div>
          <hr className="" />
          <section className="flex flex-col space-y-8">
            <div className="w-full items-start space-y-5 px-7">
              <p className="headingStruct">
                В каждом стиле можете заменить элементы и материалы по вкусу
              </p>
              <div className="w-52">
                <ContentFilter buttons={buttons} />
              </div>
            </div>

            <div className="flex w-full flex-row space-x-8">
              <Image src={mock as unknown as string} alt="image" className="w-1/2" />

              <div className="flex h-full w-1/2 flex-col gap-y-2">
                {options.map((option, index) => (
                  <SingleFaq key={index} text={option} />
                ))}
              </div>
            </div>
          </section>

          <section className="flex flex-row-reverse items-start gap-x-4 pr-7">
            <Link
              href={'/calculator/step4'}
              className="orangeButton flex w-72 items-center justify-center px-8 py-6"
            >
              Следующий шаг
            </Link>

            <button
              className="flex w-52 items-center justify-center rounded-full bg-gray-200 px-8 py-6 font-semibold text-gray-400"
              onClick={openLink('/calculator/step2')}
            >
              Назад
            </button>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Page
