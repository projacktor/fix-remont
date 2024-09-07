import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../../../public/assets/svg/fixRemontLogo.svg'
import { generateQrCode } from '@/functions/generateQrCode'

interface CodeProps {
  onClose: () => void
}

function Code({ onClose }: CodeProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null)
  const url = 'https://ref.fix-remont.ru/8GTS7LX82390'

  useEffect(() => {
    const generate = async () => {
      const qrCode = await generateQrCode(url, logo.src, 300)
      if (qrCode) {
        setQrCodeUrl(qrCode)
      } else {
        console.error('QR-код не был сгенерирован')
      }
    }

    generate()
  }, [url])

  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
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
          Мой QR-код <br /> для приглашения
        </h3>

        {qrCodeUrl && (
          <Image
            src={qrCodeUrl as unknown as string}
            alt="QR-код"
            width={200}
            height={200}
            quality={100}
            className="rounded-3xl bg-color-back"
          />
        )}

        <h5 className="w-80 text-center text-base">
          Наведите камеру на QR-код и перейдите на страницу
        </h5>
        <h5 className="text-base">Или скопируйте ссылку:</h5>

        <div className="flex w-full flex-col items-center space-y-3">
          <button className="text-lg" onClick={handleCopy}>
            {url}
          </button>
          <hr className="w-full border-t border-color-dark" />
        </div>
      </div>
    </div>
  )
}

export default Code
