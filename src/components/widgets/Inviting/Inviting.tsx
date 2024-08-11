import Image from 'next/image'
import BlackButton from '@/components/shared/buttons/Black Button/BlackButton'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'

import inviteL from '../../../../public/assets/img/invitingLeft.png'
import invitingRight from '../../../../public/assets/img/invitingRight.png'

// TODO: add media query to change the heading font-size to 6xl

function Inviting() {
  return (
    <div className="flex w-full items-center justify-evenly gap-8">
      <div className="w-1/2">
        <Image alt="We invite you" src={inviteL} className="w-full" />
      </div>
      <div className="relative flex min-h-full w-1/2 flex-col justify-between gap-4 self-stretch rounded-3xl border-4 border-black p-10">
        <Image
          src={invitingRight}
          alt="Inviting"
          className="absolute right-[0.3px] top-1 bg-cover bg-no-repeat"
        />
        <h2 className="heading max-w-[20rem]">
          До <span className="orange-bold">-10% от суммы</span> чека - это ваша комиссия за
          приведенного клиента
        </h2>
        <div className="flex flex-col gap-4">
          <div className="button_container">
            <BlackButton text="Зарегистрироваться в личном кабинете партнёра" />
          </div>
          <div className="button_container h-16">
            <CheckButton text="Узнать подробнее" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inviting
