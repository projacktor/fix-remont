'use client'
import React from 'react'
import Image from 'next/image'

import banner from '../../../public/assets/img/bannerTrial.png'
import RefLink from '@/components/widgets/Ref Link/RefLink'
import CodeGen from '@/components/widgets/Code Generator/CodeGen'
import Wallet from '@/components/widgets/Wallet/Wallet'

async function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Image src={banner as unknown as string} alt="banner" className="w-full" />

      <h1 className="heading">Главная</h1>

      <div className="flex flex-row justify-between space-x-8">
        <RefLink />

        <CodeGen />
      </div>

      <Wallet />

      <div></div>
    </main>
  )
}

export default Home
