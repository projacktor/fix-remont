import React from 'react';
import openLink from "@/functions/openLink";
import {ButtonProps} from "@/types/ButtonProps";

function BlackButton({text, link}: ButtonProps) {
    return (
        <button
            className="bg-color-dark text-white py-6 px-8 flex items-center rounded-full text-sm font-medium border border-white"
            onClick={() => openLink(link)}
        >
            <p>{ text }</p>
        </button>
    );
}

export default BlackButton;
