import React from 'react'

import { PaymentFieldProps } from '@/types/PaymentFieldProps'
import { PaymentProvider } from '@/types/Payment Provider'

import style from './paymentField.module.scss'

import mir from '../../../../public/assets/svg/mirLogo.svg'
import visa from '../../../../public/assets/svg/visaLogo.svg'
import master from '../../../../public/assets/svg/mastercardLogo.svg'
import Image from 'next/image'

function PaymentField({ paymentProvider, index, name }: PaymentFieldProps) {
  const checkProvider = (paymentProvider: PaymentProvider) => {
    switch (paymentProvider) {
      case PaymentProvider.Mir:
        return <Image src={mir as string} alt={'mir card'} />
      case PaymentProvider.Visa:
        return <Image src={visa as string} alt={'visa card'} />
      case PaymentProvider.MasterCard:
        return <Image src={master as string} alt={'master'} />
      default:
        console.log(paymentProvider)
    }
  }

  return (
    <div className={`${style.layout} grid items-center p-4`}>
      {checkProvider(paymentProvider)}
      {/*<Image src={paymentProvider === PaymentProvider.Mir ? mir as string : paymentProvider === PaymentProvider.Visa ? visa as string : paymentProvider === PaymentProvider.MasterCard ? master as string : "as"} alt="Card logo" width={90}/>*/}

      <h5 className="headingStruct texl-lg">{name}</h5>

      <article className="headingStruct flex flex-row space-x-5 text-base">
        <p>••••</p>
        <h5>{index}</h5>
      </article>

      <div className="text-end text-2xl">
        <button className="rounded-lg bg-color-back px-4 py-2 text-gray-500">&times;</button>
      </div>
    </div>
  )
}

export default PaymentField
