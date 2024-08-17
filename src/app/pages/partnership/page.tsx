'use client'
import React from 'react'
import Image from 'next/image'
import openLink from '@/functions/openLink'

import plannerImage from '../../../../public/assets/img/planner img/plannerImg2.png'
import pseudoVid from '../../../../public/assets/img/pseudo videos/pseudoVid.png'
import materialsImg from '../../../../public/assets/img/creditCardMaterials.png'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import Consulting from '@/components/widgets/Consulting/Consulting'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import FaqSection from '@/components/widgets/Faq Section/FaqSection'
import ToBlog from '@/components/widgets/To blog/ToBlog'
import SocialMedia from '@/components/widgets/Social Media/SocialMedia'
import Responsibility from '@/components/widgets/Responsibility/Responsibility'
import GroupPhoto from '@/components/widgets/GroupPhoto/GroupPhoto'
import CheckFeedbacks from '@/components/widgets/CheckFeedbacks/CheckFeedbacks'
import GalleryWithFeedback from '@/components/widgets/Gallery with feedback/GalleryWithFeedback'
import RiskSlide from '@/components/widgets/Risk Side/RiskSlide'
import Planner from '@/components/widgets/Planner/Planner'
import TapeSection from '@/components/shared/Tape Section/TapeSection'
import HoverSection from '@/components/shared/Hover section/HoverSection'
import contactIcon from '../../../../public/assets/svg/TapeSection icons/contactIcon.svg'
import rublIcon from '../../../../public/assets/svg/TapeSection icons/rublIcon.svg'
import shieldIcon from '../../../../public/assets/svg/TapeSection icons/shiledIcon.svg'
import lampIcon from '../../../../public/assets/svg/TapeSection icons/lampIcon.svg'
import flagIcon from '../../../../public/assets/svg/TapeSection icons/flagIcon.svg'
import bg from '../../../../public/assets/img/partnershipBackground.png'
import SuitSection from '@/components/widgets/Suit section/SuitSection'
import Predict from '@/components/widgets/Predict/Predict'
import OrganazingGallery from '@/components/widgets/Organizing Gallery/OrganazingGallery'
import Transparency from '@/components/widgets/Transparency/Transparency'
import Reasons from '@/components/widgets/Reasons/Reasons'
import Crumb from '@/components/shared/Crumb/Crumb'

const Partnership = () => {
  const path = ['Партнерская программа']
  const links = ['/pages/partnership']
  return (
    <main className="flex flex-col gap-14">
        <div className="mb-8">
            <Crumb path={path} links={links} />
        </div>
        <div className="relative h-[41rem] w-full">
        <div className="flex w-full">
          <Image src={bg as string} alt={'background'} className="w-[69%]" />
          <h1 className="heading absolute bottom-24 left-20 text-white">
            Зарабатывайте 10% <br /> комиссию с каждой <br /> сделки FIX-ремонт
          </h1>
          <div className="ml-5 flex h-[27rem] w-[27rem] flex-col items-center justify-between rounded-[32px] bg-color-dark p-11">
            <h2 className="leading-tighter text-2xl font-semibold text-white">
              Партнерская программа
              <br />
              от первого в России
              <br />
              онлайн-сервиса по ремонту и строительству с фиксированной ценой
            </h2>
            <div className="button_container w-full text-xs">
              <OrangeButton text="Зарегистрироваться, как партнёр" link="" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-[46rem] flex justify-between gap-6">
          <HoverSection
            name={'Риэлторам'}
            link={''}
            text={
              <p>
                Без визитов на объект. <br /> Заезжайте в готовую <br /> квартиру уже через <br />{' '}
                6-8 месяцев
              </p>
            }
          />
          <HoverSection
            name={'Застройщикам'}
            link={''}
            text={
              <p>
                Без визитов на объект. <br /> Заезжайте в готовую <br /> квартиру уже через <br />{' '}
                6-8 месяцев
              </p>
            }
          />
          <HoverSection
            name={'Физическим лицам'}
            link={''}
            text={
              <p>
                Без визитов на объект. <br /> Заезжайте в готовую <br /> квартиру уже через <br />{' '}
                6-8 месяцев
              </p>
            }
          />
        </div>
      </div>

      <div className={`flex flex-row gap-3`}>
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
          svg={rublIcon as string}
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
          svg={flagIcon as string}
          altName={'flagIcon'}
          text={
            <p>
              Всё берем на себя <br /> и работаем под ключ
            </p>
          }
        />
      </div>

      <SuitSection />

      <Predict />

      <Planner
        planner_img={plannerImage as string}
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

      <OrganazingGallery />

      <Transparency />

      <RiskSlide button_text="Рассчитать стоимость" background={materialsImg as string} />

      <Reasons
        head_text={
          <h1 className="heading">
            Избавим ваших клиентов <br /> <span className="orange-bold">от типичных проблем</span>{' '}
            <br /> ремонта квартиры:
          </h1>
        }
      />

      <GalleryWithFeedback />

      <CheckFeedbacks />

      <GroupPhoto />

      <Responsibility />

      <SocialMedia />

      <div className="pseudo_vid">
        <img alt="pseudo_video" src={pseudoVid as string} className="h-auto w-full" />
      </div>

      <ToBlog />

      <FaqSection />

      <Consulting />

      <SeoPart />
    </main>
  )
}

export default Partnership
