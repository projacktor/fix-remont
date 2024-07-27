import React from "react"
import openLink from "@/functions/openLink";

interface HoverSectionProps {
    name: string,
    text: HTMLElement,
    link: string
}

function HoverSection({name, text, link}: HoverSectionProps) {
    return (
        <button onClick={openLink(link)}>
            <h3>{name}</h3>
            {text}
        </button>
    );
}

export default HoverSection;