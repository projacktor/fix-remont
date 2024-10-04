'use client'
import React from 'react'
import NewsSection from '@/components/widgets/News Section/NewsSection'
import SupportSection from '@/components/widgets/Support Section/SupportSection'
import Image from 'next/image'
import { Post, Picture, article } from '@/server/utils/schemas'

function Page({ params }: { params: { newsId: number } }) {
  // TODO: make async fetch function to get responses
  const response: Post = {
    id: params.newsId,
    title: 'Как рассчитать стоимость через онлайн- калькулятор FIX-ремонт?',
    pictures: ['string', 'string', 'string'],
    articles: [
      {
        title: 'Качество: каждая деталь важна',
        body:
          'В мире современных бизнес-коммуникаций, успешные встречи и конференции играют важную роль.\n' +
          '          Все чаще мы видим, как виртуальные пространства объединяют людей из разных уголков мира,\n' +
          '          позволяя им общаться и сотрудничать, не покидая своих рабочих мест. Конференц-залы стали\n' +
          '          незаменимой частью этой эволюции, и их аудио-визуальные системы играют ключевую роль в\n' +
          '          обеспечении комфорта и эффективности современных деловых встреч.'
      } as article,
      {
        body:
          "{' '}\n" +
          '          Одним из главных требований к аудио-визуальным системам для конференц-залов является\n' +
          '          высокое качество звука и изображения. Важно, чтобы каждый участник мог четко слышать и\n' +
          '          видеть всех других, будь они в одной комнате или на расстоянии метров. Для обеспечения\n' +
          '          качественного звука используются передовые акустические системы и микрофоны с\n' +
          '          шумоподавлением. Важно учесть акустические особенности конференц-зала, чтобы избежать\n' +
          '          эффекта эха или потери звука. Качественное изображение достигается благодаря современным\n' +
          '          проекторам и дисплеям с высоким разрешением. Это особенно важно при проведении\n' +
          '          видеоконференций и презентаций, где каждая деталь имеет значение.'
      } as article
    ]
  }

  return (
    <main className="mb-8 flex w-full flex-col gap-8">
      <div className="mt-4 space-y-5">
        <h5 className="headingStruct text-xl underline">{response.title}</h5>
        <div className="w-[100svw ] h-[30rem] rounded-3xl bg-gray-300">
          {/*<Image src={} alt={}/>*/}
        </div>

        <article className="max-h-32 w-full text-sm font-medium">
          {response.articles[0].body}
        </article>

        <div className="flex flex-row justify-around">
          <div className="h-[20rem] w-[30rem] rounded-3xl bg-gray-300"></div>
          <div className="h-[20rem] w-[30rem] rounded-3xl bg-gray-300"></div>
        </div>

        <h5 className="headingStruct text-xl underline">{response.articles[0].title}</h5>
        <article className="w-full text-sm font-medium">{response.articles[1].body}</article>
      </div>

      <NewsSection />

      <SupportSection />
    </main>
  )
}

export default Page
