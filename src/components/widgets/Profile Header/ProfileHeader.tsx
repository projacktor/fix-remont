'use client'
import React from 'react'
import Image from 'next/image'
import notificationOff from '../../../../public/assets/svg/notificationOff.svg'
import phone from '../../../../public/assets/svg/phone.svg'
import headerLogo from '../../../../public/assets/svg/headerLogo.svg'
import Symbol from '@/components/entities/Symbol/Symbol'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import profileIcon from '../../../../public/assets/svg/profileIcon.svg'
import profile from '../../../../public/assets/img/ProfilePhoto.png'
import openLink from '@/functions/openLink'

function ProfileHeader() {
  return (
    <header className="flex w-full flex-row justify-between p-4">
      <div className="order-1">
        <Symbol header_src={headerLogo as unknown as string} lineColor="rgba(0, 0, 0, 0.5)" />
      </div>
      <div className="order-2 flex flex-row justify-between gap-4">
        <button className="p-6">
          <Image src={notificationOff as string} alt="notification" />
        </button>
        <button className="p-6">
          <Image src={phone as string} alt="notification" />
        </button>
        <button
          className={`flex w-64 items-center justify-center rounded-3xl bg-color-orange px-8 py-6 text-base font-medium text-white`}
        >
          Оформить заказ
        </button>
        <button className="flex flex-row items-center justify-between gap-36 rounded-3xl bg-color-dark px-4 py-6">
          <p className="text-base font-medium leading-none tracking-tight text-white">
            Мой профиль
          </p>
          <Image alt="profile_icon" className="order-2" src={profileIcon as unknown as string} />
        </button>
        <div className="flex flex-row items-center gap-3">
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
