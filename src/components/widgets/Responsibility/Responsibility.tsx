import React from 'react'
import Image from 'next/image'

import ceoPhoto from '../../../../public/assets/img/ceoPhoto.png'

import one from '../../../../public/assets/svg/digit icons/01.svg'
import two from '../../../../public/assets/svg/digit icons/02.svg'
import three from '../../../../public/assets/svg/digit icons/03.svg'
import four from '../../../../public/assets/svg/digit icons/04.svg'

const Responsibility = () => {
  const elems = [
    {
      label: (
        <p>
          25 бригад и более, чем <br /> 30 сотрудников в штате
        </p>
      ),
      image: one
    },
    {
      label: (
        <p>
          Сдаём каждый год более <br /> 150 объектов
        </p>
      ),
      image: two
    },
    {
      label: <p>Работаем без посредников</p>,
      image: three
    },
    {
      label: <p>Был основным подрядчиком компании ТАИФ</p>,
      image: four
    }
  ]

  return (
    <section className="flex w-full flex-row items-center">
      <div className="slef flex w-1/2 flex-col items-start justify-between self-stretch">
        <div className="space-y-5">
          <h1 className="heading m-0">
            Лично{' '}
            <span className="orange-bold">
              несу
              <br />
              ответственность
            </span>
            <br />
            за качество
            <br /> предоставляемых услуг
          </h1>
          <p className="font-semibold">
            За 10 лет мы выполнили более 1 000 объектов и не получили <br />
            ни одной жалобы на качество работы и обслуживания
          </p>
        </div>
        <div className="grid h-max w-full flex-grow grid-cols-2 grid-rows-2 gap-3">
          {elems.map((bullet, index) => (
            <div
              key={index}
              className={`flex min-h-28 min-w-[17rem] flex-col gap-16 rounded-3xl bg-white p-10`}
            >
              <Image alt="bullet number" src={bullet.image as string} className={`self-end`} />
              <span className={`max-w-56 text-sm font-medium leading-5`}>{bullet.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div id="responsibility_right" className="relative flex w-1/2 flex-col items-center">
        <Image
          alt="CEO_picture"
          className="w-[97%]"
          src={ceoPhoto as unknown as string}
          quality={100}
        />
        <div className="absolute bottom-12 left-16 w-36 space-y-4 text-white">
          <h6 className="w-32 text-2xl font-semibold">Фанис Хасанов</h6>
          <p className="text-xs font-light">Генеральный директор FIX-ремонт</p>
        </div>
      </div>
    </section>
  )
}

export default Responsibility
