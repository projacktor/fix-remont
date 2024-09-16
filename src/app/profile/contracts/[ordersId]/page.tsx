'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Notification } from '@/types/Notification'

import style from './page.module.scss'

import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import Description from '@/components/entities/Description/Description'
import Scale from '@/components/widgets/Scale/Scale'
import SupportSection from '@/components/widgets/Support Section/SupportSection'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'

import attention from '../../../../../public/assets/svg/ellips/ellipsRed.svg'
import wait from '../../../../../public/assets/svg/ellips/ellipsYellow.svg'
import accept from '../../../../../public/assets/svg/ellips/ellipsGreen.svg'
import tariff from '@/types/Tariff'
import Tariff from '@/types/Tariff'

interface OrderData {
  id: number
  name: string
  type: string
  tariff: tariff
  area: number
  location: string
}

function Page({ params }: { params: { ordersId: number } }) {
  const [orderData, setOrderData] = useState<null | OrderData>(null)

  useEffect(() => {
    const response = {
      id: params.ordersId,
      name: 'Name',
      type: 'Quartira',
      tariff: Tariff.business,
      area: 12,
      location: 'Pushkina kolotushkina'
    }
    setOrderData(response)
  }, [params.ordersId])

  if (!orderData) {
    return <main className="flex items-center justify-center">Loading...</main>
  }

  const data = [
    {
      heading: 'Монтаж пола',
      status: false,
      watch: 'договор'
    },
    {
      heading: 'Монтаж пола',
      status: false,
      watch: 'договор'
    },
    {
      heading: 'Монтаж пола',
      status: false,
      watch: 'договор'
    },
    {
      heading: 'Подписание договора',
      status: true,
      watch: 'договор'
    },
    {
      heading: 'Вывоз мусора',
      status: true,
      watch: 'договор'
    },
    {
      heading: 'Монтаж пола',
      status: false,
      watch: 'договор'
    }
  ]

  const smeta = [
    {
      label: 'Общая стоимость',
      value: 5250000
    },
    {
      label: 'Материалы',
      value: 3075000
    },
    {
      label: 'Работы',
      value: 2175000
    },
    {
      label: 'Ваше вознаграждение',
      value: 32000
    }
  ]

  const notifications_data = [
    {
      type: Notification.attention,
      value: 'Требуется ваше подтверждение',
      label: 'Материалы для стен'
    },
    {
      type: Notification.wait,
      value: 'Новое сообщение от менеджера',
      label: ''
    },
    {
      type: Notification.wait,
      value: 'Новое сообщение от менеджера',
      label: ''
    }
  ]

  const payment_data = [
    {
      type: Notification.accept,
      value: 240000,
      label: 'Первый этап (60%)'
    },
    {
      type: Notification.wait,
      value: 80000,
      label: 'Первый этап (40%)'
    },
    {
      type: Notification.accept,
      value: 60000,
      label: 'Первый этап (20%)'
    }
  ]

  const documents_data = [
    {
      type: Notification.accept,
      value: 'Договор',
      label: 'Подписан 10.02.2024'
    },
    {
      type: Notification.accept,
      value: 'Акт приёмки (1 этап)',
      label: 'Подписан 10.02.2024'
    },
    {
      type: Notification.attention,
      value: 'Акт приёмки (2 этап)',
      label: 'Требует подписания'
    }
  ]
  return (
    <main className="mb-8 flex w-full flex-col gap-8 overflow-x-hidden">
      <div className="mt-8 flex w-full flex-row justify-between">
        <article className="flex flex-col items-start space-y-3">
          <h1 className="heading">Заказ № {params.ordersId}</h1>
          <h3 className="headingStruct text-lg">{orderData.name}</h3>
        </article>

        <div className="button_container h-16">
          <OrangeButton text="Пригласить нового клиента" />
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <h3 className="headingStruct pl-7 text-2xl">Информация об объекте</h3>

        <div className={`grid rounded-3xl bg-white p-7 ${style.layout1}`}>
          <Description name="Объект" heading={orderData.name} />
          <Description name="Тип заказа" heading={orderData.type} />
          <Description name="Тариф" heading={orderData.tariff} />
          <Description name="Площадь" heading={orderData.area.toLocaleString('ru-Ru')} />
          <div className="flex flex-col items-center">
            <Description name="Локация" heading={orderData.location} />
          </div>
        </div>
      </div>

      <Scale data={data} />

      <div className="flex flex-col space-y-5">
        <h3 className="headingStruct pl-7 text-2xl">Расчёт сметы</h3>
        <div className={`grid items-center bg-white p-6 ${style.layout2}`}>
          {smeta.map((part, index) => (
            <React.Fragment key={index}>
              <Description
                name={part.label}
                heading={`${part.value.toLocaleString('ru-RU')} руб`}
              />
            </React.Fragment>
          ))}

          <div className="button_container flex h-16 w-64 justify-between">
            <OrangeButton text="Скачать полную смету" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="flex flex-col space-y-5">
          <h4 className="headingStruct pl-7 text-2xl">Информация о клиенте:</h4>
          <div className="flex flex-col space-y-3 rounded-3xl bg-white p-7">
            <Description name="Клиент" heading="Расулов Данис Фирдусович" />
            <Description name="Номер телефона" heading={'+7 800 555 35 35'} />
            <Description name="E-mail" heading="john.doe@gmail.com" />
            <Description name="Дата заказа" heading="11.03.2024" />
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <h4 className="headingStruct pl-7 text-2xl">Уведомления по заказу:</h4>
          <div className="relative">
            <div className="noScrollbar flex max-h-72 flex-col space-y-3 overflow-y-auto rounded-3xl bg-white p-7">
              {notifications_data.map((note, index) => (
                <div key={index} className="mb-1">
                  <div className="flex flex-row items-center justify-between space-x-8">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-row space-x-2">
                        <Image
                          src={
                            note.type === Notification.attention
                              ? (attention as string)
                              : (wait as string)
                          }
                          alt="notification"
                          width={8}
                        />
                        <h5 className="text-lg font-semibold">{note.value}</h5>
                      </div>
                      {note.label && <p className="text-sm text-gray-400">{note.label}</p>}
                    </div>
                    <div className="button_container h-16 w-36">
                      <CheckButton text="Открыть" />
                    </div>
                  </div>
                  {index < notifications_data.length - 1 && (
                    <hr className="mt-5 w-full border-t border-gray-300" />
                  )}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 rounded-2xl bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <h4 className="headingStruct pl-7 text-2xl">Оплата:</h4>
          <div className="relative">
            <div className="noScrollbar flex max-h-72 flex-col space-y-3 overflow-y-auto rounded-3xl bg-white p-7">
              {payment_data.map((pay, index) => (
                <div key={index} className="mb-1">
                  <div className="flex flex-row items-center justify-between space-x-8">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-row space-x-2">
                        <Image
                          src={
                            pay.type === Notification.wait ? (wait as string) : (accept as string)
                          }
                          alt="notification"
                          width={8}
                        />
                        <h5 className="text-lg font-semibold">
                          {pay.value.toLocaleString('ru-Ru')} руб
                        </h5>
                      </div>
                      {pay.label && <p className="text-sm text-gray-400">{pay.label}</p>}
                    </div>
                    <div className="button_container h-16 w-36">
                      <button
                        className={`flex items-center justify-center rounded-full border bg-transparent px-4 py-2 text-base font-semibold ${pay.type === Notification.wait ? 'border-color-yellow text-color-yellow' : 'border-green-500 text-green-500'}`}
                      >
                        {pay.type === Notification.wait ? 'Оплатить' : 'Оплачено'}
                      </button>
                    </div>
                  </div>
                  {index < payment_data.length - 1 && (
                    <hr className="mt-5 w-full border-t border-gray-300" />
                  )}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 rounded-2xl bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <h4 className="headingStruct pl-7 text-2xl">Документы:</h4>
          <div className="relative">
            <div className="noScrollbar flex max-h-72 flex-col space-y-3 overflow-y-auto rounded-3xl bg-white p-7">
              {documents_data.map((doc, index) => (
                <div key={index} className="mb-1">
                  <div className="flex flex-row items-center justify-between space-x-8">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-row space-x-2">
                        <Image
                          src={
                            doc.type === Notification.attention
                              ? (attention as string)
                              : (accept as string)
                          }
                          alt="notification"
                          width={8}
                        />
                        <h5 className="text-lg font-semibold">{doc.value}</h5>
                      </div>
                      <p
                        className={`text-sm ${doc.type === Notification.attention ? 'text-color-attention' : 'text-gray-400'}`}
                      >
                        {doc.label}
                      </p>
                    </div>
                    <div className="button_container h-16 w-36">
                      <CheckButton text="Скачать" />
                    </div>
                  </div>
                  {index < documents_data.length - 1 && (
                    <hr className="mt-5 w-full border-t border-gray-300" />
                  )}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 rounded-2xl bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </div>
      <SupportSection />
    </main>
  )
}

export default Page
