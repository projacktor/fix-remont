import React, { useState } from 'react';

const SeoPart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Изначальное состояние - открыто

  const toggleOpen = () => {
    setIsOpen(!isOpen); // Переключение состояния
  };

  return (
    <div className="relative w-[90rem] h-[55%] mb-20">
      <div
        className={`seo_content overflow-hidden transition-height ease-out duration-500 relative ${isOpen ? 'h-auto' : 'h-[64%] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[37%] after:bg-white after:bg-opacity-75'}`}
      >
        <h1 className="text-3xl">Текст, который важен для SEO</h1>
        <p className="text-sm leading-[171%]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
        <ul className="list-disc list-inside">
          <li className="text-sm leading-[171%]">
            do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor
          </li>
          <li className="text-sm leading-[171%]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor.
          </li>
          <li className="text-sm leading-[171%]">
            do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </li>
        </ul>
        <h3 className="text-xl my-1">Заголовок H3</h3>
        <h4 className="text-lg my-1">Заголовок H4</h4>
        <h5 className="text-base my-1">Заголовок H5</h5>
        <h6 className="text-sm my-1">Заголовок H6</h6>
      </div>
      <button
        onClick={toggleOpen}
        className="relative left-[-0.5%] font-normal text-sm text-black bg-transparent border-none"
      >
        {isOpen ? 'Закрыть' : 'Раскрыть полностью'}
      </button>
    </div>
  );
};

export default SeoPart;
