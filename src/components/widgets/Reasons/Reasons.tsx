import React from 'react';

import CheckButton from '@/components/shared/buttons/Check Button/CheckButton';
import ReasonBlock from '@/components/shared/Reason Block/ReasonBlock';

interface ReasonsListProps {
    head_text: React.ReactNode;
}

function ReasonsList({ head_text }: ReasonsListProps) {
    return (
        <div className="flex flex-row w-full">
            <div className="w-1/2">
                <div className="sticky top-2.5">
                    <h1>{head_text}</h1>
                    <div className="mt-4 button_container h-16 w-2/3">
                        <CheckButton text="Рассчитать стоимость без посещения оффиса" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2.5 w-1/2">
                <ReasonBlock
                    text1="Долгий выбор материала"
                    text2="и подсчёты бюджета"
                    description="ссоры и траты времени на переподбор, когда желание не сходится с бюджетом"
                />
                <ReasonBlock
                    text1="Бесконечный поиск"
                    text2="хороших исполнителей"
                    description="снова траты времени на поиск, выбор и общение без понимания средних цен"
                />
                <ReasonBlock
                    text1="Организация"
                    text2="всех работ"
                    description="попытки выстроить очередность процессов без должного опыта"
                />
                <ReasonBlock
                    text1="Постоянный"
                    text2="контроль"
                    description="приходится отвлекаться от дел, бросать всё и ехать на объект без понимания, что проверять"
                />
                <ReasonBlock
                    text1="Разборки, кто прав,"
                    text2="а кто виноват"
                    description="нервная система одна, а виноватых всё равно не найти"
                />
                <ReasonBlock
                    text1="Регулярный закуп"
                    text2="и доставка материалов"
                    description="вместо отдыха после работы - похождения по строительным магазинам и поездки на объект"
                />
                <ReasonBlock
                    text1={<span className="orange-bold">И в результате</span>}
                    text2=""
                    description="несмотря на все старания и страдания, сроки и стоимость ремонта увеличиваются в 2-3 раза"
                />
            </div>
        </div>
    );
};

export default ReasonsList;
