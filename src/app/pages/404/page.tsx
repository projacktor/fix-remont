import OrangeButton from '@/components/shared/buttons/OrangeButton/OrangeButton'
import Image from 'next/image'
import cloud from '@/public/assets/svg/404.svg'

const PageNotFound = () => {
  return (
    <main className="mb-8 flex h-[39rem] w-full flex-col items-center justify-center gap-20 rounded-2xl border-2 border-[#161616] bg-[#161616] bg-cover">
      <div className="relative top-12 flex flex-col items-center gap-1">
        <h1 className="mb-8 text-white">Такой страницы не существует!</h1>
        <p className="mb-4 mt-0 text-white">Возможно, страница устарела или была удалена</p>
        <OrangeButton text="Перейти на главную" link="/" />
      </div>
      <Image src={cloud} alt="cloud_picture" className="w-[45%]" />
    </main>
  )
}

export default PageNotFound
