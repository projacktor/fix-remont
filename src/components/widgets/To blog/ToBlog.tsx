import React from 'react'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import BlogBullet from '@/components/entities/Blog bullet/BlogBullet'
import openLink from '@/functions/openLink'
import Image from 'next/image'

import bg from '../../../../public/assets/img/pseudo videos/pseudo_vid_blog.png'

function ToBlog() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-8">
      <h1 className="heading">
        Ведём блог, делимся <span className="orange-bold">многолетним опытом</span> <br /> и
        практической информацией
      </h1>
      <div className="flex h-80 w-full flex-row justify-around gap-14">
        <BlogBullet
          section="Ремонт"
          link="calculator-guide"
          text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
        />
        <BlogBullet
          section="Строительство"
          link="calculator-guide"
          text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
        />
        <Image
          className="rounded-2xl bg-cover bg-center"
          src={bg as unknown as string}
          alt="pseudo vid"
          width={450}
        />
      </div>
      <div className={`flex h-14 w-full flex-row items-center justify-between gap-8 px-2`}>
        <div className="button_container h-full w-4/6">
          <CheckButton text="Перейти в блог" link="/blog" />
        </div>
        <button
          className="h-full w-[27rem] rounded-full border border-red-600 py-4 text-center text-red-600"
          onClick={openLink('https://www.youtube.com/@director_stroyki')}
        >
          Перейти в YouTube
        </button>
      </div>
    </div>
  )
}

export default ToBlog
