'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * UserTokenInput - Component for user authentication token input
 * @param {Function} onTokenSaved - Callback when token is saved
 */
export default function UserTokenInput({ onTokenSaved }) {
  const [showTokenInput, setShowTokenInput] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [userName, setUserName] = useState('')
  const [userToken, setUserToken] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const existingUser = JSON.parse(localStorage.getItem('user_data'))

  useEffect(() => {
    setMounted(true)

    if (existingUser) {
      setUserName(existingUser.name)
    }
    // Check if user has already saved token
    const token = localStorage.getItem('user_token')
    if (!token) {
      setShowTokenInput(true)
    }
  }, [])

  const handleTokenSave = () => {
    if (!existingUser) {
      // Initialize user data with name, funds, XP, and leased aircraft
      const userData = {
        name: userName,
        funds: 0,
        xp: 0,
        leasedAircraft: []
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
    } else if (name === 'userToken') {
      setUserToken(value)
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

    if (!userToken.trim()) {
      setError('Token is required')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const res = await axios.post('/api/auth', {
        userToken: userToken
      })

      if (res.data.status === 'success') {
        handleTokenSave()
      } else {
        setError('Invalid token. Please try again.')
      }
    } catch (err) {
      setError('Authentication failed. Please check your token.')
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
              : 'This name will be displayed in your career profile.'}
          </p>
        </div>

        {/* Token Input */}
        <div>
          <label
            htmlFor="userToken"
            className="block text-sm font-semibold text-gray-200 mb-3"
          >
            Authentication Token
          </label>
          <input
            type="text"
            id="userToken"
            name="userToken"
            value={userToken}
            onChange={handleInputChange}
            placeholder="Enter your authentication token"
            className="block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
          />
          <p className="mt-2.5 text-xs text-gray-500">
            Your token is required to access career mode features and sync your
            flight data.
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
          disabled={isLoading || !userName.trim() || !userToken.trim()}
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
