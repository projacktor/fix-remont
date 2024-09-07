import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import code from '../../../../public/assets/img/trialQr.png'
import Code from '@/components/modal/Code/Code'
import { generateQrCode } from '@/functions/generateQrCode'
import logo from '../../../../public/assets/svg/fixRemontLogo.svg'

function CodeGen() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

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

  return (
    <div>
      <div className="flex flex-row space-x-8 rounded-3xl bg-color-dark p-10 text-white">
        <div className="flex flex-col justify-between">
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
          <div className="p-4"></div>
        </div>

        <div className="flex w-52 flex-col space-y-12">
          <h3 className="headingStruct text-2xl">Мой QR-код для приглашения</h3>

          <button
            className={`orangeButton flex h-16 w-full items-center justify-center px-8 py-6 text-base`}
            onClick={handleOpenModal}
          >
            Открыть
          </button>
        </div>
      </div>

      {isModalOpen && <Code onClose={handleCloseModal} />}
    </div>
  )
}

export default CodeGen
