'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CalcHeading from '@/components/widgets/Calc Heading/CalcHeading'
import Card from '@/components/shared/Clac Card/Card'

import control from '../../../../public/assets/img/control.png'
import openLink from '@/functions/openLink'

function Page() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const handleCardSelect = (title: string) => {
    setSelectedCard(title)
  }
  const options = [
    {
      value: 'Дверь Torex',
      pay: 64000,
      link: '/'
    },
    {
      value: 'Дверь Torex STEL',
      pay: 64000,
      link: '/'
    },
    {
      value: 'Монтаж водонагревателя',
      pay: 64000,
      link: '/'
    },
    {
      value: 'Установка кондиционера',
      pay: 64000,
      link: '/'
    },
    {
      value: 'Дверь Torex',
      pay: 64000,
      link: '/'
    },
    {
      value: 'Дверь Torex STEL',
      pay: 64000,
      link: '/'
    },
    {
      value: 'Монтаж водонагревателя',
      pay: 64000,
      link: '/'
    },
    {
      value: 'Установка кондиционера',
      pay: 64000,
      link: '/'
    }
  ]
  const included = [
    { title: 'Установка электрического щитка', link: '/' },
    { title: 'Прокладка медной проводки', link: '/' },
    { title: 'Система защиты от протечки Neptun', link: '/' },
    { title: 'Установка слаботочного щитка', link: '/' }
  ]

  return (
    <main className="whiteContainer w-full p-20">
      <CalcHeading />

      <div className="space-y-6">
        <h2 className="headingStruct text-2xl">
          Четвертый шаг <span className="text-gray-400">4 / 4</span>
        </h2>
        <p className="headingStruct">Выберите дополнительные опции</p>

        <div className="grid-row-2 grid w-full grid-cols-4">
          {options.map((part, index) => (
            <React.Fragment key={index}>
              <Card
                title={part.value}
                price={part.pay}
                link={part.link}
                selected={selectedCard === part.value}
                onSelect={handleCardSelect}
              />
            </React.Fragment>
          ))}
        </div>
        <hr />
        <p className="headingStruct mt-6">Уже включены в стоимость:</p>
        <div className="flex flex-row items-center justify-between">
          {included.map((part, index) => (
            <React.Fragment key={index}>
              <div className="h-max w-max rounded-3xl p-4">
                <div className="relative">
                  <div
                    className={`'border-4 border-color-orange' h-40 w-72 rounded-3xl bg-gray-100 transition-all duration-300`}
                  ></div>

                  <div className="mt-4 flex items-center">
                    <input
                      type="radio"
                      id={`radio-${part.title}`}
                      name="card-selection"
                      className="hidden"
                      checked={true}
                    />
                    <label
                      htmlFor={`radio-${part.title}`}
                      className={`flex h-6 w-6 items-center justify-center rounded-sm border-2 border-color-orange bg-color-orange`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white transition-opacity duration-300 ease-in-out"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.32 7.32a1 1 0 01-1.414 0l-3.293-3.293a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </label>
                    <span className="ml-2 text-base font-medium text-black">{part.title}</span>
                  </div>

                  <p className="mt-2 text-gray-500">Включено в стоимость</p>
                  <Link href={part.link} className="orange-bold text-ld font-semibold underline">
                    Подробнее
                  </Link>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <picture>
        <Image src={control as unknown as string} alt="control banner" />
      </picture>

      <section className="flex flex-row-reverse items-start gap-x-4 pr-7">
        <button className="flex w-72 items-center justify-center rounded-full bg-color-orange px-8 py-6 font-semibold text-white">
          Получить рассчет
        </button>

        <button
          className="flex w-52 items-center justify-center rounded-full bg-gray-200 px-8 py-6 font-semibold text-gray-400"
          onClick={openLink('/calculator/step3')}
        >
          Назад
        </button>
      </section>
    </main>
  )
}

export default Page
