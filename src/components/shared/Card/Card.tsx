import React, { useState } from 'react'

interface CardProps {
  title: string
  price: number
}

function Card({ title, price }: CardProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div
      className={`rounded-lg border-4 p-4 ${isChecked ? 'border-color-orange' : 'border-gray-200'}`}
    >
      <div className="relative">
        <div
          className={`h-40 w-full rounded-lg bg-gray-100 ${
            isChecked ? 'border-4 border-color-orange' : 'border-4 border-transparent'
          }`}
        ></div>

        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="checkbox"
            className="form-checkbox h-4 w-4 rounded border-gray-300 checked:border-none"
            checked={isChecked}
            onChange={handleCheckboxChange}
            style={{
              backgroundColor: isChecked ? '#FFA500' : 'transparent',
              borderColor: isChecked ? '#FFA500' : '#E5E7EB'
            }}
          />
          <label htmlFor="checkbox" className="ml-2 text-lg font-medium text-black">
            {title}
          </label>
        </div>

        <p className="mt-2 text-gray-500">{price.toLocaleString('ru-Ru')} руб/м²</p>
      </div>
    </div>
  )
}

export default Card
