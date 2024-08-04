import Symbol from '@/components/entities/Symbol/Symbol'
import ContactsContainer from '@/components/entities/Contacts container/ContactsContainer'
import WriteUs from '@/components/entities/Write us/WriteUs'

import headerLogo from '@/../public/assets/svg/headerLogo.svg'
import profileIcon from '@/../public/assets/svg/profileIcon.svg'
import menuBar from '@/../public/assets/svg/menuBar.svg'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="flex w-full flex-row items-center justify-around p-4">
      <div className="flex flex-row items-center justify-around gap-4">
        <Symbol header_src={headerLogo as string} lineColor="rgba(0, 0, 0, 0.5)" />
        <div className="flex h-12 w-px justify-center border-l border-dashed border-gray-400 opacity-50"></div>
        <ContactsContainer />
      </div>

      <WriteUs />

      <button className="flex flex-row items-center justify-between gap-44 rounded-xl bg-color-dark px-4 py-6">
        <p className="text-base font-medium leading-none tracking-tight text-white">
          Личный кабинет
        </p>
        <Image alt="profile_icon" className="order-2" src={profileIcon as string} />
      </button>

      <button className="order-4 flex size-20 flex-col items-center justify-center rounded-3xl border-black bg-white">
        <Image alt="menu button" className="h-8 w-8" src={menuBar as string} />
      </button>
    </header>
  )
}

export default Header
