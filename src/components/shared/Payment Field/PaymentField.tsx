import React from 'react'
import Image from 'next/image'

import { PaymentFieldProps } from '@/server/types/PaymentFieldProps'
import { PaymentProvider } from '@/server/types/Payment Provider'

import style from './paymentField.module.scss'

import mir from '../../../../public/assets/svg/mirLogo.svg'
import visa from '../../../../public/assets/svg/visaLogo.svg'
import master from '../../../../public/assets/svg/mastercardLogo.svg'

interface Props extends PaymentFieldProps {
  onRemove: () => void
}

function PaymentField({ provider, index, name, onRemove }: Props) {
  return (
    <div className={`${style.layout} grid items-center p-3`}>
      <Image
        src={
          provider === PaymentProvider.Mir
            ? (mir as string)
            : provider === PaymentProvider.Visa
              ? (visa as string)
              : provider === PaymentProvider.MasterCard
                ? (master as string)
                : 'as'
        }
        alt="Card logo"
        width={60}
      />

      <h5 className="headingStruct texl-lg">{name}</h5>

      <article className="headingStruct flex flex-row space-x-5 text-base">
        <p>••••</p>
        <h5>{index}</h5>
      </article>

      <div className="text-end text-2xl">
        <button className="rounded-lg bg-color-back px-4 py-2 text-gray-500" onClick={onRemove}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default PaymentField
