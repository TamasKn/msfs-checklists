'use client'

import { useEffect, useState } from 'react'
import AddFlight from '@/app/components/elements/career/add-flight'
import FlightHistory from '@/app/components/elements/career/history'
import UserTokenInput from '@/app/components/elements/career/user-token-input'
import { AircraftName } from '@/data/aircrafts/aircraft-names'
import { JobType } from '@/data/career/jobs'
import { WeatherType } from '@/data/career/weather'

const initialFlights = [
  {
    id: 1,
    startTime: '14:00',
    jobType: JobType.Cargo,
    departure: 'EGLL',
    destination: 'EHAM',
    aircraft: AircraftName.CessnaLongitude,
    range: 230,
    duration: 50,
    weather: WeatherType.Clear,
    base: 1500,
    bonus: 200,
    operationCost: 300,
    totalReward: 1400
  }
]

/**
 * CareerComponent - Main component for career mode
 * Manages flight history and user authentication
 */
export default function CareerComponent() {
  const [showAddFlight, setShowAddFlight] = useState(false)
  const [flights, setFlights] = useState(initialFlights)
  const [hasToken, setHasToken] = useState(false)

  useEffect(() => {
    // Check if user has already saved token
    const token = localStorage.getItem('user_token')
    setHasToken(!!token)
  }, [])

  const handleTokenSaved = () => {
    setHasToken(true)
  }

  const handleAddFlight = (newFlight) => {
    const newId =
      flights.length > 0 ? Math.max(...flights.map((f) => f.id)) + 1 : 1
    setFlights((prev) => [...prev, { id: newId, ...newFlight }])
    setShowAddFlight(false)
  }

  return (
    <div className="w-full min-h-screen px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Career Mode
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Track your flight history and manage your aviation career
            </p>
          </div>
          {!hasToken ? (
            <UserTokenInput onTokenSaved={handleTokenSaved} />
          ) : (
            <button
              onClick={() => setShowAddFlight(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
            >
              <span className="flex items-center gap-2">
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
                New Flight
              </span>
            </button>
          )}
        </div>

        {/* Modal for Add Flight */}
        {showAddFlight && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <AddFlight
              onAddFlight={handleAddFlight}
              onCancel={() => setShowAddFlight(false)}
            />
          </div>
        )}

        {/* Flight History Section */}
        <FlightHistory flights={flights} />
      </div>
    </div>
  )
}
