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
    <section className="relative flex flex-row items-center justify-center gap-4">
      <div className="flex w-1/2 flex-col justify-around self-stretch">
        <Image src={creditCardImg as unknown as string} alt="credit_card" quality={100} />
        <Image src={creditBullets as unknown as string} alt="bullets" quality={100} />
      </div>
      <div className="flex h-auto w-1/2">
        <Image src={background} alt="brush_picture" className="relative" quality={100} />
        <div className={`button_container absolute bottom-14 right-96 w-64`}>
          <OrangeButton text={button_text} className="w-full py-6" link={`/calculator/step1`} />
        </div>
      </div>
    </section>
  )
}

export default RiskSlide
