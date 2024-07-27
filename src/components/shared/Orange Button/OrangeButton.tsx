import React from 'react';
import openLink from "@/functions/openLink";
import {ButtonProps} from "@/types/ButtonProps";

function OrangeButton({text, link}: ButtonProps) {
    return (
        <button
            className="bg-color-orange text-white py-6 px-8 text-sm font-semibold rounded-full"
            onClick={() => openLink(link)}
        >
            <p>{ text }</p>
        </button>
    );
}

export default OrangeButton;
