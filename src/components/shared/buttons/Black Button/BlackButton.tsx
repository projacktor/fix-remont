import React from 'react'
import openLink from '@/functions/openLink'
import { ButtonProps } from '@/types/ButtonProps'

function BlackButton({ text, link }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center rounded-full border border-white bg-color-dark px-8 py-6 text-sm font-medium text-white"
      onClick={() => openLink(link)}
    >
      <p>{text}</p>
    </button>
  )
}

export default BlackButton
