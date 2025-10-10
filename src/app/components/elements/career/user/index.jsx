'use client'

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { getUserData } from '@/utils/career/user-data'

/**
 * UserComponent - Displays user profile with name, funds, and XP
 */
const UserComponent = forwardRef((props, ref) => {
  const [userData, setUserData] = useState({
    name: '',
    funds: 0,
    xp: 0
  })

  useEffect(() => {
    loadUserData()
  }, [])

  // Expose refresh method to parent
  useImperativeHandle(ref, () => ({
    refresh: () => {
      loadUserData()
    }
  }))

  /**
   * Loads user data from localStorage
   */
  const loadUserData = () => {
    const data = getUserData()
    setUserData(data)
  }

  /**
   * Formats funds with color based on positive/negative
   */
  const formatFunds = (amount) => {
    const formatted = amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return amount >= 0 ? `$${formatted}` : `-$${Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <div className="bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-gray-800/90 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-xl p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-xl shadow-lg">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white">{userData.name || 'Pilot'}</h2>
          <p className="text-sm text-gray-400">Career Pilot</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Funds */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className={`${userData.funds >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'} p-2 rounded-lg`}>
              <svg
                className={`w-5 h-5 ${userData.funds >= 0 ? 'text-green-400' : 'text-red-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Funds</p>
            </div>
          </div>
          <p className={`text-2xl font-bold font-mono ${userData.funds >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {formatFunds(userData.funds)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {userData.funds >= 0 ? 'Available balance' : 'In debt'}
          </p>
        </div>

        {/* XP */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-indigo-500/20 p-2 rounded-lg">
              <svg
                className="w-5 h-5 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Experience</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-indigo-400">
            {userData.xp.toLocaleString()} XP
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Total experience earned
          </p>
        </div>
      </div>
    </div>
  )
})

UserComponent.displayName = 'UserComponent'

export default UserComponent
