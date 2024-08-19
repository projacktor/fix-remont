import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import '@/styles/classes.scss'
import Header from '@/components/widgets/Global Header/GlobalHeader'
import Footer from '@/components/widgets/Global Footer/GlobalFooter'


export const metadata: Metadata = {
  title: 'Fix-Remont',
  description: 'Выберите нужный вам ремонт, экономя время!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
