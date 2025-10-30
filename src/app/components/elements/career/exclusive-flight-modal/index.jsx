'use client'

import { useState, useEffect } from 'react'

/**
 * ExclusiveFlightModal - Modal component for presenting exclusive flight opportunities
 * @param {Object} flightData - Exclusive flight details (null initially, populated after aircraft selection)
 * @param {Array} leasedAircrafts - Array of leased aircraft names
 * @param {Function} onGenerateFlight - Callback to generate flight for selected aircraft
 * @param {Function} onAccept - Callback when user accepts the exclusive flight
 * @param {Function} onCancel - Callback when user cancels
 */
export default function ExclusiveFlightModal({
  flightData,
  leasedAircrafts,
  onGenerateFlight,
  onAccept,
  onCancel
}) {
  const [selectedAircraft, setSelectedAircraft] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')

  // Auto-select if only one aircraft
  useEffect(() => {
    if (leasedAircrafts.length === 1 && !selectedAircraft) {
      handleAircraftSelect(leasedAircrafts[0])
    }
  }, [leasedAircrafts])

  const handleAircraftSelect = async (aircraft) => {
    setSelectedAircraft(aircraft)
    setError('')
    setIsGenerating(true)

    try {
      await onGenerateFlight(aircraft)
    } catch (err) {
      setError('Failed to generate exclusive flight. Please try again.')
      console.error('Error generating flight:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleAccept = () => {
    if (!selectedAircraft) {
      setError('Please select an aircraft')
      return
    }

    if (!flightData) {
      setError('Flight data not loaded. Please select an aircraft.')
      return
    }

    onAccept(selectedAircraft)
  }

  const rewardPercentage = flightData
    ? Math.round(flightData.rewardMarkup * 100)
    : 0

  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-xs flex justify-center items-center z-50 p-2 sm:p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-2 border-yellow-500/50 shadow-2xl max-w-2xl w-full my-4 sm:my-8 max-h-[95vh] flex flex-col animate-slideUp">
        {/* Header with shine effect */}
        <div className="relative bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 p-4 sm:p-6 overflow-hidden flex-shrink-0 rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
          <div className="relative flex items-center justify-center gap-3">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
              Exclusive Flight Opportunity!
            </h2>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
          {/* Aircraft Selection - Always shown first */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
            <label
              htmlFor="aircraft-select"
              className="block text-sm font-semibold text-gray-200 mb-2"
            >
              Select Aircraft for Exclusive Flight
            </label>
            <select
              id="aircraft-select"
              value={selectedAircraft}
              onChange={(e) => handleAircraftSelect(e.target.value)}
              disabled={isGenerating}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">-- Choose an aircraft --</option>
              {leasedAircrafts.map((aircraft) => (
                <option key={aircraft} value={aircraft}>
                  {aircraft}
                </option>
              ))}
            </select>
            {isGenerating && (
              <div className="mt-3 flex items-center justify-center gap-2 text-yellow-400">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
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
                <span className="text-sm">Generating exclusive route...</span>
              </div>
            )}
          </div>

          {/* Flight Details - Only shown after aircraft selection and route generation */}
          {flightData && !isGenerating && (
            <>
              {/* Reward Highlight */}
              <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/50 animate-fadeIn">
                <div className="text-center">
                  <p className="text-sm text-gray-300 mb-2">
                    Special Bonus Reward
                  </p>
                  <p className="text-4xl sm:text-5xl font-bold text-yellow-400">
                    +{rewardPercentage}%
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2">
                    Earn {rewardPercentage}% more on this exclusive route!
                  </p>
                </div>
              </div>

              {/* Flight Details */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 space-y-3 animate-fadeIn">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  Flight Details
                </h3>

                {/* Route */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 text-center">
                    <p className="text-xs text-gray-400 mb-1">Departure</p>
                    <p className="text-xl font-bold text-white">
                      {flightData.departure}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {flightData.departureName}
                    </p>
                    {flightData.departureCountry && (
                      <p className="text-xs text-gray-500 mt-1">
                        {flightData.departureCountry}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-xs text-gray-400 mb-1">Destination</p>
                    <p className="text-xl font-bold text-white">
                      {flightData.destination}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {flightData.destinationName}
                    </p>
                    {flightData.destinationCountry && (
                      <p className="text-xs text-gray-500 mt-1">
                        {flightData.destinationCountry}
                      </p>
                    )}
                  </div>
                </div>

                {/* Distance & Duration */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-700/50">
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Distance</p>
                    <p className="text-lg font-semibold text-white">
                      {flightData.range} NM
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Est. Duration</p>
                    <p className="text-lg font-semibold text-white">
                      {Math.floor(flightData.duration / 60)}h{' '}
                      {Math.round(flightData.duration % 60)}m
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Info Box - Always shown */}
          {!flightData && !isGenerating && (
            <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="flex gap-3">
                <svg
                  className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-sm text-gray-300">
                  <p className="font-semibold text-blue-300 mb-1">
                    Limited Time Offer
                  </p>
                  <p>
                    Select an aircraft to generate an exclusive flight
                    opportunity with a pre-determined route and enhanced rewards
                    (30-60% bonus). Operation costs, maintenance, and XP are
                    calculated normally.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-4 border border-red-500/30">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
        </div>

        {/* Action Buttons - Sticky */}
        <div className="p-4 sm:p-6 pt-0 flex-shrink-0 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
          >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Decline
            </span>
          </button>
          <button
            onClick={handleAccept}
            disabled={!flightData || isGenerating}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
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
              Accept Flight
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
