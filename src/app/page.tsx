'use client'

import Image from 'next/image'

import style from '@/styles/home.module.scss'

import SeoPart from '@/components/widgets/SEO/SeoPart'
import Megabox from '@/components/widgets/Megabox/Megabox'
import FavoriteBusiness from '@/components/widgets/Favorite Business/FavoriteBusiness'
import TapeSection from '@/components/shared/Tape Section/TapeSection'
import RiskSlide from '@/components/widgets/Risk Side/RiskSlide'

import contactIcon from '../../public/assets/svg/TapeSection icons/contactIcon.svg'
import rublIcon from '../../public/assets/svg/TapeSection icons/rublIcon.svg'
import shieldIcon from '../../public/assets/svg/TapeSection icons/shiledIcon.svg'
import lampIcon from '../../public/assets/svg/TapeSection icons/lampIcon.svg'
import flagIcon from '../../public/assets/svg/TapeSection icons/flagIcon.svg'
import creditCard from '../../public/assets/img/creditImg.png'
import riskBg from '../../public/assets/img/creditCardMaterials.png'
import GalleryWithFeedback from '@/components/widgets/Gallery with feedback/GalleryWithFeedback'

export default function Home() {
  return (
    <main className="home_content">
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

      <Image
        src={creditCard as string}
        alt="credit"
        width={'auto' as number}
        height={'auto' as number}
      />

      <RiskSlide button_text="Рассчитать стоимость" background={riskBg as string} />

      <GalleryWithFeedback />

      <SeoPart />
    </main>
  )
}
