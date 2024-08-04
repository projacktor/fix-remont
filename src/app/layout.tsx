import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import '@/styles/classes.scss'
import Header from '@/components/widgets/Global Header/GlobalHeader'
import Footer from '@/components/widgets/Global Footer/GlobalFooter'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
