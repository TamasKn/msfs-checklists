'use client'

import { useState, useEffect } from 'react'

const CheckmarkIcon = () => (
  <svg
    className="w-6 h-6 text-green-500 ml-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
)

export default function ChecklistItems({ checklist }) {
  const [openSections, setOpenSections] = useState([])
  const [checkedItems, setCheckedItems] = useState({})
  const [autoEngineStartUsed, setAutoEngineStartUsed] = useState(false)

  useEffect(() => {
    setOpenSections([])
    setCheckedItems({})
  }, [checklist])

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(index)
        ? prevOpenSections.filter((i) => i !== index)
        : [...prevOpenSections, index]
    )
  }

  // List of sections to skip when auto engine start/shutdown checked
  const autoEngineStartSkipList = [
    'Pre-Flight',
    'Before Engine Start',
    'Engine Start',
    'Shutdown'
  ]

  const handleCheckboxChange = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`

    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = {
        ...prevCheckedItems,
        [key]: !prevCheckedItems[key]
      }

      // Only proceed if an item was checked (not unchecked)
      if (newCheckedItems[key]) {
        const section = checklist.checklist[sectionIndex]
        const isSectionComplete = section.items.every((_, i) => {
          const checkboxId = `${sectionIndex}-${i}`
          return !!newCheckedItems[checkboxId]
        })

        if (isSectionComplete) {
          setOpenSections((prevOpenSections) => {
            // Close current section
            const newOpenSections = prevOpenSections.filter(
              (i) => i !== sectionIndex
            )

            // Find the next visible section to open
            let nextSectionIndex = -1
            for (
              let i = sectionIndex + 1;
              i < checklist.checklist.length;
              i++
            ) {
              const nextSection = checklist.checklist[i]
              const isSectionHidden =
                autoEngineStartUsed &&
                autoEngineStartSkipList.includes(nextSection.title)
              if (!isSectionHidden) {
                nextSectionIndex = i
                break
              }
            }

            // If a next visible section is found, open it.
            if (
              nextSectionIndex !== -1 &&
              !newOpenSections.includes(nextSectionIndex)
            ) {
              newOpenSections.push(nextSectionIndex)
            }

            return newOpenSections
          })
        }
      }

      return newCheckedItems
    })
  }

  const handleReset = () => {
    setCheckedItems({})
  }

  if (!checklist) {
    return null
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="flex items-center mb-4">
        <input
          id="autoEngineStart"
          type="checkbox"
          checked={autoEngineStartUsed}
          onChange={() => setAutoEngineStartUsed((prev) => !prev)}
          className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700"
        />
        <label
          htmlFor="autoEngineStart"
          className="ml-3 text-gray-700 dark:text-gray-300"
        >
          Auto engine start/shutdown used
        </label>
      </div>
      <div className="space-y-2">
        {checklist.checklist.map((section, index) => {
          if (
            autoEngineStartUsed &&
            autoEngineStartSkipList.includes(section.title)
          ) {
            return null
          }
          const isOpen = openSections.includes(index)
          const isSectionComplete = section.items.every((_, itemIndex) => {
            const checkboxId = `${index}-${itemIndex}`
            return !!checkedItems[checkboxId]
          })

          return (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <button
                onClick={() => toggleSection(index)}
                className={`w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none ${isSectionComplete ? 'bg-green-100 dark:bg-green-950' : ''}`}
              >
                <div className="flex items-center text-lg">
                  <span>{section.title}</span>
                  {isSectionComplete && <CheckmarkIcon />}
                </div>
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
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => {
                      const [key, value] = Object.entries(item)[0]
                      const checkboxId = `${index}-${itemIndex}`
                      return (
                        <li key={itemIndex} className="flex items-center">
                          <input
                            id={checkboxId}
                            type="checkbox"
                            checked={!!checkedItems[checkboxId]}
                            onChange={() =>
                              handleCheckboxChange(index, itemIndex)
                            }
                            className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700"
                          />
                          <label
                            htmlFor={checkboxId}
                            className="ml-3 flex-1 text-sm sm:text-base md:text-lg flex justify-between text-gray-700 dark:text-gray-300 gap-2"
                          >
                            <span className="font-medium uppercase text-left break-words">
                              {key}
                            </span>
                            <span className="font-medium text-gray-900 dark:text-white text-right break-words">
                              {value}
                            </span>
                          </label>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleReset}
          className="px-6 py-2 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-600 cursor-pointer"
        >
          Reset All
        </button>
      </div>
    </div>
  )
}
