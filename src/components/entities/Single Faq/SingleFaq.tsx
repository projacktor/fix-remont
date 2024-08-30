import React, { useState } from 'react'
import Image from 'next/image'
import linkImg from '../../../../public/assets/svg/linkImg.svg'
import style from './singleFaq.module.scss'

interface SingleFaqProps {
  text: string
}

const SingleFaq: React.FC<SingleFaqProps> = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="mb-4 bg-white">
      <button
        onClick={toggleOpen}
        className={`${style.plate} flex w-full items-center justify-between rounded-3xl p-5 transition-all hover:bg-gray-200`}
      >
        <h4 className="text-2xl font-bold">{text}</h4>
        <Image src={linkImg as unknown as string} alt="arrow" width={40} />
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mt-2 rounded-lg p-5">
          <p>
            Минимальный срок службы напыляемой жидкой битумно-латексной гидроизоляции для кровли от
            WPGUM составляет 20 лет. Также наша компания предоставляет 100% гарантию качества сроком
            от 5 лет на всю продуктовую линейку.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleFaq
