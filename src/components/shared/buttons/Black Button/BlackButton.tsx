import React from 'react'
import openLink from '@/functions/openLink'
import { ButtonProps } from '@/types/ButtonProps'

function BlackButton({ text, link, className, type = 'button', blank }: ButtonProps) {
  const handleClick = openLink(link as string, blank)
  return (
    <button
      type={type}
      className={`blackButton flex items-center justify-center px-8 py-6 ${!className?.includes('text-') ? 'text-sm' : className}`}
      onClick={handleClick}
    >
      <p>{text}</p>
    </button>
  )
}

export default BlackButton
