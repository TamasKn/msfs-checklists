'use client'

import { useState } from 'react'

export default function FuelCalculator({
  aircraft,
  isTabbed = false,
  range: propRange,
  setRange: propSetRange,
  result: propResult,
  setResult: propSetResult,
  unit: propUnit,
  setUnit: propSetUnit
}) {
  const [isOpen, setIsOpen] = useState(false)

  // Use local state for standalone mode, props for tabbed mode
  const [localRange, setLocalRange] = useState('')
  const [localResult, setLocalResult] = useState(null)
  const [localUnit, setLocalUnit] = useState('L')

  const range = isTabbed ? propRange : localRange
  const setRange = isTabbed ? propSetRange : setLocalRange
  const result = isTabbed ? propResult : localResult
  const setResult = isTabbed ? propSetResult : setLocalResult
  const unit = isTabbed ? propUnit : localUnit
  const setUnit = isTabbed ? propSetUnit : setLocalUnit

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

  /**
   * Calculate fuel consumption for jet aircraft
   * Takes into account climb, cruise, and descent phases with realistic parameters
   */
  const calculateFuel = () => {
    const distance = parseInt(range, 10)
    if (isNaN(distance) || distance <= 0) {
      setResult('Invalid input. Please provide a valid range.')
      return
    }

    const cruiseSpeed = parseInt(vmoItem['VMO'], 10)
    const fuelConsumption = parseFloat(
      fuelConsumptionItem['Fuel Consumption (L/hr)']
    )

    if (isNaN(cruiseSpeed) || isNaN(fuelConsumption)) {
      setResult('Aircraft performance data is invalid.')
      return
    }

    // 1. CLIMB PHASE
    // - Fuel flow during climb: ~175% of cruise (high thrust, inefficient at lower altitudes)
    const climbTime = 20 / 60 // 20 minutes
    const climbSpeed = cruiseSpeed * 0.65 // Average climb speed (~65% of cruise)
    const climbDistance = climbSpeed * climbTime // Distance covered during climb
    const climbFuelFlow = fuelConsumption * 1.75 // 175% of cruise fuel flow
    const climbFuel = climbFuelFlow * climbTime

    // 2. DESCENT PHASE
    const descentTime = 30 / 60 // 30 minutes
    const descentSpeed = cruiseSpeed * 0.7 // Average descent speed (70% of cruise)
    const descentDistance = descentSpeed * descentTime // Distance covered during descent
    const descentFuelFlow = fuelConsumption * 0.6 // 60% of cruise fuel flow
    const descentFuel = descentFuelFlow * descentTime

    // 3. CRUISE PHASE
    // Remaining distance after subtracting climb and descent distances
    const cruiseDistance = Math.max(
      0,
      distance - climbDistance - descentDistance
    )
    const cruiseTime = cruiseDistance / cruiseSpeed
    const cruiseFuel = fuelConsumption * cruiseTime

    // 4. TAXI
    // Ground operations: ~15 minutes at idle power (~25% fuel flow)
    const taxiTime = 15 / 60 // 15 minutes in hours
    const taxiFuelFlow = fuelConsumption * 0.25 // 25% of cruise fuel flow
    const taxiFuel = taxiFuelFlow * taxiTime

    // 5. RESERVES
    // IFR reserve: 45 minutes at cruise fuel flow
    const ifrReserve = fuelConsumption * (45 / 60)

    // Trip fuel (actual consumption for the flight)
    const tripFuel = climbFuel + cruiseFuel + descentFuel

    // Contingency fuel: 5% of trip fuel (regulatory requirement)
    const contingencyFuel = tripFuel * 0.05

    // 6. TOTAL FUEL REQUIRED
    const totalFuel = tripFuel + taxiFuel + ifrReserve + contingencyFuel

    setResult({
      climbFuel,
      cruiseFuel,
      descentFuel,
      tripFuel,
      taxiFuel,
      ifrReserve,
      contingencyFuel,
      totalFuel
    })
  }

  const convertFuel = (liters) => {
    if (unit === 'KG') {
      return liters * 0.8
    }
    return liters
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

  // Render content only (for tabbed mode)
  const renderContent = () => (
    <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="flex justify-center mb-4">
        <div className="flex items-center bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setUnit('L')}
            className={`px-4 py-1 text-sm font-medium rounded-md ${
              unit === 'L'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            Liters
          </button>
          <button
            onClick={() => setUnit('KG')}
            className={`px-4 py-1 text-sm font-medium rounded-md ${
              unit === 'KG'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            Kilograms
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between md:items-end">
        {renderInputField(
          'range',
          'Route Distance (NM)',
          range,
          setRange,
          'e.g., 1500',
          { step: 50, min: 0 }
        )}
        <div className="w-1/2 bg-gray-700/50 border border-gray-700/50 rounded-lg shadow-sm py-3 px-2 text-gray-400 text-xs md:text-sm lg:text-base self-center md:self-end">
          Fuel Consumption:{' '}
          {convertFuel(fuelConsumptionItem['Fuel Consumption (L/hr)']).toFixed(
            1
          )}{' '}
          {unit}
          /hr
        </div>
        <button
          onClick={calculateFuel}
          className="w-1/3 py-2.5 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 self-center md:self-end"
        >
          Calculate
        </button>
      </div>
      {result && typeof result === 'object' && (
        <div className="mt-6 p-6 bg-gray-900/50 border border-gray-700 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-4 text-center tracking-wide">
            Required Fuel ({unit === 'L' ? 'L' : 'KG'})
          </h3>
          <div className="bg-gray-800/60 p-3 rounded-lg mb-4">
            <p className="text-gray-400">Trip:</p>
            <p className="font-bold text-white">
              {convertFuel(result.tripFuel).toFixed(0)} {unit}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-800/60 p-3 rounded-lg">
              <p className="text-gray-400">Climb:</p>
              <p className="font-bold text-white">
                {convertFuel(result.climbFuel).toFixed(0)} {unit}
              </p>
            </div>
            <div className="bg-gray-800/60 p-3 rounded-lg">
              <p className="text-gray-400">Cruise:</p>
              <p className="font-bold text-white">
                {convertFuel(result.cruiseFuel).toFixed(0)} {unit}
              </p>
            </div>
            <div className="bg-gray-800/60 p-3 rounded-lg">
              <p className="text-gray-400">Descent:</p>
              <p className="font-bold text-white">
                {convertFuel(result.descentFuel).toFixed(0)} {unit}
              </p>
            </div>
            <div className="bg-gray-800/60 p-3 rounded-lg">
              <p className="text-gray-400">Taxi:</p>
              <p className="font-bold text-white">
                {convertFuel(result.taxiFuel).toFixed(0)} {unit}
              </p>
            </div>
            <div className="bg-gray-800/60 p-3 rounded-lg">
              <p className="text-gray-400">IFR Reserve:</p>
              <p className="font-bold text-white">
                {convertFuel(result.ifrReserve).toFixed(0)} {unit}
              </p>
            </div>
            <div className="bg-gray-800/60 p-3 rounded-lg">
              <p className="text-gray-400">Contingency (5%):</p>
              <p className="font-bold text-white">
                {convertFuel(result.contingencyFuel).toFixed(0)} {unit}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <p className="text-gray-400 uppercase text-sm">
              Total Fuel Required
            </p>
            <p className="text-3xl font-bold text-indigo-400">
              {convertFuel(result.totalFuel).toFixed(0)} {unit}
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
  )

  // If in tabbed mode, return only the content
  if (isTabbed) {
    return renderContent()
  }

  // Otherwise, return the full component with toggle button
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="flex justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full md:w-[20rem] flex justify-between items-center py-2 px-3 text-left font-medium text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"
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
      {isOpen && <div className="mt-2">{renderContent()}</div>}
    </div>
  )
}
