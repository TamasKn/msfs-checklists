'use client'

import { useState } from 'react'

export default function TodCalculator() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState({
    currentAltitude: '',
    verticalSpeed: '',
    groundSpeed: '',
    destinationElevation: ''
  })
  const [result, setResult] = useState(null)

  const handleInputChange = (name, value) => {
    setInput((prev) => ({ ...prev, [name]: value }))
  }

  const calculateTod = () => {
    const {
      currentAltitude,
      verticalSpeed,
      groundSpeed,
      destinationElevation
    } = input
    const altitudeToLose =
      parseInt(currentAltitude, 10) - parseInt(destinationElevation, 10)
    const timeInMinutes = altitudeToLose / parseInt(verticalSpeed, 10)
    const distance = (parseInt(groundSpeed, 10) * timeInMinutes) / 60

    if (
      isNaN(altitudeToLose) ||
      altitudeToLose <= 0 ||
      isNaN(verticalSpeed) ||
      verticalSpeed <= 0 ||
      isNaN(groundSpeed) ||
      groundSpeed <= 0 ||
      isNaN(destinationElevation)
    ) {
      setResult('Invalid input. Please provide valid figures.')
    } else {
      setResult(
        `You should start your descent ${distance.toFixed(
          2
        )} NM from your destination.`
      )
    }
  }

  const renderInputField = (
    name,
    label,
    value,
    onChange,
    placeholder = '',
    additionalProps = {},
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
        onChange={(e) => handleInputChange(name, e.target.value)}
        placeholder={placeholder}
        className="block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        {...additionalProps}
      />
      {info && <p className="mt-1.5 text-xs text-gray-500">{info}</p>}
    </div>
  )

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="flex justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-1/4 flex justify-between items-center py-2 px-3 text-left font-medium text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none border border-gray-200 dark:border-gray-700 rounded-lg"
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
      </div>
      {isOpen && (
        <div className="mt-2 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex flex-col sm:flex-row gap-6">
            {renderInputField(
              'currentAltitude',
              'Current Altitude (ft)',
              input.currentAltitude,
              handleInputChange,
              'e.g., 35000',
              { step: 100, min: 0 }
            )}
            {renderInputField(
              'verticalSpeed',
              'Intended VS (fpm)',
              input.verticalSpeed,
              handleInputChange,
              'e.g., 1800',
              { step: 100, min: 0 }
            )}
            {renderInputField(
              'groundSpeed',
              'Groundspeed for Descent',
              input.groundSpeed,
              handleInputChange,
              'e.g., 450',
              { step: 10, min: 0 }
            )}
            {renderInputField(
              'destinationElevation',
              'Airport Elevation (ft)',
              input.destinationElevation,
              handleInputChange,
              'e.g., 500'
            )}
          </div>
          <div className="mt-6">
            <button
              onClick={calculateTod}
              className="w-1/3 py-2.5 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
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
  )
}
