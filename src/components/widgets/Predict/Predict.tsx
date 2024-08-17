import React from 'react'
import BlackButton from '@/components/shared/buttons/Black Button/BlackButton'

function Predict() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex w-full flex-row items-center justify-between gap-40">
        <div className="flex flex-col items-start gap-4">
          <h1 className="heading w-[30rem]">
            <span className="orange-bold">Спрогнозируйте свой доход</span> прямо сейчас
          </h1>
          <p className="text-lg font-medium">В расчёт возьмём средние данные по пакетам</p>
        </div>
        <div className="flex h-40 flex-col items-center justify-center gap-4 rounded-2xl border-2 border-black px-20 py-6">
          <h1 className="heading text-5xl">
            Итого: <span className="underline">382 000</span> руб
          </h1>
          <p className="text-sm text-gray-500">
            *расчёт ориентировочный и не несёт в себе никаких гарантий
          </p>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-around">
        <div className="flex w-[25rem] flex-col">
          <label htmlFor="fix" className="text-sm">
            Количество клиентов на ремонт
          </label>
          <input name="fix" type="number" placeholder="Например, 10" className="input-filed mt-2" />
        </div>
        <div className="flex w-[25rem] flex-col">
          <label htmlFor="building" className="text-sm">
            Количество клиентов на строительство
          </label>
          <input
            name="building"
            type="number"
            placeholder="Например, 8"
            className="input-filed mt-2"
          />
        </div>
        <div className="button_container flex w-[25rem] items-center">
          <div className="mt-8 w-full">
            <BlackButton text="Рассчитать доход" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Predict
