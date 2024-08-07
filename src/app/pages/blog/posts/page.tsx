// pages/posts/Post1.tsx

import React from 'react';
import Image from 'next/image';

import blog1_main from '../../../../../public/assets/img/blog1_calculator.png';
import blog1_2 from '../../../../../public/assets/img/blog2_calculator.png';
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import RecommendationForm from '@/components/widgets/Recommendation Form/RecommendationForm'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import Consulting from '@/components/widgets/Consulting/Consulting'

function Post1() {
  return (
    <main className="gap-12">
      <div className="flex flex-row gap-16 w-full">
        <div className="flex flex-col w-2/3 gap-6">
          <h1 className="text-3xl font-bold">Как рассчитать стоимость <br /> через калькулятор FIX-ремонт?</h1>
          <Image src={blog1_main} alt="calculator_picture" className="w-full" />
          <p className="text-lg leading-6">
            В мире современных бизнес-коммуникаций, успешные встречи и конференции играют важную роль. Все чаще мы видим, как виртуальные пространства объединяют людей из разных уголков мира, позволяя им общаться и сотрудничать, не покидая своих рабочих мест. Конференц-залы стали незаменимой частью этой эволюции, и их аудио-визуальные системы играют ключевую роль в обеспечении комфорта и эффективности современных деловых встреч.
          </p>
          <div className="flex justify-between">
            <Image src={blog1_2} alt="gallery_photo_1" className="w-1/2" />
            <Image src={blog1_2} alt="gallery_photo_2" className="w-1/2" />
          </div>
          <p className="text-lg leading-6">
            <b className="text-black">Качество: каждая деталь важна</b>
            <br /><br />
            Одним из главных требований к аудио-визуальным системам для конференц-залов является высокое качество звука и изображения. Важно, чтобы каждый участник мог четко слышать и видеть всех других, будь они в одной комнате или на расстоянии метров.
            <br /><br />
            Для обеспечения качественного звука используются передовые акустические системы и микрофоны с шумоподавлением. Важно учесть акустические особенности конференц-зала, чтобы избежать эффекта эха или потери звука.
            <br /><br />
            Качественное изображение достигается благодаря современным проекторам и дисплеям с высоким разрешением. Это особенно важно при проведении видеоконференций и презентаций, где каждая деталь имеет значение.
          </p>
          <div className="flex gap-4">
            <Image src={blog1_2} alt="gallery_photo_1" className="w-1/3" />
            <Image src={blog1_2} alt="gallery_photo_2" className="w-1/3" />
            <Image src={blog1_2} alt="gallery_photo_2" className="w-1/3" />
          </div>
          <p className="text-lg leading-6">
            <b className="text-black">Комфорт: создайте условия для успешных встреч</b>
            <br /><br />
            Комфорт участников встречи - это ещё один аспект, на который следует обратить внимание при выборе аудио-визуальных систем для конференц-залов. Удобные кресла, хорошая освещенность и климат-контроль помогают создать оптимальные условия для работы.
            <br /><br />
            Кроме того, комфорт включает в себя возможность быстро и легко подключить свои устройства к системе, будь то ноутбук, смартфон или планшет. Важно, чтобы ничто не мешало процессу обмена информацией и идеями.
          </p>
          <div className="button_container w-full">
            <CheckButton text="Вернуться в блог" link="/blog" />
          </div>
        </div>
        <div className="relative w-1/3 h-[360vh] flex-shrink-0">
          <div className="sticky top-5">
            <RecommendationForm />
          </div>
        </div>
      </div>

      <div className="w-full">
        <PostsGallery />
      </div>

      <div className="w-full">
        <Consulting />
      </div>

      <div className="w-full">
        <SeoPart />
      </div>
    </main>
  );
};

export default Post1;
