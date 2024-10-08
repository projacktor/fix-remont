import React from 'react'

import style from './partsFieldOparation.module.scss'

import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import Description from '@/components/entities/Description/Description'
import { Operation } from '@/server/utils/enums'

interface PartsFiledOperationProps {
  type: Operation
  cost: number
  date: Date
  status: string
}

function PartsFieldOperation({ type, cost, date, status }: PartsFiledOperationProps) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  const formattedDate = `${day}.${month}.${year}`
  return (
    <div className={`grid w-full grid-cols-6 items-center ${style.layout}`}>
      <Description name="Операция" heading={type} />
      <Description name="Сумма" heading={`${cost.toLocaleString('ru-Ru')} руб`} />
      <div className="flex flex-col space-y-2">
        <p className="label">Дата:</p>
        <time className="headingStruct text-xl">{formattedDate}</time>
      </div>

      <div
        className={`flex w-72 flex-col space-y-4 rounded-2xl p-4 ${status === 'Исполнена' ? 'bg-green-500' : status === 'Отменена' ? 'bg-red-600' : 'bg-color-back'}`}
      >
        <p
          className={`text-xs font-medium ${status === 'Обработка' ? 'text-black' : 'text-white'}`}
        >
          Статус:
        </p>
        <h4
          className={`headingStruct text-xl ${status === 'Обработка' ? 'text-black' : 'text-white'}`}
        >
          {status}
        </h4>
      </div>

      <div className="button_container h-16">
        <CheckButton text="Скачать чек" />
      </div>
    </div>
  )
}

export default PartsFieldOperation
