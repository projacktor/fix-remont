import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import bg from '../../../../public/assets/img/blog1.png'

interface BlogBulletProps {
  section: string
  link: string
  text: string
}

const BlogBullet: React.FC<BlogBulletProps> = ({ section, link, text }) => {
  return (
    <div className="relative rounded-lg">
      <Image src={bg as unknown as string} alt="blog photo" width={400} className="relative" />
      <p className="absolute left-7 top-5 flex max-h-max max-w-max items-center justify-center rounded-full bg-color-dark px-4 py-2 text-xs font-semibold text-white">
        {section}
      </p>
      <Link
        href={`${link}`}
        className={`absolute bottom-7 left-8 block w-64 text-lg font-semibold text-white underline`}
      >
        {text}
      </Link>
    </div>
  )
}

export default BlogBullet
