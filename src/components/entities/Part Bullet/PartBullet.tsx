import React from 'react'

interface PartBulletProps {
  part: string
}

function PartBullet({ part }: PartBulletProps) {
  return (
    <div
      className={`flex w-72 flex-col space-y-4 rounded-2xl p-4 ${part === 'Объект сдан' ? 'bg-color-dark' : 'bg-color-back'}`}
    >
      <p className="text-xs font-medium text-gray-400">Текущий этап:</p>
      <h4
        className={`headingStruct text-xl ${part === 'Объект сдан' ? 'text-white' : 'text-black'}`}
      >
        {part}
      </h4>
    </div>
  )
}

export default PartBullet
