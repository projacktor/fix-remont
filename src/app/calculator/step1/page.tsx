'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import clock from '../../../../public/assets/svg/clock.svg'

function RenovationForm() {
  const [area, setArea] = useState('')
  const [rooms, setRooms] = useState(1)
  const [doors, setDoors] = useState(1)
  const [bathrooms, setBathrooms] = useState(2)

  const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(value + 1)
  }

  const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    if (value > 0) {
      setter(value - 1)
    }
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
          Первый шаг <span className="text-gray-400">1 / 4</span>
        </h2>
        <p className="headingStruct text-sm">Укажите параметры вашей квартиры</p>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Площадь, м²"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full rounded-full bg-gray-100 px-8 py-6 text-gray-700"
          />
          <input
            type="text"
            placeholder="Адрес дома"
            className="w-full rounded-full bg-gray-100 px-8 py-6 text-gray-700"
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center space-y-3">
            <label className="w-full">Сколько комнат в квартире?</label>
            <section className="flex w-full flex-row items-center justify-between gap-4 rounded-full bg-gray-100 px-8 py-6">
              <button
                type="button"
                onClick={() => handleDecrement(setRooms, rooms)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-color-back text-xl font-semibold"
              >
                -
              </button>
              <span>{rooms}-комнатная</span>
              <button
                type="button"
                onClick={() => handleIncrement(setRooms, rooms)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-color-back text-xl font-semibold"
              >
                +
              </button>
            </section>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <label className="w-full">Сколько дверей?</label>
            <section className="flex w-full flex-row items-center justify-between gap-4 rounded-full bg-gray-100 px-8 py-6">
              <button
                type="button"
                onClick={() => handleDecrement(setDoors, doors)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-color-back text-xl font-semibold"
              >
                -
              </button>
              <span>{doors}</span>
              <button
                type="button"
                onClick={() => handleIncrement(setDoors, doors)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-color-back text-xl font-semibold"
              >
                +
              </button>
            </section>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <label className="w-full">Сколько санузлов?</label>
            <section className="flex w-full flex-row items-center justify-between gap-4 rounded-full bg-gray-100 px-8 py-6">
              <button
                type="button"
                onClick={() => handleDecrement(setBathrooms, bathrooms)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-color-back text-xl font-semibold"
              >
                -
              </button>
              <span>{bathrooms}</span>
              <button
                type="button"
                onClick={() => handleIncrement(setBathrooms, bathrooms)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-color-back text-xl font-semibold"
              >
                +
              </button>
            </section>
          </div>
        </div>

        <div className="mt-4 flex w-full flex-wrap justify-between space-x-4 p-4 text-lg font-semibold">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label>Демонтаж</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label>Возведение стен</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label>Наливной пол</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label>Черновая стяжка пола</label>
          </div>
        </div>

        <div className="flex flex-row-reverse items-end">
          <button className="mt-8 w-64 rounded-full bg-color-orange py-4 text-lg font-medium text-white">
            Следующий шаг
          </button>
        </div>
      </div>
    </main>
  )
}

export default RenovationForm
