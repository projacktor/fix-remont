'use client'
import React from 'react'
import NewsSection from '@/components/widgets/News Section/NewsSection'
import SupportSection from '@/components/widgets/Support Section/SupportSection'
import Image from 'next/image'

interface SingleNews {
  id: number
  heading: string
  picture1: string
  picture2: string
  picture3: string
  label: string
  article1: string
  article2: string
}

function Page({ params }: { params: { newsId: number } }) {
  // TODO: make async fetch function to get responses
  const response = {
    id: params.newsId,
    heading: 'Как рассчитать стоимость через онлайн- калькулятор FIX-ремонт?',
    picture1: 'string',
    picture2: 'string',
    picture3: 'string',
    label: 'Качество: каждая деталь важна',
    article1:
      'В мире современных бизнес-коммуникаций, успешные встречи и конференции играют важную роль.\n' +
      '          Все чаще мы видим, как виртуальные пространства объединяют людей из разных уголков мира,\n' +
      '          позволяя им общаться и сотрудничать, не покидая своих рабочих мест. Конференц-залы стали\n' +
      '          незаменимой частью этой эволюции, и их аудио-визуальные системы играют ключевую роль в\n' +
      '          обеспечении комфорта и эффективности современных деловых встреч.',
    article2:
      "{' '}\n" +
      '          Одним из главных требований к аудио-визуальным системам для конференц-залов является\n' +
      '          высокое качество звука и изображения. Важно, чтобы каждый участник мог четко слышать и\n' +
      '          видеть всех других, будь они в одной комнате или на расстоянии метров. Для обеспечения\n' +
      '          качественного звука используются передовые акустические системы и микрофоны с\n' +
      '          шумоподавлением. Важно учесть акустические особенности конференц-зала, чтобы избежать\n' +
      '          эффекта эха или потери звука. Качественное изображение достигается благодаря современным\n' +
      '          проекторам и дисплеям с высоким разрешением. Это особенно важно при проведении\n' +
      '          видеоконференций и презентаций, где каждая деталь имеет значение.'
  }

  return (
    <main className="mb-8 flex w-full flex-col gap-8">
      <div className="mt-4 space-y-5">
        <h5 className="headingStruct text-xl underline">{response.heading}</h5>
        <div className="w-[100svw ] h-[30rem] rounded-3xl bg-gray-300">
          {/*<Image src={} alt={}/>*/}
        </div>

        <article className="max-h-32 w-full text-sm font-medium">{response.article1}</article>

        <div className="flex flex-row justify-around">
          <div className="h-[20rem] w-[30rem] rounded-3xl bg-gray-300"></div>
          <div className="h-[20rem] w-[30rem] rounded-3xl bg-gray-300"></div>
        </div>

        <h5 className="headingStruct text-xl underline">{response.label}</h5>
        <article className="w-full text-sm font-medium">{response.article2}</article>
      </div>

      <NewsSection />

      <SupportSection />
    </main>
  )
}

export default Page
