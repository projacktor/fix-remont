import React from 'react'
import openLink from '@/functions/openLink'
import { ButtonProps } from '@/types/ButtonProps'

const OrangeButton: React.FC<ButtonProps> = ({ text, link, className }) => {
  return (
    <button
      className={`flex items-center justify-center rounded-full bg-color-orange px-8 py-6 text-sm font-semibold text-white ${className}`}
      onClick={() => link && openLink(link)}
    >
      <p>{text}</p>
    </button>
  )
}

export default OrangeButton
