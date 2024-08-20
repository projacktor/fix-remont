import type { Metadata } from 'next'
import ProfileHeader from '@/components/widgets/Profile Header/ProfileHeader'
import Footer from '@/components/widgets/Global Footer/GlobalFooter'
import LeftMenu from '@/components/widgets/Left Menu/LeftMenu'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Профиль',
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
        <div className="flex flex-row">
          <LeftMenu />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
