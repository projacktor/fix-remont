import React from 'react'
import Image from 'next/image'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import IPhonePicture from '../../../../public/assets/img/IPhonePicture.png'
import raffle from '../../../../public/assets/img/raffle.png'
import Link from 'next/link'

function Payment() {
  return (
    <div className="flex w-full flex-row items-center gap-7">
      <div className="w-1/2">
        <Image alt="IPhone picture" src={IPhonePicture} className="w-full max-w-[45rem]" />
      </div>
      <div className="flex w-1/2 flex-col items-start gap-8 pl-24">
        <div className="w-full max-w-[36rem] space-y-4">
          <h1 className="heading">
            <span className="orange-bold">
              Выплачиваем от <br /> 1 000 руб{' '}
            </span>
            за каждый замер, даже если договор не закроется
          </h1>
          <p className="font-normal tracking-tight">
            и проводим регулярные розыгрыши IPhone 15 Pro Max среди партнеров
          </p>
        </div>
        <Link href="">
          <Image alt="Raffle" src={raffle} className="w-full max-w-[85%]" />
        </Link>
        <div className="button_container h-16 w-full">
          <CheckButton text="Стать партнёром" className="w-full max-w-[36rem]" />
        </div>
      </div>
    </div>
  )
}

export default Payment
