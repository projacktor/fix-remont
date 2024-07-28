import React from "react"
import openLink from "@/functions/openLink";
import Image from "next/image";
import style from "./hoverSection.module.scss";

import arrow from "../../../../public/assets/svg/linkImg.svg";

interface HoverSectionProps {
    name: string,
    link: string
}

function HoverSection({name, text, link}: HoverSectionProps) {
    return (
        <button onClick={openLink(link)} className={`${style.revert} h-44 w-[14rem] bg-color-bg-gray flex flex-col items-center gap-1 border rounded-3xl text-color-dark hover:text-white`}>
            <div className={`flex flex-col items-start gap-2`}>
                <h3 className="mt-4 max-w-4 leading-6 text-xl font-medium text-left">{name}</h3>
                <span className={`text-sm text-left font-normal max-w-44`}>
                    {text}
                </span>
            </div>
            <Image alt="arrow" src={arrow as string} width="40" height="40" className={`${style.arrow} relative left-16 bottom-4`}/>
        </button>
    );
}

export default HoverSection;