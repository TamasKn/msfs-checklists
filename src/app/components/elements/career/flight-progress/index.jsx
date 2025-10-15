'use client'

import { useState } from 'react'

/**
 * FlightProgress - Modal component for completing a flight in progress
 * @param {Object} draftFlight - Draft flight data
 * @param {Function} onFinishFlight - Callback when flight is finished with duration
 * @param {Function} onCancel - Callback when modal is cancelled
 */
export default function FlightProgress({ draftFlight, onFinishFlight, onCancel }) {
  const [duration, setDuration] = useState(60)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Validates duration input
   * @returns {boolean} - True if valid
   */
  const validateDuration = () => {
    if (!duration || duration < 60) {
      setError('Duration must be at least 60 minutes')
      return false
    }
    setError('')
    return true
  }

  /**
   * Handles finish flight button click
   */
  const handleFinishFlight = () => {
    if (!validateDuration()) {
      return
    }

    setIsSubmitting(true)
    onFinishFlight(duration)
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

  return (
    <div className="bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-5xl max-h-[90vh] overflow-y-auto animate-slideUp">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-orange-900/90 to-amber-900/90 backdrop-blur-sm px-6 py-5 border-b border-gray-700/50 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Flight in Progress...</h2>
            <p className="text-sm text-gray-300 mt-1">
              Complete your flight by entering the duration
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

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Flight Information Section */}
          <div className="col-span-full">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-orange-400"
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

          {/* Start Time - Read-only */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Start Date and Time
            </label>
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={draftFlight.startTime}
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
                value={draftFlight.startDate}
                readOnly
                className="block w-full bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-gray-400 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Job Type - Read-only */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Job Type
            </label>
            <input
              type="text"
              value={draftFlight.jobType}
              readOnly
              className="block w-full bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-gray-400 cursor-not-allowed"
            />
          </div>

          {/* Departure - Read-only */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Departure (ICAO)
            </label>
            <input
              type="text"
              value={draftFlight.departure}
              readOnly
              className="block w-full bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-gray-400 cursor-not-allowed uppercase"
            />
            {draftFlight.departureName && (
              <p className="mt-1.5 text-sm text-gray-500 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {draftFlight.departureName}
              </p>
            )}
          </div>

          {/* Destination - Read-only */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Destination (ICAO)
            </label>
            <input
              type="text"
              value={draftFlight.destination}
              readOnly
              className="block w-full bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-gray-400 cursor-not-allowed uppercase"
            />
            {draftFlight.destinationName && (
              <p className="mt-1.5 text-sm text-gray-500 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {draftFlight.destinationName}
              </p>
            )}
          </div>

          {/* Aircraft - Read-only */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Aircraft
            </label>
            <input
              type="text"
              value={draftFlight.aircraft}
              readOnly
              className="block w-full bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-gray-400 cursor-not-allowed"
            />
          </div>

          {/* Range - Read-only */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Range (Nautical Mile)
            </label>
            <input
              type="text"
              value={draftFlight.range}
              readOnly
              className="block w-full bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-gray-400 cursor-not-allowed"
            />
          </div>

          {/* Duration - Editable */}
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-semibold text-gray-200 mb-2"
            >
              Duration (minutes) *
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={duration}
              onChange={handleDurationChange}
              placeholder="0"
              min={60}
              step={1}
              className={`block w-full bg-gray-700/50 border ${
                error ? 'border-red-500' : 'border-gray-600'
              } rounded-lg shadow-sm py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
            />
            <p className="mt-1.5 text-xs text-gray-500">
              The minimum for a flight is 60 minutes.
            </p>
            {error && (
              <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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

          {/* Weather - Read-only */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Weather
            </label>
            <input
              type="text"
              value={draftFlight.weather}
              readOnly
              className="block w-full bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-gray-400 cursor-not-allowed"
            />
          </div>
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
            type="button"
            onClick={handleFinishFlight}
            disabled={isSubmitting}
            className="w-full sm:w-auto py-2.5 px-6 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
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
    </div>
  )
}

