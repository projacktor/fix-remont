import React from 'react'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import Link from 'next/link'
import Image from 'next/image'

interface RenovationHeaderProps {
  header1: React.ReactNode
  header2: string
  image: string
  link_text?: string
}

const RenovationHeader: React.FC<RenovationHeaderProps> = ({
  header1,
  header2,
  image,
  link_text
}) => {
  return (
    <div className="flex h-[620px] w-full bg-cover bg-center">
      <Image src={image} alt="background" className="relative" />
      <div className="heading absolute bottom-[-1rem] left-[8rem] max-w-lg text-white">
        {header1}
      </div>
      <div className="absolute bottom-[-6rem] right-[5rem] flex w-[26rem] flex-col space-y-24 rounded-3xl bg-color-dark p-8">
        <h2 className="max-w-64 text-2xl font-normal text-white">{header2}</h2>
        {link_text && (
          <Link href={''} className="absolute bottom-36 text-color-orange underline">
            {link_text}
          </Link>
        )}
        <div className="button_container h-16 w-full">
          <OrangeButton text="Онлайн-калькулятор" link="" />
        </div>
      </div>
    </div>
  )
}

export default RenovationHeader
