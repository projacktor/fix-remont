import React from 'react';
import Image from "next/image";

interface TapeSectionProps {
    svg: string,
    altName: string,
    text: React.ReactNode
}

function TapeSection({svg, altName, text}: TapeSectionProps) {
    return (
        <div className={``}>
            <Image alt={altName} src={svg} width="40" height="40"/>
            <span className={`max-w-`}>
                {text}
            </span>
        </div>
    );
}

export default TapeSection;