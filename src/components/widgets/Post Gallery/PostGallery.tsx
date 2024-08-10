import React from 'react'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import Scroller from '@/components/shared/Scroller/Scroller'
import BlogBullet from '@/components/entities/Blog bullet/BlogBullet'

const PostsGallery: React.FC = () => {
  const param = 'calculator-guide'

  return (
    <div className="flex w-full flex-col gap-5">
      <h1 className="heading pl-3">Также может быть интересно</h1>
      <div className="flex h-80 items-center justify-around">
        <BlogBullet
          section="Ремонт"
          link={param}
          text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
        />
        <BlogBullet
          section="Ремонт"
          link={param}
          text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
        />
        <BlogBullet
          section="Ремонт"
          link={param}
          text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
        />
      </div>
      <div className="w-full px-10">
        <Scroller />
      </div>
      <div className="button_container h-16 w-full px-10">
        <CheckButton text="Читать другие статьи" link="/blog" />
      </div>
    </div>
  )
}

export default PostsGallery
