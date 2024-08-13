import React from 'react'
import Image from 'next/image'
import groupPhoto from '../../../../public/assets/img/groupPhoto.png'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'

function Presentation() {
  return (
    <div className="flex w-full flex-col items-center gap-6 py-4">
      <h1 className="heading">
        Над вашим объектом будет работать команда{' '}
        <span className="orange-bold">настоящих фанатов</span> своего дела
      </h1>
      <div className="w-full px-4">
        <Image src={groupPhoto as unknown as string} alt="group photo" className="rounded-lg" />
      </div>
      <div className="button_container h-16 w-full">
        <CheckButton text="Оставить заявку на консультацию от специалиста" link="/contacts" />
      </div>
    </div>
  )
}

export default Presentation
