import React from 'react';
import openLink from "@/functions/openLink";

function BlackButton({ text, link }) {
    return (
        <button
            className="bg-color-dark text-white py-6 px-8 flex items-center rounded-full text-sm font-medium border border-white"
            onClick={() => openLink(link)}
        >
            { text }
        </button>
    );
}

export default BlackButton;
