'use client'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import cloud from '../../public/assets/svg/404.svg'
import Footer from '@/components/widgets/Global Footer/GlobalFooter'
import Image from 'next/image'
export default async function notFound() {
  return (
    <body className="flex min-h-screen self-stretch">
      <main className="mb-4 flex min-h-screen flex-grow items-center justify-center pt-8">
        <div className="flex min-h-full w-full flex-grow flex-col items-center justify-between rounded-3xl bg-color-dark pt-8">
          <div className="relative top-12 flex flex-col items-center gap-8">
            <h1 className="heading text-white">Такой страницы не существует!</h1>
            <p className="font-light text-white">Возможно, страница устарела или была удалена</p>
            <div className="button_container w-64">
              <OrangeButton text="Перейти на главную" link="/" />
            </div>
          </div>
          <Image src={cloud as string} alt="cloud_picture" className="w-[45%]" />
        </div>
      </main>
      <Footer />
    </body>
  )
}
