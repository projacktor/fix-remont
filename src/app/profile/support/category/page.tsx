'use client'
import React, { useState } from 'react'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'

function Page() {
  const keyword = 'KEYWORD'

  const data = [
    {
      value: 'Не происходит оплата. Что делать?',
      label: '25 февраля 2024',
      key_word: keyword
    },
    {
      value: 'Как изменить данные профиля?',
      label: '20 февраля 2024',
      key_word: keyword
    },
    {
      value: 'Как отменить заказ?',
      label: '18 февраля 2024',
      key_word: keyword
    },
    {
      value: 'Не происходит оплата. Что делать?',
      label: '25 февраля 2024',
      key_word: keyword
    },
    {
      value: 'Как изменить данные профиля?',
      label: '20 февраля 2024',
      key_word: keyword
    },
    {
      value: 'Как отменить заказ?',
      label: '18 февраля 2024',
      key_word: keyword
    },
    {
      value: 'Не происходит оплата. Что делать?',
      label: '25 февраля 2024',
      key_word: keyword
    },
    {
      value: 'Как изменить данные профиля?',
      label: '20 февраля 2024',
      key_word: keyword
    },
    {
      value: 'Как отменить заказ?',
      label: '18 февраля 2024',
      key_word: keyword
    },
    {
      value: 'Не происходит оплата. Что делать?',
      label: '25 февраля 2024',
      key_word: keyword
    },
    {
      value: 'Как изменить данные профиля?',
      label: '20 февраля 2024',
      key_word: keyword
    },
    {
      value: 'Как отменить заказ?',
      label: '18 февраля 2024',
      key_word: keyword
    }
  ]

  const itemsPerPage = 8
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  const renderPagination = () => {
    const pages = []

    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          className="rounded-full bg-gray-200 px-4 py-2"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt;
        </button>
      )
    }

    pages.push(
      <button
        key={1}
        className={`rounded-full px-4 py-2 ${currentPage === 1 ? 'bg-color-dark text-white' : 'bg-color-back'}`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
    )

    if (currentPage > 2) {
      pages.push(
        <span key="start-ellipsis" className="px-4 py-2">
          ...
        </span>
      )
    }

    const startPage = Math.max(2, currentPage - 1)
    const endPage = Math.min(totalPages - 1, currentPage + 1)

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`rounded-full px-4 py-2 ${currentPage === i ? 'bg-color-dark text-white' : 'bg-color-back'}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      )
    }

    if (currentPage < totalPages - 1) {
      pages.push(
        <span key="end-ellipsis" className="px-4 py-2">
          ...
        </span>
      )
    }

    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          className={`rounded-full px-4 py-2 ${currentPage === totalPages ? 'bg-color-dark text-white' : 'bg-color-back'}`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      )
    }

    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          className="rounded-full bg-gray-200 px-4 py-2"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          &gt;
        </button>
      )
    }

    return pages
  }

  return (
    <main className="mb-8 w-full flex-col justify-around gap-8">
      <h1 className="heading">Служба поддержки</h1>

      <section className="whiteContainer flex flex-row items-center justify-between space-x-3">
        <div className="headingStruct flex flex-col space-y-1 text-2xl">
          <h2 className="orange-bold">Есть вопросы?</h2>
          <h2>Обратитесь в нашу службу поддержки</h2>
        </div>
        <div className="relative h-max w-1/2">
          <input
            className="w-full rounded-full bg-gray-200 px-8 py-6 placeholder:text-gray-400"
            placeholder="Например: Как сделать заказ?"
            type="text"
          />
        </div>
      </section>

      <section className="flex w-full flex-col space-y-5">
        <h2 className="heading2 pl-7">Статьи из категории &quot;{keyword}&quot;</h2>

        <div className="whiteContainer flex w-full flex-col items-center justify-around gap-2">
          {currentItems.length === 0 ? (
            <p className="emptyMessage">Ничего не найдено</p>
          ) : (
            currentItems.map((item, index) => (
              <div key={index} className="flex w-full flex-col space-y-3">
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="flex flex-col space-y-1">
                    <h5 className="headingStruct">{item.value}</h5>
                    <div className="flex w-max flex-row items-center space-x-3">
                      <p className="label">{item.label}</p>
                      <p className="orange-bold text-xs font-medium">{item.key_word}</p>
                    </div>
                  </div>
                  <div className="button_container h-16">
                    <CheckButton text="Открыть статью" />
                  </div>
                </div>
                {index < currentItems.length - 1 && (
                  <hr className="w-full border-t border-gray-300" />
                )}
              </div>
            ))
          )}
        </div>

        <div className="mt-4 flex justify-center gap-2">{renderPagination()}</div>
      </section>
    </main>
  )
}

export default Page
