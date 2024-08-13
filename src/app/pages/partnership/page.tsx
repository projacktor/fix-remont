import React from 'react'
import openLink from '@/components/functions/openLink'
import OrangeButton from '@/components/shared/buttons/OrangeButton/OrangeButton'
import HomeBullets from '@/components/widgets/HomeBullets/HomeBullets'
import Suit from '@/components/widgets/Suit/Suit'
import Predict from '@/components/widgets/Predict/Predict'
import Planner from '@/components/widgets/Planner/Planner'
import OrganizationGallery from '@/components/widgets/OrganizationGallery/OrganizationGallery'
import Transparency from '@/components/widgets/Transparency/Transparency'
import Risk from '@/components/widgets/Risk/Risk'
import ReasonsList from '@/components/widgets/ReasonsList/ReasonsList'
import WorksGallery from '@/components/widgets/WorksGallery/WorksGallery'
import CheckFeedbacks from '@/components/widgets/CheckFeedbacks/CheckFeedbacks'
import Presentation from '@/components/widgets/Presentation/Presentation'
import Responsibility from '@/components/widgets/Responsibility/Responsibility'
import SocialMedia from '@/components/widgets/SocialMedia/SocialMedia'
import ToBlog from '@/components/widgets/ToBlog/ToBlog'
import FAQ from '@/components/widgets/FAQ/FAQ'
import EngConsulting from '@/components/widgets/EngConsulting/EngConsulting'
import SeoDiv from '@/components/widgets/SeoDiv/SeoDiv'

import linkImg from '@/public/assets/svg/linkImg.svg'
import plannerImage from '@/public/assets/img/plannerImage2.png'
import responseYandex from '@/public/assets/img/responseYandex.png'
import responseOtzovik from '@/public/assets/img/responseOtzovik.png'
import pseudoVid from '@/public/assets/img/pseudoVid.png'
import materialsImg from '@/public/assets/img/creditCardMaterials.png'

const Partnership = () => {
  return (
    <main className="flex flex-col gap-14">
      <div className="h-[41rem] w-full">
        <div className="flex w-full justify-around">
          <div
            id="left"
            className="h-[40rem] w-[68%] bg-cover"
            style={{ backgroundImage: 'url(/assets/img/partnershipBackground.png)' }}
          >
            <h1 className="relative left-[5rem] top-[26rem] w-[25rem] text-[40px] text-white">
              Зарабатывайте 10% <br /> комиссию с каждой сделки FIX-ремонт
            </h1>
          </div>
          <div
            id="right"
            className="flex h-[22rem] w-[22rem] flex-col items-center rounded-[32px] bg-[#161616] p-[41px]"
          >
            <h2 className="mb-[7rem] mt-0 w-[21rem] leading-[131%] text-white">
              Партнерская программа
              <br />
              от первого в России
              <br />
              онлайн-сервиса по ремонту и строительству с фиксированной ценой
            </h2>
            <OrangeButton text="Зарегистрироваться, как партнёр" link="" />
          </div>
        </div>
        <div id="bottom" className="relative left-[46.5rem] top-[-13rem] w-[43.5em]">
          <div className="flex justify-around">
            <button
              className="section_renovation section_box"
              onClick={openLink('partnership/realtors')}
            >
              <h3 className="renovation_para">Риэлторам</h3>
              <img className="linkImg revertImg" src={linkImg} alt="section_background" />
            </button>
            <button
              className="section_building section_box"
              onClick={openLink('partnership/builders')}
            >
              <h3 className="building_para">Застройщикам</h3>
              <img className="linkImg revertImg" src={linkImg} alt="section_background" />
            </button>
            <button
              className="section_box"
              id="section_partnership"
              onClick={openLink('partnership/persons')}
            >
              <h3 className="building_para">Физическим лицам</h3>
              <img className="linkImg revertImg" src={linkImg} alt="section_background" />
            </button>
          </div>
        </div>
      </div>

      <HomeBullets />

      <Suit />

      <Predict />

      <Planner
        planner_img={plannerImage}
        time_text="10 минут"
        p1_text="первой выплаты вознаграждения"
        step1_description="Регистрация на платформе"
        step1_time="2"
        step2_description="Оформление сделки"
        step2_time="8"
        step3_description="Проведение работ сервисом FIX-ремонт"
        step3_time=""
        step4_description="Первая выплата"
        p2_text="Простая регистрация на платформе для партнёров FIX-ремонт займёт не более 2-х минут вашего времени!"
        link_text="Инструкция по регистрации"
      />

      <OrganizationGallery />

      <Transparency />

      <Risk button_text="Рассчитать стоимость" background={materialsImg} />

      <ReasonsList
        head_text={
          <h1>
            Избавим ваших клиентов <br /> <b>от типичных проблем</b> <br /> ремонта квартиры:
          </h1>
        }
      />

      <div id="home_works_gallery" className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <div id="response_names" className="text-center">
            <p>Но лучше всего о нас расскажут</p>
            <h1>
              Выполненные работы <br /> и отзывы клиентов{' '}
            </h1>
          </div>
          <div id="response_bullets" className="flex gap-4">
            <a
              className="response_bullet"
              target="_blank"
              href="https://yandex.ru/maps/org/fix_remont/110403249402/features/?ll=49.192026%2C55.826770&mode=search&sll=48.744609%2C55.752080&sspn=0.090294%2C0.027834&tab=features&text=%D1%84%D0%B8%D0%BA%D1%81%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82&z=12"
            >
              <img alt="yandex_picture" src={responseYandex} />
              <p>
                <u>Смотреть отзывы на Яндекс</u>
              </p>
            </a>
            <a className="response_bullet response_bullet2" target="_blank">
              <img alt="otzovik_picture" src={responseOtzovik} />
              <p>
                <u>Смотреть отзывы на Отзовик</u>
              </p>
            </a>
          </div>
        </div>
        <WorksGallery />
      </div>

      <CheckFeedbacks />

      <Presentation />

      <Responsibility />

      <SocialMedia />

      <div className="pseudo_vid">
        <img alt="pseudo_video" src={pseudoVid} className="h-auto w-full" />
      </div>

      <ToBlog />

      <FAQ />

      <EngConsulting />

      <SeoDiv />
    </main>
  )
}

export default Partnership
