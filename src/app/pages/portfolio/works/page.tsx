'use client'

import React from 'react'
import Image from 'next/image'
import Die from '@/components/entities/Die/Die'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import WorksGallery from '@/components/widgets/Works Gallery/WorksGallery'
import Consulting from '@/components/widgets/Consulting/Consulting'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import Minibar from '@/components/entities/Minibar/Minibar'
import MinibarVideo from '@/components/entities/MinibarVideo/MinibarVideo'
import VideoGallery from '@/components/widgets/Video Gallery/VideoGallery'
import projPic1 from '../../../../../public/assets/img/projects img/projPicture1.png'
import projPic2 from '../../../../../public/assets/img/projects img/projPicture2.png'
import Crumb from '@/components/shared/Crumb/Crumb'

const Work1: React.FC = () => {
  const path = ['Портфолио', 'Дом из кирпича 560 м2 на Барвихе']
  const links = ['/pages/dashboard/portfolio', '/pages/dashboard/portfolio/works']
  return (
    <main className="flex h-full w-full flex-col">
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-start gap-4 p-4">
          <Crumb path={path} links={links} />
          <h1 className="heading">Дом из кирпича 560 м2 на Барвихе</h1>
          <div className="flex flex-row items-center justify-around gap-8">
            <Minibar desc_name="Сроки" desc_content="15 дней" />
            <Minibar desc_name="Стоимость" desc_content="2 500 000 руб" />
            <Minibar desc_name="Площадь объекта" desc_content="240 м2" />
            <MinibarVideo desc_content="1:25 мин" />
          </div>
          <Image src={projPic1} alt="Project picture" />
          <div className="relative bottom-[45rem] left-12 flex items-center">
            <Die text="СТРОИТЕЛЬСТВО ДОМОВ" />
          </div>
          <div className="my-4 flex w-full justify-center">
            <VideoGallery />
          </div>
          <Image src={projPic2} alt="projectPic2" />
          <div className="flex w-full flex-col p-8">
            <h2>Задача:</h2>
            <p className="w-4/5">
              Театр, специализирующийся на разнообразных представлениях, выразил желание
              усовершенствовать свои технические возможности для привлечения новой аудитории и
              создания незабываемых визуальных впечатлений. Заказчик искал комплексное решение для
              обновления мультимедийного оборудования на сцене и в зрительном зале.
            </p>
            <h2>Ход работы:</h2>
            <p className="w-4/5">
              <b>Анализ потребностей и проектирование.</b>
              <br />
              Начали с тщательного анализа потребностей театра и его амбиций. Определили желаемые
              эффекты, аудиовизуальные элементы, типы представлений и ожидаемую аудиторию.
              <br />
              <br />
              Составили подробный проект, включающий спецификации оборудования, схемы подключения,
              расчет освещения и звука, размещение экранов и проекторов. Учли акустические
              особенности зала и оптимальное размещение технических систем.
              <br />
              <br />
              <b>Подбор оборудования.</b>
              <br />
              Определение наилучших производителей и моделей оборудования, учитывая баланс между
              качеством и бюджетом. Выбрали проекторы высокой разрешающей способности, звуковые
              системы с четким и мощным звучанием, а также подвижные световые приборы для динамичных
              эффектов.
              <br />
              <br />
              <b>Производство.</b>
              <br />
              Определение наилучших производителей и моделей оборудования, учитывая баланс между
              качеством и бюджетом. Выбрали проекторы высокой разрешающей способности, звуковые
              системы с четким и мощным звучанием, а также подвижные световые приборы для динамичных
              эффектово.
              <br />
              <br />
              <b>Тестирование и обучение персонала.</b>
              <br />
              Провели комплексное тестирование оборудования перед открытием для публики. Провели
              обучение персонала театра по работе с новой техникой, чтобы максимально эффективно
              использовать ее на представлениях.
            </p>
          </div>
          <div className="flex w-full flex-col gap-5 p-8">
            <h2 className="text-lg font-bold">Результат:</h2>
            <Image src={projPic2} alt="projectPic2" className="w-11/12" />
          </div>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col items-center">
        <h1 className={'heading'}>Другие реализованные проекты</h1>
        <WorksGallery />
        <CheckButton text="Смотреть все портфолио" link="/portfolio" />
      </div>
      <Consulting />
      <SeoPart />
    </main>
  )
}

export default Work1
