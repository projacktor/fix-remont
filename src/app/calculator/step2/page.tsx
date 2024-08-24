'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import openLink from '@/functions/openLink'
import Card from '@/components/shared/Card/Card'
import clock from '../../../../public/assets/svg/clock.svg'

function Page() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const handleCardSelect = (title: string) => {
    setSelectedCard(title)
  }

  return (
    <main className="whiteContainer w-full p-20">
      <div className="flex w-full flex-row items-end justify-between">
        <section className="space-y-4">
          <h1 className="headingStruct text-4xl">
            Соберите <span className="orange-bold">ремонт</span> своей мечты
            <br />и узнайте его полную стоимость
          </h1>
          <p className="headingStruct">
            под ваши пожелания и бюджет, ответив на несколько вопросов
          </p>
        </section>

        <div className="flex flex-row items-center space-x-4 font-normal">
          <Image src={clock as string} alt="clock" />
          <span>
            5 минут - среднее время <br /> заполнения анкеты
          </span>
        </div>
      </div>
      <hr className="" />

      <div className="space-y-3">
        <h2 className="headingStruct text-2xl">
          Второй шаг <span className="text-gray-400">2 / 4</span>
        </h2>
        <p className="headingStruct text-sm">Выберите подходящий тариф</p>
        <form className="flex flex-col space-y-5">
          <div className="flex w-full flex-row justify-around">
            <Card
              title="Базовый"
              price={10000}
              selected={selectedCard === 'Базовый'}
              onSelect={handleCardSelect}
            />
            <Card
              title="Стандарт"
              price={15000}
              selected={selectedCard === 'Стандарт'}
              onSelect={handleCardSelect}
            />
            <Card
              title="Комфорт"
              price={20000}
              selected={selectedCard === 'Комфорт'}
              onSelect={handleCardSelect}
            />
            <Card
              title="Бизнес"
              price={30000}
              selected={selectedCard === 'Бизнес'}
              onSelect={handleCardSelect}
            />
          </div>
          <section className="flex flex-row-reverse items-start gap-x-4 pr-7">
            <button className="flex w-72 items-center justify-center rounded-full bg-color-orange px-8 py-6 font-semibold text-white">
              Следующий шаг
            </button>

            <button
              className="flex w-52 items-center justify-center rounded-full bg-gray-200 px-8 py-6 font-semibold text-gray-400"
              onClick={openLink('/calculator/step1')}
            >
              Назад
            </button>
          </section>
        </form>
      </div>
    </main>
  )
}

export default Page
