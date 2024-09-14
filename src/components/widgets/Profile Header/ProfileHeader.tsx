'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Symbol from '@/components/entities/Symbol/Symbol'

import notificationOff from '../../../../public/assets/svg/notificationOff.svg'
import phone from '../../../../public/assets/svg/phone.svg'
import headerLogo from '../../../../public/assets/svg/headerLogo.svg'
import profileIcon from '../../../../public/assets/svg/profileIcon.svg'
import profile from '../../../../public/assets/img/ProfilePhoto.png'

function ProfileHeader() {
  return (
    <header className="flex w-full flex-row items-center justify-between pt-3">
      <div className="order-1 flex items-center rounded-3xl bg-white pl-4 pr-2">
        <Symbol header_src={headerLogo as unknown as string} lineColor="rgba(0, 0, 0, 0.5)" />
      </div>
      <div className="order-2 flex flex-row items-center justify-between gap-4">
        <Link className="h-max rounded-3xl bg-white p-6" href="#">
          <Image src={notificationOff as string} alt="notification" width={25} />
        </Link>
        <Link className="h-max rounded-3xl bg-white p-6" href="#">
          <Image src={phone as string} alt="notification" width={25} />
        </Link>
        <button
          className={`click flex h-20 w-64 items-center justify-center rounded-3xl bg-color-orange px-4 py-4 text-base font-medium text-white transition duration-150 hover:bg-color-hover-orange active:translate-y-0.5 active:bg-color-orange active:shadow-inner active:shadow-color-dark`}
        >
          Оформить заказ
        </button>
        <button className="flex h-20 flex-row items-center justify-between gap-28 rounded-3xl bg-color-dark px-7 py-4">
          <p className="text-base font-medium leading-none tracking-tight text-white">
            Мой профиль
          </p>
          <Image alt="profile_icon" className="order-2" src={profileIcon as unknown as string} />
        </button>
        <div className="flex flex-row items-center gap-3 rounded-3xl bg-white p-4">
          <Image src={profile as unknown as string} quality={100} alt="profile photo" />
          <h4 className="text-base font-bold leading-tight tracking-tight">
            NAME
            <br />
            SURNAME
          </h4>
        </div>
      </div>
    </header>
  )
}

export default ProfileHeader
