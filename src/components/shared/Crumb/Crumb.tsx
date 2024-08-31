import React from 'react'
import Link from 'next/link'

interface CrumbProps {
  path: string[]
  links: string[]
  mode?: boolean
}

const Crumb: React.FC<CrumbProps> = ({ path, links, mode = false }) => {
  return (
    <nav className="flex w-full flex-row items-start">
      <p className="text-xs font-semibold">
        <Link href="/" className={`${mode ? 'text-white' : 'text-gray-500'} opacity-50`}>
          Главная
        </Link>
        {path.map((crumb, index) => {
          const isLast = index === path.length - 1
          return (
            <React.Fragment key={index}>
              <span
                className={
                  mode
                    ? 'text-white opacity-50'
                    : isLast
                      ? 'font-bold text-gray-700'
                      : 'text-gray-500 opacity-80'
                }
              >
                {' '}
                •{' '}
              </span>
              <Link
                href={links[index]}
                className={
                  mode
                    ? 'text-white'
                    : isLast
                      ? 'font-bold text-gray-700'
                      : 'text-gray-500 opacity-80'
                }
              >
                {crumb}
              </Link>
            </React.Fragment>
          )
        })}
      </p>
    </nav>
  )
}

export default Crumb
