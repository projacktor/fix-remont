import React from 'react'
import Image from 'next/image'

import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'

import creditCardImg from '../../../../public/assets/img/creditCardImg.png'
import creditBullets from '../../../../public/assets/img/creditBullets.png'

interface RiskSlideProps {
  button_text: string
  background: string
}

function RiskSlide({ button_text, background }: RiskSlideProps) {
  return (
    <div className="relative flex flex-row items-center justify-center gap-4">
      <div className="flex w-1/2 flex-col justify-around self-stretch">
        <Image src={creditCardImg as unknown as string} alt="credit_card" />
        <Image src={creditBullets as unknown as string} alt="bullets" />
      </div>
      <div className="flex h-auto w-1/2">
        <Image src={background} alt="brush_picture" className="relative" />
        <div className={`button_container absolute bottom-14 right-96 w-64`}>
          <OrangeButton text={button_text} className="w-full py-6" link={``} />
        </div>
      </div>
    </div>
  )
}

export default RiskSlide
