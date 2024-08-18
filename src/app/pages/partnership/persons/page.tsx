import RenovationHeader from '@/components/widgets/RenovationHeader/RenovationHeader'
import Designs from '@/components/widgets/Designs/Designs'
import Benefits from '@/components/widgets/Benefits/Benefits'
import Transparency from '@/components/widgets/Transparency/Transparency'
import Risk from '@/components/widgets/Risk/Risk'
import WhiteBullet from '@/components/shared/WhiteBullet/WhiteBullet'
import Planner from '@/components/widgets/Planner/Planner'
import FeedbacksGallery from '@/components/widgets/FeedbacksGallery/FeedbacksGallery'
import Responsibility from '@/components/widgets/Responsibility/Responsibility'
import Predict from '@/components/widgets/Predict/Predict'
import OrganizationGallery from '@/components/widgets/OrganizationGallery/OrganizationGallery'
import ToBlog from '@/components/widgets/ToBlog/ToBlog'
import FAQ from '@/components/widgets/FAQ/FAQ'
import EngConsulting from '@/components/widgets/EngConsulting/EngConsulting'
import SeoDiv from '@/components/widgets/SeoDiv/SeoDiv'
import WorksGallery from '@/components/widgets/WorksGallery/WorksGallery'
import CheckFeedbacks from '@/components/widgets/CheckFeedbacks/CheckFeedbacks'
import Payment from '@/components/widgets/Payment/Payment'
import Presentation from '@/components/widgets/Presentation/Presentation'
import SocialMedia from '@/components/widgets/SocialMedia/SocialMedia'

import plannerImage from '@/public/assets/img/plannerImage2.png'
import responseYandex from '@/public/assets/img/responseYandex.png'
import responseOtzovik from '@/public/assets/img/responseOtzovik.png'
import pseudoVid from '@/public/assets/img/pseudoVid.png'
import renovationHeaderBackground from '@/public/assets/img/headBannerPartnershipRealtors.png'
import contactIco from '@/public/assets/icons/contactIcon.svg'
import reputationIco from '@/public/assets/svg/reputation.svg'
import shieledIco from '@/public/assets/icons/shiledIcon.svg'
import lampIco from '@/public/assets/icons/lampIcon.svg'
import tickIco from '@/public/assets/svg/tick.svg'
import riskBackground from '@/public/assets/img/riskBackground2.png'

const Persons = () => {
  return (
    <main className="flex flex-col gap-14">
      <RenovationHeader
        image={renovationHeaderBackground}
        header1={
          <h1 className="w-96">
            Приводите клиентов на ремонт с фикс ценой и зарабатывайте от 1000 руб/м² с каждой сделки
          </h1>
        }
        header2="Партнерская программа от первого в России онлайн-сервиса по ремонту и строительству с фиксированной ценой"
        link_text="Подробнее"
      />

      <div className="flex flex-wrap justify-around gap-4">
        <WhiteBullet line1="Следите за ходом" line2="работ онлайн" src={contactIco} />
        <WhiteBullet line1="Ценим вашу" line2="и свою репутации" src={reputationIco} />
        <WhiteBullet line1="Все финансовые риски берем" line2="на себя" src={shieledIco} />
        <WhiteBullet line1="36 готовых" line2="дизайн-проектов" src={lampIco} />
        <WhiteBullet line1="Обеспечим лучший" line2="сервис для клиента" src={tickIco} />
      </div>

      <Designs />

      <Benefits />

      <Predict />

      <Payment />

      <Risk button_text="Стать партнером" background={riskBackground} />

      <Transparency />

      <OrganizationGallery />

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

      <FeedbacksGallery
        head_text={
          <h1 className="w-full">
            Посмотрите, <b>что говорят о нас</b> наши текущие партнёры
          </h1>
        }
      />

      <Responsibility />

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

export default Persons
