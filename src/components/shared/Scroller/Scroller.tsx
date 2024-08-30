import React from 'react'
import Image from 'next/image'
import movingArrow from '../../../../public/assets/svg/moveArrow.svg'

interface ScrollerProps {
  currentIndex: number
  moveLeft: () => void
  moveRight: () => void
}

function Scroller({ currentIndex, moveLeft, moveRight }: ScrollerProps) {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      <div className="order-1 flex flex-row justify-around gap-2">
        <button onClick={moveLeft} className="border-none bg-transparent">
          <Image src={movingArrow as unknown as string} alt="move left" className="leftMover" />
        </button>
        <button onClick={moveRight} className="border-none bg-transparent">
          <Image
            src={movingArrow as unknown as string}
            alt="move right"
            className="rightMover rotate-180 transform"
          />
        </button>
      </div>
      <div className="order-2">
        <svg
          width="110"
          height="10"
          viewBox="0 0 110 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(5)].map((_, index) => (
            <circle
              key={index}
              cx={5 + index * 23}
              cy="5"
              r="4.5"
              fill={index === currentIndex ? '#161616' : '#DDDDDD'}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}

export default Scroller
