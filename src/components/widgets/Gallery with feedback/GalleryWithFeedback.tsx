import React from 'react'
import Image from 'next/image'
import WorksGallery from '@/components/widgets/Works Gallery/WorksGallery'
import responseYandex from '../../../../public/assets/img/responseYandex.png'
import responseOtzovik from '../../../../public/assets/img/responseOtzovik.png'
import Link from 'next/link'

function GalleryWithFeedback() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-full flex-row items-center justify-between font-medium">
        <div className="flex w-1/2 flex-col gap-4">
          <p className={`font-semibold`}>Но лучше всего о нас расскажут</p>
          <h1 className="heading">
            Выполненные работы <br /> и отзывы клиентов
          </h1>
        </div>
        <div className="flex flex-row gap-32">
          <Link
            className="flex flex-row items-baseline gap-5"
            href="https://yandex.ru/maps/org/fix_remont/110403249402/features/?ll=49.192026%2C55.826770&mode=search&sll=48.744609%2C55.752080&sspn=0.090294%2C0.027834&tab=features&text=%D1%84%D0%B8%D0%BA%D1%81%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82&z=12"
            target="_blank"
          >
            <Image
              src={responseYandex as unknown as string}
              alt="yandex_picture"
              width={100}
              height={100}
            />
            <p className="text-xs font-semibold underline">Смотреть отзывы на Яндекс</p>
          </Link>
          <Link className="flex flex-row items-baseline gap-5" href="#" target="_blank">
            <Image
              src={responseOtzovik as unknown as string}
              alt="otzovik_picture"
              width={100}
              height={100}
            />
            <p className="text-xs font-semibold underline">Смотреть отзывы на Отзовик</p>
          </Link>
        </div>
      </div>
      <WorksGallery />
    </div>
  )
}

export default GalleryWithFeedback
