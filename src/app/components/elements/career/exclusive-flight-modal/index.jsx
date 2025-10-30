'use client'

import { useState } from 'react'

/**
 * ExclusiveFlightModal - Modal component for presenting exclusive flight opportunities
 * @param {Object} flightData - Exclusive flight details
 * @param {Array} leasedAircrafts - Array of leased aircraft names
 * @param {Function} onAccept - Callback when user accepts the exclusive flight
 * @param {Function} onCancel - Callback when user cancels
 */
export default function ExclusiveFlightModal({
  flightData,
  leasedAircrafts,
  onAccept,
  onCancel
}) {
  const [selectedAircraft, setSelectedAircraft] = useState(
    leasedAircrafts.length === 1 ? leasedAircrafts[0] : ''
  )
  const [error, setError] = useState('')

  const handleAccept = () => {
    if (leasedAircrafts.length > 1 && !selectedAircraft) {
      setError('Please select an aircraft')
      return
    }

    const aircraft = leasedAircrafts.length === 1 ? leasedAircrafts[0] : selectedAircraft
    onAccept(aircraft)
  }

  const rewardPercentage = Math.round(flightData.rewardMarkup * 100)

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
              🌟 Exclusive Flight Opportunity! 🌟
            </h2>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
          {/* Reward Highlight */}
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/50">
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
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 space-y-3">
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
                <p className="text-xl font-bold text-white">{flightData.departure}</p>
                <p className="text-xs text-gray-400 truncate">
                  {flightData.departureName}
                </p>
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
                <p className="text-xl font-bold text-white">{flightData.destination}</p>
                <p className="text-xs text-gray-400 truncate">
                  {flightData.destinationName}
                </p>
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
                  {Math.floor(flightData.duration / 60)}h {Math.round(flightData.duration % 60)}m
                </p>
              </div>
            </div>
          </div>

          {/* Aircraft Selection (if multiple leased) */}
          {leasedAircrafts.length > 1 && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <label
                htmlFor="aircraft-select"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                Select Aircraft
              </label>
              <select
                id="aircraft-select"
                value={selectedAircraft}
                onChange={(e) => {
                  setSelectedAircraft(e.target.value)
                  setError('')
                }}
                className={`block w-full bg-gray-700/50 border ${
                  error ? 'border-red-500' : 'border-gray-600'
                } rounded-lg shadow-sm py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200`}
              >
                <option value="">Choose an aircraft...</option>
                {leasedAircrafts.map((aircraft) => (
                  <option key={aircraft} value={aircraft}>
                    {aircraft}
                  </option>
                ))}
              </select>
              {error && (
                <p className="text-red-400 text-sm mt-2">{error}</p>
              )}
            </div>
          )}

          {/* Single Aircraft Display */}
          {leasedAircrafts.length === 1 && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <p className="text-sm text-gray-400 mb-1">Aircraft</p>
              <p className="text-lg font-semibold text-white">
                {leasedAircrafts[0]}
              </p>
            </div>
          )}

          {/* Info Box */}
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
                  This exclusive flight opportunity offers a pre-determined route with
                  enhanced rewards. Operation costs, maintenance, and XP are calculated
                  normally. Job type is set to Exclusive and cannot be changed.
                </p>
              </div>
            </div>
          </div>
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
            className="flex-1 py-3 px-6 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
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

