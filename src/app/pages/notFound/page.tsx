'use client'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import Image from 'next/image'
import cloud from '../../../../public/assets/svg/404.svg'

export default async function notFound() {
  return (
    <main className="mb-4">
      <div className="rounded-3xl bg-color-dark w-full flex h-[39rem] flex-col items-center justify-between pt-8">
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
  )
}
