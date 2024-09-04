'use client'
import Image from 'next/image'
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
import plannerImg1 from '../../public/assets/img/planner img/plannerImg1.png'
import pseudoVid from '../../public/assets/img/pseudo videos/pseudoVid.png'
import Header from '@/components/widgets/Global Header/GlobalHeader'
import Footer from '@/components/widgets/Global Footer/GlobalFooter'
import CreditCard from '@/components/widgets/Credit Card/CreditCard'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-16">
        <section className="space-y-8">
          <Megabox />
          <section className={`flex w-full flex-row justify-between`}>
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
          </section>
        </section>
        <section className="flex items-center">
          <FavoriteBusiness />
        </section>

        <CreditCard />

        <RiskSlide button_text="Рассчитать стоимость" type={true} />

        <GalleryWithFeedback />

        <CheckFeedbacks />

        <Planner
          planner_img={plannerImg1 as unknown as string}
          time_text="1.5 часа"
          p1_text="дома своей мечты"
          steps={[
            {
              description: 'Выбор подходящего тарифа',
              time: '30',
              newP2Text: 'Выбирайте подходящий тариф под ваш бюджет. Цена фиксированная!'
            },
            {
              description: 'Удобный выбор планировки и материала',
              time: '60',
              newP2Text:
                'Выберите планировку и материал, подходящие для вашего будущего дома мечты. Этот процесс займёт около 60 минут.'
            },
            {
              description: 'Проведение работ сервисом FIX-ремонт',
              time: '',
              newP2Text:
                'Наш сервис проведёт все необходимые работы, чтобы воплотить ваш проект в жизнь.'
            },
            {
              description: 'Получите - распишитесь! :)',
              time: '',
              newP2Text:
                'Ваш новый дом готов! Проверьте качество выполненных работ и получите ключи от вашего дома мечты.'
            }
          ]}
          p2_text="Выбирайте подходящий тариф под ваш бюджет. Цена фиксированная!"
          link_text=""
        />

        <GroupPhoto />

        <Responsibility />

        <SocialMedia />

        <Image src={pseudoVid as unknown as string} alt={'pseudo_vidio'} quality={100} />

        <ToBlog />

        <FaqSection />

        <SeoPart />
      </main>
      <Footer />
    </>
  )
}
