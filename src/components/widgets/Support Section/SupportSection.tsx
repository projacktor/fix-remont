import React from 'react'
import BlackButton from '@/components/shared/buttons/Black Button/BlackButton'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'

function SupportSection() {
  return (
    <div className="flex flex-row items-center justify-around space-x-3 rounded-3xl border-2 border-color-dark p-7">
      <article className="headingStruct flex flex-col space-y-1 text-2xl">
        <h4 className="orange-bold">Есть вопросы?</h4>
        <h4>Обратитесь в нашу службу поддержки</h4>
      </article>

      <div className="button_container h-16 w-52">
        <BlackButton text="Задать вопрос" link="/" />
      </div>

      <div className="button_container h-16 w-72">
        <CheckButton text="Найти ответ на вопрос в FAQ" link="/pages/about" />
      </div>
    </div>
  )
}

export default SupportSection
