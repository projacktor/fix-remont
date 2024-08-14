import React from 'react'
import Image from 'next/image'
import Scroller from '@/components/shared/Scroller/Scroller'
import work1 from '../../../../public/assets/img/works gallery/work1.png'
import work2 from '../../../../public/assets/img/works gallery/work2.png'
import Link from 'next/link'

function WorksGallery() {
  return (
    <div className="flex h-[80vh] flex-col items-start gap-8">
      <div className="flex flex-row items-center gap-8">
        <div id="variant1">
          <Image src={work1 as unknown as string} alt="work1" layout="responsive" />
          <Link href="#" className={`relative bottom-14 left-9 font-normal text-color-orange`}>
            Узнать стоимость
          </Link>
        </div>
        <div id="variant2">
          <Image src={work2 as unknown as string} alt="work2" layout="responsive" />
          <Link href="#" className={`relative bottom-14 left-9 font-normal text-color-orange`}>
            Узнать стоимость
          </Link>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Scroller />
      </div>
    </div>
  )
}

export default WorksGallery
