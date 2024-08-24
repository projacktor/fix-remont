import React from 'react'
import Image from 'next/image'

import clock from '../../../../public/assets/svg/clock.svg'

function CalcHeading() {
  return (
    <>
      <div className="flex w-full flex-row items-end justify-between">
        <section className="space-y-4">
          <h1 className="headingStruct text-4xl">
            Соберите <span className="orange-bold">ремонт</span> своей мечты
            <br />и узнайте его полную стоимость
          </h1>
          <p className="headingStruct">
            под ваши пожелания и бюджет, ответив на несколько вопросов
          </p>
        </section>

        <div className="flex flex-row items-center space-x-4 font-normal">
          <Image src={clock as string} alt="clock" />
          <span className="headingStruct">
            5 минут - среднее время <br /> заполнения анкеты
          </span>
        </div>
      </div>
      <hr className="" />
    </>
  )
}

export default CalcHeading
