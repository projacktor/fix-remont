'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import blog1_main from '../../../../../public/assets/img/blog1_calculator.png'
import blog1_2 from '../../../../../public/assets/img/blog2_calculator.png'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import RecommendationForm from '@/components/widgets/Recommendation Form/RecommendationForm'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import Consulting from '@/components/widgets/Consulting/Consulting'
import PostsGallery from '@/components/widgets/Post Gallery/PostGallery'
import Crumb from '@/components/shared/Crumb/Crumb'

function Post1() {
  const [postName, setPostName] = useState('')
  useEffect(() => {
    const name = document.querySelector('.heading')?.textContent
    setPostName(name || '')
  }, [])
  const path = ['Блог', postName]
  const links = ['/pages/dashboard/blog', '/pages/dashboard/blog/posts']
  return (
    <main className="flex w-full flex-col items-center gap-12">
      <Crumb path={path} links={links} />
      <div className="flex w-full flex-row justify-between gap-8">
        <div className="flex w-2/3 flex-col items-center gap-6">
          <h1 className="heading w-full text-left">
            Как рассчитать стоимость <br /> через калькулятор FIX-ремонт?
          </h1>
          <Image src={blog1_main} alt="calculator_picture" />
          <p className="text-lg leading-6">
            В мире современных бизнес-коммуникаций, успешные встречи и конференции играют важную
            роль. Все чаще мы видим, как виртуальные пространства объединяют людей из разных уголков
            мира, позволяя им общаться и сотрудничать, не покидая своих рабочих мест. Конференц-залы
            стали незаменимой частью этой эволюции, и их аудио-визуальные системы играют ключевую
            роль в обеспечении комфорта и эффективности современных деловых встреч.
          </p>
          <div className="flex justify-between gap-12">
            <Image src={blog1_2} alt="gallery_photo_1" />
          </div>
          <p className="text-lg leading-6">
            <b className="text-black">Качество: каждая деталь важна</b>
            <br />
            <br />
            Одним из главных требований к аудио-визуальным системам для конференц-залов является
            высокое качество звука и изображения. Важно, чтобы каждый участник мог четко слышать и
            видеть всех других, будь они в одной комнате или на расстоянии метров.
            <br />
            <br />
            Для обеспечения качественного звука используются передовые акустические системы и
            микрофоны с шумоподавлением. Важно учесть акустические особенности конференц-зала, чтобы
            избежать эффекта эха или потери звука.
            <br />
            <br />
            Качественное изображение достигается благодаря современным проекторам и дисплеям с
            высоким разрешением. Это особенно важно при проведении видеоконференций и презентаций,
            где каждая деталь имеет значение.
          </p>
          <div className="flex gap-8">
            <Image src={blog1_2} alt="gallery_photo_2" />
          </div>
          <p className="text-lg leading-6">
            <b className="text-black">Комфорт: создайте условия для успешных встреч</b>
            <br />
            <br />
            Комфорт участников встречи - это ещё один аспект, на который следует обратить внимание
            при выборе аудио-визуальных систем для конференц-залов. Удобные кресла, хорошая
            освещенность и климат-контроль помогают создать оптимальные условия для работы.
            <br />
            <br />
            Кроме того, комфорт включает в себя возможность быстро и легко подключить свои
            устройства к системе, будь то ноутбук, смартфон или планшет. Важно, чтобы ничто не
            мешало процессу обмена информацией и идеями.
          </p>
          <div className="button_container mt-10 h-20 w-full">
            <CheckButton text="Вернуться в блог" link="/blog" />
          </div>
        </div>
        <div className="relative w-1/3">
          <div className="sticky top-5">
            <RecommendationForm />
          </div>
        </div>
      </div>

      <PostsGallery />

      <Consulting />

      <SeoPart />
    </main>
  )
}

export default Post1
