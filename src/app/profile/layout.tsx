import type { Metadata } from 'next'
import ProfileHeader from '@/components/widgets/Profile Header/ProfileHeader'
import Footer from '@/components/widgets/Global Footer/GlobalFooter'

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
        {children}
      </body>
    </html>
  )
}
