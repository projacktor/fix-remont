import React from 'react'
import Image from 'next/image'
import Scroller from '@/components/shared/Scroller/Scroller'
import feedbacksImage from '../../../../public/assets/img/feedbacks.png'

interface FeedbacksGalleryProps {
  head_text: React.ReactNode
}

const FeedbacksGallery: React.FC<FeedbacksGalleryProps> = ({ head_text }) => {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="heading w-full text-left">{head_text}</div>
      <Image alt="feedbacks" src={feedbacksImage} />
      <div className="w-full">
        <Scroller />
      </div>
    </div>
  )
}

export default FeedbacksGallery
