import React, { useRef } from 'react'
import Link from 'next/link'
import BlackButton from "@/components/shared/buttons/Black Button/BlackButton";

function RefLink() {
  const linkRef = useRef(null)

  const handleCopy = () => {
    if (linkRef.current) {
      const linkText = linkRef.current?.textContent
      if (linkText) {
        navigator.clipboard
          .writeText(linkText)
          .then(() => {
            alert('Ссылка скопирована!')
          })
          .catch((err) => {
            console.error('Не удалось скопировать текст: ', err)
          })
      }
    }
  }
  return (
      <div className="flex flex-col space-y-5 rounded-3xl bg-color-orange p-8 text-white">
        <h3 className="headingStruct text-2xl">
          Приглашайте новых клиентов и <br/> зарабатывайте с нами
        </h3>
        <div className="flex flex-row space-x-20 items-center">
          <div className="flex flex-col items-start space-y-4">
            <h6 className="text-xs font-normal">Ваша ссылка:</h6>
            <Link href="/" className="text-base font-semibold" ref={linkRef}>
              ref.fix-remont.ru/8GTS7LX82390
            </Link>
            <hr className="w-full bg-white"/>
          </div>
          <div className="button_container w-64 h-18">
            <BlackButton text="Скопировать ссылку" className="text-base"/>
          </div>
        </div>
      </div>
  )
}

export default RefLink
