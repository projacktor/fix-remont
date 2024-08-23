'use client'
import React from 'react'
import NewsSection from '@/components/widgets/News Section/NewsSection'
import SupportSection from '@/components/widgets/Support Section/SupportSection'
import Image from 'next/image'

function Page() {
  return (
    <main className="mb-8 flex w-full flex-col gap-8">
      <div className="mt-4 space-y-5">
        <h5 className="headingStruct text-xl underline">
          Как рассчитать стоимость через онлайн- калькулятор FIX-ремонт?
        </h5>
        <div className="w-[100svw ] h-[30rem] rounded-3xl bg-gray-400">
          {/*<Image src={} alt={}/>*/}
        </div>

        <article className="max-h-32 w-full text-sm font-medium">
          В мире современных бизнес-коммуникаций, успешные встречи и конференции играют важную роль.
          Все чаще мы видим, как виртуальные пространства объединяют людей из разных уголков мира,
          позволяя им общаться и сотрудничать, не покидая своих рабочих мест. Конференц-залы стали
          незаменимой частью этой эволюции, и их аудио-визуальные системы играют ключевую роль в
          обеспечении комфорта и эффективности современных деловых встреч.
        </article>

        <div className="flex flex-row justify-around">
          <div className="h-[20rem] w-[30rem] rounded-3xl bg-gray-400"></div>
          <div className="h-[20rem] w-[30rem] rounded-3xl bg-gray-400"></div>
        </div>

        <h5 className="headingStruct text-xl underline">Качество: каждая деталь важна</h5>
        <article className="w-full text-sm font-medium">
          {' '}
          Одним из главных требований к аудио-визуальным системам для конференц-залов является
          высокое качество звука и изображения. Важно, чтобы каждый участник мог четко слышать и
          видеть всех других, будь они в одной комнате или на расстоянии метров. Для обеспечения
          качественного звука используются передовые акустические системы и микрофоны с
          шумоподавлением. Важно учесть акустические особенности конференц-зала, чтобы избежать
          эффекта эха или потери звука. Качественное изображение достигается благодаря современным
          проекторам и дисплеям с высоким разрешением. Это особенно важно при проведении
          видеоконференций и презентаций, где каждая деталь имеет значение.
        </article>
      </div>

      <NewsSection />

      <SupportSection />
    </main>
  )
}

export default Page
