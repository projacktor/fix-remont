import React from 'react'
export const handleCopy = (linkRef: React.RefObject<HTMLDivElement>) => {
  if (linkRef.current) {
    const linkElement = linkRef.current.querySelector('a')
    const linkText = linkElement?.textContent
    if (linkText) {
      navigator.clipboard
        .writeText(linkText)
        .then(() => {
          alert('Ссылка скопирована!')
        })
        .catch((err) => {
          console.error('Не удалось скопировать текст: ', err)
        })
    }
  }
}
