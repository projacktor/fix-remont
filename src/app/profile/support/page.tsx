'use client'
import React from 'react'
import Image from 'next/image'

import search from '../../../../public/assets/svg/search.svg'

function Page() {
  return (
    <main className="mb-8 flex w-full flex-col gap-8">
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

      <div className="whiteContainer flex flex-col space-y-3"></div>
    </main>
  )
}

export default Page
