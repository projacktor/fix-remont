import React from 'react'

import { PaymentFieldProps } from '@/types/PaymentFieldProps'

import PaymentField from '@/components/shared/Payment Field/PaymentField'
import { PaymentProvider } from '@/types/Payment Provider'

function PaymentCards() {
  const data = [
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
    }
    // {
    //   provider: PaymentProvider.MasterCard,
    //   index: 7777,
    //   name: 'Карта MasterCard'
    // }
  ]
  return (
    <div className="flex flex-col space-y-6">
      <h2 className="heading2">Способы оплаты</h2>
      <div className="flex max-h-72 flex-col overflow-y-auto rounded-3xl bg-white p-5">
        {data.map((field, index) => (
          <React.Fragment key={index}>
            <PaymentField provider={field.provider} index={field.index} name={field.name} />
            {index < data.length - 1 && <hr className="w-full border-t border-gray-300" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default PaymentCards
