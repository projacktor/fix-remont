'use client'

import React from 'react';
import Image from 'next/image';
import pseudoVid from '../../../../../public/assets/img/pseudo videos/pseudoVid.png';
import SeoPart from '@/components/widgets/SEO/SeoPart'
import Consulting from '@/components/widgets/Consulting/Consulting'
import FaqSection from '@/components/widgets/Faq Section/FaqSection'
import SocialMedia from '@/components/widgets/Social Media/SocialMedia'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import ContentFilter from '@/components/shared/Content Filter/ContentFilter'
import BlogGallery from '@/components/widgets/Blog Gallery/BlogGallery'
import RecommendationForm from '@/components/widgets/Recommendation Form/RecommendationForm'

const Blog: React.FC = () => {
  const buttons = [
    "Все",
    "Ремонт квартир",
    "Строительство домов",
    "Полезное"
  ];

  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full flex flex-col items-start p-4">
        <p className="text-left mb-2">
          Делимся полезными идеями и раскрываем секреты ремонта и строительства
        </p>
        <h1 className="text-2xl font-bold mb-4">Полезные статьи</h1>
        <ContentFilter buttons={buttons} />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center w-full max-w-7xl">
          <BlogGallery />
          <RecommendationForm />
        </div>
        <CheckButton text="Показать больше" link="/blog" />
      </div>

      <SocialMedia />

      <Image src={pseudoVid} alt="pseudo video" />

      <FaqSection/>

      <Consulting/>

      <SeoPart/>
    </main>
  );
};

export default Blog;
