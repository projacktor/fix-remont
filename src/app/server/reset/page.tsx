'use client'
import React from 'react'
import Image from 'next/image'

import picture from '../../../../public/assets/img/banners/reset.png'

function ResetPasswordPage() {
  return (
    <main className="flex w-full flex-row items-center justify-center px-12 py-12">
      <form className="whiteContainer flex w-full max-w-md flex-col self-stretch">
        <div className="flex flex-col space-y-7">
          <section className="flex flex-col space-y-3">
            <h2 className="heading2">Забыли пароль</h2>
            <p className="headingStruct text-sm">
              Введите свой e-mail ниже, и вы получите письмо с инструкцией, как сбросить пароль
            </p>
          </section>

          <div className="flex flex-col items-start space-y-1">
            <label className="text-sm font-medium">Электронная почта:</label>
            <input
              className="w-full rounded-full bg-gray-100 px-10 py-8 font-medium placeholder:text-gray-400"
              placeholder="E-mail"
              type="email"
              autoComplete="email"
              required={true}
            />
          </div>

          <button className="flex items-center justify-center rounded-full bg-color-dark px-10 py-8 text-lg font-medium text-white">
            Сбросить пароль
          </button>
        </div>
      </form>

      <Image
        src={picture as unknown as string}
        alt="reset-password"
        quality={100}
        className="w-2/3 md:w-[62%]"
      />
    </main>
  )
}

export default ResetPasswordPage
