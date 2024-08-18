import React from 'react'
import Scroller from '@/components/shared/Scroller/Scroller'
import Image from 'next/image'
import kitchen from '../../../../public/assets/img/kitchen.webp'

function SelfRenovationGallery() {
  return (
    <div className="flex w-full flex-col gap-12">
      <div className="space-y-4">
        <h1 className="heading">
          При самостоятельном ремонте вы
          <br />
          <span className="orange-bold">рискуете потратить в два раза больше</span>
        </h1>
        <p className="font-medium">3 примера непредвиденного роста затрат:</p>
      </div>
      <div id="gallery" className="flex w-full flex-col items-center gap-9">
        <div id="gallery_content" className="flex w-full flex-row items-center">
          <div className="flex w-1/2 flex-col items-start gap-8 p-20">
            <h2 className="heading2">Кухня: внеплановые затраты удвоили стоимость ремонта</h2>
            <ul className="list-disc pl-4 font-light">
              <li className="text-lg text-gray-500">
                Мастера сняли потолок, переделали электрику, наклеили обои и уложили керамогранит на
                стену
              </li>
              <li className="text-lg text-gray-500">
                При монтаже натяжного потолка рабочие попали в силовой кабель
              </li>
              <li className="text-lg text-gray-500">
                Пришлось снимать керамогранит, отклеивать обои и делать электрику заново
              </li>
              <li className="text-lg text-gray-500">Бегом по магазинам за новыми материалами</li>
              <li className="text-lg text-gray-500">
                Снова приходится клеить обои, укладывать керамогранит и натягивать потолок
              </li>
            </ul>
            <h2 className="text-2xl font-bold">
              <span className="orange-bold">Итог:</span> затраты умножились на 2
            </h2>
          </div>
          <div className="w-1/2">
            <Image alt="kitchen_picture" src={kitchen} width={600} />
          </div>
        </div>
        <Scroller />
      </div>
    </div>
  )
}

export default SelfRenovationGallery
