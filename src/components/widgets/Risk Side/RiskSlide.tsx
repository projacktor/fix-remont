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
    <div className="relative flex h-[93vh] flex-row items-center gap-4">
      <div className="flex h-full w-1/2 flex-col items-center">
        <div className="mt-4">
          <Image src={creditCardImg as string} alt="credit_card" layout="responsive" />
        </div>
        <div className="mt-4">
          <Image src={creditBullets as string} alt="bullets" layout="responsive" />
        </div>
      </div>
      <div className="relative h-[627px] w-1/2">
        <Image src={background} alt="brush_picture" layout="fill" className="z-10" />
        <div className={`button_container relative left-16 top-[32rem] z-20 w-64`}>
          <OrangeButton text={button_text} className="w-full py-6" link={``} />
        </div>
      </div>
    </div>
  )
}

export default RiskSlide
