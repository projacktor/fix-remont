import React from 'react'
import Image from 'next/image'

import topic from '../../../../public/assets/svg/rectangleBlack.svg'
import Link from 'next/link'

interface SPProps {
  value: string
  link: string
}

function SupportCategory({ value, link }: SPProps) {
  return (
    <div className="flex flex-row space-x-2">
      <Image src={topic as string} alt="topic" />
      <Link href={link} className="headingStruct text-lg underline">
        {value}
      </Link>
    </div>
  )
}

export default SupportCategory
