'use client'

import Image from 'next/image'

import style from '@/styles/home.module.scss'

import SeoPart from '@/components/widgets/SEO/SeoPart'
import Megabox from '@/components/widgets/Megabox/Megabox'
import FavoriteBusiness from '@/components/widgets/Favorite Business/FavoriteBusiness'
import TapeSection from '@/components/shared/Tape Section/TapeSection'
import RiskSlide from '@/components/widgets/Risk Side/RiskSlide'
import GalleryWithFeedback from '@/components/widgets/Gallery with feedback/GalleryWithFeedback'
import CheckFeedbacks from '@/components/widgets/CheckFeedbacks/CheckFeedbacks'
import Planner from '@/components/widgets/Planner/Planner'
import GroupPhoto from '@/components/widgets/GroupPhoto/GroupPhoto'
import Responsibility from '@/components/widgets/Responsibility/Responsibility'
import SocialMedia from '@/components/widgets/Social Media/SocialMedia'
import ToBlog from '@/components/widgets/To blog/ToBlog'
import FaqSection from '@/components/widgets/Faq Section/FaqSection'

import contactIcon from '../../public/assets/svg/TapeSection icons/contactIcon.svg'
import rublIcon from '../../public/assets/svg/TapeSection icons/rublIcon.svg'
import shieldIcon from '../../public/assets/svg/TapeSection icons/shiledIcon.svg'
import lampIcon from '../../public/assets/svg/TapeSection icons/lampIcon.svg'
import flagIcon from '../../public/assets/svg/TapeSection icons/flagIcon.svg'
import creditCard from '../../public/assets/img/creditImg.png'
import riskBg from '../../public/assets/img/creditCardMaterials.png'
import plannerImg1 from '../../public/assets/img/planner img/plannerImg1.png'
import pseudoVid from '../../public/assets/img/pseudo videos/pseudoVid.png'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Megabox />

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

      <FavoriteBusiness />

      <Image src={creditCard as unknown as string} alt="credit" />

      <RiskSlide button_text="Рассчитать стоимость" background={riskBg as unknown as string} />

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

      <Image src={pseudoVid as unknown as string} alt={'pseudo_vidio'} />

      <ToBlog />

      <FaqSection />

      <SeoPart />
    </main>
  )
}
