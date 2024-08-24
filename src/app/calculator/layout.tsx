import type { Metadata } from 'next'
import '@/styles/globals.scss'
import '@/styles/classes.scss'

export const metadata: Metadata = {
  title: 'Онлайн-калькулятор',
  description: 'Шаг'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
