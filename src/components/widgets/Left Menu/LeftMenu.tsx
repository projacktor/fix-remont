import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WriteUs from '@/components/entities/Write us/WriteUs'

import clockIcon from '../../../../public/assets/svg/headerClockIcon.svg'
import phoneIcon from '../../../../public/assets/svg/headerPhone.svg'
import qr from '../../../../public/assets/img/trialQr.png'
import profile from '../../../../public/assets/img/ProfilePhoto.png'

function LeftMenu() {
  return (
    <aside className="sticky top-0 flex h-max w-96 flex-col items-start gap-8 p-8">
      <ul className="flex flex-col text-lg font-semibold leading-10 text-color-dark underline">
        <li>Главная</li>
        <li>Договоры</li>
        <li>Партнерская программа</li>
        <li>Профиль</li>
        <li>Новости платформы</li>
        <li>Служба поддержки</li>
      </ul>

      <div className="flex flex-col items-start justify-between space-y-3 rounded-2xl bg-inherit">
        <div className="flex flex-row items-center space-x-2">
          <Image alt="clock_icon" className="h-6 w-4" src={clockIcon as unknown as string} />
          <p className="min-w-max text-sm font-medium leading-5">Звоните Пн-Вс: 8:30 - 19:00</p>
        </div>
        <address className="flex flex-row items-center space-x-2 not-italic">
          <Image alt="phone_icon" className="h-6 w-4" src={phoneIcon as unknown as string} />
          <Link href="tel:+7 (966) 250-77-99" className="text-xl font-medium">
            +7 (966) 250-77-99
          </Link>
        </address>
      </div>

      <div className="m-0 flex flex-row items-center gap-4">
        <Image src={qr as unknown as string} alt="your qr code" width={100} />
        <div className="flex flex-col space-y-4">
          <h5 className="text-lg font-bold">Мой QR-код</h5>
          <div className="flex flex-col items-start text-sm text-color-orange underline">
            <Link href="">Открыть</Link>
            <Link href="">Скопировать ссылку</Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4">
        <WriteUs />
      </div>

      <div className="flex w-full flex-row items-center justify-between rounded-3xl bg-color-dark pr-4">
        <div className="flex flex-row items-center gap-3 p-2">
          <Image src={profile as unknown as string} alt="profile photo" />
          <h4 className="text-xs font-semibold text-white">
            NAME
            <br />
            SURNAME
          </h4>
        </div>

        <p className="orange-bold text-sm font-semibold leading-tight underline">
          Выйти из <br /> аккаунта
        </p>
      </div>
    </aside>
  )
}

export default LeftMenu
