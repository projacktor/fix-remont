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
    <div className="single_blog_bullet h-84 rounded-lg bg-cover">
      <Image src={bg as string} alt="blog photo" className="h-full w-max" />
      <div className="relative bottom-72 left-4 flex max-h-max max-w-max items-center justify-center rounded-full bg-gray-900 p-4">
        <p className="text-xs font-semibold text-white">{section}</p>
      </div>
      <Link href={`/blog/${link}`}>
        <p className="relative bottom-40 left-8 w-80 text-xl font-semibold text-white underline">
          {text}
        </p>
      </Link>
    </div>
  )
}

export default BlogBullet
