import React, { useState } from 'react'
import Image from 'next/image'
import code from '../../../../public/assets/img/trialQr.png'

function CodeGen() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="flex flex-row space-x-8 rounded-3xl bg-color-dark p-10 text-white">
        <div className="flex flex-col justify-between">
          <Image src={code as unknown as string} alt="QR-code" quality={100} width={150} />
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative rounded-lg bg-white p-4">
            <button
              className="absolute right-2 top-0 m-2 text-2xl text-black"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <Image
              src={code as unknown as string}
              alt="QR-code"
              quality={100}
              width={300}
              height={300}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default CodeGen
