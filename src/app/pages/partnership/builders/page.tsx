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

import plannerImage from '../../../../../public/assets/img/planner img/plannerImg2.png'
import pseudoVid from '../../../../../public/assets/img/pseudo videos/pseudoVid.png'
import renovationHeaderBackground from '../../../../../public/assets/img/headBannerPartnershipBuilders.png'
import reputationIcon from '../../../../../public/assets/svg/TapeSection icons/reputationIcon.svg'
import tickIcon from '../../../../../public/assets/svg/TapeSection icons/tickIcon.svg'
import contactIcon from '../../../../../public/assets/svg/TapeSection icons/contactIcon.svg'
import shieldIcon from '../../../../../public/assets/svg/TapeSection icons/shiledIcon.svg'
import lampIcon from '../../../../../public/assets/svg/TapeSection icons/lampIcon.svg'
import cooperation from '../../../../../public/assets/img/cooperation.png'

function Realtors() {
  const path = ['Партнёрская программа', 'Застройщикам']
  const links = ['/pages/partnership', '/pages/partnership/builders']
  return (
    <main className="flex flex-col space-y-8">
      <section className="relative flex w-full bg-cover bg-center">
        <div className="flex flex-col gap-8">
          <div className="absolute left-20 top-12">
            <Crumb path={path} links={links} mode={true} />
          </div>
          <Image
            src={renovationHeaderBackground as unknown as string}
            alt="background"
            quality={100}
          />
          <h1 className="headingStruct absolute bottom-24 left-20 max-w-[42rem] text-5xl text-white">
            Продавайте квартиры с готовым ремонтом по фиксированной цене от FIX-ремонт
          </h1>
          <div className="absolute bottom-[-0.1rem] right-[1rem] flex w-[33rem] flex-col space-y-14 rounded-3xl bg-color-dark p-11">
            <h2 className="max-w-[19rem] text-2xl font-normal tracking-tighter text-white">
              Повысьте качество ваших объектов и дополнительно зарабатывайте на <br /> “ремонте в
              ипотеку”
            </h2>
            <Link href={''} className="text-base font-medium text-color-orange underline">
              Подробнее
            </Link>
            <div className="button_container h-16 w-full">
              <OrangeButton text="Онлайн-калькулятор" link="" className="text-base" />
            </div>
          </div>
        </div>
      </section>

      <section className={`flex w-full flex-row justify-around gap-4`}>
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
      </section>

      <DesignSlide />

      <BenefitsSlide />

      <Predict />

      <RiskSlide button_text="Стать партнером" type={false} />

      <Transparency />

      <div className="space-y-8">
        <h1 className="heading">
          <span className="orange-bold">Как будет выглядеть</span> наше сотрудничество?
        </h1>
        <Image alt="cooperation_picture" src={cooperation as unknown as string} />
      </div>

      <OrganizationGallery />

      <Planner
        planner_img={plannerImage as unknown as string}
        time_text="10 минут"
        p1_text="первой выплаты вознаграждения"
        steps={[
          {
            description: 'Регистрация на платформе',
            time: '2',
            newP2Text:
              'Простая регистрация на платформе для партнёров FIX-ремонт займёт не более 2-х минут вашего времени!'
          },
          {
            description: 'Оформление сделки',
            time: '8',
            newP2Text:
              'Оформление сделки займёт всего 8 минут вашего времени. Всё просто и понятно!'
          },
          {
            description: 'Проведение работ сервисом FIX-ремонт',
            time: '',
            newP2Text:
              'После оформления сделки, наш сервис начнет выполнение работ, чтобы вы могли получить результат как можно быстрее.'
          },
          {
            description: 'Первая выплата',
            time: '',
            newP2Text:
              'Первая выплата поступит сразу после завершения работ и подтверждения их качества.'
          }
        ]}
        p2_text="Простая регистрация на платформе для партнёров FIX-ремонт займёт не более 2-х минут вашего времени!" // Изначальный текст
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
