'use client'
import React from 'react'

import search from '../../../../public/assets/svg/search.svg'
import SupportCategory from '@/components/entities/Support Category/SupportCategory'
import SupportSection from '@/components/widgets/Support Section/SupportSection'

function Page() {
  return (
    <main className="flex w-full flex-col justify-around gap-8">
      <h1 className="heading">Служба поддержки</h1>

      <div className="whiteContainer flex flex-row items-center justify-between space-x-3">
        <div className="headingStruct flex flex-col space-y-1 text-2xl">
          <h2 className="orange-bold">Есть вопросы?</h2>
          <h2>Обратитесь в нашу службу поддержки</h2>
        </div>
        <div className="relative h-max w-1/2">
          <input
            className="w-full rounded-full bg-gray-200 px-8 py-6 placeholder:text-gray-400"
            placeholder="Напривем: Как сделать заказ?"
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <h4 className="shiftedHeading4">Популярные темы</h4>

        <div className="whiteContainer grid w-full grid-cols-4 grid-rows-2 items-center gap-5">
          <SupportCategory link="/profile/news/category/" value="Фото с объекта" />
          <SupportCategory link="/profile/news/category/" value="Оплата" />
          <SupportCategory link="/profile/news/category/" value="Материалы" />
          <SupportCategory link="/profile/news/category/" value="Договор" />
          <SupportCategory link="/profile/news/category/" value="Вознаграждение" />
          <SupportCategory link="/profile/news/category/" value="Скачать документы" />
          <SupportCategory link="/profile/news/category/" value="Подтверждение" />
          <SupportCategory link="/profile/news/category/" value="Оплата" />
        </div>
      </div>

      <SupportSection />
    </main>
  )
}

export default Page
