import React from 'react'
import openLink from '@/functions/openLink'
import { ButtonProps } from '@/types/ButtonProps'

function CheckButton({ text, link }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center rounded-full border border-gray-900 bg-transparent px-4 py-2 text-base font-semibold text-gray-900"
      onClick={() => link && openLink(link)}
    >
      {text}
    </button>
  )
}

export default CheckButton
