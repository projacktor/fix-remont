import React from 'react'
import Link from 'next/link'

import WriteUs from '@/components/entities/Write us/WriteUs'
import ContactsContainer from '@/components/entities/Contacts container/ContactsContainer'
import Symbol from '@/components/entities/Symbol/Symbol'

import style from './footer.module.scss'

import footerLogo from '../../../../public/assets/svg/footerLogo.svg'

function Footer() {
  return (
    <footer className="z-50 flex h-28 w-full flex-row items-center justify-around gap-8 rounded-t-2xl bg-color-dark p-10">
      <div className={`${style.white_text} order-1`}>
        <Symbol
          header_src={footerLogo as unknown as string}
          lineColor="rgba(255, 255, 255, 1.25)"
        />
      </div>
      <p className="order-2 text-xs font-light text-white opacity-95">
        Copyright 2024. Все права защищены
      </p>
      <Link className="order-3 text-xs font-light text-color-orange underline" href="#">
        Политика конфиденциальности
      </Link>
      <div className={`${style.white_text} order-4`}>
        <WriteUs />
      </div>
      <div className={`${style.white_text} order-5`}>
        <ContactsContainer />
      </div>
    </footer>
  )
}

export default Footer
