'use client'

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { getUserData } from '@/utils/career/user-data'
import { getLevelProgress } from '@/data/career/levels'

/**
 * UserComponent - Displays user profile with name, funds, XP, level, and reputation
 */
const UserComponent = forwardRef((props, ref) => {
  const [userData, setUserData] = useState({
    name: '',
    funds: 0,
    xp: 0,
    level: 1,
    leasedAircraft: []
  })
  const [levelInfo, setLevelInfo] = useState(null)

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

    // Calculate level information with new system
    const levelData = getLevelProgress(data.xp || 0, data.level || 1)
    setLevelInfo(levelData)
  }

  /**
   * Formats funds with color based on positive/negative
   */
  const formatFunds = (amount) => {
    const formatted = amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return amount >= 0
      ? `€${formatted}`
      : `-€${Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
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
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-white">
              {userData.name || 'Pilot'}
            </h2>
            {levelInfo && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-600/30 to-amber-600/30 text-yellow-300 border border-yellow-500/50">
                Level {levelInfo.level}
              </span>
            )}
          </div>
          {levelInfo && (
            <p className="text-sm text-purple-400 font-medium mt-1">
              {levelInfo.title}
            </p>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Funds */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`${userData.funds >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'} p-2 rounded-lg`}
            >
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
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Balance
              </p>
            </div>
          </div>
          <p
            className={`text-2xl font-bold font-mono ${userData.funds >= 0 ? 'text-green-400' : 'text-red-400'}`}
          >
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
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Experience
              </p>
            </div>
          </div>
          <p className="text-2xl font-bold text-indigo-400">
            {userData.xp.toLocaleString()} XP
          </p>
          {levelInfo && !levelInfo.isMaxLevel && (
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Level {levelInfo.level}</span>
                <span>Level {levelInfo.level + 1}</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${levelInfo.progressPercentage}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {levelInfo.xpInCurrentLevel.toLocaleString()} /{' '}
                {levelInfo.xpNeededForNextLevel.toLocaleString()} XP (
                {levelInfo.progressPercentage.toFixed(1)}%)
              </p>
            </div>
          )}
          {levelInfo && levelInfo.isMaxLevel && (
            <p className="text-xs text-yellow-400 mt-1 font-semibold">
              ⭐ Max Level Reached!
            </p>
          )}
        </div>

        {/* Leased Aircraft */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
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
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Available Aircraft
              </p>
            </div>
          </div>
          <div className="text-sm font-semibold text-yellow-400 space-y-1">
            {userData.leasedAircraft?.length > 0 ? (
              userData.leasedAircraft.map((aircraft, index) => (
                <div key={index} className="truncate">
                  {aircraft}
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-xs">No aircraft leased</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
})

UserComponent.displayName = 'UserComponent'

export default UserComponent
