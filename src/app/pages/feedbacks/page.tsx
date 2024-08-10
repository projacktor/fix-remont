'use client'
import React from 'react'
import Image from 'next/image'

import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import FeedbacksGallery from '@/components/widgets/Feedbacks gallery/FeedbacksGallery'
import WorksGallery from '@/components/widgets/Works Gallery/WorksGallery'
import ToBlog from '@/components/widgets/To blog/ToBlog'
import Consulting from '@/components/widgets/Consulting/Consulting'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import Crumb from '@/components/shared/Crumb/Crumb'

import pseudoVidImage from '../../../../public/assets/img/pseudo videos/pseudoVideoRybakova.png'

const Feedbacks: React.FC = () => {
  const path = ['Отзывы']
  const links = ['/pages/feedbacks']
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-hidden">
      <Crumb path={path} links={links} />
      <div className="w-full text-left">
        <p>С 2013 года нам доверились уже более 10 000 клиентов</p>
        <h1 className="heading">Отзывы наших клиентов</h1>
      </div>

      <div className="flex min-h-screen w-full flex-col items-center">
        <div className="button_container h-16 w-full">
          <CheckButton text="Оставить свой отзыв" link="/feedbacks" />
        </div>
        <div className="grid w-full grid-cols-2 gap-8 p-4">
          <Image src={pseudoVidImage} alt="video_p" className="rounded-3xl" />
          <Image src={pseudoVidImage} alt="video_p" className="rounded-3xl" />
          <Image src={pseudoVidImage} alt="video_p" className="rounded-3xl" />
          <Image src={pseudoVidImage} alt="video_p" className="rounded-3xl" />
        </div>
      </div>

      <FeedbacksGallery head_text={<h1>Отзывы с независимых площадок</h1>} />

      <div className="flex w-full flex-col items-start gap-8">
        <div className="flex w-full flex-col gap-4 text-start">
          <h1 className="heading">
            Работаем <span className="orange-bold">одинаково хорошо</span>
          </h1>
          <p>как на крупных объектах, так и в небольших квартирах</p>
        </div>
        <WorksGallery />
        <div className="button_container h-16 w-full">
          <CheckButton text="Смотреть все работы" link="/portfolio" />
        </div>
      </div>

      <ToBlog />
      <Consulting />
      <SeoPart />
    </main>
  )
}

export default Feedbacks
