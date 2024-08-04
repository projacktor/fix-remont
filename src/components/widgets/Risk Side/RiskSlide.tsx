import React from 'react'
import Image from 'next/image'

import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'

import creditCardImg from '../../../../public/assets/img/creditCardImg.png'
import creditBullets from '../../../../public/assets/img/creditBullets.png'

interface RiskSlideProps {
  button_text: string
  background: unknown
}

function RiskSlide({ button_text, background }: RiskSlideProps) {
  return (
    <div className="relative flex flex-row items-center justify-around gap-4">
      <div className="flex h-full w-1/2 flex-col items-center">
        <div className="mt-4">
          <Image src={creditCardImg as string} alt="credit_card" />
        </div>
        <div className="mt-4">
          <Image src={creditBullets as string} alt="bullets" />
        </div>
      </div>
      <div className="w-1/2">
        <Image src={background} alt="brush_picture" className="z-10" />
        <div className={`button_container relative bottom-28 left-16 z-20 w-64`}>
          <OrangeButton text={button_text} className="w-full py-6" link={``} />
        </div>
      </div>
    </div>
  )
}

export default RiskSlide
