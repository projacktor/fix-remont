import React from 'react'
import BlackButton from '../../shared/buttons/Black Button/BlackButton'

function LongOrange() {
  return (
    <div className="flex flex-row items-center justify-around rounded-3xl bg-color-orange p-8">
      <div className="flex flex-col items-start gap-2 text-white">
        <h2 className="headingStruct text-4xl">
          Исключите риски и доверьте свой объект FIX-ремонт
        </h2>
        <h3 className="text-xl font-normal">
          мы не просто берём все финансовые риски на себя, но и закрепляем их юридически
        </h3>
      </div>
      <div className="button_container w-64">
        <BlackButton text="Онлайн-калькулятор" />
      </div>
    </div>
  )
}

export default LongOrange
