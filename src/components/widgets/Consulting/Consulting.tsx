import React, { useState, useRef } from 'react'
import Image from 'next/image'

import BlackButton from '@/components/shared/buttons/Black Button/BlackButton'

import mainEng from '../../../../public/assets/img/mainEngPhoto.png'

function Consulting() {
  const handleSave = () => {}
  const [phone, setPhone] = useState<string>('')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    setFocused(true)
    if (!phone.startsWith('+7')) {
      setPhone('+7')
    }
  }

  const handleBlur = () => {
    setFocused(false)
    if (phone === '+7') {
      setPhone('')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const numericValue = inputValue.replace(/\D/g, '')

    if (numericValue.startsWith('7')) {
      setPhone('+' + numericValue)
    } else {
      setPhone('+7' + numericValue)
    }
  }

  return (
    <section className="flex w-full flex-col items-center gap-12">
      <div className="flex w-11/12 flex-row items-center justify-between">
        <div className="flex flex-col gap-4 space-y-4 text-start">
          <div>
            <p className="font-medium">Остались вопросы?</p>
            <h1 className="heading">
              <span className="orange-bold">Запишитесь</span> на <br /> консультацию от <br />{' '}
              инженера FIX-ремонт
            </h1>
          </div>
          <ul className="list-inside list-disc space-y-0 text-left text-lg font-medium">
            <li>Поможем подобрать тариф</li>
            <li>Расскажем про сроки строительства</li>
            <li>Озвучим стоимость материалов</li>
            <li>Поделимся опытом решения подобных задач</li>
          </ul>
        </div>
        <div className="relative flex flex-col items-center">
          <Image src={mainEng} alt="Фото главного инженера" width={750} quality={100} />
          <div className="absolute right-10 top-12 flex w-36 flex-col gap-6 text-white">
            <h2 className="text-3xl font-semibold">Саид Низамов</h2>
            <p className="text-sm font-light">Главный иженер FIX-ремонт</p>
          </div>
        </div>
      </div>
      <form
        className="flex w-11/12 flex-col items-start justify-around gap-3"
        onSubmit={handleSave}
      >
        <label id="contact-method" className="text-sm font-medium">
          Как с нами связаться?
        </label>
        <div className="flex w-full flex-row items-center justify-around gap-16">
          <div className="relative w-1/3">
            <select
              id="contact-method"
              className="w-full appearance-none rounded-full bg-gray-100 p-6"
            >
              <option>Написать в WhatsApp</option>
              <option>Написать в Telegram</option>
            </select>

            <span className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 transform text-gray-400">
              ▼
            </span>
          </div>
          <input
            ref={inputRef}
            value={phone}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            name="phone_number"
            autoComplete="tel"
            type="tel"
            maxLength={12}
            placeholder="Ваш номер телефона"
            className="w-1/3 rounded-full bg-gray-100 p-6 placeholder:font-medium placeholder:text-black"
          />
          <div className="button_container w-1/3">
            <BlackButton text="Записаться на консультацию" link="#" type={'submit'} />
          </div>
        </div>
      </form>
    </section>
  )
}

export default Consulting
