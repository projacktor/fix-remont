import React, { useRef } from 'react'
import Link from 'next/link'

function RefLink() {
  const linkRef = useRef<HTMLDivElement>(null)

  const handleCopy = () => {
    if (linkRef.current) {
      const linkElement = linkRef.current.querySelector('a')
      const linkText = linkElement?.textContent
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
        Приглашайте новых клиентов и <br /> зарабатывайте с нами
      </h3>
      <div className="flex flex-row items-center space-x-20">
        <div className="flex flex-col items-start space-y-4" ref={linkRef}>
          <h6 className="text-xs font-normal">Ваша ссылка:</h6>
          <Link href="/" className="text-base font-semibold">
            ref.fix-remont.ru/8GTS7LX82390
          </Link>
          <hr className="w-full bg-white" />
        </div>
        <button
          className={`flex h-16 w-64 items-center justify-center rounded-full bg-color-dark text-sm font-medium text-white`}
          onClick={handleCopy}
        >
          Скопировать ссылку
        </button>
      </div>
    </div>
  )
}

export default RefLink
