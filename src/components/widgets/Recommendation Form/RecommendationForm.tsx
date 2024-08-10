import React from 'react'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import PrivacyPolicyBox from '@/components/entities/Privacy policy box/PrivacyPolicyBox'

const RecommendationForm: React.FC = () => {
  return (
    <div className="flex max-w-[30rem] flex-col items-center gap-8 rounded-3xl bg-color-dark px-9 py-9 text-white">
      <p className="w-full pl-2 text-left text-sm">Получите бесплатный файл</p>
      <h3 className="text-left text-3xl font-bold">
        <span className="orange-bold">ТОП-7 рекомендаций</span>
        <br /> от наших специалистов
        <br /> по выбору материалов
        <br /> для внутренней
        <br /> отделки вашего жилья
      </h3>
      <form className="flex flex-col items-center gap-3">
        <label htmlFor="contact-method" className="mb-2 self-start text-sm">
          Куда выслать файл?
        </label>
        <select
          id="contact-method"
          className="w-full appearance-none rounded-full bg-color-input-d px-8 py-5 text-white"
        >
          <option>Написать в WhatsApp</option>
          <option>Написать в Telegram</option>
        </select>
        <input
          type="tel"
          placeholder="Ваш номер телефона"
          className="w-full rounded-full bg-color-input-d px-8 py-5 text-white"
        />
        <div className="button_container w-full">
          <OrangeButton text="Записаться на консультацию" />
        </div>
        <div className="w-full">
          <PrivacyPolicyBox color="#fff" />
        </div>
      </form>
    </div>
  )
}

export default RecommendationForm
