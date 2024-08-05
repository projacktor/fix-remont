import React from 'react'

interface MinibarProps {
  desc_name: string
  desc_content: string
}

const Minibar: React.FC<MinibarProps> = ({ desc_name, desc_content }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <p className="text-sm font-normal text-gray-500 opacity-50">{desc_name}</p>
      <p className="text-base font-semibold">{desc_content}</p>
    </div>
  )
}

export default Minibar
