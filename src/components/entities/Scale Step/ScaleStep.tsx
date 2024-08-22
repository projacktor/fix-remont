import React from 'react'
import Image from 'next/image'

import active from '../../../../public/assets/svg/rectangle.svg'
import inactive from '../../../../public/assets/svg/rectangleInnactive.svg'

interface ScaleStepProps {
  heading: string
  status: boolean
  watch: string
}

function ScaleStep({ heading, status, watch }: ScaleStepProps) {
  function isActive(status) {
    return status ? (active as string) : (inactive as string)
  }

  return (
    <div className="mx-2 flex flex-row items-center space-x-2">
      <Image src={isActive(status)} alt={'status'} />

      <div className="flex flex-col space-y-2">
        <h5 className="headingStruct text-xl">{heading}</h5>
        {status && (
          <p className="orange-bold text-sm font-medium leading-3 underline">Посмотреть {watch}</p>
        )}
      </div>
    </div>
  )
}

export default ScaleStep
