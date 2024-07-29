import React from 'react';
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton';
import BlackButton from '@/components/shared/buttons/Black Button/BlackButton';

import style from './megabox.module.scss';
import HoverSection from '@/components/shared/Hover section/HoverSection';

function MegaboxSection() {
  return (
    <div className="flex min-h-screen w-full flex-row items-center gap-6">
      <div
        className={`${style.bg} max-w-1/2 min-h-[92svh] w-[95svw] rounded-xl bg-cover bg-center`}
      >
        <p className="relative left-9 top-44 ml-8 mt-32 w-3/5 text-4xl font-medium leading-tight tracking-tight text-white">
          Первый в России <br />
          онлайн-сервис <br />
          по ремонту и строительству <br />с фиксированной стоимостью
        </p>
      </div>

      <div className="max-w-1/2 flex w-1/2 flex-col items-center gap-7">
        <div className="flex w-full flex-col gap-40 rounded-3xl bg-color-dark p-10">
          <p className="text-2xl font-medium leading-snug tracking-tight text-white">
            Воплотим вашу
            <br />
            мечту в реальность
            <br /> без визитов на
            <br /> объект
          </p>
          <div
            className={`${style.button_container} flex flex-row items-center space-x-8`}
          >
            <OrangeButton text="Онлайн-калькулятор" link="" />
            <BlackButton text="Стать партнёром" link="" />
          </div>
        </div>

        <div className="flex flex-row gap-7">
          <HoverSection
            name="Ремонт"
            text={
              <p>
                Без визитов на объект. <br /> Заезжайте в готовую <br />{' '}
                квартиру уже через <br /> 6-8 месяцев
              </p>
            }
            link={''}
          />
          <HoverSection
            name="Строительство"
            text={
              <p>
                Без визитов на объект. <br /> Заезжайте в готовую <br />{' '}
                квартиру уже через <br /> 6-8 месяцев
              </p>
            }
            link={''}
          />
          <HoverSection
            name="Партнерская программа"
            text={
              <p>
                Подходит для физ.лиц, <br /> застройщиков, <br /> риелторов
              </p>
            }
            link={''}
          />
        </div>
      </div>
    </div>
  );
}

export default MegaboxSection;
