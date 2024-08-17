import React, { useState } from 'react';
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton';
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton';

function SuitSection() {
    const [selectedOption, setSelectedOption] = useState(0);

    const handleVariantChange = (index: number) => {
        setSelectedOption(index);
    };

    const options = ['ФИЗ.ЛИЦО', 'РИЕЛТОР', 'ЗАСТРОЙЩИК'];
    const options_heading = ['Физ. Лицам', 'Риелторам', 'Застройщикам'];
    const options_list = [
        <p key="1">Lorem ipsum ФизЛицо</p>,
        <ul key="2" className="list-disc list-inside text-sm max-w-96 font-medium leading-relaxed">
            <li>Дополнительный заработок (от 50 т.р) за сделку</li>
            <li>Кратно повысите свой уровень сервиса</li>
            <li>Увеличите количество сделок за счёт дополнительных услуг по ремонту и строительству</li>
            <li>Повысите лояльность благодаря спец. предложениям</li>
        </ul>,
        <p key="3">Lorem ipsum Застройщик</p>,
    ];

    return (
        <div className="flex flex-col md:flex-row items-center w-full space-y-8 md:space-y-0">
            <div className="flex flex-col space-y-16 w-full md:w-1/2">
                <h1 className="heading">
                    <span className="orange-bold">Кому подойдёт</span>
                    <br />
                    партнёрская программа
                    <br />
                    FIX-ремонт?
                </h1>
                <div>
                    <p className="text-lg font-semibold underline">Кто вы:</p>
                    <div className="flex flex-wrap gap-6 mt-4">
                        {options.map((option, index) => (
                            <button
                                key={index}
                                className={`w-24 h-24 flex items-center justify-center font-semibold border border-black rounded-2xl transition-colors text-xs
                                    ${selectedOption === index ? 'bg-color-dark text-white' : 'bg-white text-black'}`}
                                onClick={() => handleVariantChange(index)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-[45rem] py-12 px-16 bg-gray-100 rounded-3xl flex flex-col items-start gap-5">
                <h2 className="text-4xl tracking-tighter font-bold">{options_heading[selectedOption]}:</h2>
                {options_list[selectedOption]}
                <div className="flex flex-row gap-4 h-16 w-[40rem] mt-4">
                    <div className="button_container w-80">
                        <OrangeButton text="Присоединиться к программе" />
                    </div>
                    <div className="button_container w-64">
                        <CheckButton text="Подробнее" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuitSection;
