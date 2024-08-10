'use client'
import React from 'react'
import Image from 'next/image'

import SeoPart from '@/components/widgets/SEO/SeoPart'
import Consulting from '@/components/widgets/Consulting/Consulting'
import FaqSection from '@/components/widgets/Faq Section/FaqSection'
import SocialMedia from '@/components/widgets/Social Media/SocialMedia'
import BlogGallery from '@/components/widgets/Blog Gallery/BlogGallery'
import RecommendationForm from '@/components/widgets/Recommendation Form/RecommendationForm'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import ContentFilter from '@/components/shared/Content Filter/ContentFilter'
import Crumb from '@/components/shared/Crumb/Crumb'

import pseudoVid from '../../../../public/assets/img/pseudo videos/pseudoVid.png'

function Blog() {
  const buttons = ['Все', 'Ремонт квартир', 'Строительство домов', 'Полезное']

  const path = ['Блог']
  const links = ['/pages/blog']

  return (
    <main className="flex w-full flex-col items-center">
      <Crumb path={path} links={links} />
      <div className="flex w-full flex-col items-start gap-7">
        <div className="flex w-full flex-col items-start">
          <p className="mb-2 text-left">
            Делимся полезными идеями и раскрываем секреты ремонта и строительства
          </p>
          <h1 className="heading">Полезные статьи</h1>
        </div>
        <ContentFilter buttons={buttons} />
        <div className="flex w-full flex-col items-center gap-8">
          <div className="flex h-full flex-row gap-12">
            <BlogGallery />
            <RecommendationForm />
          </div>
          <div className="button_container h-16 w-full">
            <CheckButton text="Показать больше" link="/blog" />
          </div>
        </div>
      </div>

      <SocialMedia />

      <Image src={pseudoVid} alt="pseudo video" />

      <FaqSection />

      <Consulting />

      <SeoPart />
    </main>
  )
}

export default Blog
