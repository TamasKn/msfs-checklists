'use client'

import { useState, useEffect } from 'react'
import { AircraftName } from '@/data/aircrafts/aircraft-names'
import { cessnaLongitudeCareer } from '@/data/cessna-longitude/career'
import { cessna172Career } from '@/data/cessna-172/career'
import { pilatusPc12Career } from '@/data/pilatus-pc-12/career'
import { diamondDA62Career } from '@/data/diamond-da62/career'
import { visionJetG2Career } from '@/data/vision-jet-g2/career'
import { airbusA320neoCareer } from '@/data/airbus-a320neo/career'
import { boeing737MaxCareer } from '@/data/boeing-737-max/career'
import { cessnaLongitudeSpecs } from '@/data/cessna-longitude/specs'
import { cessna172Specs } from '@/data/cessna-172/specs'
import { pilatusPc12Specs } from '@/data/pilatus-pc-12/specs'
import { diamondDA62Specs } from '@/data/diamond-da62/specs'
import { visionJetG2Specs } from '@/data/vision-jet-g2/specs'
import { airbusA320neoSpecs } from '@/data/airbus-a320neo/specs'
import { boeing737MaxSpecs } from '@/data/boeing-737-max/specs'
import {
  getUserData,
  leaseAircraft,
  hasLeasedAircraft
} from '@/utils/career/user-data'

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

  /**
   * Gets aircraft career data
   */
  const getAircraftCareerData = (aircraftName) => {
    switch (aircraftName) {
      case AircraftName.Cessna172:
        return cessna172Career
      case AircraftName.DiamondDA62:
        return diamondDA62Career
      case AircraftName.PilatusPC12:
        return pilatusPc12Career
      case AircraftName.VisionJetG2:
        return visionJetG2Career
      case AircraftName.CessnaLongitude:
        return cessnaLongitudeCareer
      case AircraftName.AirbusA320neo:
        return airbusA320neoCareer
      case AircraftName.Boeing737Max:
        return boeing737MaxCareer
      default:
        return null
    }
  }

  /**
   * Gets aircraft specs data
   */
  const getAircraftSpecs = (aircraftName) => {
    switch (aircraftName) {
      case AircraftName.Cessna172:
        return cessna172Specs
      case AircraftName.DiamondDA62:
        return diamondDA62Specs
      case AircraftName.PilatusPC12:
        return pilatusPc12Specs
      case AircraftName.VisionJetG2:
        return visionJetG2Specs
      case AircraftName.CessnaLongitude:
        return cessnaLongitudeSpecs
      case AircraftName.AirbusA320neo:
        return airbusA320neoSpecs
      case AircraftName.Boeing737Max:
        return boeing737MaxSpecs
      default:
        return null
    }
  }

  /**
   * Calculates one-time lease fee (0.011% of buy price)
   */
  const calculateLeaseFee = (careerData) => {
    return Math.round(careerData.costs.buyPriceBase * 0.011)
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

  const aircraftList = [
    AircraftName.Cessna172,
    AircraftName.DiamondDA62,
    AircraftName.PilatusPC12,
    AircraftName.VisionJetG2,
    AircraftName.CessnaLongitude,
    AircraftName.AirbusA320neo,
    AircraftName.Boeing737Max
  ]

  if (!userData) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-2 border-indigo-500/50 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-6 border-b border-gray-700/50 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8 text-yellow-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Lease Aircraft
                </h2>
                <p className="text-sm text-gray-200 mt-1">
                  Available Funds: €{userData.funds.toLocaleString()}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-colors duration-200"
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

        {/* Aircraft Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  } transition-all duration-300 overflow-hidden`}
                >
                  {/* Aircraft Header */}
                  <div
                    className={`p-4 ${isLeased ? 'bg-green-900/20' : 'bg-gray-900/50'}`}
                  >
                    <h3 className="text-xl font-bold text-white mb-1">
                      {aircraftName}
                    </h3>
                    {isLeased && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/50">
                        ✓ Leased
                      </span>
                    )}
                  </div>

                  {/* Specs */}
                  <div className="p-4 space-y-2">
                    {specsData.specs[0].items.slice(0, 4).map((spec, idx) => {
                      const [key, value] = Object.entries(spec)[0]
                      return (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-gray-400">{key}:</span>
                          <span className="text-gray-200 font-medium">
                            {value}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Costs */}
                  <div className="p-4 border-t border-gray-700/50 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">
                        Lease Fee (One-time):
                      </span>
                      <span className="text-yellow-400 font-bold">
                        €{leaseFee.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Hourly Cost:</span>
                      <span className="text-red-400 font-mono">
                        €
                        {(
                          careerData.costs.leasePriceBase +
                          careerData.costs.insuranceBase +
                          careerData.costs.maintenance.base
                        ).toLocaleString()}
                        /hr
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="p-4 pt-0">
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
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-60 p-4">
          <div className="bg-gray-800 rounded-xl border border-indigo-500/50 shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Confirm Aircraft Lease
            </h3>
            <p className="text-gray-300 mb-4">
              Are you sure you want to lease the{' '}
              <span className="font-bold text-indigo-400">
                {selectedAircraft}
              </span>
              ?
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 mb-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Lease Fee:</span>
                <span className="text-yellow-400 font-bold">
                  €
                  {calculateLeaseFee(
                    getAircraftCareerData(selectedAircraft)
                  ).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Current Funds:</span>
                <span className="text-green-400 font-mono">
                  €{userData.funds.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm border-t border-gray-700 pt-2">
                <span className="text-gray-400">Remaining Funds:</span>
                <span className="text-white font-bold">
                  €
                  {(
                    userData.funds -
                    calculateLeaseFee(getAircraftCareerData(selectedAircraft))
                  ).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
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
