import React, { useState } from 'react'
import Image from 'next/image'
import { PaymentProvider } from '@/server/types/Payment Provider'
import { PaymentFieldProps } from '@/server/types/PaymentFieldProps'

import mirLogo from '../../../../public/assets/svg/mirLogo.svg'
import visaLogo from '../../../../public/assets/svg/visaLogo.svg'
import masterLogo from '../../../../public/assets/svg/mastercardLogo.svg'

interface NewCardProps {
  onClose: () => void
  onSave: (newCard: PaymentFieldProps) => void
}

function NewCard({ onClose, onSave }: NewCardProps) {
  const [provider, setProvider] = useState<PaymentProvider | null>(null)
  const [index, setIndex] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [cvc, setCvc] = useState<string>('')

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let cardNumber = e.target.value.replace(/\D/g, '')
    cardNumber = cardNumber.slice(0, 16)

    setIndex(cardNumber)

    if (cardNumber.startsWith('22')) {
      setProvider(PaymentProvider.Mir)
    } else if (cardNumber.startsWith('4')) {
      setProvider(PaymentProvider.Visa)
    } else if (cardNumber.startsWith('5')) {
      setProvider(PaymentProvider.MasterCard)
    } else {
      setProvider(null)
    }
  }

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let cvcInput = e.target.value.replace(/\D/g, '')
    cvcInput = cvcInput.slice(0, 3)

    setCvc(cvcInput)
  }

  function handleSave() {
    if (provider && index && name && cvc.length === 3) {
      const cardIndex = Number(index.slice(-4))
      onSave({ provider, index: cardIndex, name })
      onClose()
    } else {
      alert('Пожалуйста, заполните все поля.')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-color-dark bg-opacity-75">
      <form className="flex h-max w-max flex-col space-y-5 rounded-3xl bg-white p-5">
        <h3 className="heading2 w-full text-start">Добавить новую карту</h3>

        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-5">
            {provider && (
              <Image
                src={
                  provider === PaymentProvider.Mir
                    ? (mirLogo as string)
                    : provider === PaymentProvider.Visa
                      ? (visaLogo as string)
                      : (masterLogo as string)
                }
                alt={`${provider} logo`}
                width={40}
              />
            )}
            <label className="text-xs font-normal text-gray-400" htmlFor="number">
              Номер карты:
            </label>
          </div>
          <input
            type="text" // Изменено на текст
            placeholder="Card number"
            className="w-full rounded-3xl bg-color-bg-gray p-3 placeholder:text-gray-500"
            value={index}
            id="number"
            onChange={handleCardNumberChange}
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label className="text-xs font-normal text-gray-400" htmlFor="name">
            Имя карты:
          </label>
          <input
            type="text"
            placeholder="Card name"
            className="w-full rounded-3xl bg-color-bg-gray p-3 placeholder:text-gray-500"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-row space-x-5">
          <div className="flex flex-col space-y-3">
            <label className="text-xs font-normal text-gray-400" htmlFor="date">
              Срок карты:
            </label>
            <input
              type="date"
              placeholder="Card name"
              className="w-full rounded-3xl bg-color-bg-gray p-3 placeholder:text-gray-500"
              id="date"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label className="text-xs font-normal text-gray-400" htmlFor="CVC">
              СVC:
            </label>
            <input
              type="text"
              placeholder="CVC"
              className="w-full rounded-3xl bg-color-bg-gray p-3 placeholder:text-gray-500"
              value={cvc}
              id="CVC"
              onChange={handleCvcChange}
            />
          </div>
        </div>
        <div className="flex h-12 w-full flex-row justify-between space-x-5">
          <button
            type="button"
            className="flex w-44 items-center justify-center rounded-full bg-color-orange px-8 py-6 font-semibold text-white"
            onClick={handleSave}
          >
            Сохранить
          </button>
          <button
            type="button"
            className="flex w-44 items-center justify-center rounded-full border border-gray-900 bg-transparent px-4 py-2 text-base font-semibold text-gray-900"
            onClick={onClose}
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewCard
