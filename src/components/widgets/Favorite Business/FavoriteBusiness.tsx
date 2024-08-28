import React, { useState } from 'react'
import Image from 'next/image'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import style from './favoriteBusiness.module.scss'
import solution1 from '../../../../public/assets/img/solutions/solution1.png'
import solution2 from '../../../../public/assets/img/solutions/solution2.png'
import solution3 from '../../../../public/assets/img/solutions/solution3.png'
import solution4 from '../../../../public/assets/img/solutions/solution4.png'
import activeSolution1 from '../../../../public/assets/img/solutions/activeSolution1.png'
import activeSolution2 from '../../../../public/assets/img/solutions/activeSolution2.png'
import activeSolution3 from '../../../../public/assets/img/solutions/activeSolution3.png'
import activeSolution4 from '../../../../public/assets/img/solutions/activeSolution4.png'
import movingArrow from '../../../../public/assets/svg/moveArrow.svg'
import sofaImg from '../../../../public/assets/img/sofaPhotoHome.png'
import work1 from '../../../../public/assets/img/works gallery/work1.png'
import work2 from '../../../../public/assets/img/works gallery/work2.png'

function FavoriteBusiness() {
  const [currentImg, setCurrentImg] = useState(sofaImg)
  const [selectedVariant, setSelectedVariant] = useState(2)

  const images = [sofaImg, work1, work2] // Массив изображений для карусели, можно добавить больше изображений
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const solutions = [solution1, solution2, solution3, solution4]
  const yellowSolutions = [activeSolution1, activeSolution2, activeSolution3, activeSolution4]

  const moveLeft = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
    setCurrentImg(images[newIndex])
  }

  const moveRight = () => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
    setCurrentImg(images[newIndex])
  }

  return (
    <section className="grid w-full grid-cols-2">
      <div className="grid grid-rows-2">
        <h1 className="heading">
          Занимайтесь <br /> <span className={`orange-bold font-semibold`}>любимыми</span> делами,{' '}
          <br /> а ремонт мы <br /> возьмём на себя.
        </h1>
        <div className="flex flex-col items-start self-end">
          <p className="mb-4 text-lg font-semibold">
            4 пакетных решения.{' '}
            <b>
              <u>Выбирайте</u>
            </b>{' '}
            для себя лучшее:
          </p>
          <div className="flex flex-row items-center justify-around gap-6">
            {solutions.map((solution, index) => (
              <button
                key={index}
                className="border-none bg-transparent active:border-transparent"
                onClick={() => handleVariantChange(index)}
              >
                <Image
                  alt={`solution${index + 1}`}
                  src={
                    selectedVariant === index
                      ? (yellowSolutions[index] as unknown as string)
                      : (solution as unknown as string)
                  }
                  width={100}
                  height={100}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between">
        <div className="relative mb-4 h-3/5">
          <Image
            alt="world_picture"
            src={currentImg as unknown as string}
            quality={100}
            height={400}
          />
          <div className="relative bottom-14 left-4 flex w-24 items-center justify-around">
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
          className={`grid grid-cols-2 grid-rows-2 items-center gap-x-16 gap-y-8 rounded-3xl bg-color-bg-gray px-16 py-8`}
        >
          <h2 className="flex text-4xl font-semibold">{variants[selectedVariant]}</h2>

          <div className={`flex flex-col items-baseline`}>
            <p className={`text-base font-normal`}>Стоимость:</p>
            <h2 className="text-4xl font-semibold">Фикс</h2>
          </div>

          <p className={`${style.gray_text} w-52 text-base text-gray-600`}>
            {variants_description[selectedVariant]}
          </p>
          <div className={`button_container w-64`}>
            <OrangeButton text="Онлайн-калькулятор" link="/calculator/step1" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FavoriteBusiness
