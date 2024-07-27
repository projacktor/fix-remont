import React from 'react';
import openLink from "@/functions/openLink";

function BlackButton({ text, link }) {
    return (
        <button
            className="bg-black text-white w-3/10 h-14 px-6 py-3 flex items-center justify-center rounded-full text-sm font-medium"
            onClick={() => openLink(link)}
        >
            { text }
        </button>
    );
}

export default BlackButton;
