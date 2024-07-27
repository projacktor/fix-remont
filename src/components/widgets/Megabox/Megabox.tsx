import React from 'react';
import OrangeButton from "@/components/shared/Orange Button/OrangeButton";
import BlackButton from "@/components/shared/Black Button/BlackButton";

import style from "./megabox.module.scss";

const MegaboxSection = () => {
    const openLink = (url) => () => {
        window.location.href = url;
    };

    return (
        <div className="flex flex-row items-center w-full min-h-screen">
            <div className={`${style.bg} w-1/2 min-h-[90svh] bg-cover bg-center rounded-lg`}>
                <p className="text-white text-4xl font-medium leading-tight tracking-tight ml-8 mt-32 w-3/5">
                    Первый в России <br/>
                    онлайн-сервис <br/>
                    по ремонту и строительству <br/>
                    с фиксированной стоимостью
                </p>
            </div>

            <div className="flex flex-col items-center w-1/2">
                <div className="w-11/12 bg-color-dark rounded-3xl">
                    <p className="text-white text-2xl font-medium leading-snug tracking-tight ml-8 mt-5">
                        Воплотим вашу<br/>
                        мечту в реальность<br/> без визитов на<br/> объект
                    </p>
                    <div className="flex flex-row items-center space-x-8 mt-12 ml-8">
                        <OrangeButton text="Онлайн-калькулятор"/>
                        <BlackButton text="Стать партнёром"/>
                    </div>
                </div>

                {/*<div className="w-11/12 flex flex-col space-y-8">*/}
                {/*    <button className="bg-gray-800 text-white rounded-lg p-5 text-left" onClick={openLink("services/renovation")}>*/}
                {/*        <h3 className="text-xl font-medium mb-2">Ремонт</h3>*/}
                {/*        <p className="hidden_text">Без визитов на объект. <br/>*/}
                {/*            Заезжайте на готовую <br/> квартиру уже через <br/> 6-8 месяцев</p>*/}
                {/*    </button>*/}
                {/*    <button className="bg-gray-800 text-white rounded-lg p-5 text-left" onClick={openLink("services/building")}>*/}
                {/*        <h3 className="text-xl font-medium mb-2">Строительство</h3>*/}
                {/*        <p className="hidden_text">Без визитов на объект. <br/>*/}
                {/*            Заезжайте на готовую <br/> квартиру уже через <br/> 6-8 месяцев</p>*/}
                {/*    </button>*/}
                {/*    <button className="bg-gray-800 text-white rounded-lg p-5 text-left" onClick={openLink("partnership")}>*/}
                {/*        <h3 className="text-xl font-medium mb-2">Партнерская программа</h3>*/}
                {/*        <p className="hidden_text">Без визитов на объект. <br/>*/}
                {/*            Заезжайте на готовую <br/> квартиру уже через <br/> 6-8 месяцев</p>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default MegaboxSection;
