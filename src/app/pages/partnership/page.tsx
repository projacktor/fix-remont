'use client'
import React from 'react'
import Image from 'next/image'

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
import SuitSection from '@/components/widgets/Suit section/SuitSection'
import Predict from '@/components/widgets/Predict/Predict'
import OrganazingGallery from '@/components/widgets/Organizing Gallery/OrganazingGallery'
import Transparency from '@/components/widgets/Transparency/Transparency'
import Reasons from '@/components/widgets/Reasons List/ReasonsList'
import Crumb from '@/components/shared/Crumb/Crumb'

import plannerImage from '../../../../public/assets/img/planner img/plannerImg2.png'
import pseudoVid from '../../../../public/assets/img/pseudo videos/pseudoVid.png'
import contactIcon from '../../../../public/assets/svg/TapeSection icons/contactIcon.svg'
import rublIcon from '../../../../public/assets/svg/TapeSection icons/rublIcon.svg'
import shieldIcon from '../../../../public/assets/svg/TapeSection icons/shiledIcon.svg'
import lampIcon from '../../../../public/assets/svg/TapeSection icons/lampIcon.svg'
import flagIcon from '../../../../public/assets/svg/TapeSection icons/flagIcon.svg'
import bg from '../../../../public/assets/img/partnershipBackground.png'

import style from '@/components/shared/Hover section/hoverSection.module.scss'
import arrow from '../../../../public/assets/svg/linkImg.svg'
import Link from 'next/link'

const Partnership = () => {
  const path = ['Партнерская программа']
  const links = ['/pages/partnership']

  const bullets = [
    {
      label: 'Риэлторам',
      text: (
        <p>
          Заезжайте в готовую <br /> квартиру уже через <br /> 6-8 месяцев
        </p>
      ),
      link: '/pages/partnership/realtors'
    },
    {
      label: 'Застройщикам',
      text: (
        <p>
          Заезжайте в готовую <br /> квартиру уже через <br /> 6-8 месяцев
        </p>
      ),
      link: '/pages/partnership/builders'
    },
    {
      label: 'Физическим лицам',
      text: (
        <p>
          Заезжайте в готовую <br /> квартиру уже через <br /> 6-8 месяцев
        </p>
      ),
      link: '/pages/partnership/persons'
    }
  ]
  return (
    <main className="flex flex-col gap-14">
      <div className="w-full">
        <div className="relative flex w-full">
          <div className="absolute left-12 top-12">
            <Crumb path={path} links={links} mode={true} />
          </div>
          <Image
            src={bg as unknown as string}
            alt={'background'}
            className="w-[69%]"
            quality={100}
          />
          <h1 className="heading absolute bottom-24 left-20 text-white">
            Зарабатывайте 10% <br /> комиссию с каждой <br /> сделки FIX-ремонт
          </h1>
          <div className="ml-5 flex h-[33.5rem] w-[33rem] flex-col items-center justify-between rounded-[32px] bg-color-dark p-11">
            <h2 className="leading-tighter text-3xl font-medium text-white">
              Партнерская программа
              <wbr />
              от первого в России
              <br /> онлайн-сервиса по ремонту и строительству с фиксированной ценой
            </h2>
            <div className="button_container w-full">
              <OrangeButton
                text="Зарегистрироваться, как партнёр"
                link="/server/auth"
                className="text-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-14 right-10 flex flex-row justify-between gap-12">
          {bullets.map((bullet, index) => (
            <Link
              key={index}
              href={bullet.link}
              className={`${style.revert} relative flex min-h-[14rem] w-[15rem] flex-col items-start gap-1 rounded-3xl bg-color-bg-gray px-7 text-color-dark hover:text-white`}
            >
              <div className={`mt-6 flex flex-col items-start gap-2`}>
                <h5 className="text-left text-2xl font-medium leading-5">{bullet.label}</h5>
                <span className={`max-w-44 text-left text-xs font-normal`}>{bullet.text}</span>
              </div>
              <Image
                alt="arrow"
                src={arrow as unknown as string}
                width={40}
                height={40}
                quality={100}
                className={`${style.arrow} absolute bottom-6 right-8`}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className={`flex w-full flex-row justify-around gap-3`}>
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
            newP2Text: 'Оформление сделки на платформе займёт примерно 8 минут.'
          },
          {
            description: 'Проведение работ сервисом FIX-ремонт',
            time: '',
            newP2Text:
              'Процесс проведения работ нашим сервисом зависит от сложности, но вы будете в курсе каждого этапа.'
          },
          {
            description: 'Первая выплата',
            time: '',
            newP2Text:
              'Первая выплата вознаграждения будет произведена сразу после завершения работ.'
          }
        ]}
        p2_text="Простая регистрация на платформе для партнёров FIX-ремонт займёт не более 2-х минут вашего времени!" // Изначальный текст
        link_text="Инструкция по регистрации"
      />

      <OrganazingGallery />

      <Transparency />

      <RiskSlide button_text="Рассчитать стоимость" type={true} />

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
        <Image alt="pseudo_video" src={pseudoVid as unknown as string} className="h-auto w-full" />
      </div>

      <ToBlog />

      <FaqSection />

      <Consulting />

      <SeoPart />
    </main>
  )
}

export default Partnership
