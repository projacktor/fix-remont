import React, { useState } from 'react'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'

function SuitSection() {
  const [selectedOption, setSelectedOption] = useState(0)

  const handleVariantChange = (index: number) => {
    setSelectedOption(index)
  }

  const options = ['ФИЗ.ЛИЦО', 'РИЕЛТОР', 'ЗАСТРОЙЩИК']
  const options_heading = ['Физ. Лицам', 'Риелторам', 'Застройщикам']
  const options_list = [
    <p key="1">Lorem ipsum ФизЛицо</p>,
    <ul key="2" className="max-w-96 list-inside list-disc text-sm font-medium leading-relaxed">
      <li>Дополнительный заработок (от 50 т.р) за сделку</li>
      <li>Кратно повысите свой уровень сервиса</li>
      <li>Увеличите количество сделок за счёт дополнительных услуг по ремонту и строительству</li>
      <li>Повысите лояльность благодаря спец. предложениям</li>
    </ul>,
    <p key="3">Lorem ipsum Застройщик</p>
  ]

  return (
    <div className="flex w-full flex-col items-center space-y-8 md:flex-row md:space-y-0">
      <div className="flex w-full flex-col space-y-16 md:w-1/2">
        <h1 className="heading">
          <span className="orange-bold">Кому подойдёт</span>
          <br />
          партнёрская программа
          <br />
          FIX-ремонт?
        </h1>
        <div>
          <p className="text-lg font-semibold underline">Кто вы:</p>
          <div className="mt-4 flex flex-wrap gap-6">
            {options.map((option, index) => (
              <button
                key={index}
                className={`flex h-24 w-24 items-center justify-center rounded-2xl border border-black text-xs font-semibold transition-colors ${selectedOption === index ? 'bg-color-dark text-white' : 'bg-white text-black'}`}
                onClick={() => handleVariantChange(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-[45rem] flex-col items-start gap-5 rounded-3xl bg-gray-100 px-16 py-12">
        <h2 className="text-4xl font-bold tracking-tighter">{options_heading[selectedOption]}:</h2>
        {options_list[selectedOption]}
        <div className="mt-4 flex h-16 w-[40rem] flex-row gap-4">
          <div className="button_container w-80">
            <OrangeButton text="Присоединиться к программе" />
          </div>
          <div className="button_container w-64">
            <CheckButton text="Подробнее" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuitSection
