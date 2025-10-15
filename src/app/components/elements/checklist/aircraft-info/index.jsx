'use client'

import { useState } from 'react'
import { explanations } from '@/data/infos/infos'
import Tooltip from '@/app/components/micro/info-hover'

export default function AircraftInfo({ specs }) {
  const [isOpen, setIsOpen] = useState(false)

  const findExplanation = (specTitle) => {
    const acronym = Object.keys(explanations).find((key) =>
      specTitle.startsWith(key)
    )
    return acronym ? explanations[acronym] : null
  }

  if (!specs) {
    return null
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
        {specs.specs.map((spec, index) => (
          <div key={index}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <span>{spec.title}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isOpen && (
              <div className="p-4 bg-white dark:bg-gray-900">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {spec.items.map((item, itemIndex) => {
                    const [key, value] = Object.entries(item)[0]
                    const explanation = findExplanation(key)
                    return (
                      <li
                        key={itemIndex}
                        className="px-2 sm:px-4 py-3 flex justify-between items-center gap-2"
                      >
                        <div className="flex items-center min-w-0">
                          <span className="text-sm lg:text-[1rem] text-left font-medium text-gray-700 dark:text-gray-300 break-words">
                            {key}
                          </span>
                          {explanation && <Tooltip text={explanation} />}
                        </div>
                        <span className="text-sm lg:text-[1rem] font-semibold text-right text-gray-900 dark:text-white break-words">
                          {value}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
