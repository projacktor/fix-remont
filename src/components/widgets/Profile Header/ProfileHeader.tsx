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
    <header className="flex w-full flex-row justify-between p-4">
      <div className="order-1 rounded-3xl bg-white p-2.5">
        <Symbol header_src={headerLogo as unknown as string} lineColor="rgba(0, 0, 0, 0.5)" />
      </div>
      <div className="order-2 flex flex-row justify-between gap-4">
        <Link className="h-max rounded-3xl bg-white p-8" href="#">
          <Image src={notificationOff as string} alt="notification" width={25} />
        </Link>
        <Link className="h-max rounded-3xl bg-white p-8" href="#">
          <Image src={phone as string} alt="notification" width={25} />
        </Link>
        <button
          className={`click flex w-64 items-center justify-center rounded-3xl bg-color-orange px-8 py-6 text-base font-medium text-white transition duration-150 hover:bg-color-hover-orange active:translate-y-0.5 active:bg-color-orange active:shadow-inner active:shadow-color-dark`}
        >
          Оформить заказ
        </button>
        <button className="flex flex-row items-center justify-between gap-28 rounded-3xl bg-color-dark px-4 py-6">
          <p className="text-base font-medium leading-none tracking-tight text-white">
            Мой профиль
          </p>
          <Image alt="profile_icon" className="order-2" src={profileIcon as unknown as string} />
        </button>
        <div className="flex flex-row items-center gap-3 rounded-3xl bg-white p-4">
          <Image src={profile as unknown as string} alt="profile photo" />
          <h4 className="text-base font-semibold">
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
