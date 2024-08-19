import React from 'react'
import Image from 'next/image'
import Scroller from '@/components/shared/Scroller/Scroller'
import feedback from '../../../../public/assets/img/renovationFeedback.webp'

function SelfRenovation() {
  return (
    <div className="flex w-full flex-col items-center gap-24">
      <div className="flex w-full flex-col gap-4">
        <h1 className="heading">
          О чём с <span className="orange-bold">грустью рассказывают</span> те,
          <br /> кто делал ремонт самостоятельно?
        </h1>
        <p className="text-md font-normal">
          сотни подобных историй от наших клиентов со всей страны мы слышим регулярно
        </p>
      </div>
      <div className="flex w-full flex-col gap-12">
        <div className="flex h-32 w-full flex-row items-center justify-around gap-12">
          <Image
            alt="feedback"
            src={feedback as unknown as string}
            width={450}
            height={300}
            className=""
          />
          <Image
            alt="feedback"
            src={feedback as unknown as string}
            width={450}
            height={300}
            className=""
          />
          <Image
            alt="feedback"
            src={feedback as unknown as string}
            width={450}
            height={300}
            className=""
          />
        </div>
        <Scroller />
      </div>
    </div>
  )
}

export default SelfRenovation
