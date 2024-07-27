import React from 'react';
import openLink from "@/functions/openLink";

function OrangeButton({ text, link }) {
    return (
        <button
            className="flex items-center w-4/5 h-12 p-6 text-white text-lg font-medium bg-orange-500 rounded-full"
            onClick={() => openLink(link)}
        >
            { text }
        </button>
    );
}

export default OrangeButton;
