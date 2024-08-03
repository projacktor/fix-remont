import React from 'react';
import Image from 'next/image';

import videoY from '../../../../public/assets/img/pseudo videos/videoY.png';
import vkIco from '../../../../public/assets/svg/social media icons/vkIcon.svg';
import instagramIco from '../../../../public/assets/svg/instagramIco.svg';
import telegramIco from '../../../../public/assets/svg/telegramIco.svg';

const SocialMedia = () => {
    return (
        <div className="relative w-full h-4/5">
            <h1 className="text-center">
                Мы максимально <b>открыты</b> и <br />
                подтверждаем экспертность в социальных сетях
            </h1>
            <div id="social_media_block" className="flex items-center flex-row gap-8 w-full mt-8">
                <a
                    href="https://www.youtube.com/c/%D0%9F%D0%95%D0%A0%D0%95%D0%A1%D0%A2%D0%A0%D0%9E%D0%99%D0%9A%D0%90"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image className="w-full" src={videoY as string} alt="video" />
                </a>
                <div className="social_media_enum relative w-1/2 -top-[57%] flex flex-col justify-between items-center">
                    <a
                        className="social_media_single flex flex-row justify-around items-center w-full h-1/3 rounded-[35px] bg-white p-4"
                        href="https://vk.com/fix.remoont?from=search"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={vkIco as string} alt="Вконтакте" width={40} height={40} />
                        <h4 className="font-bold text-[39px] leading-[123%] tracking-tight -translate-x-12">Вконтакте</h4>
                        <p>1 500 подписчиков</p>
                    </a>
                    <a
                        className="social_media_single flex flex-row justify-around items-center w-full h-1/3 rounded-[35px] bg-white p-4 mt-4"
                        href="https://instagram.com/fix_remont.ru"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={instagramIco} alt="Instagram" width={40} height={40} />
                        <h4 className="font-bold text-[39px] leading-[123%] tracking-tight -translate-x-12">Instagram</h4>
                        <p>15 500 подписчиков</p>
                    </a>
                    <a
                        className="social_media_single flex flex-row justify-around items-center w-full h-1/3 rounded-[35px] bg-white p-4 mt-4"
                        href="https://t.me/FIX_REMONT_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={telegramIco} alt="Telegram" width={40} height={40} />
                        <h4 className="font-bold text-[39px] leading-[123%] tracking-tight -translate-x-12">Telegram</h4>
                        <p>500 подписчиков</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;
