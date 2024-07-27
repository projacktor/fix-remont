import React from 'react';
import openLink from "@/functions/openLink";

function OrangeButton({ text, link }) {
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
