import Symbol from '@/components/shared/Symbol/Symbol';
import ContactsContainer from '@/components/shared/Contacts container/ContactsContainer';
import WriteUs from '@/components/shared/Write us/WriteUs';

import headerLogo from '@/../public/assets/svg/headerLogo.svg';
import profileIcon from '@/../public/assets/svg/profileIcon.svg';
import menuBar from '@/../public/assets/svg/menuBar.svg';
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <header className="flex flex-row items-center justify-around pl-4 pr-4 w-full">
            <div className="flex flex-row items-center gap-5 w-1/2 h-20 rounded-2xl bg-white">
                <div id="symbol_part">
                    <Symbol header_src={headerLogo as string} lineColor="rgba(0, 0, 0, 0.5)" />
                </div>
                <div className="w-px h-12 border-l border-dashed border-gray-400 opacity-50"></div>
                <div id="contacts_part">
                    <ContactsContainer />
                </div>
            </div>
            <WriteUs />
            <button className="flex flex-row justify-between items-center p-5 w-80 rounded-xl bg-gray-900">
                <Image alt="profile_icon" className="order-2" src={profileIcon as string} />
                <p className="font-medium text-base leading-none tracking-tight text-white">Личный кабинет</p>
            </button>
            <div className="order-4">
                <button className="flex flex-col justify-center items-center p-8 rounded-2xl bg-white">
                    <Image alt="menu button" className="w-6 h-4" src={menuBar as string} />
                </button>
            </div>
        </header>
    );
};

export default Header;
