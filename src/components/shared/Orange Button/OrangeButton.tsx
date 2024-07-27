import React from 'react';
import openLink from "@/functions/openLink";

function OrangeButton(text: string, link: string) {
    return (
        <button
            className="bg-color-orange text-white py-6 px-8 text-sm font-semibold rounded-full"
            onClick={() => openLink(link)}
        >
            { text }
        </button>
    );
}

export default OrangeButton;
