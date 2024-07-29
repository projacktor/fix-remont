import React, { useState } from 'react'

const SeoPart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true) // Изначальное состояние - открыто

  const toggleOpen = () => {
    setIsOpen(!isOpen) // Переключение состояния
  }

  return (
    <div className="relative mb-20 h-[55%] w-[90rem]">
      <div
        className={`seo_content transition-height relative overflow-hidden duration-500 ease-out ${isOpen ? 'h-auto' : 'h-[64%] after:absolute after:bottom-0 after:left-0 after:h-[37%] after:w-full after:bg-white after:bg-opacity-75 after:content-[""]'}`}
      >
        <h1 className="text-3xl">Текст, который важен для SEO</h1>
        <p className="text-sm leading-[171%]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <ul className="list-inside list-disc">
          <li className="text-sm leading-[171%]">
            do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
          </li>
          <li className="text-sm leading-[171%]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor.
          </li>
          <li className="text-sm leading-[171%]">
            do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </li>
        </ul>
        <h3 className="my-1 text-xl">Заголовок H3</h3>
        <h4 className="my-1 text-lg">Заголовок H4</h4>
        <h5 className="my-1 text-base">Заголовок H5</h5>
        <h6 className="my-1 text-sm">Заголовок H6</h6>
      </div>
      <button
        onClick={toggleOpen}
        className="relative left-[-0.5%] border-none bg-transparent text-sm font-normal text-black"
      >
        {isOpen ? 'Закрыть' : 'Раскрыть полностью'}
      </button>
    </div>
  )
}

export default SeoPart
