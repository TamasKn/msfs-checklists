'use client'

import { useEffect, useState } from 'react'
import CareerComponent from '@/app/components/main/career'
import UserTokenInput from '@/app/components/elements/career/user-token-input'

/**
 * Career Page - Main page for career mode with authentication
 */
export default function Career() {
  const [hasToken, setHasToken] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has already saved API keys
    const sbPilotId = localStorage.getItem('sb_pilot_id')
    const airportDbKey = localStorage.getItem('airportdb_key')
    setHasToken(!!(sbPilotId && airportDbKey))
    setIsLoading(false)
  }, [])

  const handleTokenSaved = () => {
    setHasToken(true)
  }

  // Loading state
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
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // Not authorized - show token input
  if (!hasToken) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Career Mode
            </h1>
            <p className="text-gray-400">
              Authentication required to access career features
            </p>
          </div>
          <UserTokenInput onTokenSaved={handleTokenSaved} />
        </div>
      </div>
    )
  }

  // Authorized - show career component
  return (
    <div className="w-full min-h-screen">
      <CareerComponent />
    </div>
  )
}
