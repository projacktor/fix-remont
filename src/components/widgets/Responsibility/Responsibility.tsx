import React from 'react'
import Image from 'next/image'

import responsibilityBullits from '../../../../public/assets/img/responsibilityBullits.png'
import ceoPhoto from '../../../../public/assets/img/ceoPhoto.png'

const Responsibility = () => {
  return (
    <div className="flex h-[96vh] w-full flex-row items-center py-12">
      <div className="flex h-full w-1/2 flex-col items-start gap-4">
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
        <Image
          alt="responsibility bullits"
          className="w-full translate-x-[-1rem]"
          src={responsibilityBullits as unknown as string}
        />
      </div>
      <div id="responsibility_right" className="flex w-1/2 flex-col items-center">
        <Image alt="CEO_picture" className="w-[97%]" src={ceoPhoto as unknown as string} />
      </div>
    </div>
  )
}

export default Responsibility
