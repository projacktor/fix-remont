import React from 'react'

import style from './blackTape.module.scss'
interface BlackBulletProps {
  head: string
  description: React.ReactNode
}

const BlackBullet: React.FC<BlackBulletProps> = ({ head, description }) => {
  return (
    <div
      className={`${style.paraLen} flex flex-col items-start justify-around gap-4 rounded-3xl bg-color-dark px-9 py-5 tracking-tighter text-white`}
    >
      <h5 className="max-w-52 text-3xl font-semibold">{head}</h5>
      {description}
    </div>
  )
}

export default BlackBullet
