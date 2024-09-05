import React, { useState } from 'react'
import Image from 'next/image'
import code from '../../../../public/assets/img/trialQr.png'
import Code from '@/components/modal/Code/Code'

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

      {isModalOpen && <Code onClose={handleCloseModal} />}
    </div>
  )
}

export default CodeGen
