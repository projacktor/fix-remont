'use client'
import React from 'react'

import GalleryWithFeedback from '@/components/widgets/Gallery with feedback/GalleryWithFeedback'
import Consulting from '@/components/widgets/Consulting/Consulting'
import SeoPart from '@/components/widgets/SEO/SeoPart'

import materialsImg from '../../../../public/assets/img/creditCardMaterials.png'
import RiskSlide from '@/components/widgets/Risk Side/RiskSlide'
import CheckFeedbacks from '@/components/widgets/CheckFeedbacks/CheckFeedbacks'
// import TapeSectionBig from '@/components/shared/Hove Section Big/TapeSectionBig'

export default function Services() {
  return (
    <main className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold">Услуги FIX-ремонт</h1>
        {/*<TapeSectionBig />*/}
      </div>

      <RiskSlide button_text="Рассчитать стоимость" background={materialsImg as string} />

      <GalleryWithFeedback />

      <CheckFeedbacks />

      <Consulting />

      <SeoPart />
    </main>
  )
}
