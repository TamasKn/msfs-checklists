'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * UserTokenInput - Component for API keys input (Simbrief and AirportDB)
 * @param {Function} onTokenSaved - Callback when keys are saved
 */
export default function UserTokenInput({ onTokenSaved }) {
  const [showTokenInput, setShowTokenInput] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [userName, setUserName] = useState('')
  const [simbriefPilotId, setSimbriefPilotId] = useState('')
  const [airportDbKey, setAirportDbKey] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [existingUser, setExistingUser] = useState(null)

  useEffect(() => {
    setMounted(true)

    // Load existing user data from localStorage
    try {
      const userData = localStorage.getItem('user_data')
      if (userData) {
        const parsed = JSON.parse(userData)
        setExistingUser(parsed)
        setUserName(parsed.name)
      }
    } catch (error) {
      console.error('Failed to load user data:', error)
    }

    // Check if user has already saved API keys
    const sbPilotId = localStorage.getItem('sb_pilot_id')
    const airportDbApiKey = localStorage.getItem('airportdb_key')
    if (!sbPilotId || !airportDbApiKey) {
      setShowTokenInput(true)
    }
  }, [])

  const handleTokenSave = () => {
    // Save the API keys to localStorage
    localStorage.setItem('sb_pilot_id', simbriefPilotId)
    localStorage.setItem('airportdb_key', airportDbKey)

    if (!existingUser) {
      // Initialize user data with name, funds, XP, level, leased aircraft, and flight minutes
      const userData = {
        name: userName,
        funds: 0,
        xp: 0,
        level: 1,
        leasedAircraft: [],
        flightMinutes: 0
      }
      localStorage.setItem('user_data', JSON.stringify(userData))
    }

    setShowTokenInput(false)
    onTokenSaved?.()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'userName') {
      setUserName(value)
    } else if (name === 'simbriefPilotId') {
      setSimbriefPilotId(value)
    } else if (name === 'airportDbKey') {
      setAirportDbKey(value)
    }
    setError('')
  }

  const handleTokenSubmit = (e) => {
    e.preventDefault()
    authUser()
  }

  const authUser = async () => {
    if (!userName.trim()) {
      setError('Name is required')
      return
    }

    if (!simbriefPilotId.trim()) {
      setError('SimBrief Pilot ID is required')
      return
    }

    if (!airportDbKey.trim()) {
      setError('AirportDB API Key is required')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Validate Simbrief Pilot ID
      const simbriefRes = await axios.post('/api/simbrief/auth', {
        pilotID: simbriefPilotId
      })

      if (simbriefRes.data.status !== 'success') {
        setError('Invalid SimBrief Pilot ID. Please try again.')
        setIsLoading(false)
        return
      }

      // Validate AirportDB API Key
      const airportDbRes = await axios.post('/api/airportfinder', {
        ICAO: 'EGLL',
        airportApiKey: airportDbKey
      })

      if (airportDbRes.data.status !== 'success') {
        setError('Invalid AirportDB API Key. Please try again.')
        setIsLoading(false)
        return
      }

      // Both validations passed
      handleTokenSave()
    } catch (err) {
      if (err.response?.data?.message === 'Unauthorized') {
        setError('Invalid AirportDB API Key.')
      } else {
        setError('Authentication failed. Please check your credentials.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Prevent hydration mismatch
  if (!mounted || !showTokenInput) {
    return null
  }

  return (
    <div className="bg-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
      <form onSubmit={handleTokenSubmit} className="flex flex-col gap-5">
        {/* Name Input */}
        <div>
          <label
            htmlFor="userName"
            className="block text-sm font-semibold text-gray-200 mb-3"
          >
            Pilot Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={existingUser ? existingUser.name : userName}
            onChange={handleInputChange}
            disabled={existingUser}
            placeholder="Enter your pilot name"
            className={`block w-full ${
              existingUser
                ? 'cursor-not-allowed'
                : 'bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm'
            }   py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 `}
            autoFocus
          />
          <p className="mt-2.5 text-xs text-gray-500">
            {existingUser
              ? 'We found an existing user with this name.'
              : 'This name will be displayed in your career profile. Can be different than your SimBrief name.'}
          </p>
        </div>

        {/* Simbrief Pilot ID Input */}
        <div>
          <label
            htmlFor="simbriefPilotId"
            className="block text-sm font-semibold text-gray-200 mb-3"
          >
            SimBrief Pilot ID
          </label>
          <input
            type="text"
            id="simbriefPilotId"
            name="simbriefPilotId"
            value={simbriefPilotId}
            onChange={handleInputChange}
            placeholder="Enter your SimBrief Pilot ID"
            className="block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
          />
          <p className="mt-2.5 text-xs text-gray-500">
            Don&apos;t have a SimBrief account?{' '}
            <a
              href="https://navigraph.com/user-registration?clientId=simbrief"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline cursor-pointer"
            >
              Sign up for free
            </a>
          </p>
        </div>

        {/* AirportDB API Key Input */}
        <div>
          <label
            htmlFor="airportDbKey"
            className="block text-sm font-semibold text-gray-200 mb-3"
          >
            AirportDB API Key
          </label>
          <input
            type="text"
            id="airportDbKey"
            name="airportDbKey"
            value={airportDbKey}
            onChange={handleInputChange}
            placeholder="Enter your AirportDB API Key"
            className="block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
          />
          <p className="mt-2.5 text-xs text-gray-500">
            Get your free API key from{' '}
            <a
              href="https://airportdb.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline cursor-pointer"
            >
              airportdb.io
            </a>
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-sm text-red-400 flex items-center gap-1.5">
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
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={
            isLoading ||
            !userName.trim() ||
            !simbriefPilotId.trim() ||
            !airportDbKey.trim()
          }
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
        >
          {isLoading ? (
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
              Authenticating...
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Authenticate & Continue
            </span>
          )}
        </button>
      </form>
    </div>
  )
}
