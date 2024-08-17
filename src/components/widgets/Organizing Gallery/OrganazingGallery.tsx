import React from 'react'
import Image from 'next/image'

import Scroller from '@/components/shared/Scroller/Scroller'

import pic1 from '../../../../public/assets/img/organizationGallery1.png'
import pic2 from '../../../../public/assets/img/organizationGallery2.png'

function OrganizationGallery() {
  return (
    <div className="flex w-full flex-col gap-12">
      <h1 className="heading">
        <span className="orange-bold">Возьмём на себя</span> организацию и выполнение работ под ключ
      </h1>
      <div className="flex w-full flex-col gap-20 md:flex-row">
        <div className="flex w-full flex-col gap-8 md:w-1/2">
          <Image alt="staff_picture" src={pic1 as string} className="w-full" />
          <Scroller />
        </div>
        <div className="flex w-full flex-col gap-8 md:w-1/2">
          <Image alt="staff_picture" src={pic2 as string} className="w-full" />
          <Scroller />
        </div>
      </div>
    </div>
  )
}

export default OrganizationGallery
