import React, { useState } from 'react';
import Image from 'next/image';
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton';
import solution1 from '../../../../public/assets/img/solutions/solution1.png';
import solution2 from '../../../../public/assets/img/solutions/solution2.png';
import solution3 from '../../../../public/assets/img/solutions/solution3.png';
import solution4 from '../../../../public/assets/img/solutions/solution4.png';
import movingArrow from '../../../../public/assets/svg/moveArrow.svg';
import sofaImg from '../../../../public/assets/img/sofaPhotoHome.png';

function FavoriteBusiness() {
    const [currentImg, setCurrentImg] = useState(sofaImg);

    const moveLeft = () => {
        // Move left logic
    };

    const moveRight = () => {
        // Move right logic
    };

    return (
        <div className="w-full min-h-screen flex flex-row items-center mb-12">
            <div className="flex flex-col items-start w-1/2 h-screen justify-between">
                <h1 className="text-5xl font-semibold leading-tight mb-4">
                    Занимайтесь <br /> <b className={`orange-bold font-semibold`}>любимыми</b> делами, <br /> а ремонт мы <br /> возьмём на себя.
                </h1>
                <div className="flex flex-col items-center">
                    <p className="text-lg font-semibold mb-4">
                        4 пакетных решения. <b><u>Выбирайте</u></b> для себя лучшее:
                    </p>
                    <div className="flex flex-row items-center">
                        <button className="bg-transparent border-none mx-2">
                            <Image alt="solution_background" src={solution1 as string} width={100} height={100} />
                        </button>
                        <button className="bg-transparent border-none mx-2">
                            <Image alt="solution_background" src={solution2 as string} width={100} height={100} />
                        </button>
                        <button className="bg-transparent border-none mx-2">
                            <Image alt="solution_background" src={solution3 as string} width={100} height={100} />
                        </button>
                        <button className="bg-transparent border-none mx-2">
                            <Image alt="solution_background" src={solution4 as string} width={100} height={100} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center w-1/2 h-screen">
                <div className="relative h-3/5 mb-4">
                    <Image alt="world_picture" src={currentImg as string} layout="fill" objectFit="cover" className="rounded" />
                    <div className="absolute top-1/2 left-2 w-12 h-8 flex items-center justify-between">
                        <button className="bg-transparent border-none" onClick={moveLeft}>
                            <Image alt="move left" src={movingArrow as string} width={20} height={20} />
                        </button>
                        <button className="bg-transparent border-none" onClick={moveRight}>
                            <Image alt="move right" src={movingArrow as string} width={20} height={20} />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-color-bg-gray rounded-3xl py-4 px-6">
                    <div className="mb-4">
                        <h2 className="text-3xl font-semibold">Комфорт</h2>
                        <p className="text-base text-gray-600 mt-4">Для ценителей дорогого минималистичного стиля</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-base font-semibold mb-2">Стоимость:</p>
                        <h2 className="text-3xl font-semibold mb-4">Фикс</h2>
                        <OrangeButton text="Онлайн-калькулятор" link={""}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavoriteBusiness;
