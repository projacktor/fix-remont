import React from 'react'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import Link from 'next/link'
import Image from 'next/image'
import Crumb from '@/components/shared/Crumb/Crumb'

interface RenovationHeaderProps {
  header1: React.ReactNode
  header2: string
  image: string
  link_text?: string
  path: string[]
  links: string[]
}

const RenovationHeader: React.FC<RenovationHeaderProps> = ({
  header1,
  header2,
  image,
  link_text,
  path,
  links
}) => {
  return (
    <div className="relative flex h-[620px] w-full bg-cover bg-center">
      <div className="absolute left-20 top-12">
        <Crumb path={path} links={links} mode={true} />
      </div>
      <Image src={image} alt="background" quality={100} />
      <div className="heading absolute bottom-24 left-20 max-w-lg text-white">{header1}</div>
      <div className="absolute bottom-0 right-1 flex w-[28rem] flex-col space-y-24 rounded-3xl bg-color-dark p-8">
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
