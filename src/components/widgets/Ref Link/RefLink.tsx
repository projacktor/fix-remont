import React, { useRef } from 'react'
import Link from 'next/link'
import { handleCopy } from '@/functions/handleCopy'

function RefLink() {
  const linkRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col justify-around rounded-3xl bg-color-orange p-8 text-white">
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
          className={`blackButton flex h-16 w-64 items-center justify-center text-sm`}
          onClick={() => handleCopy(linkRef)}
        >
          Скопировать ссылку
        </button>
      </div>
    </div>
  )
}

export default RefLink
