'use client'
import React from 'react'
import SupportSection from '@/components/widgets/Support Section/SupportSection'
import BlackButton from '@/components/shared/buttons/Black Button/BlackButton'

function Page() {
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
              <label className="pl-3 text-sm text-gray-400" htmlFor="name">
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
              <label className="pl-3 text-sm text-gray-400" htmlFor="surname">
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
              <label className="pl-3 text-sm text-gray-400" htmlFor="role">
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
              <label className="pl-3 text-sm text-gray-400" htmlFor="phone">
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
              <label className="pl-3 text-sm text-gray-400" htmlFor="mail">
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

      <SupportSection />
    </main>
  )
}

export default Page
