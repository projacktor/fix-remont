import React from 'react'
import style from './designSide.module.scss'
import openLink from '@/functions/openLink'

function DesignsSlide() {
  return (
    <section
      className={`flex h-screen w-full flex-col-reverse space-y-8 rounded-3xl p-20 ${style.bg}`}
    >
      <div className="order-2 w-[50rem] space-y-4 text-left">
        <h1 className="headingStruct text-6xl text-white">
          FIX-ремонт — это более <br />
          <span className="orange-bold">36 готовых дизайнерских решений</span> под любой бюджет
        </h1>
        <p className="font-light leading-[123%] tracking-tight text-white">
          с реализацией “под ключ” и без финансовых и репутационных рисков для партнёров
        </p>
      </div>
      <button
        className="order-1 flex h-20 w-full items-center justify-center rounded-full border border-white bg-transparent px-4 py-2 text-base font-semibold text-white"
        onClick={() => openLink('')}
      >
        Пройти 3D-тур по проектам
      </button>
    </section>
  )
}

export default DesignsSlide
