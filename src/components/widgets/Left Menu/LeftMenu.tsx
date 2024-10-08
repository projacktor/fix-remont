'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WriteUs from '@/components/entities/Write us/WriteUs'

import clockIcon from '../../../../public/assets/svg/headerClockIcon.svg'
import phoneIcon from '../../../../public/assets/svg/headerPhone.svg'
// import qr from '../../../../public/assets/img/trialQr.png'
import profile from '../../../../public/assets/img/ProfilePhoto.png'
import Code from '@/components/modal/Code/Code'
import { generateQrCode } from '@/functions/generateQrCode'
import logo from '../../../../public/assets/svg/fixRemontLogo.svg'

function LeftMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null)

  const url = 'https://ref.fix-remont.ru/8GTS7LX82390'

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert('Скопировано в буфер обмена')
      })
      .catch((err) => {
        console.error('Ошибка копирования: ', err)
      })
  }

  useEffect(() => {
    const generate = async () => {
      const qrCode = await generateQrCode(url, logo.src, 100)
      if (qrCode) {
        setQrCodeUrl(qrCode)
      } else {
        console.error('QR-код не был сгенерирован')
      }
    }
    generate()
  }, [url])

  return (
    <aside className="sticky top-0 flex h-max w-96 flex-col items-start gap-8 rounded-3xl bg-white p-8">
      <ul className="flex flex-col text-lg font-semibold leading-10 text-color-dark underline">
        <Link href={'/profile/'}>Главная</Link>
        <Link href={'/profile/contracts/'}>Договоры</Link>
        <Link href={'/profile/partnership'}>Партнерская программа</Link>
        <Link href={'/profile/account/'}>Профиль</Link>
        <Link href={'/profile/news/'}>Новости платформы</Link>
        <Link href={'/profile/support'}>Служба поддержки</Link>
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
        {qrCodeUrl && (
          <Image
            src={qrCodeUrl as unknown as string}
            alt="QR-код"
            width={100}
            height={100}
            quality={100}
            className="rounded-3xl bg-color-back"
          />
        )}
        <div className="flex flex-col space-y-4">
          <h5 className="text-lg font-bold">Мой QR-код</h5>
          <div className="flex flex-col items-start text-sm text-color-orange underline">
            <button onClick={handleOpenModal}>Открыть</button>
            <button onClick={handleCopy}>Скопировать ссылку</button>
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

        <button className="orange-bold text-sm font-semibold leading-tight underline">
          Выйти из <br /> аккаунта
        </button>
      </div>

      {isModalOpen && <Code onClose={handleCloseModal} />}
    </aside>
  )
}

export default LeftMenu
