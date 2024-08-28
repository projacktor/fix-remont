import React from 'react'
import style from './creditCard.module.scss'

function CreditCard() {
  return (
    <section
      className={`${style.bg} flex w-full flex-row items-center justify-between rounded-3xl px-12 py-8`}
    >
      <h3 className="headingStruct w-96 text-4xl text-white">
        Подберём для вас <span className="orange-bold">выгодное</span> кредитное предложение
      </h3>

      <h4 className="w-80 text-3xl font-medium text-white">
        <span className="orange-bold">от 5% до 10%</span>
        <br />у банков-партнёров
      </h4>
    </section>
  )
}

export default CreditCard
