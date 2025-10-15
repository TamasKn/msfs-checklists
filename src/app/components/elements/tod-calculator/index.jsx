'use client'

import { useState } from 'react'

export default function TodCalculator() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentAltitude, setCurrentAltitude] = useState('')
  const [verticalSpeed, setVerticalSpeed] = useState('')
  const [groundSpeed, setGroundSpeed] = useState('')
  const [destinationElevation, setDestinationElevation] = useState('')
  const [result, setResult] = useState(null)

  const calculateTod = () => {
    const altitudeToLose =
      parseInt(currentAltitude, 10) - parseInt(destinationElevation, 10)
    const timeInMinutes = altitudeToLose / parseInt(verticalSpeed, 10)
    const distance = (parseInt(groundSpeed, 10) * timeInMinutes) / 60

    setResult(
      `You should start your descent ${distance.toFixed(
        2
      )} NM from your destination.`
    )
  }

  const renderInputField = (
    name,
    label,
    value,
    onChange,
    placeholder = '',
    info = ''
  ) => (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-200 mb-2"
      >
        {label}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
      />
      {info && <p className="mt-1.5 text-xs text-gray-500">{info}</p>}
    </div>
  )

  return (
    <div className="w-1/4 max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          >
            <span>TOD Calculator</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
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
              <div className="grid grid-cols-1 gap-6">
                {renderInputField(
                  'currentAltitude',
                  'Current Altitude (ft)',
                  currentAltitude,
                  setCurrentAltitude,
                  'e.g., 35000'
                )}
                {renderInputField(
                  'verticalSpeed',
                  'Intended Vertical Speed (ft/min)',
                  verticalSpeed,
                  setVerticalSpeed,
                  'e.g., 1800'
                )}
                {renderInputField(
                  'groundSpeed',
                  'Groundspeed for Descent (knots)',
                  groundSpeed,
                  setGroundSpeed,
                  'e.g., 450'
                )}
                {renderInputField(
                  'destinationElevation',
                  'Destination Airport Elevation (ft)',
                  destinationElevation,
                  setDestinationElevation,
                  'e.g., 500'
                )}
              </div>
              <div className="mt-6">
                <button
                  onClick={calculateTod}
                  className="w-full py-2.5 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Calculate
                </button>
              </div>
              {result && (
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <p className="text-white">{result}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
