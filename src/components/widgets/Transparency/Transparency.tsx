import React from 'react'
import Image from 'next/image'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import transparencyBullets from '../../../../public/assets/img/transparencyBullets.png'

const Transparency: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-start gap-12">
      <h1 className="heading">
        Весь процесс сотрудничества на <span className="orange-bold">100% прозрачный</span> и
        контролируемый
      </h1>
      <Image
        alt="transparency_bullets"
        src={transparencyBullets as unknown as string}
        className="w-full"
      />
      <div className="button_container h-16 w-full">
        <CheckButton text="Зарегистрироваться на платформе" />
      </div>
    </div>
  )
}

export default Transparency
