'use client'

import { useState } from 'react'

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
    <div className="bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-orange-700/50 w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-slideUp">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-orange-900/90 to-amber-900/90 backdrop-blur-sm px-6 py-5 border-b border-orange-700/50 rounded-t-2xl">
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
              </div>
            </div>

            {/* Flight Arrow with Plane Icon */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex items-center">
                <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 via-orange-400 to-purple-500"></div>
                <svg
                  className="w-8 h-8 text-orange-400 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <div className="text-2xl text-gray-500 font-semibold mt-4">
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
              </div>
            </div>
          </div>
        </div>

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

        {/* Duration Input and Action Buttons */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-700/50">
          {/* Duration Input */}
          <div className="flex-1">
            <label
              htmlFor="duration"
              className="block text-sm font-semibold text-gray-200 mb-2"
            >
              Flight Duration (minutes) *
            </label>
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
            {!error && (
              <p className="mt-1.5 text-xs text-gray-500">
                Minimum 60 minutes required
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-[0.45rem]">
            <button
              type="button"
              onClick={onCancel}
              disabled={isSubmitting}
              className="py-2.5 px-6 text-base bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleFinishFlight}
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
      </div>
    </div>
  )
}
