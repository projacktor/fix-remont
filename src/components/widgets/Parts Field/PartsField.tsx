import React from 'react'
import Tariff from '@/types/Tariff'
import Image from 'next/image'

import leave from '../../../../public/assets/svg/Leave.svg'

interface PartsFiledProps {
  objectName: string
  tariff: Tariff
  location: string
  payment: number
  part: string
}

function PartsField({ objectName, tariff, location, payment, part }: PartsFiledProps) {
  return (
    <div className="grid w-full grid-cols-6 items-center">
      <div className="flex flex-col space-y-2">
        <p className="text-xs font-medium text-gray-400">Объект:</p>
        <h4 className="headingStruct text-xl">{objectName}</h4>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-xs font-medium text-gray-400">Тариф:</p>
        <h4 className="headingStruct text-xl">{tariff}</h4>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-xs font-medium text-gray-400">Локация:</p>
        <h4 className="headingStruct text-xl">{location}</h4>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-xs font-medium text-gray-400">Вознаграждения:</p>
        <h4 className="headingStruct text-xl">{payment.toLocaleString('ru-Ru')} руб</h4>
      </div>

      <div
        className={`flex w-72 flex-col space-y-4 rounded-2xl p-4 ${part === 'Объект сдан' ? 'bg-color-dark' : 'bg-color-back'}`}
      >
        <p className="text-xs font-medium text-gray-400">Текущий этап:</p>
        <h4
          className={`headingStruct text-xl ${part === 'Объект сдан' ? 'text-white' : 'text-black'}`}
        >
          {part}
        </h4>
      </div>

      <button>
        <Image src={leave as unknown as string} alt={'Go To the description'} />
      </button>
    </div>
  )
}

export default PartsField