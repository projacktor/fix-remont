import React, { useState } from 'react';
import Image from 'next/image';
import linkImg from '../../../../public/assets/svg/linkImg.svg';
import style from './singleFaq.module.scss';

interface SingleFaqProps {
    text: string;
}

const SingleFaq: React.FC<SingleFaqProps> = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-4">
            <button
                onClick={toggleOpen}
                className={`${style.plate} flex items-center justify-between bg-white rounded-3xl p-5 w-full hover:bg-gray-200 transition-all`}
            >
                <h4 className="text-2xl font-bold">{text}</h4>
                <Image className='' src={linkImg as string} alt="arrow" width={40} />
            </button>
            {isOpen && (
                <div className="rounded-lg mt-2 bg-white p-3">
                    <p>Минимальный срок службы напыляемой жидкой битумно-латексной гидроизоляции для кровли от WPGUM составляет 20 лет. Также наша компания предоставляет 100% гарантию качества сроком от 5 лет на всю продуктовую линейку.</p>
                </div>
            )}
        </div>
    );
}

export default SingleFaq;
