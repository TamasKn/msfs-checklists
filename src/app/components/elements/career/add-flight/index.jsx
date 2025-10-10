'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { AircraftName } from '@/data/aircrafts/aircraft-names'
import { JobType } from '@/data/career/jobs'
import { WeatherType } from '@/data/career/weather'
import {
  calculateBasePay,
  calculateBonus,
  calculateOperationCost,
  calculateXP,
  calculateMaintenanceIssueCost
} from '@/utils/career/financials'
import { cessnaLongitudeCareer } from '@/data/cessna-longitude/career'
import { cessna172Career } from '@/data/cessna-172/career'
import { pilatusPc12Career } from '@/data/pilatus-pc-12/career'
import FinancialSummary from '@/app/components/elements/career/financial-summary'
import { getLeasedAircraft } from '@/utils/career/user-data'

/**
 * AddFlight - Modal component for adding new flight entries
 * @param {Function} onAddFlight - Callback when flight is added
 * @param {Function} onCancel - Callback when modal is cancelled
 */
export default function AddFlight({ onAddFlight, onCancel }) {
  // Get current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date()
    return now.toTimeString().slice(0, 5)
  }

  const [newFlight, setNewFlight] = useState({
    startTime: getCurrentTime(),
    jobType: JobType.Cargo,
    departure: '',
    departureName: '',
    destination: '',
    destinationName: '',
    aircraft: AircraftName.Cessna172,
    range: 0,
    duration: 0,
    weather: WeatherType.Clear
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [lookupLoading, setLookupLoading] = useState({
    departure: false,
    destination: false
  })
  const [showFinancialSummary, setShowFinancialSummary] = useState(false)
  const [calculatedFinancials, setCalculatedFinancials] = useState(null)
  const [leasedAircraft, setLeasedAircraft] = useState([])

  // Load leased aircraft on mount
  useEffect(() => {
    const leased = getLeasedAircraft()
    setLeasedAircraft(leased)

    // Set default aircraft to first leased aircraft if available
    if (leased.length > 0) {
      setNewFlight((prev) => ({ ...prev, aircraft: leased[0] }))
    }
  }, [])

  /**
   * Get aircraft career data
   */
  const getAircraftCareerData = (aircraftName) => {
    switch (aircraftName) {
      case AircraftName.CessnaLongitude:
        return cessnaLongitudeCareer
      case AircraftName.Cessna172:
        return cessna172Career
      case AircraftName.PilatusPC12:
        return pilatusPc12Career
      default:
        return cessnaLongitudeCareer
    }
  }

  /**
   * Looks up airport information by ICAO code
   * @param {string} icao - ICAO code to lookup
   * @param {string} field - Field name (departure or destination)
   */
  const lookupAirport = async (icao, field) => {
    if (!icao || icao.length !== 4) {
      setErrors((prev) => ({
        ...prev,
        [field]: 'ICAO code must be 4 characters'
      }))
      return
    }

    setLookupLoading((prev) => ({ ...prev, [field]: true }))
    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors[field]
      return newErrors
    })

    try {
      const userToken = localStorage.getItem('user_token')
      const response = await axios.post('/api/airportfinder', {
        ICAO: icao.toUpperCase(),
        userToken: userToken
      })

      if (response.data.status === 'success') {
        const airportData = response.data.data
        setNewFlight((prev) => ({
          ...prev,
          [field]: airportData.ident,
          [`${field}Name`]: airportData.name
        }))
      } else {
        setErrors((prev) => ({
          ...prev,
          [field]: 'Airport not found'
        }))
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        [field]: error.response?.data?.message || 'Failed to lookup airport'
      }))
    } finally {
      setLookupLoading((prev) => ({ ...prev, [field]: false }))
    }
  }

  /**
   * Validates form fields
   * @returns {boolean} - True if form is valid
   */
  const validateForm = () => {
    const newErrors = {}

    if (!newFlight.departure || newFlight.departure.length !== 4) {
      newErrors.departure = 'Valid ICAO code required (4 characters)'
    }

    if (!newFlight.departureName) {
      newErrors.departure = 'Please lookup the departure airport'
    }

    if (!newFlight.destination || newFlight.destination.length !== 4) {
      newErrors.destination = 'Valid ICAO code required (4 characters)'
    }

    if (!newFlight.destinationName) {
      newErrors.destination = 'Please lookup the destination airport'
    }

    if (!newFlight.range || newFlight.range <= 0) {
      newErrors.range = 'Range must be greater than 0'
    }

    if (!newFlight.duration || newFlight.duration <= 0) {
      newErrors.duration = 'Duration must be greater than 0'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Handles input changes and clears errors
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target

    // Convert to uppercase for ICAO codes
    const processedValue =
      name === 'departure' || name === 'destination'
        ? value.toUpperCase()
        : value

    setNewFlight((prev) => ({ ...prev, [name]: processedValue }))

    // Clear airport name when ICAO code changes
    if (name === 'departure' || name === 'destination') {
      setNewFlight((prev) => ({ ...prev, [`${name}Name`]: '' }))
    }

    // Clear error for this field only if it's not an airport lookup error
    // Airport lookup errors should persist until a new lookup is performed
    if (errors[name] && !(name === 'departure' || name === 'destination')) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  /**
   * Handles form submission - calculates financials and shows summary
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Calculate financials
    const range = parseFloat(newFlight.range)
    const duration = parseFloat(newFlight.duration)

    const basePay = calculateBasePay(
      newFlight.aircraft,
      newFlight.jobType,
      range,
      duration
    )

    const bonus = calculateBonus(
      newFlight.aircraft,
      newFlight.jobType,
      range,
      duration,
      newFlight.weather
    )

    const operationCost = calculateOperationCost(newFlight.aircraft, duration)

    // Calculate maintenance issues (hidden cost)
    const maintenanceIssueResult = calculateMaintenanceIssueCost(
      newFlight.aircraft
    )
    const maintenanceIssueCost = maintenanceIssueResult.totalCost

    const xp = calculateXP(
      newFlight.aircraft,
      newFlight.jobType,
      range,
      duration,
      newFlight.weather
    )

    // Total operation cost includes maintenance issues
    const totalOperationCost = operationCost + maintenanceIssueCost
    const totalReward = basePay + bonus - totalOperationCost

    // Get cost breakdown - round each component and adjust to match total
    const careerData = getAircraftCareerData(newFlight.aircraft)
    const flightHours = duration / 60

    // Calculate raw breakdown values
    const rawLease = careerData.costs.leasePriceBase * flightHours
    const rawInsurance = careerData.costs.insuranceBase * flightHours
    const rawMaintenance = careerData.costs.maintenance.base * flightHours

    // Round each component
    const roundedLease = Math.round(rawLease * 100) / 100
    const roundedInsurance = Math.round(rawInsurance * 100) / 100
    const roundedMaintenance = Math.round(rawMaintenance * 100) / 100

    // Calculate the difference between sum of rounded components and actual total
    const roundedSum = roundedLease + roundedInsurance + roundedMaintenance
    const difference = Math.round((operationCost - roundedSum) * 100) / 100

    // Adjust the largest component to match the total exactly
    const breakdown = {
      lease: roundedLease,
      insurance: roundedInsurance,
      maintenance: roundedMaintenance + difference,
      maintenanceIssues: maintenanceIssueCost,
      maintenanceIssueDetails: maintenanceIssueResult.issues
    }

    // Set calculated financials
    setCalculatedFinancials({
      basePay,
      bonus,
      operationCost: totalOperationCost,
      totalReward,
      xp,
      breakdown
    })

    // Show financial summary popup
    setShowFinancialSummary(true)
    setIsSubmitting(false)
  }

  /**
   * Confirms the flight and adds it to history
   */
  const handleConfirmFlight = () => {
    const flightData = {
      ...newFlight,
      range: parseFloat(newFlight.range),
      duration: parseFloat(newFlight.duration),
      base: calculatedFinancials.basePay,
      bonus: calculatedFinancials.bonus,
      operationCost: calculatedFinancials.operationCost,
      totalReward: calculatedFinancials.totalReward,
      xp: calculatedFinancials.xp
    }

    onAddFlight(flightData)
    setShowFinancialSummary(false)
  }

  /**
   * Renders airport input field with lookup button
   */
  const renderAirportField = (name, label) => {
    const isLoading = lookupLoading[name]
    const airportName = newFlight[`${name}Name`]

    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-gray-200 mb-2"
        >
          {label}
        </label>
        <div className="relative">
          <input
            type="text"
            id={name}
            name={name}
            value={newFlight[name]}
            onChange={handleInputChange}
            placeholder="e.g., EGLL"
            maxLength={4}
            className={`block w-full bg-gray-700/50 border ${
              errors[name] ? 'border-red-500' : 'border-gray-600'
            } rounded-lg shadow-sm py-2.5 pl-4 pr-12 text-white placeholder-gray-500 uppercase focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
          />
          <button
            type="button"
            onClick={() => lookupAirport(newFlight[name], name)}
            disabled={
              isLoading || !newFlight[name] || newFlight[name].length !== 4
            }
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer disabled:cursor-not-allowed"
            title="Lookup airport"
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              <svg
                className={`h-5 w-5 ${
                  newFlight[name] && newFlight[name].length === 4
                    ? 'text-indigo-400 hover:text-indigo-300'
                    : 'text-gray-600'
                } transition-colors duration-200`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            )}
          </button>
        </div>
        {airportName && !errors[name] && (
          <p className="mt-1.5 text-sm text-green-400 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {airportName}
          </p>
        )}
        {errors[name] && (
          <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">{errors[name]}</span>
          </p>
        )}
      </div>
    )
  }

  /**
   * Renders input field with error handling
   */
  const renderInputField = (
    name,
    label,
    type = 'text',
    placeholder = '',
    additionalProps = {}
  ) => (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-200 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={newFlight[name]}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`block w-full bg-gray-700/50 border ${
          errors[name] ? 'border-red-500' : 'border-gray-600'
        } rounded-lg shadow-sm py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
        {...additionalProps}
      />
      {errors[name] && (
        <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {errors[name]}
        </p>
      )}
    </div>
  )

  /**
   * Renders select field
   */
  const renderSelectField = (name, label, options) => (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-200 mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={newFlight[name]}
        onChange={handleInputChange}
        className="block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 cursor-pointer"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )

  return (
    <>
      {/* Financial Summary Popup */}
      {showFinancialSummary && calculatedFinancials && (
        <FinancialSummary
          financials={calculatedFinancials}
          onConfirm={handleConfirmFlight}
        />
      )}

      {/* Add Flight Form */}
      <div className="bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 backdrop-blur-sm px-6 py-5 border-b border-gray-700/50 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Add New Flight</h2>
              <p className="text-sm text-gray-300 mt-1">
                Enter your flight details below
              </p>
            </div>
            <button
              type="button"
              onClick={onCancel}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Flight Information Section */}
            <div className="col-span-full">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Flight Information
              </h3>
            </div>

            {/* Start Time - Auto-filled, read-only */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Start Time (Auto-filled)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={newFlight.startTime}
                  readOnly
                  className="block w-full bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-gray-400 cursor-not-allowed"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-1.5 text-xs text-gray-500">
                Current time is automatically recorded
              </p>
            </div>

            {renderSelectField('jobType', 'Job Type', Object.values(JobType))}
            {renderAirportField('departure', 'Departure Airport')}
            {renderAirportField('destination', 'Destination Airport')}

            {/* Aircraft - Only show leased aircraft */}
            <div>
              <label
                htmlFor="aircraft"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                Aircraft
              </label>
              {leasedAircraft.length > 0 ? (
                <select
                  id="aircraft"
                  name="aircraft"
                  value={newFlight.aircraft}
                  onChange={handleInputChange}
                  className="block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 cursor-pointer"
                >
                  {leasedAircraft.map((aircraft) => (
                    <option key={aircraft} value={aircraft}>
                      {aircraft}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="block w-full bg-gray-900/50 border border-yellow-600 rounded-lg shadow-sm py-2.5 px-4 text-yellow-400">
                  No aircraft leased. Please lease an aircraft first.
                </div>
              )}
            </div>
            {renderInputField('range', 'Range (NM)', 'number', '0', {
              min: 0,
              step: 0.1
            })}
            {renderInputField('duration', 'Duration (minutes)', 'number', '0', {
              min: 0,
              step: 1
            })}
            {renderSelectField(
              'weather',
              'Weather',
              Object.values(WeatherType)
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-700/50 flex flex-col sm:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              disabled={isSubmitting}
              className="w-full sm:w-auto py-2.5 px-6 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto py-2.5 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Adding Flight...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add Flight
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
