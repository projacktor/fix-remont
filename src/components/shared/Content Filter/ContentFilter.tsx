import React from 'react';

interface ContentFilterProps {
  buttons: string[];
}

const ContentFilter: React.FC<ContentFilterProps> = ({ buttons }) => {
  return (
    <div className="flex justify-around items-center w-1/3 gap-10">
      {buttons.map((text, index) => (
        <button key={index} className="bg-gray-200 p-2 rounded-full">
          <p>{text}</p>
        </button>
      ))}
    </div>
  );
};

export default ContentFilter;
