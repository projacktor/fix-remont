'use client'
import CEOgreeting from '@/components/widgets/CEOgreeting'
import BlackBullet from '@/components/shared/BlackBullet'
import Inviting from '@/components/widgets/Inviting'
import Presentation from '@/components/widgets/Presentation'
import Responsibility from '@/components/widgets/Responsibility'
import Risk from '@/components/widgets/Risk'
import SocialMedia from '@/components/widgets/SocialMedia'
import EngConsulting from '@/components/widgets/EngConsulting'
import SeoDiv from '@/components/widgets/SeoDiv'

import src1 from '@/public/assets/svg/15000.svg'
import src2 from '@/public/assets/svg/998.svg'
import src3 from '@/public/assets/svg/10.svg'
import pseudoVid from '@/public/assets/img/pseudoVid.png'
import russia from '@/public/assets/img/Russia.png'
import materialsImg from '@/public/assets/img/creditCardMaterials.png'

const About: React.FC = () => {
  const blackBullet1 = (
    <p id="description">Ремонт, строительство и обслуживание квартир, жилых домов под ключ</p>
  )
  const blackBullet2 = (
    <p id="description">
      Повысить культуру и сервис сферы строительства, чтобы каждый заказчик мог получить качество
      без переделок и контроля исполнителей
    </p>
  )
  const blackBullet3 = (
    <ul id="description">
      <li>Создание управляющей компании-регулятора</li>
      <li>Повышение качеств услуг за счёт разработки единых стандартов</li>
      <li>Перемены в сфере, чтобы для людей ремонт перестал быть больной темой</li>
    </ul>
  )

  return (
    <main className="space-y-16">
      <h1 className="text-center text-4xl font-bold">О компании FIX-ремонт</h1>

      <div className="flex justify-between space-x-4">
        <WhiteBullet line1="Реализовано" line2="проектов" src={src1} />
        <WhiteBullet line1="Довольных" line2="клиентов" src={src2} />
        <WhiteBullet line1="Лет на" line2="рынке РФ" src={src3} />
      </div>

      <div className="flex justify-between space-x-4">
        <BlackBullet head="Сфера деятельности" description={blackBullet1} />
        <BlackBullet head="Миссия" description={blackBullet2} />
        <BlackBullet head="Цели" description={blackBullet3} />
      </div>

      <div className="pseudo_vid">
        <img src={pseudoVid.src} alt="pseudo_video" className="h-auto w-full" />
      </div>

      <div>
        <CEOgreeting />
      </div>

      <div className="Russia_slider text-center">
        <h2 className="text-4xl font-semibold">
          Работаем с клиентами по всей <br /> территории Российской Федерации
        </h2>
        <p className="text-xl">Несколько бригад в каждом регионе страны</p>
        <img alt="Russia" src={russia.src} className="mt-10 w-full" />
      </div>

      <div>
        <Inviting />
      </div>

      <div>
        <Presentation />
      </div>

      <div>
        <Responsibility />
      </div>

      <div>
        <Risk buttonText="Рассчитать стоимость" background={materialsImg.src} />
      </div>

      <div>
        <SocialMedia />
      </div>

      <div>
        <EngConsulting />
      </div>

      <div>
        <SeoDiv />
      </div>
    </main>
  )
}

export default About
