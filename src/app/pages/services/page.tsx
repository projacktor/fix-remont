import React from 'react'
import Sections from '@/components/shared/Sections/Sections'
import Risk from '@/components/widgets/Risk/Risk'
import WorksGallery from '@/components/widgets/WorksGallery/WorksGallery'
import CheckFeedbacks from '@/components/widgets/CheckFeedbacks/CheckFeedbacks'
import EngConsulting from '@/components/widgets/EngConsulting/EngConsulting'
import SeoDiv from '@/components/widgets/SeoDiv/SeoDiv'

import responseYandex from '@/public/assets/img/responseYandex.png'
import responseOtzovik from '@/public/assets/img/responseOtzovik.png'
import materialsImg from '@/public/assets/img/creditCardMaterials.png'

const Services = () => {
  return (
    <main className="flex flex-col gap-16">
      <div id="sections" className="w-full">
        <h1 className="text-4xl font-bold">Услуги FIX-ремонт</h1>
        <Sections />
      </div>

      <div id="services_risk">
        <Risk button_text="Рассчитать стоимость" background={materialsImg} />
      </div>

      <div id="services_works_gallery" className="flex flex-col gap-10">
        <div className="text-center">
          <p>Но лучше всего о нас расскажут</p>
          <h1 className="text-3xl font-bold">
            Выполненные работы <br /> и отзывы клиентов{' '}
          </h1>
        </div>
        <div className="flex gap-4">
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
        <WorksGallery />
      </div>

      <div id="services_check_feedbacks">
        <CheckFeedbacks />
      </div>

      <div id="services_eng_consulting">
        <EngConsulting />
      </div>

      <div id="services_seo">
        <SeoDiv />
      </div>
    </main>
  )
}

export default Services
