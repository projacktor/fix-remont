import React from 'react'
import Image from 'next/image'

import { PartsFiledProps } from '@/server/types/PartsFieldProps'

import style from './partsField.module.scss'

import PartBullet from '@/components/entities/Part Bullet/PartBullet'
import Description from '@/components/entities/Description/Description'

import leave from '../../../../public/assets/svg/Leave.svg'

function PartsField({ objectName, tariff, location, payment, part }: PartsFiledProps) {
  const props = [
    { label: 'Объект', value: objectName },
    { label: 'Тариф', value: tariff },
    { label: 'Локация', value: location },
    { label: 'Вознаграждения', value: `${payment.toLocaleString('ru-Ru')} руб` }
  ]
  return (
    <div className={`grid w-full grid-cols-6 items-center ${style.layout}`}>
      {props.map((prop, index) => (
        <React.Fragment key={index}>
          <Description name={prop.label} heading={prop.value} />
        </React.Fragment>
      ))}

      <PartBullet part={part} />

      <button>
        <Image src={leave as unknown as string} alt={'Go To the description'} />
      </button>
    </div>
  )
}

export default PartsField
