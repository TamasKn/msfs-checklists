'use client'

import { useState, useEffect } from 'react'

export default function FuelCalculator({ aircraft }) {
  const [isOpen, setIsOpen] = useState(false)
  const [range, setRange] = useState('')
  const [result, setResult] = useState(null)

  if (
    !aircraft ||
    !aircraft.specs ||
    !aircraft.specs.specs ||
    !aircraft.specs.specs[0] ||
    !aircraft.specs.specs[0].items
  ) {
    setResult(
      'Aircraft data is not available or has an invalid structure. Please select an aircraft.'
    )
    return
  }

  const specsItems = aircraft.specs.specs[0].items
  const vmoItem = specsItems.find((item) => item['VMO'])
  const fuelConsumptionItem = specsItems.find(
    (item) => item['Fuel Consumption (L/hr)']
  )

  if (!vmoItem || !fuelConsumptionItem) {
    setResult('Aircraft performance data (VMO or Fuel Consumption) is missing.')
    return
  }

  const calculateFuel = () => {
    const distance = parseInt(range, 10)
    if (isNaN(distance) || distance <= 0) {
      setResult('Invalid input. Please provide a valid range.')
      return
    }

    const groundSpeed = parseInt(vmoItem['VMO'], 10)
    const fuelConsumption = parseFloat(
      fuelConsumptionItem['Fuel Consumption (L/hr)']
    )

    if (isNaN(groundSpeed) || isNaN(fuelConsumption)) {
      setResult('Aircraft performance data is invalid.')
      return
    }

    // 1. Cruise
    const cruiseTime = distance / groundSpeed
    const cruiseFuel = fuelConsumption * cruiseTime

    // 2. Climb
    const climbFuelFlow = 1.3 * fuelConsumption
    const climbTime = 20 / 60 // 20 minutes
    const climbFuel = climbFuelFlow * climbTime

    // 3. Descent
    const descentFuelFlow = 0.5 * fuelConsumption
    const descentTime = 10 / 60 // 10 minutes
    const descentFuel = descentFuelFlow * descentTime

    // 4. Taxi
    const taxiFuel = 50 // Constant 50L

    // 5. Reserves
    const ifrReserve = fuelConsumption * (45 / 60) // 45 minutes
    const tripFuel = cruiseFuel + climbFuel + descentFuel
    const contingencyFuel = 0.05 * tripFuel

    // 6. Total
    const totalFuel = tripFuel + taxiFuel + ifrReserve + contingencyFuel

    setResult({
      climbFuel,
      cruiseFuel,
      descentFuel,
      taxiFuel,
      ifrReserve,
      contingencyFuel,
      totalFuel
    })
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
        className="block text-sm font-semibold text-gray-200 mb-2 text-left"
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
          className="w-full md:w-[20rem] flex justify-between items-center py-2 px-3 text-left font-medium text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <span>Fuel Calculator</span>
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
          <div className="flex flex-col md:flex-row gap-6 justify-between items-end">
            {renderInputField(
              'range',
              'Route Distance (NM)',
              range,
              setRange,
              'e.g., 1500',
              { step: 50, min: 0 }
            )}
            <div className="w-1/2 bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-3 px-2 text-gray-400 text-base">
              Listed Fuel Consumption:{' '}
              {fuelConsumptionItem['Fuel Consumption (L/hr)']} L/hr
            </div>
            <button
              onClick={calculateFuel}
              className="w-1/3 py-2.5 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Calculate
            </button>
          </div>
          {result && typeof result === 'object' && (
            <div className="mt-6 p-6 bg-gray-900/50 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4 text-center tracking-wide">
                Required Fuel (L)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-800/60 p-3 rounded-lg">
                  <p className="text-gray-400">Climb:</p>
                  <p className="font-bold text-white">
                    {result.climbFuel.toFixed(0)} L
                  </p>
                </div>
                <div className="bg-gray-800/60 p-3 rounded-lg">
                  <p className="text-gray-400">Cruise:</p>
                  <p className="font-bold text-white">
                    {result.cruiseFuel.toFixed(0)} L
                  </p>
                </div>
                <div className="bg-gray-800/60 p-3 rounded-lg">
                  <p className="text-gray-400">Descent:</p>
                  <p className="font-bold text-white">
                    {result.descentFuel.toFixed(0)} L
                  </p>
                </div>
                <div className="bg-gray-800/60 p-3 rounded-lg">
                  <p className="text-gray-400">Taxi:</p>
                  <p className="font-bold text-white">
                    {result.taxiFuel.toFixed(0)} L
                  </p>
                </div>
                <div className="bg-gray-800/60 p-3 rounded-lg">
                  <p className="text-gray-400">IFR Reserve:</p>
                  <p className="font-bold text-white">
                    {result.ifrReserve.toFixed(0)} L
                  </p>
                </div>
                <div className="bg-gray-800/60 p-3 rounded-lg">
                  <p className="text-gray-400">Contingency (5%):</p>
                  <p className="font-bold text-white">
                    {result.contingencyFuel.toFixed(0)} L
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700 text-center">
                <p className="text-gray-400 uppercase text-sm">
                  Total Fuel Required
                </p>
                <p className="text-2xl font-bold text-green-400">
                  {result.totalFuel.toFixed(0)} L
                </p>
              </div>
            </div>
          )}
          {result && typeof result === 'string' && (
            <div className="mt-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-center">
              <p className="text-red-300">{result}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
