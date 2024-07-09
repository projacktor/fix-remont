import Image from "next/image";

import onlineCircle from '@/../public/assets/svg/onlineCircleHeader.svg';
import whatsapp from '@/../public/assets/svg/whatsappIcon.svg';
import telegram from '@/../public/assets/svg/telegramIcon.svg';
import Link from "next/link";

const WriteUs: React.FC = () => {
    return (
        <div className="flex flex-row items-center w-54 h-15 rounded-2xl bg-inherit ml-1">
            <div className="flex flex-row items-center mr-2">
                <Image alt="online" className="w-2 h-2.5 mr-2" src={onlineCircle as string} />
                <p className="font-medium text-xs text-gray-900">Напишите нам, <br /> мы сейчас онлайн</p>
            </div>
            <address className="flex flex-row items-center justify-around w-24">
                <Link className="flex items-center w-3/4" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    <Image alt="whatsapp" src={whatsapp as string} />
                </Link>
                <Link className="flex items-center w-3/4" href="https://t.me/" target="_blank" rel="noopener noreferrer">
                    <Image alt="telegram" src={telegram as string} />
                </Link>
            </address>
        </div>
    );
};

export default WriteUs;
