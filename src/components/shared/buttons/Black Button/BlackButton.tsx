import React from 'react'
import openLink from '@/functions/openLink'
import { ButtonProps } from '@/types/ButtonProps'

const BlackButton: React.FC<ButtonProps> = ({ text, link, className, type = 'button', blank }) => {
  const handleClick = openLink(link, blank)
  return (
    <button
      type={type}
      className={`flex items-center justify-center rounded-full border border-white bg-color-dark px-8 py-6 text-sm font-medium text-white ${className}`}
      onClick={handleClick}
    >
      <p>{text}</p>
    </button>
  )
}

export default BlackButton
