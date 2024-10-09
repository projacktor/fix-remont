import React from 'react'
import Image from 'next/image'
import info from '../../../../public/assets/svg/info.svg'
import { State } from '@/server/utils/enums'

interface CardNoteProps {
  state: State
}

function CardNote({ state }: CardNoteProps) {
  return (
    <div
      className={`flex flex-row items-center space-x-5 rounded-2xl p-3 ${state === State.act ? 'bg-color-attention text-white' : state === State.notification ? 'bg-color-orange text-white' : 'bg-gray-200 text-gray-600'}`}
    >
      <Image src={info as string} alt={'info'} />
      <p className="text-sm tracking-tight">{state}</p>
    </div>
  )
}

export default CardNote
