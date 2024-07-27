import React from "react"

interface HoverSectionProps {
    name: string,
    text: HTMLElement,
    link: string
}

function HoverSection({name, text, link}: HoverSectionProps) {
    return (
        <button>
            <h3></h3>
        </button>
    );
}

export default HoverSection;