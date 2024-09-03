import React from 'react'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import BlogBullet from '@/components/entities/Blog bullet/BlogBullet'
import openLink from '@/functions/openLink'
import Image from 'next/image'

import bg from '../../../../public/assets/img/pseudo videos/pseudo_vid_blog.png'
import Link from 'next/link'

function ToBlog() {
  return (
    <section className="flex h-full w-full flex-col items-start gap-8">
      <h1 className="heading">
        Ведём блог, делимся <span className="orange-bold">многолетним опытом</span> <br /> и
        практической информацией
      </h1>
      <div className="grid w-full grid-cols-3 grid-rows-[auto,4rem] gap-8">
        <div className="flex items-center justify-center">
          <BlogBullet
            section="Ремонт"
            link="posts"
            text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
          />
        </div>
        <div className="flex items-center justify-center">
          <BlogBullet
            section="Строительство"
            link="posts"
            text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="rounded-2xl bg-cover bg-center"
            src={bg as unknown as string}
            alt="pseudo vid"
            width={450}
          />
        </div>
        <div className="col-span-2 flex h-16 w-full items-center justify-center">
          <div className="button_container h-16 w-full">
            <CheckButton text="Перейти в блог" link="/pages/blog" />
          </div>
        </div>
        <Link
          className="clickBlack flex h-16 items-center justify-center rounded-full border border-red-600 py-2 text-center text-red-600 transition duration-150 hover:bg-red-600 hover:text-white active:translate-y-0.5 active:shadow-inner"
          href={'https://www.youtube.com/@director_stroyki'}
        >
          Перейти в YouTube
        </Link>
      </div>
    </section>
  )
}

export default ToBlog
