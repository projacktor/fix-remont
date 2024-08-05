import React from 'react'

interface DieProps {
  text: string
}

const Die: React.FC<DieProps> = ({ text }) => {
  return (
    <div className="w-58 flex h-10 items-center justify-center rounded-xl bg-white p-4">
      <p className="font-semibold">{text}</p>
    </div>
  )
}

export default Die
