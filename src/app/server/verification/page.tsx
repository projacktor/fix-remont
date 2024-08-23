import React from 'react'
import Image from 'next/image'

import PrivacyPolicyBox from '@/components/entities/Privacy policy box/PrivacyPolicyBox'

import picture from '../../../../public/assets/img/banners/verification.png'

function Page() {
  return (
    <main className="flex w-full flex-row items-center justify-between px-12 py-12">
      <form className="flex flex-col space-y-5 rounded-3xl bg-white p-8">
        <div className="flex flex-col space-y-3">
          <h2 className="heading2">Верификация</h2>
          <p className="max-w-max text-sm font-medium">
            Для вывода средств, вам необходимо пройти верификацию на основании Законодательства
            Российской Федерации
          </p>
        </div>

        <div className="flex flex-col items-start space-y-1">
          <label className="text-sm font-medium">Серия и номер паспорта:</label>
          <input
            className="w-full rounded-full bg-gray-100 px-10 py-8 font-medium placeholder:text-black"
            placeholder="90 00 000000"
            type="number"
            required={true}
          />
        </div>
        <div className="flex flex-col items-start space-y-1">
          <label className="text-sm font-medium">ФИО:</label>
          <input
            className="w-full rounded-full bg-gray-100 px-10 py-8 font-medium placeholder:text-gray-400"
            placeholder="Фамилия Имя (Отчество)"
            type="text"
            autoComplete="name"
            required={true}
          />
        </div>
        <div className="flex flex-col items-start space-y-1">
          <label className="text-sm font-medium">Дата рождения</label>
          <input
            className="w-full rounded-full bg-gray-100 px-10 py-8 font-medium placeholder:text-gray-400"
            placeholder="01.01.1970"
            autoComplete="bday-day"
            type="date"
            required={true}
          />
        </div>
        <div className="flex flex-col items-start space-y-1">
          <label className="text-sm font-medium">Адрес прописки:</label>
          <input
            className="w-full rounded-full bg-gray-100 px-10 py-8 font-medium placeholder:text-gray-400"
            placeholder="г. Казань, ул. Волкова 10, кв. 26"
            autoComplete="address-level4 webauthn"
            type="text"
            required={true}
          />
        </div>

        <span className="text-sm font-medium">
          <PrivacyPolicyBox color="#fff" />
        </span>

        <button className="flex items-center justify-center rounded-full bg-color-dark px-10 py-8 text-lg font-medium text-white">
          Отправить данные на модерацию
        </button>
      </form>
      <Image
        src={picture as unknown as string}
        alt="shield"
        quality={100}
        className="w-2/3 md:w-[62%]"
      />
    </main>
  )
}

export default Page
