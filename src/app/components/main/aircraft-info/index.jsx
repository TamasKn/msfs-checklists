'use client'

import { useState } from 'react'
import { explanations } from '@/data/infos/infos'

const InfoIcon = () => (
  <svg
    className="w-4 h-4 ml-2 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    ></path>
  </svg>
)

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <div className="absolute bottom-full mb-2 w-64 p-2 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
        {text}
      </div>
    </div>
  )
}

export default function AircraftInfo({ specs }) {
  const [isOpen, setIsOpen] = useState(true)

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
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
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
                        className="px-4 py-3 flex justify-between items-center"
                      >
                        <div className="flex items-center">
                          <span className="text-sm text-left font-medium text-gray-700 dark:text-gray-300">
                            {key}
                          </span>
                          {explanation && (
                            <Tooltip text={explanation}>
                              <InfoIcon />
                            </Tooltip>
                          )}
                        </div>
                        <span className="text-sm font-semibold text-right text-gray-900 dark:text-white">
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
