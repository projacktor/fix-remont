import React, { useState } from 'react'

import { PaymentFieldProps } from '@/types/PaymentFieldProps'

import PaymentField from '@/components/shared/Payment Field/PaymentField'
import NewCard from '@/components/modal/New Card/NewCard'

function PaymentCards({ initialData }: PaymentFieldProps[]) {
  const [data, setData] = useState(initialData)

  const [isPopupOpen, setPopupOpen] = useState(false)

  const removeCard = (indexToRemove: number) => {
    setData((prevData) => prevData.filter((_, index) => index !== indexToRemove))
  }

  const addCard = (newCard: PaymentFieldProps) => {
    setData((prevData) => [...prevData, newCard])
  }
  return (
    <div className="flex flex-col space-y-6">
      <h2 className="heading2">Способы оплаты</h2>
      <div className="rounded-3xl bg-white p-5">
        <div className="flex max-h-72 flex-col overflow-y-auto">
          {data.length === 0 ? (
            <p className="w-full text-center font-medium text-gray-400">
              У вас нет способов вывода
            </p>
          ) : (
            data.map((field, index) => (
              <React.Fragment key={index}>
                <PaymentField
                  provider={field.provider}
                  index={field.index}
                  name={field.name}
                  onRemove={() => removeCard(index)}
                />
                {index != data.length - 1 && <hr className="w-full border-t border-gray-300" />}
              </React.Fragment>
            ))
          )}
        </div>
        <div className="flex flex-row justify-between px-4 py-4">
          <h5 className="headingStruct text-lg">Добавить новый способ вывода</h5>
          <button
            className="rounded-xl bg-color-orange px-3 py-1 text-3xl font-medium text-white"
            onClick={() => setPopupOpen(true)}
          >
            +
          </button>
        </div>
      </div>
      {isPopupOpen && <NewCard onClose={() => setPopupOpen(false)} onSave={addCard} />}
    </div>
  )
}

export default PaymentCards
