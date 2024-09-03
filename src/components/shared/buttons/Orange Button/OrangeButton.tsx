import React from 'react'
import openLink from '@/functions/openLink'
import { ButtonProps } from '@/types/ButtonProps'

const OrangeButton: React.FC<ButtonProps> = ({ text, link, className, blank }) => {
  const handleClick = openLink(link as string, blank)
  return (
    <button
      className={`orangeButton flex items-center justify-center px-8 py-6 ${!className?.includes('text-') ? 'text-sm' : className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default OrangeButton
