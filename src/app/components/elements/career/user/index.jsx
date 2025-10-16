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
    leasedAircraft: [],
    flightMinutes: 0
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
    const formatted = amount.toLocaleString('en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return amount >= 0
      ? `€${formatted}`
      : `-€${Math.abs(amount).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  /**
   * Converts flight minutes to hours with one decimal place
   */
  const formatFlightHours = (minutes) => {
    const hours = minutes / 60
    return hours.toFixed(1)
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
          <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-blue-400 font-semibold">
              {formatFlightHours(userData.flightMinutes || 0)} hrs
            </span>
            <span className="text-gray-500">flight time</span>
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Funds */}
        <div
          className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 ${userData.funds >= 0 ? 'hover:border-green-500/50' : 'hover:border-red-500/50'} transition-all duration-300`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`${userData.funds >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'} p-2 rounded-lg`}
            >
              <svg
                className={`w-5 h-5 ${userData.funds >= 0 ? 'text-green-400' : 'text-red-400'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Zm.59-13.33a3.34,3.34,0,0,1,2.62,1.38,1,1,0,0,0,1.4.19,1,1,0,0,0,.18-1.41,5.32,5.32,0,0,0-4.2-2.16A5.57,5.57,0,0,0,7.46,9.5H6a1,1,0,0,0,0,2H7c0,.17,0,.33,0,.5s0,.33,0,.5H6a1,1,0,0,0,0,2H7.46a5.57,5.57,0,0,0,5.13,3.83,5.32,5.32,0,0,0,4.2-2.16A1,1,0,1,0,15.21,15a3.34,3.34,0,0,1-2.62,1.38A3.42,3.42,0,0,1,9.67,14.5H12a1,1,0,0,0,0-2H9.05A4.23,4.23,0,0,1,9,12a4.23,4.23,0,0,1,.05-.5H12a1,1,0,0,0,0-2H9.67A3.42,3.42,0,0,1,12.59,7.67Z" />
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
                  d="M18.8286 1.72758C19.618 1.37176 21.0449 0.981099 22.1457 2.08172C23.2466 3.18244 22.8558 4.60949 22.5 5.39885C22.2409 5.97353 21.8851 6.58498 21.4343 7.03586L18.3035 10.1667L20.75 19.9527C21.0686 21.2273 19.4017 22.0136 18.6208 20.957L13.9001 14.5701L11.0678 17.4024L10.4818 21.504C10.326 22.5944 8.90642 22.9164 8.29541 21.9999L5.86325 18.3517L1.89476 15.6042C0.960857 14.9577 1.36456 13.4958 2.49799 13.4203L6.85509 13.1298L9.65741 10.3275L3.27054 5.60674C2.21395 4.82579 3.00021 3.1589 4.27485 3.47756L14.0608 5.92406L17.1916 2.7933C17.6424 2.34244 18.254 1.98663 18.8286 1.72758ZM18.5828 4.23053L15.1548 7.65856C14.8567 7.95662 14.4241 8.07643 14.0152 7.9742L7.70352 6.39628L11.5932 9.27129C12.1832 9.70735 12.2473 10.5661 11.7285 11.0848L8.05676 14.7566C7.85123 14.9621 7.57808 15.086 7.28807 15.1054L4.91621 15.2635L7.31557 16.9246L8.79804 19.1483L9.12556 16.8556C9.16228 16.5986 9.28139 16.3604 9.46498 16.1768L13.1427 12.499C13.6615 11.9803 14.5202 12.0443 14.9562 12.6343L17.8312 16.524L16.2533 10.2123C16.1511 9.80342 16.2709 9.37083 16.569 9.07277L19.997 5.64474C20.0811 5.54456 20.4407 5.10051 20.6767 4.57691C20.9648 3.93787 20.8835 3.64788 20.7316 3.49604C20.5796 3.34411 20.2895 3.26286 19.6505 3.5509C19.127 3.78691 18.683 4.14648 18.5828 4.23053Z"
                  fill="#0F0F0F"
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
