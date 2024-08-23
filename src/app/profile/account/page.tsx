'use client'
import React from 'react'
import openLink from '@/functions/openLink'
import SupportSection from '@/components/widgets/Support Section/SupportSection'
import AccountNotification from '@/components/entities/Account Notification/AccountNotification'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'

function Page() {
  const notifications = [
    {
      value: 'По заказу №41084',
      label: '25 февраля 2024 ',
      description: 'Исполнитель по заказу №41084 хочет связаться с вами по текущему проекту '
    },
    {
      value: 'Технические работы',
      label: '25 февраля 2024',
      description:
        'В срок с 25.02.2024 03:00 МСК по 26.02.2024 03:00 МСК на платформе будут проводиться технические работы по обновлению сайта '
    },
    {
      value: 'Технические работы',
      label: '25 февраля 2024',
      description:
        'В срок с 25.02.2024 03:00 МСК по 26.02.2024 03:00 МСК на платформе будут проводиться технические работы по обновлению сайта '
    },
    {
      value: 'Технические работы',
      label: '25 февраля 2024',
      description:
        'В срок с 25.02.2024 03:00 МСК по 26.02.2024 03:00 МСК на платформе будут проводиться технические работы по обновлению сайта '
    }
  ]

  return (
    <main className="mb-8 flex w-full flex-col gap-8">
      <h1 className="heading">Профиль</h1>

      <div className="flex flex-col space-y-5">
        <h2 className="headingStruct pl-7 text-2xl">Персональные данные</h2>

        <form className="flex w-full flex-row justify-between rounded-3xl bg-white p-8">
          <div className="flex items-center justify-center rounded-3xl bg-gray-500 p-10">
            <button className="text-sm text-gray-700 underline">Загрузить свое фото</button>
          </div>

          <div className="grid w-96 grid-rows-3 items-center gap-4">
            <div className="flex flex-col items-start space-y-1">
              <label className="pl-3 text-xs text-gray-400" htmlFor="name">
                Имя:
              </label>
              <input
                className="p-3 placeholder:flex placeholder:justify-between placeholder:text-lg placeholder:text-gray-400 valid:border-green-500 invalid:border-color-attention focus:border-color-orange"
                placeholder="Введите имя"
                required={true}
                autoComplete="name"
                id="name"
                type="text"
              />
              <hr className="w-full border-t border-gray-300" />
            </div>
            <div className="flex flex-col items-start space-y-1">
              <label className="pl-3 text-xs text-gray-400" htmlFor="surname">
                Фамилия:
              </label>
              <input
                className="p-3 placeholder:flex placeholder:justify-between placeholder:text-lg placeholder:text-gray-400 valid:border-green-500 invalid:border-color-attention focus:border-color-orange"
                placeholder="Введите фамилию"
                autoComplete="additional-name"
                required={true}
                id="surname"
                type="text"
              />
              <hr className="w-full border-t border-gray-300" />
            </div>
            <div className="flex flex-col items-start space-y-1">
              <label className="pl-3 text-xs text-gray-400" htmlFor="role">
                Роль:
              </label>
              <input
                className="p-3 placeholder:flex placeholder:justify-between placeholder:text-lg placeholder:text-gray-400 valid:border-green-500 invalid:border-color-attention focus:border-color-orange"
                placeholder="Введите роль"
                required={true}
                id="role"
                type="text"
              />
              <hr className="w-full border-t border-gray-300" />
            </div>
          </div>

          <div className="grid w-96 grid-rows-3 items-center gap-4">
            <div className="flex flex-col items-start space-y-1">
              <label className="pl-3 text-xs text-gray-400" htmlFor="phone">
                Телефон:
              </label>
              <input
                className="p-3 placeholder:flex placeholder:justify-between placeholder:text-lg placeholder:text-gray-400 valid:border-green-500 invalid:border-color-attention focus:border-color-orange"
                placeholder="Введите телефон"
                required={true}
                autoComplete="tel"
                id="phone"
                type="tel"
              />
              <hr className="w-full border-t border-gray-300" />
            </div>
            <div className="flex flex-col items-start space-y-1">
              <label className="pl-3 text-xs text-gray-400" htmlFor="mail">
                E-mail:
              </label>
              <input
                className="p-3 placeholder:flex placeholder:justify-between placeholder:text-lg placeholder:text-gray-400 valid:border-green-500 invalid:border-color-attention focus:border-color-orange"
                placeholder="Введите e-mail"
                required={true}
                autoComplete="email"
                id="mail"
                type="email"
              />
              <hr className="w-full border-t border-gray-300" />
            </div>
            <button
              className={`flex h-16 w-full items-center justify-center rounded-full bg-color-dark px-8 py-6 text-base font-medium text-white`}
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>

      <div className="grid w-full grid-cols-2 items-center gap-5">
        <div className="flex flex-col space-y-6">
          <h4 className="headingStruct pl-7 text-2xl">Уведомления:</h4>
          <div className="noScrollbar flex h-[25rem] max-h-[25rem] min-w-[32rem] flex-col space-y-8 overflow-y-auto rounded-3xl bg-white p-9">
            {notifications.length === 0 ? (
              <p className="w-full text-center font-medium text-gray-400">У вас нет уведомлений</p>
            ) : (
              notifications.map((note, index) => (
                <React.Fragment key={index}>
                  <AccountNotification
                    value={note.value}
                    label={note.label}
                    description={note.description}
                  />
                  {index < notifications.length - 1 && (
                    <hr className="w-full border-t border-gray-300" />
                  )}
                </React.Fragment>
              ))
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <h4 className="headingStruct pl-7 text-2xl">Изменение пароля</h4>
          <form className="flex flex-col items-center justify-around space-x-3 space-y-4 rounded-3xl bg-color-dark p-9">
            <input
              className="w-full rounded-full bg-color-input-d px-8 py-6 text-color-back placeholder:text-color-back"
              placeholder="Старый пароль"
              type="password"
              autoComplete="current-password"
              id="current-password"
            />
            <input
              className="w-full rounded-full bg-color-input-d px-8 py-6 text-color-back placeholder:text-color-back"
              placeholder="Новый пароль"
              type="password"
              autoComplete="new-password webauthn"
              id="new-password"
            />
            <input
              className="w-full rounded-full bg-color-input-d px-8 py-6 text-color-back placeholder:text-color-back"
              placeholder="Повторите новый пароль"
              type="password"
              autoComplete="new-password webauthn"
              id="repeat-new-password"
            />
            <button className="flex w-full items-center justify-center rounded-full bg-color-orange px-8 py-6 font-semibold text-white">
              Изменить пароль
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col">
        <h4 className="headingStruct pl-7 text-2xl">Паспортные данные</h4>
        <div className="flex flex-row items-center justify-around space-x-3 rounded-3xl bg-white p-7">
          <div className="flex flex-col space-y-2">
            <p className="text-xs text-gray-400">Статус</p>
            <h5 className="headingStruct text-xl">Верификация непройдена</h5>
          </div>

          <div className="button_container h-16 w-72">
            <CheckButton text="Как пройти верификацию" />
          </div>

          <button
            className="h-16 w-64 rounded-full bg-color-attention px-6 py-2 text-base font-semibold text-white"
            onClick={openLink('/server/verification')}
          >
            Пройти верификацию
          </button>
        </div>
      </div>
      <SupportSection />
    </main>
  )
}

export default Page
