import React, { useState } from 'react'

const SeoPart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="relative mb-5 w-full">
      <div
        className={`relative space-y-3 overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-[1000px]' : 'max-h-32'
        }`}
      >
        <h1 className="text-3xl">Текст, который важен для SEO</h1>
        <p className="w-full text-sm leading-[171%]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div
          className={`space-y-3 transition-opacity duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-90'}`}
        >
          <p className="text-sm leading-[171%]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <ul className="list-inside list-disc">
            <li className="text-sm leading-[171%]">
              do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor
            </li>
            <li className="text-sm leading-[171%]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor.
            </li>
            <li className="text-sm leading-[171%]">
              do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </li>
          </ul>
          <h3 className="text-xl">Заголовок H3</h3>
          <h4 className="text-lg">Заголовок H4</h4>
          <h5 className="text-base">Заголовок H5</h5>
          <h6 className="text-sm">Заголовок H6</h6>
        </div>
        {!isOpen && <div className="absolute inset-x-0 bottom-0 h-12 bg-white bg-opacity-80" />}
      </div>
      <button
        onClick={toggleOpen}
        className="mt-5 border-none bg-transparent text-sm font-normal text-black"
      >
        {isOpen ? 'Закрыть' : 'Раскрыть полностью'}
      </button>
    </section>
  )
}

export default SeoPart
