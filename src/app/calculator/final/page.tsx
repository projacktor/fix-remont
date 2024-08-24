import React from 'react'

function Page() {
  return (
    <main className="whiteContainer flex w-full flex-col p-8">
      <section className="flex flex-col space-y-4">
        <h2 className="heading">Итоговая стоимость ремонта:</h2>
        <h1 className="heading6">6 070 000 руб</h1>
        <p className="headingStruct">
          В стоимость уже включены все работы, материалы и дополнительные опции
        </p>
      </section>

      <div className="flex w-full flex-row justify-around">
        <form className="w-[42rem] space-y-10 rounded-3xl bg-gray-100 px-14 py-12">
          <h3 className="heading2">Получите полную смету ремонта вашей квартиры:</h3>
          <p className="headingStruct text-base">
            Оставьте свой номер — мы пришлем готовую смету на WhatsApp
          </p>
          <section className="flex w-11/12 flex-col space-y-4">
            <input
              className="rounded-full bg-white p-7 text-black placeholder:font-medium placeholder:text-black"
              type="tel"
              autoComplete="tel"
              placeholder="Ваш номер телефона"
            />
            <button className="rounded-full bg-green-500 p-7 text-white">
              Получить смету на WhatsApp
            </button>
          </section>
        </form>

        <div className="w-[42rem] space-y-10 rounded-3xl bg-color-orange px-14 py-12 text-white">
          <h3 className="heading2">Или пройдите быструю регистрацию на нашей платформе:</h3>
          <p className="text-base">Оставьте свой номер — мы пришлем готовую смету на WhatsApp</p>

          <section className="w-full">
            <div className="p-12"></div>
            <button className="w-full rounded-full bg-white p-7 text-color-orange">
              Пройти быструю регистрацию
            </button>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Page
