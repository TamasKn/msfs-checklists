'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { AircraftName } from '@/data/aircrafts/aircraft-names'
import { Aircrafts } from '@/data/aircrafts/aircrafts'
import { JobType } from '@/data/career/jobs'
import { WeatherType, WeatherAbbreviations } from '@/data/career/weather'
import { getLeasedAircraft } from '@/utils/career/user-data'

const isTest = process.env.NEXT_PUBLIC_IS_TEST === 'true'

/**
 * AddFlight - Modal component for adding new flight entries
 * @param {Function} onSaveDraft - Callback when flight draft is saved
 * @param {Function} onCancel - Callback when modal is cancelled
 */
export default function AddFlight({ onSaveDraft, onCancel }) {
  const simbriefPilotId = localStorage.getItem('sb_pilot_id')
  // Get current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date()
    return now.toTimeString().slice(0, 5)
  }

  const getCurrentDate = () => {
    const now = new Date()
    return now.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  let initFlight = {}

  if (isTest) {
    initFlight = {
      startTime: getCurrentTime(),
      startDate: getCurrentDate(),
      jobType: JobType.Charter,
      departure: 'EHAM',
      departureName: 'Schiphol Airport, Netherlands',
      departureRunway: '09',
      destination: 'KLAX',
      destinationName: 'Los Angeles International Airport, United States',
      destinationRunway: '27L',
      aircraft: AircraftName.CessnaLongitude,
      range: 555,
      duration: 60,
      weather: WeatherType.Clear
    }
  } else {
    initFlight = {
      startTime: getCurrentTime(),
      startDate: getCurrentDate(),
      jobType: JobType.Charter,
      departure: '',
      departureName: '',
      departureRunway: '',
      destination: '',
      destinationName: '',
      destinationRunway: '',
      aircraft: AircraftName.Cessna172,
      range: 1,
      duration: 60,
      weather: WeatherType.Clear
    }
  }

  const [newFlight, setNewFlight] = useState(initFlight)
  const [mode, setMode] = useState(null) // null, 'manual', or 'simbrief'
  const [simbriefData, setSimbriefData] = useState(null)
  const [simbriefLoading, setSimbriefLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [lookupLoading, setLookupLoading] = useState({
    departure: false,
    destination: false
  })
  const [leasedAircraft, setLeasedAircraft] = useState([])
  const [runways, setRunways] = useState({
    departure: [],
    destination: []
  })
  const [isLoading, setIsLoading] = useState(false)

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
   * Parses weather from METAR string
   * @param {string} metar - METAR string
   * @returns {string} Weather type
   */
  const parseWeatherFromMetar = (metar) => {
    if (!metar) return WeatherType.Clear

    const words = metar.split(' ')
    if (words.length < 6) return WeatherType.Clear

    const weatherWord = words[5]

    // Check against WeatherAbbreviations
    for (const [key, abbr] of Object.entries(WeatherAbbreviations)) {
      if (weatherWord.includes(abbr)) {
        return WeatherType[key]
      }
    }

    return WeatherType.Clear
  }

  /**
   * Fetches flight plan from Simbrief
   */
  const fetchFromSimbrief = async () => {
    setSimbriefLoading(true)
    setErrors({})

    try {
      const pilotId = localStorage.getItem('sb_pilot_id')
      const response = await axios.post('/api/simbrief/route', {
        pilotID: pilotId
      })

      if (response.data.status === 'success') {
        const data = response.data.data
        setSimbriefData(data)

        // Parse weather from METAR
        const weather = parseWeatherFromMetar(data.origin.metar)

        // Populate flight data
        setNewFlight((prev) => ({
          ...prev,
          departure: data.origin.icao_code,
          departureName: data.origin.name,
          departureRunway: data.origin.plan_rwy,
          destination: data.destination.icao_code,
          destinationName: data.destination.name,
          destinationRunway: data.destination.plan_rwy,
          range: parseInt(data.general.route_distance),
          weather: weather
        }))

        // Set mode to simbrief
        setMode('simbrief')
      } else {
        setErrors({ simbrief: response.data.message || 'Failed to fetch from Simbrief' })
      }
    } catch (error) {
      setErrors({
        simbrief:
          error.response?.data?.message || 'Failed to fetch flight plan from Simbrief'
      })
    } finally {
      setSimbriefLoading(false)
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
      const airportApiKey = localStorage.getItem('airportdb_key')
      const response = await axios.post('/api/airportfinder', {
        ICAO: icao.toUpperCase(),
        airportApiKey: airportApiKey
      })

      if (response.data.status === 'success') {
        const airportData = response.data.data

        // Extract runways and create options
        const runwayOptions = []
        if (airportData.runways && airportData.runways.length > 0) {
          airportData.runways.forEach((runway) => {
            if (runway.le_ident) runwayOptions.push(runway.le_ident)
            if (runway.he_ident) runwayOptions.push(runway.he_ident)
          })
        }

        setRunways((prev) => ({
          ...prev,
          [field]: runwayOptions
        }))

        setNewFlight((prev) => ({
          ...prev,
          [field]: airportData.ident,
          [`${field}Name`]: `${airportData.name}, ${airportData.country.name}`,
          [`${field}Runway`]: runwayOptions.length > 0 ? runwayOptions[0] : ''
        }))
      } else {
        // Handle error response from API
        setErrors((prev) => ({
          ...prev,
          [field]: response.data.message || 'Airport not found'
        }))
      }
    } catch (error) {
      // Handle network errors or API errors
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to lookup airport'

      setErrors((prev) => ({
        ...prev,
        [field]: errorMessage
      }))
    } finally {
      setLookupLoading((prev) => ({ ...prev, [field]: false }))
    }
  }

  const addCustomICAO = (icao, field) => {
    setNewFlight((prev) => ({
      ...prev,
      [field]: icao.toUpperCase(),
      [`${field}Name`]: `Custom ${field}`,
      [`${field}Runway`]: 'N/A'
    }))
    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors[field]
      return newErrors
    })
  }

  /**
   * Validates form fields (without duration for draft)
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
   * Handles form submission - saves draft flight
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Prepare draft flight data (without duration, includes runway data for display)
    const draftData = {
      startTime: newFlight.startTime,
      startDate: newFlight.startDate,
      jobType: newFlight.jobType,
      departure: newFlight.departure,
      departureName: newFlight.departureName,
      departureRunway: newFlight.departureRunway || '',
      destination: newFlight.destination,
      destinationName: newFlight.destinationName,
      destinationRunway: newFlight.destinationRunway || '',
      aircraft: newFlight.aircraft,
      range: parseFloat(newFlight.range),
      weather: newFlight.weather,
      // Include Simbrief data if available
      simbriefData: mode === 'simbrief' ? simbriefData : null
    }

    // Call parent callback to save draft
    onSaveDraft(draftData)
    setIsSubmitting(false)
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
            <span
              className="text-xs text-gray-400 underline cursor-pointer"
              onClick={() => addCustomICAO(newFlight[name], name)}
            >
              Add anyway
            </span>
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
      {info && <p className="mt-1.5 text-xs text-gray-500">{info}</p>}
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
    <div className="bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-5xl max-h-[90vh] overflow-y-auto animate-slideUp">
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
            className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
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
        <div className="flex flex-col gap-6">
          <div>
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

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Start Time */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Start Date and Time (Auto-filled)
              </label>
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={newFlight.startTime}
                  readOnly
                  className="block w-[6rem] bg-gray-900/50 border pl-8 border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-gray-400 cursor-not-allowed"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
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
                <input
                  type="text"
                  value={newFlight.startDate}
                  readOnly
                  className="block w-full bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-gray-400 cursor-not-allowed"
                />
              </div>
              <p className="mt-1.5 text-xs text-gray-500">
                Current date and time is automatically recorded
              </p>
            </div>
            {/* Aircraft */}
            <div className="flex-1">
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
            {/* Job Type */}
            <div className="flex-1">
              {renderSelectField('jobType', 'Job Type', Object.values(JobType))}
            </div>
          </div>

          {/* Mode Selection Buttons */}
          {!mode && (
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={fetchFromSimbrief}
                disabled={simbriefLoading}
                className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                {simbriefLoading ? (
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
                    Fetching from Simbrief...
                  </span>
                ) : (
                  'Fetch from Simbrief'
                )}
              </button>
              <button
                type="button"
                onClick={() => setMode('manual')}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                Add Manually
              </button>
            </div>
          )}

          {/* Simbrief Error */}
          {errors.simbrief && (
            <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg">
              <p className="text-sm text-red-400 flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.simbrief}
              </p>
            </div>
          )}

          {/* Show form fields only when mode is selected */}
          {mode && (
            <>
              {/* Departure/Destination Row */}
              <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              {renderAirportField('departure', 'Departure (ICAO)')}
            </div>
            <div className="flex-1">
              {runways.departure.length > 0 && (
                <div>
                  <label
                    htmlFor="departureRunway"
                    className="block text-sm font-semibold text-gray-200 mb-2"
                  >
                    Departure Runway
                  </label>
                  <select
                    id="departureRunway"
                    name="departureRunway"
                    value={newFlight.departureRunway || ''}
                    onChange={handleInputChange}
                    className="block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 cursor-pointer"
                  >
                    {runways.departure.map((runway) => (
                      <option key={runway} value={runway}>
                        {runway}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="flex-1">
              {renderAirportField('destination', 'Destination (ICAO)')}
            </div>
            <div className="flex-1">
              {runways.destination.length > 0 && (
                <div>
                  <label
                    htmlFor="destinationRunway"
                    className="block text-sm font-semibold text-gray-200 mb-2"
                  >
                    Destination Runway
                  </label>
                  <select
                    id="destinationRunway"
                    name="destinationRunway"
                    value={newFlight.destinationRunway || ''}
                    onChange={handleInputChange}
                    className="block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 cursor-pointer"
                  >
                    {runways.destination.map((runway) => (
                      <option key={runway} value={runway}>
                        {runway}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              {renderInputField(
                'range',
                'Range (Nautical Mile)',
                'number',
                '0',
                {
                  min: 1,
                  step: 1
                }
              )}
            </div>
            <div className="flex-1">
              {renderSelectField(
                'weather',
                'Weather',
                Object.values(WeatherType)
              )}
            </div>
          </div>

          {/* Simbrief Additional Info */}
          {mode === 'simbrief' && simbriefData && (
            <div className="mt-6 p-6 bg-gray-900/50 border border-blue-500/30 rounded-xl">
              <h4 className="text-lg font-semibold text-blue-400 mb-4">
                Simbrief Flight Plan Details
              </h4>

              {/* Aircraft Warning */}
              {simbriefData.aircraft.icao_code !==
                Aircrafts.find((a) => a.name === newFlight.aircraft)?.id && (
                <div className="mb-4 p-3 bg-yellow-900/20 border border-yellow-500/50 rounded-lg">
                  <p className="text-sm text-yellow-400 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Aircraft mismatch: Simbrief plan is for{' '}
                    {simbriefData.aircraft.icao_code}, but you selected{' '}
                    {newFlight.aircraft}. You can still continue.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">Flight Number</p>
                  <p className="text-sm font-semibold text-white">
                    {simbriefData.general.flight_number}
                  </p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">Cruise Altitude</p>
                  <p className="text-sm font-semibold text-white">
                    FL{simbriefData.general.initial_altitude}
                  </p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">Passengers</p>
                  <p className="text-sm font-semibold text-white">
                    {simbriefData.general.passengers}
                  </p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">Weight per Pax</p>
                  <p className="text-sm font-semibold text-white">
                    {simbriefData.weights.pax_weight} kg
                  </p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">Cargo</p>
                  <p className="text-sm font-semibold text-white">
                    {simbriefData.weights.cargo} kg
                  </p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">Total Payload</p>
                  <p className="text-sm font-semibold text-white">
                    {simbriefData.weights.payload} kg
                  </p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">Recommended Fuel</p>
                  <p className="text-sm font-semibold text-white">
                    {simbriefData.fuel.plan_ramp} kg
                  </p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">Est. Duration</p>
                  <p className="text-sm font-semibold text-white">
                    {Math.floor(simbriefData.times.est_block / 3600)}h{' '}
                    {Math.floor((simbriefData.times.est_block % 3600) / 60)}m
                  </p>
                </div>
              </div>

              {/* Collapsible Sections */}
              <details className="mb-3">
                <summary className="cursor-pointer text-sm font-semibold text-blue-300 hover:text-blue-200 p-2 bg-gray-800/30 rounded">
                  Route String
                </summary>
                <div className="mt-2 p-3 bg-gray-800/50 rounded text-xs text-gray-300 font-mono break-all">
                  {simbriefData.general.route}
                </div>
              </details>

              <details className="mb-3">
                <summary className="cursor-pointer text-sm font-semibold text-blue-300 hover:text-blue-200 p-2 bg-gray-800/30 rounded">
                  Origin METAR
                </summary>
                <div className="mt-2 p-3 bg-gray-800/50 rounded text-xs text-gray-300 font-mono break-all">
                  {simbriefData.origin.metar}
                </div>
              </details>

              <details className="mb-4">
                <summary className="cursor-pointer text-sm font-semibold text-blue-300 hover:text-blue-200 p-2 bg-gray-800/30 rounded">
                  Destination METAR
                </summary>
                <div className="mt-2 p-3 bg-gray-800/50 rounded text-xs text-gray-300 font-mono break-all">
                  {simbriefData.destination.metar}
                </div>
              </details>

              {/* External Links */}
              <div className="flex gap-3">
                <a
                  href={simbriefData.ofp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  See Full Briefing
                </a>
                <a
                  href={simbriefData.skyvector}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Track on Skyvector
                </a>
              </div>
            </div>
          )}
          </>
          )}
        </div>

        {/* Action Buttons */}
        {mode && (
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
                Start Flight
              </span>
            )}
          </button>
        </div>
        )}
      </form>
    </div>
  )
}
