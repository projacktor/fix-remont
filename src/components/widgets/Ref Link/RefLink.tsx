import React, { useRef } from 'react'
import Link from 'next/link'

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
    <div className="flex flex-col gap-5 rounded-3xl bg-color-orange px-8 py-14 text-white">
      <h4 className="headingStruct text-3xl">
        Приглашайте новых клиентов и <br /> зарабатывайте с нами
      </h4>
      <div className="flex flex-row space-x-20">
        <div className="flex flex-col items-start space-y-4">
          <h6 className="text-xs font-normal">Ваша ссылка:</h6>
          <Link href="/" className="text-lg font-semibold" ref={linkRef}>
            ref.fix-remont.ru/8GTS7LX82390
          </Link>
          <hr className="w-full bg-white" />
        </div>
        <button
          type={'button'}
          onClick={handleCopy}
          className={`flex w-80 items-center justify-center rounded-full bg-color-dark px-8 py-6 text-lg font-medium text-white`}
        >
          Скопировать ссылку
        </button>
      </div>
    </div>
  )
}

export default RefLink
