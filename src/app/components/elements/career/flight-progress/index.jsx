'use client'

import { useState, useEffect, useRef } from 'react'
import { updateDraftFlight } from '@/utils/career/draft-flights'
import SimbriefDetails from '@/app/components/elements/career/simbrief-details'

/**
 * FlightProgress - Modal component for completing a flight in progress
 * @param {Object} draftFlight - Draft flight data
 * @param {Function} onFinishFlight - Callback when flight is finished with duration
 * @param {Function} onCancel - Callback when modal is cancelled
 */
export default function FlightProgress({
  draftFlight,
  onFinishFlight,
  onCancel
}) {
  const [duration, setDuration] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [elapsedSeconds, setElapsedSeconds] = useState(
    draftFlight.elapsedSeconds || 0
  )
  const [isTimerRunning, setIsTimerRunning] = useState(true)
  const [useManualInput, setUseManualInput] = useState(false)
  const workerRef = useRef(null)
  const [confirmFinish, setConfirmFinish] = useState(false)

  /**
   * Initialize Web Worker and start timer when component mounts
   */
  useEffect(() => {
    // Create Web Worker
    workerRef.current = new Worker('/workers/timer-worker.js')

    // Handle messages from worker
    workerRef.current.onmessage = (e) => {
      const { type, payload } = e.data

      if (type === 'TIME_UPDATE') {
        setElapsedSeconds(payload.elapsedSeconds)
        setIsTimerRunning(payload.isRunning)
      }
    }

    // Handle worker errors
    workerRef.current.onerror = (error) => {
      console.error('Timer Worker Error:', error)
    }

    // Start timer with initial value from draft flight
    workerRef.current.postMessage({
      type: 'START',
      payload: { initialSeconds: draftFlight.elapsedSeconds || 0 }
    })

    // Cleanup on unmount
    return () => {
      if (workerRef.current) {
        workerRef.current.postMessage({ type: 'STOP' })
        workerRef.current.terminate()
      }
    }
  }, [draftFlight.id, draftFlight.elapsedSeconds])

  /**
   * Format seconds to HH:MM:SS
   * @param {number} totalSeconds - Total seconds
   * @returns {string} Formatted time string
   */
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  /**
   * Convert seconds to minutes (rounded up to minimum 60)
   * @param {number} totalSeconds - Total seconds
   * @returns {number} Minutes (minimum 60)
   */
  const secondsToMinutes = (totalSeconds) => {
    const minutes = Math.round(totalSeconds / 60)
    return Math.max(minutes, 60) // Ensure minimum 60 minutes
  }

  /**
   * Validates duration input
   * @returns {boolean} - True if valid
   */
  const validateDuration = () => {
    // If using manual input, validate the manual duration
    if (useManualInput) {
      if (!duration || duration < 60) {
        setError('Duration must be at least 60 minutes')
        return false
      }
    }
    // Timer mode always valid (will be rounded up to 60 if needed)
    setError('')
    return true
  }

  /**
   * Handles finish flight button click
   */
  const onConfirmFinish = () => {
    setConfirmFinish(true)
  }

  const onCancelFinish = () => {
    setConfirmFinish(false)
  }

  const handleFinishFlight = () => {
    if (!validateDuration()) {
      return
    }

    setConfirmFinish(false)
    setIsSubmitting(true)

    // Pause timer via worker
    if (workerRef.current) {
      workerRef.current.postMessage({ type: 'PAUSE' })
    }

    // Use manual input if provided, otherwise use timer
    const finalDuration =
      useManualInput && duration ? duration : secondsToMinutes(elapsedSeconds)

    onFinishFlight(finalDuration)
  }

  /**
   * Handles save button click (pauses timer and saves to draft)
   */
  const handleSave = () => {
    // Pause timer via worker
    if (workerRef.current) {
      workerRef.current.postMessage({ type: 'PAUSE' })
    }

    // Update draft with current elapsed time
    updateDraftFlight(draftFlight.id, {
      elapsedSeconds: elapsedSeconds
    })

    // reload the current page
    window.location.reload()

    // Call original onCancel to close modal
    onCancel()
  }

  /**
   * Handles duration input change
   */
  const handleDurationChange = (e) => {
    const value = parseInt(e.target.value) || 0
    setDuration(value)
    if (error && value >= 60) {
      setError('')
    }
  }

  /**
   * Toggle between timer and manual input
   */
  const handleToggleManualInput = () => {
    setUseManualInput(!useManualInput)
    setError('')
  }

  return (
    <div className="bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-orange-700/50 w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-slideUp">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-orange-900/90 to-amber-900/90 backdrop-blur-sm px-6 py-5 border-b border-orange-700/50 rounded-t-2xl z-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <svg
                className="w-7 h-7 text-orange-400"
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
              Flight in Progress...
            </h2>
            <p className="text-sm text-orange-200 mt-1">
              Complete your flight or Pause to save your progress
            </p>
          </div>
          <button
            type="button"
            onClick={handleSave}
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

      {/* Content */}
      <div className="p-8">
        {/* Route Display - Departure to Destination */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-6">
            {/* Departure */}
            <div className="flex-1 text-left">
              <div className="text-4xl font-bold text-blue-400 mb-1">
                {draftFlight.departure}
              </div>

              {draftFlight.departureRunway && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-900/30 border border-blue-700/50 rounded-lg">
                  <span className="text-base font-semibold text-blue-300">
                    RWY {draftFlight.departureRunway}
                  </span>
                </div>
              )}
              <div className="text-sm text-gray-400 mt-1">
                {draftFlight.departureName}
                {draftFlight.departureCountry && (
                  <span className="text-gray-500 ml-1">
                    ({draftFlight.departureCountry})
                  </span>
                )}
              </div>
            </div>

            {/* Flight Arrow with Plane Icon */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex items-center">
                <div className="h-0.5 w-72 bg-gradient-to-r from-blue-500 via-orange-400 to-purple-500"></div>
                <svg
                  className="w-14 h-14 text-orange-400 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 rotate-90"
                  fill="currentColor"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 496 496"
                >
                  <g>
                    <g>
                      <g>
                        <rect
                          x="55.99"
                          y="254.01"
                          transform="matrix(0.2167 0.9762 -0.9762 0.2167 306.0974 142.9137)"
                          width="15.999"
                          height="16.391"
                        />
                        <path
                          d="M448,233.232V192h-56v10.904l-88-47.664V92.752c0-3.672-0.368-7.36-1.088-10.984l-8.8-43.96
				C289.736,15.896,270.344,0,248,0s-41.736,15.896-46.12,37.808l-8.8,43.968c-0.712,3.616-1.08,7.304-1.08,10.976v62.488
				l-88,47.664V192H48v41.232l-48,26V304h16.688L192,273.512v63.336c0,19.536,2.992,38.824,8.6,57.488L120,451.88V496h16.984
				l89.768-22.448l7.48,22.448h27.528l7.48-22.448l88.816,22.208L376,496v-44.12l-80.6-57.552c5.608-18.664,8.6-37.944,8.6-57.488
				v-63.336l174.632,30.368L496,304v-44.768L448,233.232z M64,208h24v3.568l-24,13V208z M192,225.576L86.264,249.072l3.472,15.624
				L192,241.976v15.296L16,287.88v-19.12l176-95.336V225.576z M136,479.752V460.12l69.688-49.76l15.992,47.984L136,479.752z
				 M250.232,480h-4.472l-28.32-84.976c-6.264-18.792-9.44-38.368-9.44-58.184V92.752c0-2.624,0.256-5.264,0.776-7.84l8.8-43.96
				C220.464,26.496,233.256,16,248,16s27.536,10.496,30.432,24.944l8.8,43.952c0.512,2.592,0.768,5.232,0.768,7.856v244.096
				c0,19.816-3.176,39.392-9.44,58.176L250.232,480z M360,460.12v19.632l-85.68-21.416l15.992-47.984L360,460.12z M408,208h24
				v16.568l-24-13V208z M480,287.88l-176-30.608v-15.296l102.264,22.728l3.472-15.624L304,225.584v-52.152l176,95.336V287.88z"
                        />
                        <rect
                          x="423.829"
                          y="254.203"
                          transform="matrix(0.9762 0.2169 -0.2169 0.9762 67.1562 -87.4637)"
                          width="16.392"
                          height="16"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-2xl text-gray-400 font-semibold mt-8">
                {draftFlight.range} NM
              </div>
            </div>

            {/* Destination */}
            <div className="flex-1 text-right">
              <div className="text-4xl font-bold text-purple-400 mb-1">
                {draftFlight.destination}
              </div>

              {draftFlight.destinationRunway && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-900/30 border border-purple-700/50 rounded-lg">
                  <span className="text-base font-semibold text-purple-300">
                    RWY {draftFlight.destinationRunway}
                  </span>
                </div>
              )}
              <div className="text-sm text-gray-400 mt-1">
                {draftFlight.destinationName}
                {draftFlight.destinationCountry && (
                  <span className="text-gray-500 ml-1">
                    ({draftFlight.destinationCountry})
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        {draftFlight.simbriefData && (
          <div className="flex justify-between -mt-4">
            <details className="mb-4">
              <summary className="cursor-pointer text-sm font-semibold text-blue-300 hover:text-blue-200 ">
                METAR
              </summary>
              <div className="py-2 text-xs text-gray-300 font-mono break-all">
                {draftFlight.simbriefData.origin.metar}
              </div>
            </details>
            <details className="mb-4">
              <summary className="justify-self-end cursor-pointer text-sm font-semibold text-blue-300 hover:text-blue-200">
                METAR
              </summary>
              <div className="py-2 text-xs text-gray-300 font-mono break-all">
                {draftFlight.simbriefData.destination.metar}
              </div>
            </details>
          </div>
        )}

        {/* Aircraft Information */}
        <div className="mb-6 p-4 bg-gray-900/30 border border-gray-700/50 rounded-xl">
          <div className="flex justify-center items-center">
            <div className="text-2xl font-semibold text-white">
              {draftFlight.aircraft}
            </div>
          </div>
        </div>

        {/* Flight Details Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Start Time */}
          <div className="p-4 bg-gray-900/30 border border-gray-700/50 rounded-xl text-center">
            <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">
              Started
            </div>
            <div className="text-sm font-semibold text-white">
              {draftFlight.startTime}
            </div>
            <div className="text-xs text-gray-500">{draftFlight.startDate}</div>
          </div>
          {/* Job Type */}
          <div className="p-4 bg-gray-900/30 border border-gray-700/50 rounded-xl text-center">
            <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">
              Job Type
            </div>
            <div className="text-lg font-semibold text-white">
              {draftFlight.jobType}
            </div>
          </div>

          {/* Weather */}
          <div className="p-4 bg-gray-900/30 border border-gray-700/50 rounded-xl text-center">
            <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">
              Weather
            </div>
            <div className="text-lg font-semibold text-white">
              {draftFlight.weather}
            </div>
          </div>
        </div>

        {/* Simbrief Additional Info */}
        {draftFlight.simbriefData && (
          <SimbriefDetails
            simbriefData={draftFlight.simbriefData}
            newFlight={draftFlight}
            modal="in-progress"
          />
        )}

        {/* Duration Input and Action Buttons */}
        <div className="flex items-center justify-between gap-4 pt-6 border-gray-700/50">
          {/* Timer / Duration Input */}
          <div className="max-w-[22rem] flex-1">
            <label
              htmlFor="duration"
              className="block text-sm font-semibold text-gray-200 mb-2"
            >
              {useManualInput ? 'Flight Duration* (minutes)' : 'Elapsed Time'}
            </label>

            {!useManualInput ? (
              <>
                {/* Timer Display */}
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm py-4 px-4 text-center">
                    <div className="text-4xl font-mono font-bold text-orange-400 tracking-wider">
                      {formatTime(elapsedSeconds)}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {elapsedSeconds < 3600 ? 'Rounding up to 60 min' : ''}
                    </div>
                  </div>
                  {!error && !useManualInput && (
                    <p className="mt-1.5 text-xs text-gray-500">
                      Timer will be rounded up to 60 min if below
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={handleToggleManualInput}
                    className="text-xs text-justify text-orange-400 hover:text-orange-300 underline cursor-pointer transition-colors duration-200"
                  >
                    Enter manually
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Manual Input */}
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={duration}
                  onChange={handleDurationChange}
                  placeholder="60"
                  min={60}
                  step={1}
                  className={`block w-full bg-gray-700/50 border ${
                    error ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg shadow-sm py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                />
                {!error && useManualInput && (
                  <p className="mt-1.5 text-xs text-gray-500">
                    Minimum 60 minutes required
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleToggleManualInput}
                  className="mt-2 text-xs text-orange-400 hover:text-orange-300 underline cursor-pointer transition-colors duration-200"
                >
                  Use timer
                </button>
              </>
            )}

            {error && (
              <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 self-end">
            <button
              type="button"
              onClick={handleSave}
              disabled={isSubmitting}
              className="py-2.5 px-6 text-base bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
            >
              Pause & Save
            </button>
            <button
              type="button"
              onClick={onConfirmFinish}
              disabled={isSubmitting}
              className="py-2.5 px-6 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
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
                  Finishing Flight...
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Finish Flight
                </span>
              )}
            </button>
          </div>
        </div>
        {confirmFinish && (
          <div className="flex justify-end gap-4 mt-6">
            <p className="text-sm text-orange-200 self-center">
              Are you sure you want to finish this flight?
            </p>
            <button
              className="cursor-pointer text-base text-yellow-400"
              onClick={handleFinishFlight}
            >
              Finish
            </button>
            <button
              className="cursor-pointer text-base"
              onClick={onCancelFinish}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
