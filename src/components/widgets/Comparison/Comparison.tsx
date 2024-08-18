import React from 'react'

const Comparison: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="space-y-3">
        <p className="text-md">Давайте сравним</p>
        <h1 className="heading">
          <span className="orange-bold">Что выгоднее и надёжнее?</span>
          <br />
          Обратиться в FIX-ремонт или нанять бригаду?
        </h1>
      </div>
      <div className="flex w-full flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-8 rounded-3xl bg-gray-200 p-12 leading-tight">
          <h2 className="text-5xl font-bold">Бригада строителей</h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Финансовые траты</h3>
            <ul className="list-disc space-y-1 pl-4 font-light">
              <li className="text-gray-500">На докупку материалов</li>
              <li className="text-gray-500">На бензин для поездок по магазинам</li>
              <li className="text-gray-500">На переделки и неучтенные расходы</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Временные затраты</h3>
            <ul className="list-disc space-y-1 pl-4 font-light">
              <li className="text-gray-500">Договорились с бригадой</li>
              <li className="text-gray-500">Работа главным на объекте каждый день от 3-х часов</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Нервы</h3>
            <ul className="list-disc space-y-1 pl-4 font-light">
              <li className="text-gray-500">Всё не в радость, состояние критическое</li>
              <li className="text-gray-500">Выливается в семейные ссоры</li>
            </ul>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-8 rounded-3xl bg-color-dark p-12 leading-tight text-white">
          <h2 className="text-5xl font-bold">Сервис FIX-ремонт</h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Финансовые траты</h3>
            <ul className="list-disc space-y-1 pl-4 font-light">
              <li>
                Единоразовая оплата сервису, который сам закупает, доставляет материалы, а также
                нанимает и контролирует всю бригаду
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Временные затраты</h3>
            <ul className="list-disc space-y-1 pl-4 font-light">
              <li>Заключили договор</li>
              <li>Заехали на готовый объект</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Нервы</h3>
            <ul className="list-disc space-y-1 pl-4 font-light">
              <li>
                Команда FIX-ремонт заботится о клиентах <br /> и выполнит всю работу, не дергая вас
                по пустякам и решая вопросы самостоятельно
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comparison
