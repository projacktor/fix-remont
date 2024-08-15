'use client'
import React from 'react'

import GalleryWithFeedback from '@/components/widgets/Gallery with feedback/GalleryWithFeedback'
import Consulting from '@/components/widgets/Consulting/Consulting'
import RiskSlide from '@/components/widgets/Risk Side/RiskSlide'
import CheckFeedbacks from '@/components/widgets/CheckFeedbacks/CheckFeedbacks'
import HoverSectionBig from '@/components/shared/Hove Section Big/HoverSectionBig'
import SeoPart from '@/components/widgets/SEO/SeoPart'

import materialsImg from '../../../../public/assets/img/creditCardMaterials.png'

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
      <div className="flex flex-row justify-between gap-4">
        <HoverSectionBig link={''} lists={hoverSectionLists} name={'Ремонт'} />
        <HoverSectionBig link={''} lists={hoverSectionLists} name={'Строительство'} />
        <HoverSectionBig link={''} lists={hoverSectionLists} name={'Партнёрская программа'} />
      </div>

      <RiskSlide button_text="Рассчитать стоимость" background={materialsImg as string} />

      <GalleryWithFeedback />

      <CheckFeedbacks />

      <Consulting />

      <SeoPart />
    </main>
  )
}
