import React, { useCallback } from 'react'
import Image from 'next/image'
import code from '../../../../public/assets/img/trialQr.png'

interface CodeProps {
  onClose: () => void
}

function Code({ onClose }: CodeProps) {
  const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonText = event.currentTarget.innerText

    navigator.clipboard
      .writeText(buttonText)
      .then(() => {
        alert('Скопировано в буфер обмена')
      })
      .catch((err) => {
        console.error('Ошибка копирования: ', err)
      })
  }

  return (
    <div className="fixed inset-0 z-50 flex w-full items-center justify-center overflow-hidden bg-black bg-opacity-75">
      <div className="relative flex flex-col items-center space-y-6 rounded-3xl bg-white px-20 py-8 font-semibold tracking-tight">
        <button
          className="absolute right-6 top-4 rounded-full bg-color-back px-3 py-1.5 text-center text-2xl text-color-input-d"
          onClick={onClose}
        >
          &times;
        </button>
        <h3 className="text-center text-3xl">
          Мой QR-код <br /> для приглашения{' '}
        </h3>
        <Image
          src={code as unknown as string}
          alt="QR-code"
          quality={100}
          width={200}
          height={200}
        />
        <h5 className="w-80 text-center text-base">
          Наведите камеру на QR-код и перейдите на страницу
        </h5>
        <h5 className="text-base">Или скопируйте ссылку:</h5>

        <button className="text-lg" onClick={handleCopy}>
          ref.fix-remont.ru/*****
        </button>
        <hr />
      </div>
    </div>
  )
}

export default Code
