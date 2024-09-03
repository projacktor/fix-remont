import React from 'react'
import BlogBulletProfile from '@/components/entities/Blog Bullet Profile/BlogBulletProfile'

function NewsSection() {
  const param = 'calculator-guide'
  return (
    <div className="flex w-full flex-col items-start space-y-4">
      <h1 className="heading">Новости платформы</h1>
      <div className="flex w-full flex-row items-center justify-around space-x-6">
        <BlogBulletProfile
          section="Ремонт"
          link={param}
          text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
        />
        <BlogBulletProfile
          section="Ремонт"
          link={param}
          text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
        />
        <BlogBulletProfile
          section="Ремонт"
          link={param}
          text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"
        />
      </div>
    </div>
  )
}

export default NewsSection
