import React from 'react'
import openLink from '@/functions/openLink'
import { ButtonProps } from '@/types/ButtonProps'

function OrangeButton({ text, link }: ButtonProps) {
  return (
    <button
      className="rounded-full bg-color-orange px-8 py-6 text-sm font-semibold text-white"
      onClick={() => openLink(link)}
    >
      <p>{text}</p>
    </button>
  )
}

export default OrangeButton
