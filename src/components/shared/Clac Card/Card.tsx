import React from 'react'
import Link from 'next/link'

interface CardProps {
  title: string
  price: number
  selected: boolean
  onSelect: (title: string) => void
  link?: string
}

function Card({ title, price, selected, onSelect, link }: CardProps) {
  const handleSelect = () => {
    onSelect(title)
  }

  return (
    <div className="h-max w-max rounded-3xl p-4">
      <div className="relative">
        <div
          className={`h-40 w-72 rounded-3xl bg-gray-100 ${
            selected ? 'border-4 border-color-orange' : 'border-4 border-transparent'
          } transition-all duration-300`}
          onClick={handleSelect}
        ></div>

        <div className="mt-4 flex items-center">
          <input
            type="radio"
            id={`radio-${title}`}
            name="card-selection"
            className="hidden"
            checked={selected}
            onChange={handleSelect}
          />
          <label
            htmlFor={`radio-${title}`}
            className={`flex h-6 w-6 items-center justify-center rounded-sm border-2 ${
              selected ? 'border-color-orange bg-color-orange' : 'border-gray-300'
            } transition-all duration-300 ease-in-out`}
            onClick={handleSelect}
          >
            {selected && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white transition-opacity duration-300 ease-in-out"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.32 7.32a1 1 0 01-1.414 0l-3.293-3.293a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </label>
          <span className="ml-2 text-base font-medium text-black">{title}</span>
        </div>

        <p className="mt-2 text-gray-500">{price.toLocaleString('ru-Ru')} руб/м²</p>
        {link && (
          <Link href={link} className="orange-bold text-ld font-semibold underline">
            Подробнее
          </Link>
        )}
      </div>
    </div>
  )
}

export default Card
