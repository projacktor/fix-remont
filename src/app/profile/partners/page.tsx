'use client'
import React from 'react'
import Image from 'next/image'

import { Tariff } from '@/server/utils/enums'
import RefLink from '@/components/widgets/Ref Link/RefLink'
import CodeGen from '@/components/widgets/Code Generator/CodeGen'
import Wallet from '@/components/widgets/Wallet/Wallet'
import NewsSection from '@/components/widgets/News Section/NewsSection'
import SupportSection from '@/components/widgets/Support Section/SupportSection'
import DealList from '@/components/widgets/Deal List/DealList'

import banner from '../../../../public/assets/img/bannerTrial.png'

function Home() {
  const partsData = [
    {
      objectName: 'Квартира',
      tariff: Tariff.business,
      location: 'Казань, ул. Волкова',
      payment: 5032000,
      part: 'Установка полов'
    },
    {
      objectName: 'Дом',
      tariff: Tariff.comfort,
      location: 'Казань, ул. Светлая',
      payment: 3120000,
      part: 'Заливка фундамента'
    },
    {
      objectName: 'Квартира',
      tariff: Tariff.comfort,
      location: 'Казань, ул. Щапова',
      payment: 3462000,
      part: 'Объект сдан'
    }
  ]

  const clientData = [
    {
      objectName: 'Квартира',
      tariff: Tariff.business,
      location: 'Казань, ул. Волкова',
      payment: 32000,
      part: 'Установка полов'
    },
    {
      objectName: 'Дом',
      tariff: Tariff.comfort,
      location: 'Казань, ул. Светлая',
      payment: 120000,
      part: 'Заливка фундамента'
    },
    {
      objectName: 'Квартира',
      tariff: Tariff.comfort,
      location: 'Казань, ул. Щапова',
      payment: 26000,
      part: 'Объект сдан'
    },
    {
      objectName: 'Квартира',
      tariff: Tariff.comfort,
      location: 'Казань, ул. Щапова',
      payment: 26000,
      part: 'Объект сдан'
    }
  ]
  return (
    <main className="mb-8 flex flex-col gap-8">
      <Image src={banner as unknown as string} alt="banner" className="w-full" />

      <h1 className="heading">Главная</h1>

      <div className="flex flex-row justify-between space-x-8">
        <RefLink />

        <CodeGen />
      </div>

      <Wallet />

      <DealList heading={'Мои клиенты'} data={clientData} />

      <DealList heading={'Мои договоры'} data={partsData} />

      <NewsSection />

      <SupportSection />
    </main>
  )
}

export default Home
