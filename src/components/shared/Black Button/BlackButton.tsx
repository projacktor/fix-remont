import React from 'react';
import openLink from "@/functions/openLink";

function BlackButton({ text, link }) {
    return (
        <button
            className="bg-color-dark text-white w-3/10 h-14 px-8 py-6 flex items-center rounded-full text-sm font-medium border border-white"
            onClick={() => openLink(link)}
        >
            { text }
        </button>
    );
}

export default BlackButton;
