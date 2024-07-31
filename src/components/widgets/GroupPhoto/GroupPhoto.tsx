import React from 'react'
import Image from 'next/image'
import CheckButton from '../../shared/buttons/CheckButton/CheckButton'
import groupPhoto from '../../../pages/Home/static/works/groupPhoto.png'

function Presentation() {
  return (
    <div className="presentation flex flex-col items-center gap-6 py-4">
      <h1 className="text-center text-xl font-semibold md:text-3xl lg:text-4xl">
        Над вашим объектом будет работать команда{' '}
        <b className="text-yellow-400">настоящих фанатов</b> своего дела
      </h1>
      <div className="w-full max-w-5xl px-4">
        <Image src={groupPhoto} alt="team photo" layout="responsive" className="rounded-lg" />
      </div>
      <div className="mt-10 w-full max-w-md">
        <CheckButton text="Оставить заявку на консультацию от специалиста" link="/contacts" />
      </div>
    </div>
  )
}

export default Presentation
