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
      {/*<div className="flex flex-row items-center justify-around w-max h-20 rounded-2xl bg-white">*/}
      {/*</div>*/}
      <Symbol header_src={headerLogo as string} lineColor="rgba(0, 0, 0, 0.5)" />
      <div className="m-0 flex h-12 w-px justify-center border-l border-dashed border-gray-400 opacity-50"></div>
      <ContactsContainer />

      <WriteUs />

      <button className="flex w-80 flex-row items-center justify-between rounded-xl bg-gray-900 p-5">
        <Image alt="profile_icon" className="order-2" src={profileIcon as string} />
        <p className="text-base font-medium leading-none tracking-tight text-white">
          Личный кабинет
        </p>
      </button>

      <button className="order-4 flex size-20 flex-col items-center justify-center rounded-3xl border-black bg-white">
        <Image alt="menu button" className="h-8 w-8" src={menuBar as string} />
      </button>
    </header>
  )
}

export default Header
