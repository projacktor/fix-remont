import Image from 'next/image'

import onlineCircle from '../../../../public/assets/svg/onlineCircleHeader.svg'
import whatsapp from '../../../../public/assets/svg/social media icons/whatsappIcon.svg'
import telegram from '../../../../public/assets/svg/social media icons/telegramIcon.svg'
import Link from 'next/link'

const WriteUs: React.FC = () => {
  return (
    <div className="w-54 h-15 ml-1 flex flex-row items-center rounded-2xl bg-inherit">
      <div className="mr-2 flex flex-row items-center">
        <Image alt="online" className="mr-2 h-2.5 w-2" src={onlineCircle as unknown as string} />
        <p className="text-xs font-medium">
          Напишите нам, <br /> мы сейчас онлайн
        </p>
      </div>
      <address className="flex w-20 flex-row items-center justify-around">
        <Link
          className="flex w-3/4 items-center"
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="whatsapp" src={whatsapp as unknown as string} width={35} />
        </Link>
        <Link
          className="flex w-3/4 items-center"
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="telegram" src={telegram as unknown as string} width={35} />
        </Link>
      </address>
    </div>
  )
}

export default WriteUs
