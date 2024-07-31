import React from 'react'
import Image from 'next/image'
import movingArrow from '../../../../public/assets/svg/moveArrow.svg'
import scroller from '../../../../public/assets/svg/scroller.svg'

function Scroller() {
  const moveLeft = () => {
    // Move left logic
  }

  const moveRight = () => {
    // Move right logic
  }

  return (
    <div className="flex w-full flex-row items-center justify-between">
      <div className="order-1 flex flex-row justify-around gap-4">
        <button onClick={moveLeft} className="border-none bg-transparent">
          <Image src={movingArrow as string} alt="move left" className="leftMover" />
        </button>
        <button onClick={moveRight} className="border-none bg-transparent">
          <Image
            src={movingArrow as string}
            alt="move right"
            className="rightMover rotate-180 transform"
          />
        </button>
      </div>
      <div className="order-2">
        <Image src={scroller as string} alt="scroller" width="95" />
      </div>
    </div>
  )
}

export default Scroller
