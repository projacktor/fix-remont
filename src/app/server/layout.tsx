import type { Metadata } from 'next'
import ProfileHeader from '@/components/widgets/Profile Header/ProfileHeader'
import Footer from '@/components/widgets/Global Footer/GlobalFooter'
import '@/styles/globals.scss'
import '@/styles/classes.scss'

export const metadata: Metadata = {
  title: 'Fix-Remont',
  description: 'Личная страница'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <ProfileHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
