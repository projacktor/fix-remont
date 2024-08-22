'use client'
import React from 'react'

import style from './page.module.scss'

import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import Description from '@/components/entities/Description/Description'
import Scale from '@/components/widgets/Scale/Scale'
import SupportSection from '@/components/widgets/Support Section/SupportSection'

function Page() {
  const data = [
    {
      heading: 'Монтаж пола',
      status: false,
      watch: 'договор'
    },
    {
      heading: 'Монтаж пола',
      status: false,
      watch: 'договор'
    },
    {
      heading: 'Монтаж пола',
      status: false,
      watch: 'договор'
    },
    {
      heading: 'Подписание договора',
      status: true,
      watch: 'договор'
    },
    {
      heading: 'Вывоз мусора',
      status: true,
      watch: 'договор'
    },
    {
      heading: 'Монтаж пола',
      status: false,
      watch: 'договор'
    }
  ]

  const smeta = [
    {
      label: 'Общая стоимость',
      value: 5250000
    },
    {
      label: 'Материалы',
      value: 3075000
    },
    {
      label: 'Работы',
      value: 2175000
    },
    {
      label: 'Ваше вознаграждение',
      value: 32000
    }
  ]
  return (
    <main className="mb-8 flex w-full flex-col gap-8 overflow-x-hidden">
      <div className="mt-8 flex w-full flex-row justify-between">
        <article className="flex flex-col items-start space-y-3">
          <h1 className="heading">Заказ № *****</h1>
          <h3 className="headingStruct text-lg">Order name</h3>
        </article>

        <div className="button_container h-16">
          <OrangeButton text="Пригласить нового клиента" />
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <h3 className="headingStruct pl-7 text-2xl">Информация об объекте</h3>

        <div className={`grid rounded-3xl bg-white p-7 ${style.layout1}`}>
          <Description name="Объект" heading="objectName" />
          <Description name="Тип заказа" heading="objectName" />
          <Description name="Тариф" heading="objectName" />
          <Description name="Площадь" heading="objectName" />
          <div className="flex flex-col items-center">
            <Description name="Локация" heading="objectName" />
          </div>
        </div>
      </div>

      <Scale data={data} />

      <div className="flex flex-col space-y-5">
        <h3 className="headingStruct pl-7 text-2xl">Расчёт сметы</h3>
        <div className={`grid items-center bg-white p-6 ${style.layout2}`}>
          {smeta.map((part, index) => (
            <React.Fragment key={index}>
              <Description
                name={part.label}
                heading={`${part.value.toLocaleString('ru-RU')} руб`}
              />
            </React.Fragment>
          ))}

          <div className="button_container flex h-16 w-64 justify-between">
            <OrangeButton text="Скачать полную смету" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2">
        <div className="flex flex-col space-y-5">
          <h4 className="headingStruct pl-7 text-2xl">Информация о клиенте:</h4>
          <div className="flex flex-col space-y-3 rounded-3xl bg-white p-7">
            <Description name="Клиент" heading="Расулов Данис Фирдусович" />
            <Description name="Номер телефона" heading={'+7 800 555 35 35'} />
            <Description name="E-mail" heading="john.doe@gmail.com" />
            <Description name="Дата заказа" heading="11.03.2024" />
          </div>
        </div>
      </div>
      <SupportSection />
    </main>
  )
}

export default Page
