import React, { useState } from 'react'
import Image from 'next/image'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import solution1 from '../../../../public/assets/img/solutions/solution1.png'
import solution2 from '../../../../public/assets/img/solutions/solution2.png'
import solution3 from '../../../../public/assets/img/solutions/solution3.png'
import solution4 from '../../../../public/assets/img/solutions/solution4.png'
import movingArrow from '../../../../public/assets/svg/moveArrow.svg'
import sofaImg from '../../../../public/assets/img/sofaPhotoHome.png'

function FavoriteBusiness() {
  const [currentImg, setCurrentImg] = useState(sofaImg)

  const moveLeft = () => {
    // Move left logic
  }

  const moveRight = () => {
    // Move right logic
  }

  return (
    <div className="mb-12 flex min-h-screen w-full flex-row items-center">
      <div className="flex h-screen w-1/2 flex-col items-start justify-between">
        <h1 className="text-5xl font-semibold leading-tight">
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
          <div className="flex flex-row items-center justify-around gap-1">
            <button className="mx-2 border-none bg-transparent active:border-transparent">
              <Image alt="solution_background" src={solution1 as string} width={100} height={100} />
            </button>
            <button className="mx-2 border-none bg-transparent active:border-transparent">
              <Image alt="solution_background" src={solution2 as string} width={100} height={100} />
            </button>
            <button className="mx-2 border-none bg-transparent active:border-transparent">
              <Image alt="solution_background" src={solution3 as string} width={100} height={100} />
            </button>
            <button className="mx-2 border-none bg-transparent active:border-transparent">
              <Image alt="solution_background" src={solution4 as string} width={100} height={100} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-screen w-1/2 flex-col items-center">
        <div className="relative mb-4 h-3/5">
          <Image
            alt="world_picture"
            src={currentImg as string}
          />
          <div className="absolute left-2 top-1/2 flex h-8 w-12 items-center justify-between">
            <button className="border-none bg-transparent" onClick={moveLeft}>
              <Image alt="move left" src={movingArrow as string} width={20} height={20} />
            </button>
            <button className="border-none bg-transparent" onClick={moveRight}>
              <Image alt="move right" src={movingArrow as string} width={20} height={20} />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-3xl bg-color-bg-gray px-6 py-4 w-[40rem]">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold">Комфорт</h2>
            <p className="mt-4 text-base text-gray-600">
              Для ценителей дорогого минималистичного стиля
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-2 text-base font-semibold">Стоимость:</p>
            <h2 className="mb-4 text-3xl font-semibold">Фикс</h2>
            <OrangeButton text="Онлайн-калькулятор" link={''} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoriteBusiness
