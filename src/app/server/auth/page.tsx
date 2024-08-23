'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import eyeClosedIcon from '../../../../public/assets/svg/close-eye.svg'
import eyeOpenIcon from '../../../../public/assets/svg/open-eye.svg'
import picture from '../../../../public/assets/img/banners/auth.png'

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <main className="flex w-full flex-row items-center justify-center px-12 py-12">
      <form className="whiteContainer flex w-full max-w-md flex-col">
        <div className="flex flex-col space-y-7">
          <section className="flex flex-col space-y-3">
            <h2 className="heading2">Авторизация</h2>
            <p className="headingStruct text-sm">Войдите в аккаунт используя электронную почту</p>
          </section>

          <div className="flex flex-col items-start space-y-1">
            <label className="text-sm font-medium">Электронная почта:</label>
            <input
              className="w-full rounded-full bg-gray-100 px-10 py-8 font-medium placeholder:text-gray-400"
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
              required={true}
            />
          </div>

          <div className="relative flex flex-col items-start space-y-1">
            <label className="text-sm font-medium">Пароль:</label>
            <input
              className="w-full rounded-full bg-gray-100 px-10 py-8 pr-12 font-medium placeholder:text-gray-400"
              placeholder="Введите пароль"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required={true}
            />
            <button
              type="button"
              className={`absolute right-5 ${showPassword ? 'top-[3.6rem]' : 'top-[3.4rem]'}`}
              onClick={togglePasswordVisibility}
            >
              <Image
                src={showPassword ? (eyeOpenIcon as string) : (eyeClosedIcon as string)}
                alt="Toggle Password Visibility"
                width={23}
                height={23}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className={`text-black}] flex items-center text-sm`}>
              <input type="checkbox" id="consent" className="mr-2 h-4 w-4" />
              <label htmlFor="consent" className="text-base">
                Запомнить меня
              </label>
            </div>
            <Link href="#" className="text-base text-color-orange underline hover:opacity-70">
              Забыли пароль?
            </Link>
          </div>

          <button className="flex items-center justify-center rounded-full bg-color-dark px-10 py-8 text-lg font-medium text-white">
            Войти
          </button>
        </div>
        <div className="mt-24 flex flex-col items-center text-sm font-bold">
          <p>
            Ещё нет аккаунта?{' '}
            <Link href="#" className="font-bold text-color-orange underline hover:opacity-70">
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </form>

      <Image
        src={picture as unknown as string}
        alt="auth"
        quality={100}
        className="w-2/3 md:w-[62%]"
      />
    </main>
  )
}

export default LoginPage
