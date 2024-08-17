import React from 'react';

interface ReasonBlockProps {
    text1: React.ReactNode;
    text2: React.ReactNode;
    description: string;
}

const ReasonBlock: React.FC<ReasonBlockProps> = ({ text1, text2, description }) => {
    return (
        <div className="w-[660px] p-8 rounded-3xl bg-black text-white even:bg-white even:text-black">
            <h2 className="heading2">{text1} <br /> {text2}</h2>
            <p className="mt-4 max-w-full md:max-w-[590px] text-base md:text-lg">{description}</p>
        </div>
    );
};

export default ReasonBlock;
