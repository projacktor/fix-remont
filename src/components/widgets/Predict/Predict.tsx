import React from 'react';
import BlackButton from '@/components/shared/buttons/Black Button/BlackButton';

function Predict() {
    return (
        <div className="flex flex-col items-center w-full gap-8">
            <div className="w-full flex flex-row items-center gap-40 justify-between">
                <div className="flex flex-col items-start gap-4">
                    <h1 className="heading w-[30rem]">
                        <span className="orange-bold">Спрогнозируйте свой доход</span> прямо сейчас
                    </h1>
                    <p className="text-lg font-medium">В расчёт возьмём средние данные по пакетам</p>
                </div>
                <div
                    className="flex flex-col items-center justify-center h-40 py-6 px-20 gap-4 border-2 border-black rounded-2xl"
                >
                    <h1 className="text-5xl heading">
                        Итого: <span className="underline">382 000</span> руб
                    </h1>
                    <p className="text-sm text-gray-500">
                        *расчёт ориентировочный и не несёт в себе никаких гарантий
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-around w-full items-center">
                <div className="flex flex-col w-[25rem]">
                    <label htmlFor="fix" className="text-sm">Количество клиентов на ремонт</label>
                    <input
                        name="fix"
                        type="number"
                        placeholder="Например, 10"
                        className="mt-2 input-filed"
                    />
                </div>
                <div className="flex flex-col w-[25rem]">
                    <label htmlFor="building" className="text-sm">Количество клиентов на строительство</label>
                    <input
                        name="building"
                        type="number"
                        placeholder="Например, 8"
                        className="mt-2 input-filed"
                    />
                </div>
                <div className="button_container flex items-center w-[25rem]">
                    <div className="mt-8 w-full">
                        <BlackButton text="Рассчитать доход" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Predict;
