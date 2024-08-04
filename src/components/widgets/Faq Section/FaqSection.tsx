import React from 'react'
import Image from 'next/image'
import SingleFaq from '@/components/entities/Single Faq/SingleFaq'
import whatsappIco from '../../../../public/assets/svg/social media icons/whatsappIcon.svg'
import telegramIco from '../../../../public/assets/svg/social media icons/telegramIcon.svg'
import photo from '../../../../public/assets/img/CEOImg.png'
import Link from 'next/link'

function FaqSection() {
  return (
    <div className="relative flex h-full w-full flex-col justify-around">
      <div className="flex flex-row items-center justify-between">
        <h1 className="order-0 heading">
          Отвечаем на{' '}
          <span className="orange-bold">
            самые частые
            <br /> вопросы
          </span>{' '}
          наших клиентов
        </h1>
        <div className="order-1 flex max-h-[14.2rem] w-1/2 flex-row items-center justify-around rounded-3xl bg-color-dark">
          <Image src={photo as string} alt={'CEO photo picture'} className={`z-10`} />
          <div className={`z-20 flex w-max flex-col items-start justify-around gap-4`}>
            <h4 className="text-3xl font-semibold leading-7 text-white">Фанис Хасанов</h4>
            <p className="text-sm font-light leading-normal text-white">
              Основатель и руководитель FIX-ремонт <br />
              Не нашли свой вопрос? Свяжитесь с нами!
            </p>
            <div className="flex h-1/3 flex-row items-center justify-around gap-2">
              <Link
                href="tel:8 (800) 000-00-00"
                className="h-full text-3xl font-semibold tracking-tighter text-white"
              >
                8 (800) 000-00-00
              </Link>
              <Link href="#">
                <Image className="" src={whatsappIco as string} alt="Whatsapp" width={30} />
              </Link>
              <Link href="#">
                <Image className="" src={telegramIco as string} alt="Telegram" width={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid h-full w-full grid-cols-2 gap-3 p-5">
        {Array(6)
          .fill('')
          .map((_, i) => (
            <SingleFaq key={i} text="Какой срок службы?" />
          ))}
      </div>
    </div>
  )
}

export default FaqSection
