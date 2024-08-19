import React from 'react'
import openLink from '@/functions/openLink'
import { ButtonProps } from '@/types/ButtonProps'

function BlackButton({ text, link, className, type = 'button', blank }: ButtonProps) {
  const handleClick = openLink(link as string, blank)
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
