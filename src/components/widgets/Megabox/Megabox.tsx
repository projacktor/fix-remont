import React from 'react';
import OrangeButton from "@/components/shared/Orange Button/OrangeButton";
import BlackButton from "@/components/shared/Black Button/BlackButton";

import style from "./megabox.module.scss";
import HoverSection from "@/components/shared/Hover section/HoverSection";

function MegaboxSection() {
    return (
        <div className="flex flex-row items-center w-full min-h-screen gap-6">
            <div className={`${style.bg} max-w-1/2 w-[95svw] min-h-[90svh] bg-cover bg-center rounded-xl`}>
                <p className="text-white text-4xl font-medium leading-tight tracking-tight ml-8 mt-32 w-3/5 relative top-44 left-9">
                    Первый в России <br/>
                    онлайн-сервис <br/>
                    по ремонту и строительству <br/>
                    с фиксированной стоимостью
                </p>
            </div>

            <div className="flex flex-col gap-2 items-center w-1/2 max-w-1/2">
                <div className="flex flex-col gap-40 p-10 w-full bg-color-dark rounded-3xl">
                    <p className="text-white text-2xl font-medium leading-snug tracking-tight">
                        Воплотим вашу<br/>
                        мечту в реальность<br/> без визитов на<br/> объект
                    </p>
                    <div className={`${style.button_container} flex flex-row items-center space-x-8`}>
                        <OrangeButton text="Онлайн-калькулятор" link=""/>
                        <BlackButton text="Стать партнёром" link=""/>
                    </div>
                </div>

                <div className="flex flex-row gap-7">
                    <HoverSection name="Ремонт" text={<p>Без визитов на объект. <br/>  Заезжайте в готовую <br/> квартиру уже через 6-8 <br/> месяцев</p>} link={""}/>
                    <HoverSection name="Строительство" text={<p>Без визитов на объект. <br/>  Заезжайте в готовую <br/> квартиру уже через 6-8 <br/> месяцев</p>} link={""}/>
                    <HoverSection name="Партнерская программа" text={<p>Подходит для физ.лиц, застройщиков, риелторов</p>} link={""}/>
                </div>
            </div>
        </div>
    );
}

export default MegaboxSection;
