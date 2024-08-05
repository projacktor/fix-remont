import React from 'react';
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import PrivacyPolicyBox from '@/components/entities/Privacy policy box/PrivacyPolicyBox'

const RecommendationForm: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-8 rounded-2xl w-11/12 max-w-md my-8 mx-auto">
      <p className="text-center text-sm mb-4">Получите бесплатный файл</p>
      <h3 className="text-left text-2xl font-bold mb-4">
        ТОП-7 рекомендаций
        <br /> от наших специалистов
        <br /> по выбору материалов
        <br /> для внутренней
        <br /> отделки вашего жилья
      </h3>
      <form className="flex flex-col items-center">
        <label htmlFor="contact-method" className="self-start text-sm mb-2">Куда выслать файл?</label>
        <select id="contact-method" className="w-full p-4 mb-4 rounded-full bg-gray-600 text-white">
          <option>Написать в WhatsApp</option>
          <option>Написать в Telegram</option>
        </select>
        <input type="tel" placeholder="Ваш номер телефона" className="w-11/12 p-4 mb-4 rounded-full bg-gray-600 text-white" />
        <OrangeButton text="Записаться на консультацию" />
        <div className="mt-4">
          <PrivacyPolicyBox color="#fff" />
        </div>
      </form>
    </div>
  );
};

export default RecommendationForm;
