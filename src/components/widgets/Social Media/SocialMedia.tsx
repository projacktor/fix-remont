import React from 'react'
import Image from 'next/image'

import videoY from '../../../../public/assets/img/pseudo videos/videoY.png'
import vkIcon from '../../../../public/assets/svg/social media icons/vkIcon.svg'
import instagramIcon from '../../../../public/assets/svg/social media icons/instaIcon.svg'
import telegramIcon from '../../../../public/assets/svg/social media icons/telegramIcon.svg'
import SocialMediaBullet from '@/components/entities/Social media bullet/SocialMediaBullet'

const SocialMedia = () => {
  return (
    <div className="relative h-4/5 w-full">
      <h1 className="heading">
        Мы максимально <span className="orange-bold">открыты</span> и <br />
        подтверждаем экспертность в социальных сетях
      </h1>
      <div className="mt-8 flex w-full flex-row items-center gap-8">
        <a
          href="https://www.youtube.com/c/%D0%9F%D0%95%D0%A0%D0%95%D0%A1%D0%A2%D0%A0%D0%9E%D0%99%D0%9A%D0%90"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="w-full" src={videoY as string} alt="video" />
        </a>
        <div className="flex w-1/2 flex-col items-center justify-between gap-10">
          <SocialMediaBullet
            image={vkIcon as string}
            name={'ВКонтакте'}
            sub={'1 500'}
            link={'https://vk.com/fix.remoont?from=search'}
          />
          <SocialMediaBullet
            image={instagramIcon as string}
            name={'Instagram'}
            sub={'15 500'}
            link={'https://instagram.com/fix_remont.ru'}
          />
          <SocialMediaBullet
            image={telegramIcon as string}
            name={'Telegram'}
            sub={'500'}
            link={'https://t.me/FIX_REMONT_bot'}
          />
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
