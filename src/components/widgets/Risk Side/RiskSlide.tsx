import React from 'react'
import Image from 'next/image'

import style from './riskSlide.module.scss'

import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'

import tick from '../../../../public/assets/svg/tickBlack.svg'

interface RiskSlideProps {
  button_text: string
  type: boolean
}

function RiskSlide({ button_text, type }: RiskSlideProps) {
  return (
    <section className="flex w-full flex-row items-center justify-center gap-4 overflow-hidden">
      <div className="flex w-1/2 flex-col justify-between self-stretch">
        <div
          className={`flex w-full flex-col items-start gap-y-6 rounded-3xl px-14 py-10 ${style.creditBg}`}
        >
          <h1 className="headingStruct w-[30rem] text-6xl text-white">
            {type
              ? 'Берём все финансовые риски на себя'
              : 'Берём все финансовые и репутационные риски на себя'}
          </h1>
          <h5 className={`${type ? 'w-80' : 'w-[32rem]'} text-lg font-normal text-white`}>
            В случае брака, дефектов или оплоншностей мастеров.
          </h5>
          <h5 className={`${type ? 'w-80' : 'w-[32rem]'} text-lg font-normal text-white`}>
            Устраним все проблемы и решим вопросы как с соседями, так и с управляющей компанией.
          </h5>
        </div>

        <div
          className={`gird-rows-2 grid w-full grid-cols-3 gap-y-5 px-8 text-xs font-light text-[#808080]`}
        >
          <div className="flex flex-row items-center gap-x-3">
            <Image src={tick as string} alt="tick" width={20} />
            <p className="w-[8.88rem]">Цены уже рассчитаны, а материалы подобраны и закуплены</p>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <Image src={tick as string} alt="tick" width={20} />
            <p className="w-[11rem]">Даём юридическую гарантию сроков и качества</p>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <Image src={tick as string} alt="tick" width={20} />
            <p className="w-[9.3rem]">Независимый Технадзор и тройной контроль</p>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <Image src={tick as string} alt="tick" width={20} />
            <p className="w-[9.3rem]">Все бригады работают по единому регламенту</p>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <Image src={tick as string} alt="tick" width={20} />
            <p className="w-[9.3rem]">Следите за ходом работ в режиме онлайн</p>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <Image src={tick as string} alt="tick" width={20} />
            <p className="w-[9.3rem]">От вас не потребуется никаких визитов</p>
          </div>
        </div>
      </div>
      <div
        className={`flex w-1/2 flex-col justify-between gap-y-24 rounded-3xl px-16 py-10 ${type ? style.rightBg1 : style.rightBg2}`}
      >
        <div className="flex flex-col gap-y-5">
          <h1 className={`headingStruct leading-tighter w-[33rem] text-6xl text-color-dark`}>
            {type ? (
              <>
                Стоимость для вас <span className="orange-bold">не измениться,</span> даже при
                взлёте цен на метриалы
              </>
            ) : (
              <>Независимый и мотивированный ТехНадзор + тройной контроль </>
            )}
          </h1>
          <h5
            className={`${type ? 'w-[29rem]' : 'w-96'} text-lg font-normal tracking-tighter text-gray-400`}
          >
            {type
              ? 'Мы всё предусмотрели: материалы закуплены заранее, а бригады готовы выехать на объект любой момент'
              : 'Наши специалисты по ТехНадзору финансово мотивированы найти как можно больше недочетов'}
          </h5>
        </div>
        <div className={`button_container w-64`}>
          <OrangeButton text={button_text} className="w-full py-6" link={`/calculator/step1`} />
        </div>
      </div>
    </section>
  )
}

export default RiskSlide
