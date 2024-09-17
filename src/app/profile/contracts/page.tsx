'use client'
import React from 'react'

import Tariff from '@/server/types/Tariff'
import { State } from '@/server/types/State'

import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import ContentFilter from '@/components/shared/Content Filter/ContentFilter'
import ContractCard from '@/components/shared/Contract Card/ContractCard'
import SupportSection from '@/components/widgets/Support Section/SupportSection'

function Contracts() {
  const buttons = ['Текущие', 'Завершенные', 'Мои договоры']

  const data = [
    {
      index: 41084,
      location: 'Казань, ул. Волкова',
      object_type: 'Квартира',
      contract_type: 'Строительство',
      state: State.act,
      tariff: Tariff.comfort,
      area: 124,
      part: 'Установка полов',
      payment: 32000
    },
    {
      index: 41084,
      location: 'Казань, ул. Волкова',
      object_type: 'Квартира',
      contract_type: 'Строительство',
      state: State.notification,
      tariff: Tariff.comfort,
      area: 124,
      part: 'Установка полов',
      payment: 32000
    },
    {
      index: 41084,
      location: 'Казань, ул. Волкова',
      object_type: 'Квартира',
      contract_type: 'Строительство',
      state: State.empty,
      tariff: Tariff.comfort,
      area: 124,
      part: 'Установка полов',
      payment: 32000
    },
    {
      index: 41084,
      location: 'Казань, ул. Волкова',
      object_type: 'Квартира',
      contract_type: 'Строительство',
      state: State.act,
      tariff: Tariff.comfort,
      area: 124,
      part: 'Установка полов',
      payment: 32000
    },
    {
      index: 41084,
      location: 'Казань, ул. Волкова',
      object_type: 'Квартира',
      contract_type: 'Строительство',
      state: State.act,
      tariff: Tariff.comfort,
      area: 124,
      part: 'Установка полов',
      payment: 32000
    },
    {
      index: 41084,
      location: 'Казань, ул. Волкова',
      object_type: 'Квартира',
      contract_type: 'Строительство',
      state: State.act,
      tariff: Tariff.comfort,
      area: 124,
      part: 'Установка полов',
      payment: 32000
    }
  ]
  return (
    <main className="mb-8 flex w-full flex-col gap-8">
      <div className="flex w-full flex-row items-center justify-between">
        <article className="w-max space-y-3 text-start">
          <h1 className="heading">Договоры</h1>
          <p className="headingStruct text-sm">
            В этом разделе вы можете посмотреть подробнее о заказах ваших клиентов
          </p>
        </article>

        <div className="button_container h-16">
          <OrangeButton text="Пригласить нового клиента" />
        </div>
      </div>
      <div className="w-96">
        <ContentFilter buttons={buttons} />
      </div>

      <h2 className="heading2">Текущие заказы</h2>

      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        {data.length === 0 ? (
          <p className="w-full text-center font-medium text-gray-400">У вас не было операций</p>
        ) : (
          data.map((card, index) => (
            <React.Fragment key={index}>
              <ContractCard
                index={card.index}
                location={card.location}
                object_type={card.object_type}
                contract_type={card.contract_type}
                state={card.state}
                tariff={card.tariff}
                area={card.area}
                part={card.part}
                payment={card.payment}
              />
            </React.Fragment>
          ))
        )}
      </div>

      <SupportSection />
    </main>
  )
}

export default Contracts
