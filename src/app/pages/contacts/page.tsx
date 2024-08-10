'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import BlackButton from '@/components/shared/buttons/Black Button/BlackButton'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import PrivacyPolicyBox from '@/components/entities/Privacy policy box/PrivacyPolicyBox'
import Crumb from '@/components/shared/Crumb/Crumb'

import manager from '../../../../public/assets/img/managerPhoto.png'
import telegramIcon from '../../../../public/assets/svg/social media icons/telegramIcon.svg'
import whatsappIcon from '../../../../public/assets/svg/social media icons/whatsappIcon.svg'
import youtubeIcon from '../../../../public/assets/svg/social media icons/youtubeIcon.svg'
import vkIcon from '../../../../public/assets/svg/social media icons/vkIcon.svg'
import instaIcon from '../../../../public/assets/svg/social media icons/instaIcon.svg'

function Contacts() {
  const path = ['Контакты']
  const links = ['/pages/contacts']
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <Crumb path={path} links={links} />
      <h1 className="heading w-full text-left">Контакты FIX-ремонт</h1>
      <div className="flex w-full flex-col items-center gap-4">
        <div className="relative flex h-[422px] w-full items-center justify-center">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A72d03be55b62e186e1ab7ca478e690eb280706cfaf9597d3ac28019589c3df47&amp;source=constructor"
            className="h-full w-full rounded-xl"
            title="Map"
          ></iframe>
          <div className="absolute left-24 flex flex-col items-start gap-4 rounded-2xl bg-white p-9 tracking-tighter">
            <h2 className="text-2xl font-bold">
              Адрес <br /> главного <br /> офиса:
            </h2>
            <p className="font-semibold">
              г.Казань, <br /> ул.Сибирский Тракт 44А
            </p>
            <div className="button_container h-16 w-52">
              <OrangeButton text="Построить маршрут в навигаторе" />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-col items-start gap-2 text-left">
            <p className="text-sm font-semibold">Звоните Пн-Вс: 10:00 - 19:00</p>
            <Link href="tel:+78000000000" className="text-2xl font-bold">
              8 (800) 000-00-00
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-semibold">Напишите нам, мы онлайн:</p>
            <div className="flex space-x-2">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Image alt="whatsapp_icon" src={whatsappIcon} width={35} height={35} />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Image alt="telegram_icon" src={telegramIcon} width={35} height={35} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-semibold">Мы в соц.сетях:</p>
            <div className="flex space-x-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image alt="youtube_icon" src={youtubeIcon} width={35} height={35} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image alt="vk_icon" src={vkIcon} width={35} height={35} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image alt="instagram_icon" src={instaIcon} width={35} height={35} />
              </a>
            </div>
          </div>

          <div className="button_container h-16 w-96">
            <CheckButton text="Реквизиты для юр.лиц" />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row items-center justify-between gap-6">
        <div className="flex h-max w-1/3 flex-col items-start gap-4 rounded-3xl bg-color-dark py-16 pl-14 leading-7 text-white">
          <h1 className="heading">
            Форма <br /> обратной <br /> связи
          </h1>
          <p>
            Оставьте нам сообщение, отзыв или <br /> предложение.
          </p>
          <p>Ответ пришлём на указанный e-mail.</p>
          <div className="flex flex-row items-center gap-4">
            <p>Или напишите нам в мессенджер</p>
            <div className="flex space-x-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image alt="whatsapp_icon" src={whatsappIcon} width={35} height={35} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image alt="telegram_icon" src={telegramIcon} width={35} height={35} />
              </a>
            </div>
          </div>
        </div>

        <form className="flex w-1/3 flex-col items-center gap-4 px-9 py-12">
          <textarea
            placeholder="Сообщение"
            className="h-32 w-full resize-none rounded-3xl border border-transparent bg-color-bg-gray p-6 text-color-dark placeholder:text-sm placeholder:font-semibold placeholder:text-color-dark"
            name="message"
          />
          <input
            type="tel"
            placeholder="Ваш номер телефона"
            className="w-full rounded-full border border-transparent bg-color-bg-gray p-6 text-color-dark placeholder:text-sm placeholder:font-semibold placeholder:text-color-dark"
            name="telephone"
            autoComplete="tel"
          />
          <input
            type="email"
            placeholder="Ваш e-mail"
            className="w-full rounded-full border border-transparent bg-color-bg-gray p-6 text-color-dark placeholder:text-sm placeholder:font-semibold placeholder:text-color-dark"
            name="email"
            autoComplete="email"
          />
          <div className="button_container w-full">
            <BlackButton text="Отправить сообщение" />
          </div>
          <div className="flex w-full items-center justify-center">
            <PrivacyPolicyBox color="#000" />
          </div>
        </form>

        <div className="relative flex w-1/3">
          <Image src={manager} alt={'manager photo'} className="h-[30rem] w-full" />
          <div className="absolute right-1 flex flex-col items-start p-8 tracking-tight text-white">
            <h3 className="mb-2 text-2xl font-semibold">
              Александр <br /> Иванов
            </h3>
            <p className="text-xs font-normal">
              Менеджер по продажам <br /> FIX-ремонт
            </p>
          </div>
        </div>
      </div>

      <SeoPart />
    </main>
  )
}

export default Contacts
