import Symbol from '@/components/entities/Symbol/Symbol';
import ContactsContainer from '@/components/entities/Contacts container/ContactsContainer';
import WriteUs from '@/components/entities/Write us/WriteUs';

import headerLogo from '@/../public/assets/svg/headerLogo.svg';
import profileIcon from '@/../public/assets/svg/profileIcon.svg';
import menuBar from '@/../public/assets/svg/menuBar.svg';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex flex-row items-center justify-around p-4 w-full">
      {/*<div className="flex flex-row items-center justify-around w-max h-20 rounded-2xl bg-white">*/}
      {/*</div>*/}
      <Symbol
        header_src={headerLogo as string}
        lineColor="rgba(0, 0, 0, 0.5)"
      />
      <div className="w-px h-12 border-l border-dashed border-gray-400 opacity-50 flex justify-center m-0"></div>
      <ContactsContainer />

      <WriteUs />

      <button className="flex flex-row justify-between items-center p-5 w-80 rounded-xl bg-gray-900">
        <Image
          alt="profile_icon"
          className="order-2"
          src={profileIcon as string}
        />
        <p className="font-medium text-base leading-none tracking-tight text-white">
          Личный кабинет
        </p>
      </button>

      <button className="order-4 flex flex-col justify-center items-center size-20 bg-white rounded-3xl border-black">
        <Image alt="menu button" className="w-8 h-8" src={menuBar as string} />
      </button>
    </header>
  );
};

export default Header;
