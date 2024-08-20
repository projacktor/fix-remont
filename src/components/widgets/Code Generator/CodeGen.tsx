import React, { useState } from 'react';
import Image from "next/image";
import code from '../../../../public/assets/img/trialQr.png';
import OrangeButton from "@/components/shared/buttons/Orange Button/OrangeButton";

function CodeGen() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="flex flex-row p-10 text-white bg-color-dark space-x-8 rounded-3xl">
                <div className="flex flex-col justify-between">
                    <Image src={code as unknown as string} alt="QR-code" quality={100} width={150} />
                    <div className="p-4"></div>
                </div>

                <div className="flex flex-col space-y-12 w-52">
                    <h3 className="headingStruct text-2xl">Мой QR-код для приглашения</h3>

                    <button
                        className={`w-full h-16 flex items-center justify-center rounded-full bg-color-orange px-8 py-6 font-semibold text-white text-base`}
                        onClick={handleOpenModal}
                    >
                        Открыть
                    </button>
                </div>
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative bg-white p-4 rounded-lg">
                        <button
                            className="absolute top-0 right-2 m-2 text-black text-2xl"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <Image src={code as unknown as string} alt="QR-code" quality={100} width={300} height={300} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default CodeGen;
