'use client'

import { useState, useEffect } from 'react'
import {
  getUserData,
  leaseAircraft,
  hasLeasedAircraft
} from '@/utils/career/user-data'
import { Aircrafts } from '@/data/aircrafts/aircrafts'

/**
 * LeaseAircraft - Component for leasing aircraft
 * @param {Function} onClose - Callback when modal is closed
 * @param {Function} onLeaseComplete - Callback when aircraft is leased
 */
export default function LeaseAircraft({ onClose, onLeaseComplete }) {
  const [userData, setUserData] = useState(null)
  const [selectedAircraft, setSelectedAircraft] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    const data = getUserData()
    setUserData(data)
  }, [])

  const aircraftList = [...Aircrafts]
    .sort(
      (a, b) => a.career.costs.leasePriceBase - b.career.costs.leasePriceBase
    )
    .map((aircraft) => aircraft.name)

  /**
   * Gets aircraft career data
   */
  const getAircraftCareerData = (aircraftName) => {
    return Aircrafts.find((aircraft) => aircraft.name === aircraftName)?.career
  }

  /**
   * Gets aircraft specs data
   */
  const getAircraftSpecs = (aircraftName) => {
    return Aircrafts.find((aircraft) => aircraft.name === aircraftName)?.specs
  }
  const displayedSpecs = [
    'Range',
    'Max Operating Altitude',
    'Cruise Speed',
    'VMO'
  ]

  /**
   * Calculates one-time lease fee (0.011% of buy price)
   */
  const calculateLeaseFee = (careerData) => {
    return Math.round(careerData.costs.buyPriceBase * 0.017)
  }

  /**
   * Handles aircraft selection
   */
  const handleSelectAircraft = (aircraftName) => {
    setSelectedAircraft(aircraftName)
    setShowConfirmation(true)
  }

  /**
   * Confirms aircraft lease
   */
  const handleConfirmLease = () => {
    const careerData = getAircraftCareerData(selectedAircraft)
    const leaseFee = calculateLeaseFee(careerData)

    const result = leaseAircraft(selectedAircraft, leaseFee)

    setUserData(result)
    setShowConfirmation(false)
    setSelectedAircraft(null)
    onLeaseComplete?.()
  }

  /**
   * Cancels lease confirmation
   */
  const handleCancelLease = () => {
    setShowConfirmation(false)
    setSelectedAircraft(null)
  }

  if (!userData) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-2 border-indigo-500/50 shadow-2xl max-w-6xl w-full my-4 sm:my-8 max-h-[95vh] flex flex-col">
        {/* Header - Sticky */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-4 sm:p-6 border-b border-gray-700/50 rounded-t-2xl flex-shrink-0 z-10">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.8286 1.72758C19.618 1.37176 21.0449 0.981099 22.1457 2.08172C23.2466 3.18244 22.8558 4.60949 22.5 5.39885C22.2409 5.97353 21.8851 6.58498 21.4343 7.03586L18.3035 10.1667L20.75 19.9527C21.0686 21.2273 19.4017 22.0136 18.6208 20.957L13.9001 14.5701L11.0678 17.4024L10.4818 21.504C10.326 22.5944 8.90642 22.9164 8.29541 21.9999L5.86325 18.3517L1.89476 15.6042C0.960857 14.9577 1.36456 13.4958 2.49799 13.4203L6.85509 13.1298L9.65741 10.3275L3.27054 5.60674C2.21395 4.82579 3.00021 3.1589 4.27485 3.47756L14.0608 5.92406L17.1916 2.7933C17.6424 2.34244 18.254 1.98663 18.8286 1.72758ZM18.5828 4.23053L15.1548 7.65856C14.8567 7.95662 14.4241 8.07643 14.0152 7.9742L7.70352 6.39628L11.5932 9.27129C12.1832 9.70735 12.2473 10.5661 11.7285 11.0848L8.05676 14.7566C7.85123 14.9621 7.57808 15.086 7.28807 15.1054L4.91621 15.2635L7.31557 16.9246L8.79804 19.1483L9.12556 16.8556C9.16228 16.5986 9.28139 16.3604 9.46498 16.1768L13.1427 12.499C13.6615 11.9803 14.5202 12.0443 14.9562 12.6343L17.8312 16.524L16.2533 10.2123C16.1511 9.80342 16.2709 9.37083 16.569 9.07277L19.997 5.64474C20.0811 5.54456 20.4407 5.10051 20.6767 4.57691C20.9648 3.93787 20.8835 3.64788 20.7316 3.49604C20.5796 3.34411 20.2895 3.26286 19.6505 3.5509C19.127 3.78691 18.683 4.14648 18.5828 4.23053Z"
                  fill="#0F0F0F"
                />
              </svg>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white truncate">
                  Lease Aircraft
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 mt-0.5 sm:mt-1">
                  Available Funds: €{userData.funds.toLocaleString()}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-colors duration-200 flex-shrink-0 cursor-pointer"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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

        {/* Aircraft Grid - Scrollable */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {aircraftList.map((aircraftName) => {
              const careerData = getAircraftCareerData(aircraftName)
              const specsData = getAircraftSpecs(aircraftName)
              const leaseFee = calculateLeaseFee(careerData)
              const isLeased = hasLeasedAircraft(aircraftName)

              return (
                <div
                  key={aircraftName}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border ${
                    isLeased
                      ? 'border-green-500/50'
                      : 'border-gray-700/50 hover:border-indigo-500/50'
                  } transition-all duration-300 overflow-hidden flex flex-col`}
                >
                  {/* Aircraft Header */}
                  <div
                    className={`p-3 sm:p-4 ${isLeased ? 'bg-green-900/20' : 'bg-gray-900/50'}`}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 truncate">
                      {aircraftName}
                    </h3>
                    {isLeased && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/50">
                        ✓ Leased
                      </span>
                    )}
                  </div>

                  {/* Specs */}
                  <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2 flex-1">
                    {displayedSpecs.map((specName, idx) => {
                      const specItem = specsData.specs[0].items.find(
                        (item) => Object.keys(item)[0] === specName
                      )
                      const value = specItem
                        ? Object.values(specItem)[0]
                        : 'N/A'
                      return (
                        <div
                          key={idx}
                          className="flex justify-between text-xs sm:text-sm gap-2"
                        >
                          <span className="text-gray-400 truncate">
                            {specName}:
                          </span>
                          <span className="text-gray-200 font-medium flex-shrink-0">
                            {value}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Costs */}
                  <div className="p-3 sm:p-4 border-t border-gray-700/50 space-y-1.5 sm:space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm gap-2">
                      <span className="text-gray-400 truncate">
                        Lease Fee (One-time):
                      </span>
                      <span className="text-yellow-400 font-bold flex-shrink-0">
                        €{leaseFee.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm gap-2">
                      <span className="text-gray-400 truncate">
                        Lease Cost:
                      </span>
                      <span className="text-red-400 font-mono flex-shrink-0">
                        €{careerData.costs.leasePriceBase.toLocaleString()}
                        /hr
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="p-3 sm:p-4 pt-0">
                    {isLeased ? (
                      <button
                        disabled
                        className="w-full py-2.5 px-4 bg-green-600/20 border border-green-500/50 text-green-400 font-semibold rounded-lg cursor-not-allowed"
                      >
                        Already Leased
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSelectAircraft(aircraftName)}
                        className="w-full py-2.5 px-4 font-semibold rounded-lg transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white cursor-pointer"
                      >
                        Lease Aircraft
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && selectedAircraft && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-[60] p-4">
          <div className="bg-gray-800 rounded-xl border border-indigo-500/50 shadow-2xl max-w-md w-full p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
              Confirm Aircraft Lease
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
              Are you sure you want to lease the{' '}
              <span className="font-bold text-indigo-400">
                {selectedAircraft}
              </span>
              ?
            </p>
            <div className="bg-gray-900/50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
              <div className="flex justify-between text-xs sm:text-sm gap-2">
                <span className="text-gray-400">Lease Fee:</span>
                <span className="text-yellow-400 font-bold flex-shrink-0">
                  €
                  {calculateLeaseFee(
                    getAircraftCareerData(selectedAircraft)
                  ).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm gap-2">
                <span className="text-gray-400">Current Funds:</span>
                <span className="text-green-400 font-mono flex-shrink-0">
                  €{userData.funds.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm border-t border-gray-700 pt-1.5 sm:pt-2 gap-2">
                <span className="text-gray-400">Remaining Funds:</span>
                <span className="text-white font-bold flex-shrink-0">
                  €
                  {(
                    userData.funds -
                    calculateLeaseFee(getAircraftCareerData(selectedAircraft))
                  ).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={handleCancelLease}
                className="flex-1 py-2.5 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmLease}
                className="flex-1 py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer"
              >
                Confirm Lease
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
