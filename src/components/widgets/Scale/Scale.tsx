import React, { useState } from 'react'
import ScaleStep from '@/components/entities/Scale Step/ScaleStep'

function Scale() {
  const [steps, setStep] = useState<number>(0)

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

  return (
    <div className="flex flex-col space-y-6">
      <h3 className="headingStruct pl-7 text-2xl">
        Ход работы {steps} / <span className="text-gray-300">{data.length}</span>
      </h3>

      <div className="scrollbar flex max-w-screen-2xl flex-row items-center justify-around overflow-x-auto whitespace-nowrap rounded-3xl bg-white p-7">
        {data.map((step, index) => (
          <React.Fragment key={index}>
            <div className="max-w-max flex-shrink-0">
              <ScaleStep heading={step.heading} status={step.status} watch={step.watch} />
            </div>
            {index < data.length - 1 && <p className="flex-shrink-0 text-2xl font-medium">→</p>}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Scale
