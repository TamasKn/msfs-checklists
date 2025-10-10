'use client'

import { useState, useEffect } from 'react'
import AddFlight from '@/app/components/elements/career/add-flight'
import FlightHistory from '@/app/components/elements/career/history'

const STORAGE_KEY = 'career_flight_history'

/**
 * CareerComponent - Main component for career mode
 * Manages flight history with localStorage persistence
 */
export default function CareerComponent() {
  const [showAddFlight, setShowAddFlight] = useState(false)
  const [flights, setFlights] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Load flights from localStorage on mount
  useEffect(() => {
    try {
      const savedFlights = localStorage.getItem(STORAGE_KEY)
      if (savedFlights) {
        const parsedFlights = JSON.parse(savedFlights)
        setFlights(parsedFlights)
      }
    } catch (error) {
      console.error('Failed to load flight history:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Save flights to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(flights))
      } catch (error) {
        console.error('Failed to save flight history:', error)
      }
    }
  }, [flights, isLoading])

  /**
   * Adds a new flight to the history
   * @param {Object} newFlight - Flight data to add
   */
  const handleAddFlight = (newFlight) => {
    const newId =
      flights.length > 0 ? Math.max(...flights.map((f) => f.id)) + 1 : 1
    setFlights((prev) => [...prev, { id: newId, ...newFlight }])
    setShowAddFlight(false)
  }

  /**
   * Logs out the user
   */
  const handleLogout = () => {
    localStorage.removeItem('user_token')
    window.location.reload()
  }

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <svg
            className="animate-spin h-12 w-12 mx-auto mb-4 text-indigo-500"
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
          <p className="text-gray-400">Loading flight history...</p>
        </div>
      </div>
    )
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
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleLogout}
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
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
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </span>
            </button>
            <button
              onClick={() => setShowAddFlight(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                New Flight
              </span>
            </button>
          </div>
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
