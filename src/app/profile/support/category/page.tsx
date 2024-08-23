import React from 'react'

function Page() {
  const keyword = 'KEYWORD'

  const data = [
    {
      value: 'Не происходит оплата. Что делать?',
      label: '25 февраля 2024',
      key_word: keyword
    }
  ]

  return (
    <main className="w-full flex-col justify-around gap-8">
      <h1 className="heading">Служба поддержки</h1>

      <section className="whiteContainer flex flex-row items-center justify-between space-x-3">
        <div className="headingStruct flex flex-col space-y-1 text-2xl">
          <h2 className="orange-bold">Есть вопросы?</h2>
          <h2>Обратитесь в нашу службу поддержки</h2>
        </div>
        <div className="relative h-max w-1/2">
          <input
            className="w-full rounded-full bg-gray-200 px-8 py-6 placeholder:text-gray-400"
            placeholder="Напривем: Как сделать заказ?"
            type="text"
          />
        </div>
      </section>

      <section className="flex w-full flex-col space-y-5">
        <h2 className="heading2 pl-7">Статьи из категории &quot;{keyword}&quot;</h2>

        <div className="whiteContainer flex w-full flex-col items-center">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-col space-y-1">
              <h5 className="headingStruct">{}</h5>
              <div className="space-w-4 flex w-max flex-row">
                <p className="label"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
