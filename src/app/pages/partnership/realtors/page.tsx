'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import TapeSection from '@/components/shared/Tape Section/TapeSection'
import Predict from '@/components/widgets/Predict/Predict'
import RiskSlide from '@/components/widgets/Risk Side/RiskSlide'
import Transparency from '@/components/widgets/Transparency/Transparency'
import OrganizationGallery from '@/components/widgets/Organizing Gallery/OrganazingGallery'
import Planner from '@/components/widgets/Planner/Planner'
import FeedbacksGallery from '@/components/widgets/Feedbacks gallery/FeedbacksGallery'
import Responsibility from '@/components/widgets/Responsibility/Responsibility'
import CheckFeedbacks from '@/components/widgets/CheckFeedbacks/CheckFeedbacks'
import GalleryWithFeedback from '@/components/widgets/Gallery with feedback/GalleryWithFeedback'
import GroupPhoto from '@/components/widgets/GroupPhoto/GroupPhoto'
import SocialMedia from '@/components/widgets/Social Media/SocialMedia'
import ToBlog from '@/components/widgets/To blog/ToBlog'
import FaqSection from '@/components/widgets/Faq Section/FaqSection'
import Consulting from '@/components/widgets/Consulting/Consulting'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import Crumb from '@/components/shared/Crumb/Crumb'
import DesignSlide from '@/components/widgets/Design Slide/DesignSlide'
import BenefitsSlide from '@/components/widgets/Benefits Slide/BenefitsSlide'
import PaymentSlide from '@/components/widgets/Payment Slide/PaymentSlide'

import plannerImage from '../../../../../public/assets/img/planner img/plannerImg2.png'
import pseudoVid from '../../../../../public/assets/img/pseudo videos/pseudoVid.png'
import renovationHeaderBackground from '../../../../../public/assets/img/headBannerPartnershipRealtors.png'
import reputationIcon from '../../../../../public/assets/svg/TapeSection icons/reputationIcon.svg'
import tickIcon from '../../../../../public/assets/svg/TapeSection icons/tickIcon.svg'
import contactIcon from '../../../../../public/assets/svg/TapeSection icons/contactIcon.svg'
import shieldIcon from '../../../../../public/assets/svg/TapeSection icons/shiledIcon.svg'
import lampIcon from '../../../../../public/assets/svg/TapeSection icons/lampIcon.svg'
import riskBackground from '../../../../../public/assets/img/riskBackground2.png'

function Realtors() {
  const path = ['Партнёрская программа', 'Риелторам']
  const links = ['/pages/partnership', '/pages/partnership/realtors']
  return (
    <main className="flex flex-col space-y-8">
      <div className="flex w-full bg-cover bg-center">
        <div className="flex flex-col gap-8">
          <Crumb path={path} links={links} />
          <Image
            src={renovationHeaderBackground as unknown as string}
            alt="background"
            className="relative"
          />
          <div className="heading absolute bottom-[1rem] left-[8rem] max-w-lg text-white">
            <h1 className="headingStruct text-4xl">
              Приводите клиентов на ремонт с фикс ценой и зарабатывайте от 1000 руб/м² с каждой
              сделки
            </h1>
          </div>
          <div className="absolute bottom-[-4.75rem] right-[4rem] flex w-[26rem] flex-col space-y-7 rounded-3xl bg-color-dark p-8">
            <h2 className="max-w-[18rem] text-2xl font-normal tracking-tighter text-white">
              Обеспечим ваших клиентов сервисом и услугой высшего уровня без рисков для репутации
            </h2>
            <Link href={''} className="text-color-orange underline">
              Подробнее
            </Link>
            <div className="button_container h-16 w-full">
              <OrangeButton text="Зарегистрироваться как партнер" link="" />
            </div>
          </div>
        </div>
      </div>

      <div className={`flex flex-row gap-4`}>
        <TapeSection
          svg={contactIcon as string}
          altName={'contactIcon'}
          text={
            <p>
              Без визитов <br /> на объект
            </p>
          }
        />
        <TapeSection
          svg={reputationIcon as string}
          altName={'rublIcon'}
          text={
            <p>
              100% гарантия фиксированной <br /> сметы
            </p>
          }
        />
        <TapeSection
          svg={shieldIcon as string}
          altName={'shieldIcon'}
          text={
            <p>
              Все финансовые риски берём <br /> на себя
            </p>
          }
        />
        <TapeSection
          svg={lampIcon as string}
          altName={'lampIcon'}
          text={
            <p>
              36 готовых <br /> дизнай-проектов
            </p>
          }
        />
        <TapeSection
          svg={tickIcon as string}
          altName={'flagIcon'}
          text={
            <p>
              Всё берем на себя <br /> и работаем под ключ
            </p>
          }
        />
      </div>

      <DesignSlide />

      <BenefitsSlide />

      <Predict />

      <RiskSlide button_text="Стать партнером" background={riskBackground as unknown as string} />

      <Transparency />

      <OrganizationGallery />

      <Planner
        planner_img={plannerImage as unknown as string}
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
          <h1 className="heading">
            Посмотрите, <span className="orange-bold">что говорят о нас</span> наши текущие партнёры
          </h1>
        }
      />

      <Responsibility />

      <GalleryWithFeedback />

      <CheckFeedbacks />

      <PaymentSlide />

      <GroupPhoto />

      <SocialMedia />

      <Image src={pseudoVid as unknown as string} alt={'pseudo_vidio'} />

      <ToBlog />

      <FaqSection />

      <Consulting />

      <SeoPart />
    </main>
  )
}

export default Realtors
