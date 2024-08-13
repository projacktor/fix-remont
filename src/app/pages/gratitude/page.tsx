import BlackButton from '@/components/shared/buttons/BlackButton/BlackButton'

const Gratitude = () => {
  return (
    <main
      className="mb-8 flex h-[39rem] w-full items-center justify-center rounded-2xl bg-cover"
      style={{ backgroundImage: 'url(/assets/img/thankYou.png)' }}
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="mb-4 text-center text-white">
          Благодарим
          <br />
          за обращение!
        </h1>
        <h2 className="text-2xl font-medium leading-[131%] tracking-[-0.06em] text-white">
          Ожидайте звонка с номера +375 (800)-00-00
        </h2>
        <BlackButton text="Вернуться на сайт" link="/" />
      </div>
    </main>
  )
}

export default Gratitude
