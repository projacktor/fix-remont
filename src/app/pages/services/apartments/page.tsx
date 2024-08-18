'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import TapeSection from '@/components/shared/Tape Section/TapeSection'
import FavoriteBusiness from '@/components/widgets/Favorite Business/FavoriteBusiness'
import RiskSlide from '@/components/widgets/Risk Side/RiskSlide'
import ReasonsList from '@/components/widgets/Reasons List/ReasonsList'
import GalleryWithFeedback from '@/components/widgets/Gallery with feedback/GalleryWithFeedback'
import CheckFeedbacks from '@/components/widgets/CheckFeedbacks/CheckFeedbacks'
import Planner from '@/components/widgets/Planner/Planner'
import GroupPhoto from '@/components/widgets/GroupPhoto/GroupPhoto'
import Responsibility from '@/components/widgets/Responsibility/Responsibility'
import SocialMedia from '@/components/widgets/Social Media/SocialMedia'
import ToBlog from '@/components/widgets/To blog/ToBlog'
import FaqSection from '@/components/widgets/Faq Section/FaqSection'
import Consulting from '@/components/widgets/Consulting/Consulting'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import RenovationHeader from '@/components/widgets/Renovation Header/RenovationHeader'
import Crumb from '@/components/shared/Crumb/Crumb'
import SelfRenovation from '@/components/widgets/Self Renovation/SelfRenovation'
import Comparison from '@/components/widgets/Comparison/Comparison'
import SelfRenovationGallery from '@/components/widgets/Self Renovation Gallery/SelfRenovationGallery'

import creditImg from '../../../../../public/assets/img/creditImg.png'
import plannerImg1 from '../../../../../public/assets/img/planner img/plannerImg1.png'
import pseudoVid from '../../../../../public/assets/img/pseudo videos/pseudoVid.png'
import renovationHeaderBackground from '../../../../../public/assets/img/headBannerRenovationService.png'
import materialsImg from '../../../../../public/assets/img/creditCardMaterials.png'
import contactIcon from '../../../../../public/assets/svg/TapeSection icons/contactIcon.svg'
import rublIcon from '../../../../../public/assets/svg/TapeSection icons/rublIcon.svg'
import shieldIcon from '../../../../../public/assets/svg/TapeSection icons/shiledIcon.svg'
import lampIcon from '../../../../../public/assets/svg/TapeSection icons/lampIcon.svg'
import flagIcon from '../../../../../public/assets/svg/TapeSection icons/flagIcon.svg'

const RenovationService = () => {
  const path = ['Услуги', 'Ремонт квартир']
  const links = ['/pages/services', '/pages/services/apartments']
  return (
    <main className="flex flex-col gap-10">
      <Crumb path={path} links={links} />
      <RenovationHeader
        image={renovationHeaderBackground as unknown as string}
        header1={<h1>Ремонт квартир под ключ по готовым проектам и с фиксированной ценой</h1>}
        header2="Заселитесь в квартиру мечты с мебелью в течение 3-х месяцев"
      />
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

      <SelfRenovation />

      <ReasonsList
        head_text={
          <h1 className="heading">
            <span className="orange-bold">
              Избавим вас от <br /> типичных проблем
            </span>{' '}
            <br /> ремонта квартиры:
          </h1>
        }
      />

      <RiskSlide button_text="Рассчитать стоимость" background={materialsImg as unknown as string} />

      <Comparison />

      <FavoriteBusiness />

      <Link href="" className="w-full">
        <Image alt="credit" src={creditImg as unknown as string} className="w-full" />
      </Link>

      <GalleryWithFeedback />

      <CheckFeedbacks />

      <Planner
        planner_img={plannerImg1 as unknown as string}
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

      <GroupPhoto />

      <Responsibility />

      <SocialMedia />

      <SelfRenovationGallery />

      {/*<LongBlock />*/}

      <Image src={pseudoVid as unknown as string} alt={'pseudo_vidio'} />

      <ToBlog />

      <FaqSection />

      <Consulting />

      <SeoPart />
    </main>
  )
}

export default RenovationService
