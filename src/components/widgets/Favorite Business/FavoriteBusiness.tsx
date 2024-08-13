import React, { useState } from 'react'
import Image from 'next/image'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import style from './favoriteBusiness.module.scss'
import solution1 from '../../../../public/assets/img/solutions/solution1.png'
import solution2 from '../../../../public/assets/img/solutions/solution2.png'
import solution3 from '../../../../public/assets/img/solutions/solution3.png'
import solution4 from '../../../../public/assets/img/solutions/solution4.png'
import movingArrow from '../../../../public/assets/svg/moveArrow.svg'
import sofaImg from '../../../../public/assets/img/sofaPhotoHome.png'

function FavoriteBusiness() {
  const [currentImg, setCurrentImg] = useState(sofaImg)
  const [selectedVariant, setSelectedVariant] = useState(2)

  const handleVariantChange = (index: number) => {
    setSelectedVariant(index)
  }

  const variants = ['Базовый', 'Стандарт', 'Комфорт', 'Бизнес']
  const variants_description = [
    'Lorem ipsum Базовый',
    'Lorem ipsum Стандарт',
    'Для ценителей дорогого минималистичного стиля',
    'Lorem ipsum Бизнес'
  ]

  const moveLeft = () => {
    // Move left logic
  }

  const moveRight = () => {
    // Move right logic
  }

  return (
    <div className="mb-12 flex min-h-screen w-full flex-row items-center">
      <div className="flex w-1/2 flex-col items-start justify-between gap-64">
        <h1 className="heading">
          Занимайтесь <br /> <b className={`orange-bold font-semibold`}>любимыми</b> делами, <br />{' '}
          а ремонт мы <br /> возьмём на себя.
        </h1>
        <div className="flex flex-col items-center">
          <p className="mb-4 text-lg font-semibold">
            4 пакетных решения.{' '}
            <b>
              <u>Выбирайте</u>
            </b>{' '}
            для себя лучшее:
          </p>
          <div className="flex flex-row items-center justify-around gap-6">
            {[solution1, solution2, solution3, solution4].map((solution, index) => (
              <button
                key={index}
                className="border-none bg-transparent active:border-transparent"
                onClick={() => handleVariantChange(index)}
              >
                <Image
                  alt={`solution${index + 1}`}
                  src={solution as unknown as string}
                  width={100}
                  height={100}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex h-screen w-1/2 flex-col items-center gap-1">
        <div className="relative mb-4 h-3/5">
          <Image alt="world_picture" src={currentImg} />
          <div className="relative bottom-14 left-4 flex w-28 items-center justify-around">
            <button className="border-none bg-transparent" onClick={moveLeft}>
              <Image
                alt="move left"
                src={movingArrow as unknown as string}
                width={40}
                height={40}
              />
            </button>
            <button className="border-none bg-transparent" onClick={moveRight}>
              <Image
                alt="move right"
                src={movingArrow as unknown as string}
                width={40}
                height={40}
                className={`rotate-180`}
              />
            </button>
          </div>
        </div>
        <div
          className={`flex flex-row items-center gap-36 rounded-3xl bg-color-bg-gray px-16 py-8`}
        >
          <div className="mb-4 flex flex-col gap-16">
            <h2 className="text-4xl font-semibold">{variants[selectedVariant]}</h2>
            <p className={`${style.gray_text} w-52 text-base text-gray-600`}>
              {variants_description[selectedVariant]}
            </p>
          </div>
          <div className={`button_container flex w-64 flex-col gap-3`}>
            <div className={`flex flex-col items-start`}>
              <p className={`text-base font-normal`}>Стоимость:</p>
              <h2 className="mb-6 text-4xl font-semibold">Фикс</h2>
            </div>
            <OrangeButton text="Онлайн-калькулятор" link={''} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoriteBusiness
