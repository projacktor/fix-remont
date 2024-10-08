import React from 'react'

interface ContentFilterProps {
  buttons: string[]
}

const ContentFilter: React.FC<ContentFilterProps> = ({ buttons }) => {
  return (
    <div className="flex items-center justify-around gap-10">
      {buttons.map((text, index) => (
        <button
          key={index}
          className="rounded-full bg-gray-100 p-3 text-sm active:bg-color-dark active:text-white"
        >
          {text}
        </button>
      ))}
    </div>
  )
}

export default ContentFilter
