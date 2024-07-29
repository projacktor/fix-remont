import React from 'react';
import Image from 'next/image';
import style from './tapeSection.module.scss';

interface TapeSectionProps {
  svg: string;
  altName: string;
  text: React.ReactNode;
}

function TapeSection({ svg, altName, text }: TapeSectionProps) {
  return (
    <div
      className={`${style.tape} flex flex-col gap-6 p-5 bg-white rounded-3xl min-h-28 min-w-[17.5rem]`}
    >
      <Image
        alt={altName}
        src={svg}
        width=""
        height=""
        className={`self-end`}
      />
      <span className={`max-w-56 leading-5 text-sm font-medium`}>{text}</span>
    </div>
  );
}

export default TapeSection;
