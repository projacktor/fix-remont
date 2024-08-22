'use client'
import React from 'react'

import style from './page.module.scss'

import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import Description from '@/components/entities/Description/Description'
import Scale from '@/components/widgets/Scale/Scale'

function Page() {
  return (
    <main className="flex w-full flex-col gap-8 overflow-x-hidden">
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

        <div className={`grid rounded-3xl bg-white p-7 ${style.layout}`}>
          <Description name="Объект" heading="objectName" />
          <Description name="Тип заказа" heading="objectName" />
          <Description name="Тариф" heading="objectName" />
          <Description name="Площадь" heading="objectName" />
          <div className="flex flex-col items-center">
            <Description name="Локация" heading="objectName" />
          </div>
        </div>
      </div>

      <Scale />
    </main>
  )
}

export default Page
