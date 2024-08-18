import React from 'react'
import Image from 'next/image'
import CheckButton from '../../shared/buttons/Check Button/CheckButton'
import benefitsBulletsLight from '../../../../public/assets/img/benefitsBulletsLight.png'
import benefitsBulletsDark from '../../../../public/assets/img/benefitsBulletsDarck.png'
import TapeSection from '@/components/shared/Tape Section/TapeSection'
import frst from '../../../../public/assets/svg/digit icons/01.svg'
import scnd from '../../../../public/assets/svg/digit icons/02.svg'
import thrd from '../../../../public/assets/svg/digit icons/03.svg'
import frth from '../../../../public/assets/svg/digit icons/04.svg'
import ffth from '../../../../public/assets/svg/digit icons/05.svg'
import sxth from '../../../../public/assets/svg/digit icons/06.svg'
import NumberTapeSection from '@/components/shared/Number TapeSection/NumberTapeSection'

function BenefitsSlide() {
  return (
    <div className="flex w-full">
      <div className="relative w-1/2">
        <div className="sticky top-[10px] space-y-8">
          <h1 className="heading">
            Выгода работы <br /> с нами очевидна
          </h1>
          <div className="button_container h-16 w-[28rem]">
            <CheckButton text="Стать партнёром" />
          </div>
        </div>
      </div>
      <div className="flex w-1/2 flex-col gap-2">
        <h1 className="heading">Для вас:</h1>
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <NumberTapeSection
            svg={frst}
            altName={'first'}
            text={'Дополнительный доход от 50 000 руб за сделку'}
          />
          <NumberTapeSection
            svg={scnd}
            altName={'second'}
            text={'Увеличите общее количество сделок'}
          />
          <NumberTapeSection
            svg={thrd}
            altName={'third'}
            text={'Кратно повысите уровень своего сервиса'}
          />
          <NumberTapeSection
            svg={frth}
            altName={'fourth'}
            text={'Повысите лояльность, благодаря специальным предложениям'}
          />
          <NumberTapeSection
            svg={ffth}
            altName={'fifth'}
            text={'Повысите свой уровень конкурентоспособности'}
          />
          <NumberTapeSection
            svg={sxth}
            altName={'sixth'}
            text={'И всё это без рисков для репутации, так как мы берём всё на себя!'}
          />
        </div>
        <h1 className="heading">Для ваших клиентов:</h1>
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <NumberTapeSection
            svg={frst}
            altName={'first'}
            text={'Избавятся от долгого подбора материала и подсчётов бюджета'}
            mode={false}
          />
          <NumberTapeSection
            svg={scnd}
            altName={'second'}
            text={'Не нужно искать проверенную бригаду'}
            mode={false}
          />
          <NumberTapeSection
            svg={thrd}
            altName={'third'}
            text={'Не нужно заниматься организацией работ'}
            mode={false}
          />
          <NumberTapeSection
            svg={frth}
            altName={'fourth'}
            text={'Не нужно постоянно контролировать процессы'}
            mode={false}
          />
          <NumberTapeSection
            svg={ffth}
            altName={'fifth'}
            text={'Не нужно регулярно закупать и доставлять материалы'}
            mode={false}
          />
          <NumberTapeSection
            svg={sxth}
            altName={'sixth'}
            text={'И больше никаких ссор в семье на нервной почве!'}
            mode={false}
          />
        </div>
      </div>
    </div>
  )
}

export default BenefitsSlide
