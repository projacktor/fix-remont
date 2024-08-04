import React from 'react';
import Image from 'next/image';
import SingleFaq from '@/components/entities/Single Faq/SingleFaq';
import whatsappIco from '../../../../public/assets/svg/social media icons/whatsappIcon.svg';
import telegramIco from '../../../../public/assets/svg/social media icons/telegramIcon.svg';
import photo from '../../../../public/assets/img/CEOImg.png';
import Link from "next/link";

function FaqSection() {
    return (
        <div className="flex flex-col justify-around h-full w-full relative">
            <div className="flex justify-between items-center flex-row">
                <h1 className="order-0 heading">
                    Отвечаем на <span className="orange-bold">самые частые<br /> вопросы</span> наших клиентов
                </h1>
                <div className="bg-color-dark w-1/2 h-[11.5rem] rounded-3xl relative order-1">
                    <Image src={photo as string} alt={"CEO photo picture"} className={`z-10`}/>
                    <div className={`flex flex-col items-start justify-around gap-4 z-20 relative bottom-40 left-96 w-max`}>
                        <h4 className="text-white font-semibold text-3xl leading-7">Фанис Хасанов</h4>
                        <p className="text-white font-light text-sm leading-normal">
                            Основатель и руководитель FIX-ремонт <br />
                            Не нашли свой вопрос? Свяжитесь с нами!
                        </p>
                        <div className="flex flex-row items-center justify-around h-1/3 gap-2">
                            <Link href="tel:8 (800) 000-00-00" className="h-full text-white font-semibold text-3xl tracking-tighter">
                                8 (800) 000-00-00
                            </Link>
                            <Link href="#">
                                <Image className="" src={whatsappIco as string} alt="Whatsapp" width={30}/>
                            </Link>
                            <Link href="#">
                                <Image className="" src={telegramIco as string} alt="Telegram" width={30}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full grid grid-cols-2 gap-3 p-5">
                {Array(6).fill('').map((_, i) => (
                    <SingleFaq key={i} text="Какой срок службы?" />
                ))}
            </div>
        </div>
    );
}

export default FaqSection;
