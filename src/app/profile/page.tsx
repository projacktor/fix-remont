'use client'
import React from 'react'
import Image from 'next/image'

import banner from '../../../public/assets/img/bannerTrial.png'
import RefLink from '@/components/widgets/Ref Link/RefLink'

async function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Image src={banner as unknown as string} alt="banner" className="w-full" />

      <h1 className="heading">Главная</h1>

      <div className="flex flex-row justify-between">
        <RefLink />
      </div>
    </main>
  )
}

export default Home
