'use client'
import React from 'react'
import Image from 'next/image'

import Tariff from '@/types/Tariff'

import RefLink from '@/components/widgets/Ref Link/RefLink'
import CodeGen from '@/components/widgets/Code Generator/CodeGen'
import Wallet from '@/components/widgets/Wallet/Wallet'
import PartsField from '@/components/widgets/Parts Field/PartsField'
import BlogBullet from '@/components/entities/Blog bullet/BlogBullet'

import banner from '../../../public/assets/img/bannerTrial.png'

function Home() {
  const param = 'calculator-guide'
  return (
    <main className="flex flex-col gap-8">
      <Image src={banner as unknown as string} alt="banner" className="w-full" />

      <h1 className="heading">Главная</h1>

      <div className="flex flex-row justify-between space-x-8">
        <RefLink />

        <CodeGen />
      </div>

      <Wallet />

      <div className="flex flex-col items-start space-y-4">
        <h2 className="heading2">Мои клиенты</h2>
        <div className="flex h-max w-full flex-col items-center justify-around space-y-4 rounded-3xl p-4">
          <PartsField
            objectName="Квартира"
            tariff={Tariff.business}
            location="Казань, ул. Волкова"
            payment={32000}
            part="Установка полов"
          />
          <PartsField
            objectName="Дом"
            tariff={Tariff.comfort}
            location="Казань, ул. Светлая"
            payment={120000}
            part="Заливка фундамента"
          />
          <PartsField
            objectName="Квартира"
            tariff={Tariff.comfort}
            location="Казань, ул. Щапова"
            payment={26000}
            part="Объект сдан"
          />
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4">
        <h2 className="heading2">Мои договоры</h2>
        <div className="flex h-max w-full flex-col items-center justify-around space-y-4 rounded-3xl p-4">
          <PartsField
            objectName="Квартира"
            tariff={Tariff.business}
            location="Казань, ул. Волкова"
            payment={32000}
            part="Установка полов"
          />
          <PartsField
            objectName="Дом"
            tariff={Tariff.comfort}
            location="Казань, ул. Светлая"
            payment={120000}
            part="Заливка фундамента"
          />
          <PartsField
            objectName="Квартира"
            tariff={Tariff.comfort}
            location="Казань, ул. Щапова"
            payment={26000}
            part="Объект сдан"
          />
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4">
        <h1 className="heading">Новости платформы</h1>
        <div className="flex h-80 items-center justify-around">
          <BlogBullet
            section="Ремонт"
            link={param}
            text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
          />
          <BlogBullet
            section="Ремонт"
            link={param}
            text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
          />
          <BlogBullet
            section="Ремонт"
            link={param}
            text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
          />
        </div>
      </div>
    </main>
  )
}

export default Home
