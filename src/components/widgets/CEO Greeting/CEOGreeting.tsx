import Image from 'next/image'
import ceoPhoto from '../../../../public/assets/img/ceoPhoto.png'

function CEOgreeting() {
  return (
    <div className="flex items-center gap-8">
      <div className="h-auto w-1/2">
        <Image
          alt="CEO_photo"
          src={ceoPhoto}
          className="h-5/6 w-full translate-y-6 transform object-cover"
        />
      </div>
      <div className="flex w-1/2 flex-col gap-2">
        <h2 className="heading">
          Здравствуйте! <span className="orange-bold">Меня зовут Фанис Хасанов</span> и я
          приветствую вас на нашем сайте!
        </h2>
        <p className="text-base">
          Мы с супругой прочувствовали все сложности самостоятельного ремонта, когда продали
          квартиру и купили дом. Тогда я работал в Москве и принимать активное участие в ремонте не
          мог.
        </p>
        <ul className="ml-5 list-disc text-base">
          <li>Рабочие и мастера постоянно звонили и просили что-то довезти</li>
          <li>
            Супруге с маленьким ребенком приходилось практически ежедневно ездить в магазины и
            что-то докупать
          </li>
          <li>Ежедневно она тратила 2-3 часа на пробки, езду и покупки</li>
          <li>Мастера постоянно косячили, а смета непрерывно росла</li>
        </ul>
        <p className="mt-4 text-xl">
          Конечно, я принял решение сменить подрядчиков. Стал искать компании, предлагающие ремонт
          по фиксированное цене и забирающие всю ответственность на себя. Таких компании на рынке не
          было. Поэтому и родилась идея создать FIX-ремонт.
        </p>
        <p className="text-base">
          С нами заказчик получает ремонт, строительство, покупку, продажу, благоустройство,
          мебелировку и многое другое по фиксированной стоимости, потратив всего 1.5 часа личного
          времени
        </p>
      </div>
    </div>
  )
}

export default CEOgreeting
