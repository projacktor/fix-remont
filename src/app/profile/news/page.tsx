'use client'
import React, { useState } from 'react'
import SupportSection from '@/components/widgets/Support Section/SupportSection'
import BlogBulletProfile from '@/components/entities/Blog Bullet Profile/BlogBulletProfile'

function Page() {
  const param = ''

  const data = [
    {
      section: 'Ремонт',
      text: 'Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?',
      link: param
    },
    {
      section: 'Ремонт',
      text: 'Обновление функционала для расчета стоимости ремонта',
      link: param
    },
    { section: 'Ремонт', text: "Новые возможности в разделе 'Ремонт' на платформе", link: param },
    { section: 'Ремонт', text: 'Улучшение интерфейса для удобства пользователей', link: param },
    { section: 'Ремонт', text: 'Расширенные параметры расчета ремонта', link: param },
    { section: 'Ремонт', text: 'Как избежать ошибок при расчете стоимости ремонта?', link: param },
    { section: 'Ремонт', text: 'Улучшение интерфейса для удобства пользователей', link: param },
    { section: 'Ремонт', text: 'Расширенные параметры расчета ремонта', link: param },
    { section: 'Ремонт', text: 'Как избежать ошибок при расчете стоимости ремонта?', link: param },
    {
      section: 'Ремонт',
      text: 'Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?',
      link: param
    },
    {
      section: 'Ремонт',
      text: 'Обновление функционала для расчета стоимости ремонта',
      link: param
    },
    { section: 'Ремонт', text: "Новые возможности в разделе 'Ремонт' на платформе", link: param },
    { section: 'Ремонт', text: 'Улучшение интерфейса для удобства пользователей', link: param },
    { section: 'Ремонт', text: 'Расширенные параметры расчета ремонта', link: param },
    { section: 'Ремонт', text: 'Как избежать ошибок при расчете стоимости ремонта?', link: param },
    { section: 'Ремонт', text: 'Улучшение интерфейса для удобства пользователей', link: param },
    { section: 'Ремонт', text: 'Расширенные параметры расчета ремонта', link: param },
    { section: 'Ремонт', text: 'Как избежать ошибок при расчете стоимости ремонта?', link: param },
    {
      section: 'Ремонт',
      text: 'Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?',
      link: param
    },
    {
      section: 'Ремонт',
      text: 'Обновление функционала для расчета стоимости ремонта',
      link: param
    },
    { section: 'Ремонт', text: "Новые возможности в разделе 'Ремонт' на платформе", link: param },
    { section: 'Ремонт', text: 'Улучшение интерфейса для удобства пользователей', link: param },
    { section: 'Ремонт', text: 'Расширенные параметры расчета ремонта', link: param },
    { section: 'Ремонт', text: 'Как избежать ошибок при расчете стоимости ремонта?', link: param },
    { section: 'Ремонт', text: 'Улучшение интерфейса для удобства пользователей', link: param },
    { section: 'Ремонт', text: 'Расширенные параметры расчета ремонта', link: param },
    { section: 'Ремонт', text: 'Как избежать ошибок при расчете стоимости ремонта?', link: param },
    {
      section: 'Ремонт',
      text: 'Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?',
      link: param
    },
    {
      section: 'Ремонт',
      text: 'Обновление функционала для расчета стоимости ремонта',
      link: param
    },
    { section: 'Ремонт', text: "Новые возможности в разделе 'Ремонт' на платформе", link: param },
    { section: 'Ремонт', text: 'Улучшение интерфейса для удобства пользователей', link: param },
    { section: 'Ремонт', text: 'Расширенные параметры расчета ремонта', link: param },
    { section: 'Ремонт', text: 'Как избежать ошибок при расчете стоимости ремонта?', link: param },
    { section: 'Ремонт', text: 'Улучшение интерфейса для удобства пользователей', link: param },
    { section: 'Ремонт', text: 'Расширенные параметры расчета ремонта', link: param },
    { section: 'Ремонт', text: 'Как избежать ошибок при расчете стоимости ремонта?', link: param }
  ]

  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber) => {
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
    <main className="mb-8 flex w-full flex-col gap-8">
      <h1 className="heading">Новости платформы</h1>
      <div className="flex flex-col items-center gap-10">
        <div className="grid grid-cols-3 grid-rows-2 gap-7">
          {currentItems.map((item, index) => (
            <BlogBulletProfile
              key={index}
              section={item.section}
              link={item.link}
              text={item.text}
            />
          ))}
        </div>

        <div className="flex gap-2">{renderPagination()}</div>
      </div>
      <SupportSection />
    </main>
  )
}

export default Page
