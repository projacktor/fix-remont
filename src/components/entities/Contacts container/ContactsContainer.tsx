import Link from 'next/link'
import Image from 'next/image'

import clockIcon from '../../../../public/assets/svg/headerClockIcon.svg'
import phoneIcon from '../../../../public/assets/svg/headerPhone.svg'

const ContactsContainer: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between rounded-2xl bg-inherit">
      <div className="flex flex-row items-center">
        <Image alt="clock_icon" className="h-6 w-4" src={clockIcon as unknown as string} />
        <p className="ml-2 min-w-max text-sm font-medium leading-5">Звоните Пн-Вс: 8:30 - 19:00</p>
      </div>
      <div className="m-4 h-12 w-px border-l border-dashed border-gray-400 opacity-50"></div>
      <address className="flex w-40 flex-row items-center not-italic">
        <Image alt="phone_icon" className="mr-2 h-6 w-4" src={phoneIcon as unknown as string} />
        <Link href="tel:+7 (966) 250-77-99" className="w-36 text-sm font-medium">
          +7 (966) 250-77-99
        </Link>
      </address>
    </div>
  )
}

export default ContactsContainer
