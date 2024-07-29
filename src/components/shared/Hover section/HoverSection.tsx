import React from "react"
import openLink from "@/functions/openLink";
import Image from "next/image";
import style from "./hoverSection.module.scss";

import arrow from "../../../../public/assets/svg/linkImg.svg";

interface HoverSectionProps {
    name: string,
    link: string,
    text: React.ReactNode
}

function HoverSection({name, text, link}: HoverSectionProps) {
    return (
        <button onClick={openLink(link)} className={`${style.revert} w-[14rem] bg-color-bg-gray px-7 flex flex-col items-start gap-1 border rounded-3xl text-color-dark hover:text-white`}>
            <div className={`mt-7 flex flex-col items-start gap-2`}>
                <h3 className="max-w-4 leading-5 text-xl font-medium text-left">{name}</h3>
                <span className={`text-xs text-left font-normal max-w-44`}>
                    {text}
                </span>
            </div>
            <Image alt="arrow" src={arrow as string} width="40" height="40" className={`${style.arrow} relative left-32 bottom-4`}/>
        </button>
    );
}

export default HoverSection;