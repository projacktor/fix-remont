'use client'
import React from 'react'

import GalleryWithFeedback from '@/components/widgets/Gallery with feedback/GalleryWithFeedback'
import Consulting from '@/components/widgets/Consulting/Consulting'
import RiskSlide from '@/components/widgets/Risk Side/RiskSlide'
import CheckFeedbacks from '@/components/widgets/CheckFeedbacks/CheckFeedbacks'
import HoverSectionBig from '@/components/shared/Hove Section Big/HoverSectionBig'
import SeoPart from '@/components/widgets/SEO/SeoPart'

export default function Services() {
  const hoverSectionLists = (
    <ul>
      <li>Квартиры</li>
      <li>Жилые дома</li>
      <li>Постройки</li>
      <li>Мебелировка</li>
    </ul>
  )

  return (
    <main className="space-y-2">
      <h1 className="text-4xl font-bold">Услуги FIX-ремонт</h1>
      <div className="flex flex-row justify-around gap-4">
        <HoverSectionBig
          link={'/pages/services/building'}
          lists={hoverSectionLists}
          name={'Ремонт'}
        />
        <HoverSectionBig
          link={'/pages/services/apartments'}
          lists={hoverSectionLists}
          name={'Строительство'}
        />
        <HoverSectionBig
          link={'/pages/partnership'}
          lists={hoverSectionLists}
          name={'Партнёрская программа'}
        />
      </div>

      <RiskSlide button_text="Рассчитать стоимость" type={true} />

      <GalleryWithFeedback />

      <CheckFeedbacks />

      <Consulting />

      <SeoPart />
    </main>
  )
}
