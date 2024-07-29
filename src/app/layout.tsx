import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '@/components/widgets/Global Header/GlobalHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fix-Remont',
  description: 'Выберите нужный вам ремонт, экономя время!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
