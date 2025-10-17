'use client'

import { useState } from 'react'

const AGL = 1000

export default function TodCalculator({
  isTabbed = false,
  input: propInput,
  setInput: propSetInput,
  result: propResult,
  setResult: propSetResult
}) {
  const [isOpen, setIsOpen] = useState(false)

  // Use local state for standalone mode, props for tabbed mode
  const [localInput, setLocalInput] = useState({
    currentAltitude: '',
    verticalSpeed: '',
    groundSpeed: '',
    destinationElevation: '',
    approachAngle: '',
    approachSpeed: ''
  })
  const [localResult, setLocalResult] = useState(null)

  const input = isTabbed ? propInput : localInput
  const setInput = isTabbed ? propSetInput : setLocalInput
  const result = isTabbed ? propResult : localResult
  const setResult = isTabbed ? propSetResult : setLocalResult

  const handleInputChange = (name, value) => {
    setInput((prev) => ({ ...prev, [name]: value }))
  }

  const calculateTod = () => {
    const {
      currentAltitude,
      verticalSpeed,
      groundSpeed,
      destinationElevation,
      approachAngle,
      approachSpeed
    } = input

    const currentAltitudeInt = parseInt(currentAltitude, 10)
    const verticalSpeedInt = parseInt(verticalSpeed, 10)
    const groundSpeedInt = parseInt(groundSpeed, 10)
    const destinationElevationInt = parseInt(destinationElevation, 10)
    const approachAngleInt = parseInt(approachAngle, 10)
    const approachSpeedInt = parseInt(approachSpeed, 10)

    if (
      isNaN(currentAltitudeInt) ||
      currentAltitudeInt <= 0 ||
      isNaN(verticalSpeedInt) ||
      verticalSpeedInt <= 0 ||
      isNaN(groundSpeedInt) ||
      groundSpeedInt <= 0 ||
      isNaN(destinationElevationInt) ||
      isNaN(approachAngleInt) ||
      approachAngleInt < 2 ||
      approachAngleInt > 5 ||
      isNaN(approachSpeedInt) ||
      approachSpeedInt <= 0
    ) {
      setResult('Invalid input. Please provide valid figures for all fields.')
      return
    }

    const altitudeToLose = currentAltitudeInt - destinationElevationInt
    const todTimeInMinutes = altitudeToLose / verticalSpeedInt
    const todDistance = (groundSpeedInt * todTimeInMinutes) / 60

    const todResults = {
      altitudeToLose,
      todTimeInMinutes,
      todDistance
    }

    /**
     * Common Approach Angles
     *
     * 2°	- 212 ft/NM	Shallow descent
     * 2.5° -	264 ft/NM
     * 3° -	318 ft/NM	Standard glidepath
     * 3.5° -	373 ft/NM	Steeper
     * 4°	- 425 ft/NM	Very steep
     * 5° -	531 ft/NM	Uncommon
     *
     * For simplicity, approach angle is multiplied by 100
     * **/

    const finalAltitude = destinationElevationInt + AGL

    const calculatedApproachAngle = approachAngleInt * 100
    const rateOfDescent = (approachSpeedInt / 60) * calculatedApproachAngle
    const apprDistance = finalAltitude / calculatedApproachAngle
    const apprTimeInMinutes = finalAltitude / rateOfDescent

    const approachResults = {
      finalAltitude,
      calculatedApproachAngle,
      rateOfDescent,
      apprDistance,
      apprTimeInMinutes
    }

    setResult({
      todResults,
      approachResults
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
        onChange={(e) => handleInputChange(name, e.target.value)}
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
          <div className="flex flex-col md:flex-row gap-6">
            {renderInputField(
              'currentAltitude',
              'Cruise Altitude (ft)',
              input.currentAltitude,
              handleInputChange,
              'e.g., 35000',
              { step: 100, min: 0 }
            )}
            {renderInputField(
              'destinationElevation',
              'Runway Elevation (ft)',
              input.destinationElevation,
              handleInputChange,
              'e.g., 500'
            )}
            {renderInputField(
              'verticalSpeed',
              'Descent VS (fpm)',
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
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-4 justify-between items-end">
            {renderInputField(
              'approachSpeed',
              'Groundspeed for Approach',
              input.approachSpeed,
              handleInputChange,
              'e.g., 122',
              { step: 1, min: 0 }
            )}
            {renderInputField(
              'approachAngle',
              'Approach Angle (default: 3°)',
              input.approachAngle,
              handleInputChange,
              'e.g., 3°',
              { step: 1, min: 2, max: 5 }
            )}
            <button
              onClick={calculateTod}
              className="w-1/3 py-2.5 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Calculate
            </button>
          </div>
          {result && typeof result === 'object' && (
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/60 border border-gray-700 p-4 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">
                    Top of Descent (TOD)
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Start to descent at{' '}
                    <strong className="text-indigo-300 text-base font-bold">
                      {result.todResults.todDistance.toFixed(2)} NM
                    </strong>{' '}
                    or{' '}
                    <strong className="text-indigo-300 text-base font-bold">
                      {Math.ceil(result.todResults.todTimeInMinutes)} minutes
                    </strong>{' '}
                    from RWY.
                  </p>
                </div>
                <div className="bg-gray-800/60 border border-gray-700 p-4 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">
                    Approach
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Final ({result.approachResults.finalAltitude} ft) approach
                    is{' '}
                    <strong className="text-purple-300 text-base font-bold">
                      {result.approachResults.apprDistance.toFixed(2)} NM
                    </strong>{' '}
                    or{' '}
                    <strong className="text-purple-300 text-base font-bold">
                      {Math.ceil(result.approachResults.apprTimeInMinutes)}{' '}
                      minutes
                    </strong>{' '}
                    to Runway at{' '}
                    <strong className="text-purple-300 text-base font-bold">
                      {Math.round(
                        result.approachResults.rateOfDescent.toFixed(0) / 100
                      ) * 100}{' '}
                      fpm
                    </strong>
                    .
                  </p>
                </div>
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
          <span>TOD & Approach Calculator</span>
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
