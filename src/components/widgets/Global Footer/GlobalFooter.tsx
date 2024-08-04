import React from 'react';
import Link from "next/link";

import WriteUs from "@/components/entities/Write us/WriteUs";
import ContactsContainer from "@/components/entities/Contacts container/ContactsContainer";
import Symbol from "@/components/entities/Symbol/Symbol";

import style from './footer.module.scss';

import footerLogo from '../../../../public/assets/svg/footerLogo.svg';


function Footer() {
    return (
        <footer className="flex flex-row items-center gap-8 justify-around w-full h-28 p-10 bg-color-dark rounded-t-2xl z-50">
            <div className={`${style.white_text} order-1`}>
                <Symbol header_src={footerLogo as string} lineColor="rgba(255, 255, 255, 1.25)" />
            </div>
            <p className="order-2 text-white text-xs font-light opacity-95">
                Copyright 2024. Все права защищены
            </p>
            <Link className="order-3 text-color-orange text-xs font-light underline" href="#">
                Политика конфиденциальности
            </Link>
            <div className={`${style.white_text} order-4`}>
                <WriteUs />
            </div>
            <div className={`${style.white_text} order-5`}>
                <ContactsContainer />
            </div>
        </footer>
    );
}

export default Footer;
