import React from 'react'
import RenovationHeader from '@/components/widgets/RenovationHeader/RenovationHeader'
import WhiteBullet from '@/components/shared/WhiteBullet/WhiteBullet'
import SelfRenovation from '@/components/widgets/SelfRenovation/SelfRenovation'
import ReasonsList from '@/components/widgets/ReasonsList/ReasonsList'
import Risk from '@/components/widgets/Risk/Risk'
import Comparison from '@/components/widgets/Comparison/Comparison'
import FavoriteBusiness from '@/components/widgets/FavoriteBusiness/FavoriteBusiness'
import WorksGallery from '@/components/widgets/WorksGallery/WorksGallery'
import CheckFeedbacks from '@/components/widgets/CheckFeedbacks/CheckFeedbacks'
import Planner from '@/components/widgets/Planner/Planner'
import Presentation from '@/components/widgets/Presentation/Presentation'
import Responsibility from '@/components/widgets/Responsibility/Responsibility'
import SocialMedia from '@/components/widgets/SocialMedia/SocialMedia'
import SelfRenovationGallery from '@/components/widgets/SelfRenovationGallery/SelfRenovationGallery'
import LongBlock from '@/components/widgets/LongBlock/LongBlock'
import ToBlog from '@/components/widgets/ToBlog/ToBlog'
import FAQ from '@/components/widgets/FAQ/FAQ'
import EngConsulting from '@/components/widgets/EngConsulting/EngConsulting'
import SeoDiv from '@/components/widgets/SeoDiv/SeoDiv'

import contactIco from '@/public/assets/icons/contactIcon.svg'
import rublIco from '@/public/assets/icons/rublIcon.svg'
import shieledIco from '@/public/assets/icons/shiledIcon.svg'
import lampIco from '@/public/assets/icons/lampIcon.svg'
import flagIco from '@/public/assets/icons/flagIcon.svg'
import creditImg from '@/public/assets/img/creditImg.png'
import responseYandex from '@/public/assets/img/responseYandex.png'
import responseOtzovik from '@/public/assets/img/responseOtzovik.png'
import plannerImg1 from '@/public/assets/img/plannerImg1.png'
import pseudoVid from '@/public/assets/img/pseudoVid.png'
import renovationHeaderBackground from '@/public/assets/img/headBannerRenovationService.png'
import materialsImg from '@/public/assets/img/creditCardMaterials.png'

const RenovationService = () => {
  return (
    <main className="flex flex-col gap-14">
      <RenovationHeader
        image={renovationHeaderBackground}
        header1={<h1>Ремонт квартир под ключ по готовым проектам и с фиксированной ценой</h1>}
        header2="Заселитесь в квартиру мечты с мебелью в течение 3-х месяцев"
      />
      <div className="flex flex-wrap gap-4">
        <WhiteBullet line1="Без визитов" line2="на объект" src={contactIco} />
        <WhiteBullet line1="100% гарантия фиксированной" line2="сметы" src={rublIco} />
        <WhiteBullet line1="Все финансовые риски берем" line2="на себя" src={shieledIco} />
        <WhiteBullet line1="36 готовых" line2="дизайн-проектов" src={lampIco} />
        <WhiteBullet line1="Все берем на себя" line2="и работаем под ключ" src={flagIco} />
      </div>

      <div id="self-renovation" className="w-full">
        <SelfRenovation />
      </div>

      <div id="reasons_list" className="w-full">
        <ReasonsList
          head_text={
            <h1>
              <b>
                Избавим вас от <br /> типичных проблем
              </b>{' '}
              <br /> ремонта квартиры:
            </h1>
          }
        />
      </div>

      <Risk button_text="Рассчитать стоимость" background={materialsImg} />

      <Comparison />

      <FavoriteBusiness />

      <div id="credit" className="w-full">
        <a href="">
          <img alt="credit" src={creditImg} className="w-full" />
        </a>
      </div>

      <div id="home_works_gallery" className="flex flex-col items-center gap-8">
        <div className="text-center">
          <p>Но лучше всего о нас расскажут</p>
          <h1>
            Выполненные работы <br /> и отзывы клиентов{' '}
          </h1>
        </div>
        <div className="flex gap-4">
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
        <WorksGallery />
      </div>

      <CheckFeedbacks />

      <Planner
        planner_img={plannerImg1}
        time_text="1.5 часа"
        p1_text="дома своей мечты"
        step1_description="Выбор подходящего тарифа"
        step1_time="30"
        step2_description="Удобный выбор планировки и материала"
        step2_time="60"
        step3_description="Проведение работ сервисом FIX-ремонт"
        step3_time=""
        step4_description="Получите - распишитесь!:)"
        p2_text="Выбирайте подходящий тариф под ваш бюджет. Цена фиксированная!"
        link_text=""
      />

      <Presentation />

      <Responsibility />

      <SocialMedia />

      <SelfRenovationGallery />

      <LongBlock />

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

export default RenovationService
