import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface GalleryElemProps {
  image: string
  title: string
  link: string
}

function GalleryElement({ image, title, link }: GalleryElemProps) {
  return (
    <div className="relative">
      <Image src={image as unknown as string} alt={title} quality={100} />
      <div className="absolute bottom-12 left-9 flex w-max flex-col gap-y-4">
        <h4 className="text-3xl font-semibold leading-tight text-white">{title}</h4>
        <Link href={link} className={`font-normal text-color-orange underline`}>
          Узнать стоимость
        </Link>
      </div>
    </div>
  )
}

export default GalleryElement
