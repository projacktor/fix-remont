import React from 'react'
import Link from 'next/link'

import bg from '../../../../public/assets/img/blog1.png'
import Image from 'next/image'

interface BlogBulletProps {
  section: string
  link: string
  text: string
}

const BlogBullet: React.FC<BlogBulletProps> = ({ section, link, text }) => {
  return (
    <div className="relative rounded-lg">
      <Image src={bg as unknown as string} alt="blog photo z-10" width={440} />
      <p className="absolute bottom-60 left-8 z-20 flex max-h-max max-w-max items-center justify-center rounded-full bg-color-dark px-5 py-3 text-xs font-semibold text-white">
        {section}
      </p>
      <Link
        href={`/blog/${link}`}
        className={`absolute bottom-14 left-8 z-20 block w-96 text-xl font-semibold text-white underline`}
      >
        {text}
      </Link>
    </div>
  )
}

export default BlogBullet
