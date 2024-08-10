import Image from 'next/image'
import BlackButton from '@/components/shared/buttons/Black Button/BlackButton'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import inviteL from '../../../../public/assets/img/invitingLeft.png'
import invitingRight from '../../../../public/assets/img/invitingRight.png'

const Inviting: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-8">
      <div className="w-1/2">
        <Image alt="We invite you" src={inviteL} className="w-full" />
      </div>
      <div
        className="w-1/2 rounded-xl border-4 border-black bg-cover bg-no-repeat p-10"
        style={{ backgroundImage: `url('/assets/img/invitingRight.png')` }}
      >
        <Image src={invitingRight} alt="Inviting" />
        <h2 className="heading">
          До <span className="orange-bold">-10% от суммы</span> чека - это ваша комиссия за
          приведенного клиента
        </h2>
        <div className="button_container flex flex-col gap-4">
          <BlackButton text="Зарегистрироваться в личном кабинете партнёра" />
          <CheckButton text="Узнать подробнее" />
        </div>
      </div>
    </div>
  )
}

export default Inviting
