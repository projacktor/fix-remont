import React from 'react'
import Image from 'next/image'
import Scroller from '@/components/shared/Scroller/Scroller'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import feedback from '../../../../public/assets/img/feedbacks/feedback1.png'
import videoE from '../../../../public/assets/img/pseudo videos/videoE.png'

function CheckFeedbacks() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-row items-center gap-24">
        <div className="flex h-full flex-col gap-1">
          <div className="relativeh-full">
            <Image src={feedback as unknown as string} alt="response_picture" height="450" />
          </div>
          <div className="w-full">
            <Scroller />
          </div>
        </div>
        <div className="flex h-full w-3/5 flex-col gap-10">
          <div className="relative h-full w-full">
            <Image src={videoE as unknown as string} alt="pseudo_vid" />
          </div>
          <div className="w-full">
            <Scroller />
          </div>
        </div>
      </div>
      <div className={`button_container h-16 w-full`}>
        <CheckButton text="Смотреть все отзывы" link="/feedbacks" />
      </div>
    </div>
  )
}

export default CheckFeedbacks
