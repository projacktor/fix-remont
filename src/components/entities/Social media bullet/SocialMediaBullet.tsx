import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SocialMediaBulletProps {
  image: string
  name: string
  sub: string
  link: string
}

function SocialMediaBullet({ image, name, sub, link }: SocialMediaBulletProps) {
  return (
    <Link
      className="grid w-full grid-cols-3 items-center rounded-3xl bg-white p-8"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={image} alt={name} width={60} height={60} />
      <h4 className="-translate-x-12 text-[39px] font-bold leading-[123%] tracking-tight">
        {name}
      </h4>
      <p>{sub} подписчиков</p>
    </Link>
  )
}

export default SocialMediaBullet
