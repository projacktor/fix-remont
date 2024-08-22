import React from 'react'

import Tariff from '@/types/Tariff'
import { State } from '@/types/State'

import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import CardNote from '@/components/entities/Card Note/CardNote'

interface ContractCardProps {
  index: number
  location: string
  object_type: string
  contract_type: string
  state: State
  tariff: Tariff
  area: number
  part: string
  payment: number
}

function ContractCard({
  index,
  location,
  object_type,
  contract_type,
  state,
  tariff,
  area,
  part,
  payment
}: ContractCardProps) {
  return (
    <div className="flex flex-col space-y-5 rounded-3xl bg-white p-6">
      <h4 className="orange-bold text-lg font-semibold">№{index}</h4>
      <h4 className="headingStruct text-xl underline">{location}</h4>

      <div className="grid h-36 grid-cols-2 grid-rows-2 gap-0">
        <article className="flex flex-col space-y-3">
          <p className="text-xs font-medium text-gray-400">Объект:</p>
          <h5 className="headingStruct text-lg">{object_type}</h5>
        </article>
        <article className="flex flex-col space-y-3">
          <p className="text-xs font-medium text-gray-400">Тип заказа:</p>
          <h5 className="headingStruct text-lg">{contract_type}</h5>
        </article>
        <article className="flex flex-col space-y-3">
          <p className="text-xs font-medium text-gray-400">Тариф:</p>
          <h5 className="headingStruct text-lg">{tariff}</h5>
        </article>
        <article className="flex flex-col space-y-3">
          <p className="text-xs font-medium text-gray-400">Площадь:</p>
          <h5 className="headingStruct text-lg">{area.toLocaleString('ru-Ru')} м²</h5>
        </article>
      </div>

      <CardNote state={state} />

      <div
        className={`flex w-full flex-col space-y-4 rounded-2xl p-4 ${part === 'Объект сдан' ? 'bg-color-dark' : 'bg-color-back'}`}
      >
        <p className="text-xs font-medium text-gray-400">Текущий этап:</p>
        <h4
          className={`headingStruct text-xl ${part === 'Объект сдан' ? 'text-white' : 'text-black'}`}
        >
          {part}
        </h4>
      </div>

      <article className="flex flex-row justify-between">
        <p className="text-xs font-medium text-gray-400">Вознаграждение:</p>
        <h5 className="headingStruct text-lg">{payment.toLocaleString('ru-Ru')} руб</h5>
      </article>

      <div className="button_container h-16 w-full">
        <CheckButton text="Подробнее о заказе" link={`/profile/contracts/orders/${index}`} />
      </div>
    </div>
  )
}

export default ContractCard
