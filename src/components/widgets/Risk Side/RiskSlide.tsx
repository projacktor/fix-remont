import React from 'react';
import Image from 'next/image';

import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton';

import style from './riskSlide.module.scss';

import creditCardImg from '../../../../public/assets/img/creditCardImg.png';
import creditBullets from '../../../../public/assets/img/creditBullets.png';

interface RiskSlideProps {
    button_text: string,
    background: string
}

function RiskSlide({ button_text, background }: RiskSlideProps) {
    return (
        <div className="flex flex-row items-center gap-4 h-[93vh] relative">
            <div className="flex flex-col items-center w-1/2 h-full">
                <div className="mt-4">
                    <Image src={creditCardImg as string} alt="credit_card" layout="responsive" />
                </div>
                <div className="mt-4">
                    <Image src={creditBullets as string} alt="bullets" layout="responsive" />
                </div>
            </div>
            <div className="relative w-1/2 h-[627px]">
                <Image src={background} alt="brush_picture" layout="fill" className="z-10" />
                <div className={`${style.button_container} relative top-[32rem] left-16 z-20 w-64`}>
                    <OrangeButton text={button_text} className="w-full py-6" link={``}/>
                </div>
            </div>
        </div>
    );
}

export default RiskSlide;
