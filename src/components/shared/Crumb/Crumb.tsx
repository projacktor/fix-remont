import React from 'react'
import Link from 'next/link'

interface CrumbProps {
  path: string[]
  links: string[]
}

const Crumb: React.FC<CrumbProps> = ({ path, links }) => {
  return (
    <div className="flex w-full flex-row items-start">
      <p className="text-xs font-semibold">
        <Link href="/" className="text-gray-500 opacity-80">
          Главная
        </Link>
        {path.map((crumb, index) => {
          const isLast = index === path.length - 1
          return (
            <React.Fragment key={index}>
              <span className={isLast ? 'font-bold text-gray-700' : 'text-gray-500 opacity-80'}>
                {' '}
                •{' '}
              </span>
              <Link
                href={links[index]}
                className={isLast ? 'font-bold text-gray-700' : 'text-gray-500 opacity-80'}
              >
                {crumb}
              </Link>
            </React.Fragment>
          )
        })}
      </p>
    </div>
  )
}

export default Crumb
