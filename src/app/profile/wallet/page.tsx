'use client'
import React from 'react'
import { PaymentProvider } from '@/server/types/Payment Provider'
import { Operation } from '@/server/utils/enums'

import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import PartsFieldOperation from '@/components/shared/Parts Field Operation/PartsFieldOperation'
import SupportSection from '@/components/widgets/Support Section/SupportSection'
import PaymentCards from '@/components/widgets/Payment Cards/PaymentCards'

function Page() {
  const payment = [
    {
      provider: PaymentProvider.Mir,
      index: 2980,
      name: 'Карта МИР'
    },
    {
      provider: PaymentProvider.Visa,
      index: 2929,
      name: 'Карта VISA'
    },
    {
      provider: PaymentProvider.MasterCard,
      index: 7777,
      name: 'Карта MasterCard'
    },
    {
      provider: PaymentProvider.MasterCard,
      index: 7777,
      name: 'Карта MasterCard'
    }
  ]

  const data = [
    {
      type: Operation.output,
      cost: 300000,
      date: new Date('2024-02-25'),
      status: 'Исполнена'
    },
    {
      type: Operation.output,
      cost: 300000,
      date: new Date('2024-02-25'),
      status: 'Обработка'
    },
    {
      type: Operation.input,
      cost: 100000000,
      date: new Date('2024-02-25'),
      status: 'Отменена'
    },
    {
      type: Operation.input,
      cost: 100000000,
      date: new Date('2024-02-25'),
      status: 'Отменена'
    }
  ]
  return (
    <main className="mb-8 flex w-full flex-col gap-8">
      <div className="w-full space-y-2 text-start">
        <h1 className="heading">Кошелек</h1>
        <p className="headingStruct text-sm">
          В этом разделе вы можете урпавлять своими средствами
        </p>
      </div>

      <div className="flex w-full flex-row items-center justify-between space-x-8 rounded-3xl bg-white p-5">
        <h3 className="heading2 w-40">Кошелек</h3>

        <div className="flex flex-col items-start space-y-3">
          <p className="text-sm text-gray-400">Баланс:</p>
          <h3 className="heading2">145 300 руб</h3>
        </div>

        <div className="flex flex-col items-start space-y-3">
          <p className="text-sm text-gray-400">В работе:</p>
          <h3 className="heading2">67 800 руб</h3>
        </div>

        <div className="button_container h-16 w-64">
          <OrangeButton text="Вывести средства" className="text-base" />
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4">
        <h2 className="heading2">История операций</h2>
        <div className="flex h-max max-h-96 w-full flex-col items-center justify-around space-y-4 overflow-y-auto rounded-3xl bg-white p-6">
          {data.length === 0 ? (
            <p className="w-full text-center font-medium text-gray-400">У вас не было операций</p>
          ) : (
            data.map((part, index) => (
              <React.Fragment key={index}>
                <PartsFieldOperation
                  type={part.type}
                  cost={part.cost}
                  date={part.date}
                  status={part.status}
                />
                {index < data.length - 1 && <hr className="w-full border-t border-gray-300" />}
              </React.Fragment>
            ))
          )}
        </div>
      </div>

      <PaymentCards initialData={payment} />

      <SupportSection />
    </main>
  )
}

export default Page
