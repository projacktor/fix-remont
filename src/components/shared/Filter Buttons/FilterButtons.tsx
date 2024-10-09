import React from 'react'

interface FilterButtonsProps {
  filters: string[]
  activeFilter: string
  onFilterClick: (filter: string) => void
}

function FilterButtons({ filters, activeFilter, onFilterClick }: FilterButtonsProps) {
  const getButtonClass = (filter: string) =>
    `flex items-center justify-center rounded-full px-4 py-3 text-sm font-medium transition ${
      activeFilter === filter
        ? 'bg-color-dark text-white'
        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }`
  return (
    <div className="flex w-[30rem] flex-row items-center gap-8">
      {filters.map((filter) => (
        <button
          key={filter}
          className={getButtonClass(filter)}
          onClick={() => onFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons
