import React from 'react'
import PartsField from '@/components/widgets/Parts Field/PartsField'
import Tariff from '@/types/Tariff'
import { PartsFiledProps } from '@/types/PartsFieldProps'

interface DealListProps {
  heading: string
  data: PartsFiledProps[]
}

function DealList({ heading, data }: DealListProps) {
  return (
    <div className="flex flex-col items-start space-y-4">
      <h2 className="heading2">{heading}</h2>
      <div className="flex h-max max-h-96 w-full flex-col items-center justify-around space-y-4 overflow-y-auto rounded-3xl bg-white p-6">
        {data.map((part, index) => (
          <React.Fragment key={index}>
            <PartsField
              objectName={part.objectName}
              tariff={part.tariff}
              location={part.location}
              payment={part.payment}
              part={part.part}
            />
            {index < data.length - 1 && <hr className="w-full border-t border-gray-300" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default DealList
