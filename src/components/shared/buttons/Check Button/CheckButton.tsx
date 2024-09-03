'use client'
import React from 'react'
import openLink from '@/functions/openLink'
import { ButtonProps } from '@/types/ButtonProps'

function CheckButton({ text, link, blank }: ButtonProps) {
  const handleClick = openLink(link as string, blank as boolean)
  return (
    <button
      className="checkButton flex items-center justify-center px-4 py-2 text-base"
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default CheckButton
