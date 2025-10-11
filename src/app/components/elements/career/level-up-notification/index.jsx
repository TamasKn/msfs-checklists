'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { getReputationTitle } from '@/data/career/levels'

/**
 * LevelUpNotification - Shows a small toast notification when player levels up
 * @param {Object} levelUpInfo - Level up information from calculateLevelUp
 * @param {Function} onClose - Callback when notification is closed
 */
export default function LevelUpNotification({ levelUpInfo, onClose }) {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Trigger slide-in animation after mount
    setTimeout(() => setIsVisible(true), 100)

    // Auto-dismiss after 15 seconds
    const timer = setTimeout(() => {
      handleClose()
    }, 5000)

    return () => {
      setMounted(false)
      clearTimeout(timer)
    }
  }, [])

  if (!levelUpInfo || !levelUpInfo.leveledUp || !mounted) {
    return null
  }

  const { newLevel, levelsGained } = levelUpInfo
  const reputationTitle = getReputationTitle(newLevel)

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  return createPortal(
    <div
      className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl border-2 border-gray-700/50 shadow-2xl max-w-sm w-80 p-4 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close notification"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 p-3 rounded-full">
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-white">Level Up!</h3>
              {levelsGained > 1 && (
                <span className="text-xs font-semibold text-blue-300 bg-blue-900/50 px-2 py-0.5 rounded-full">
                  +{levelsGained}
                </span>
              )}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {newLevel}
              </span>
              <span className="text-sm text-gray-400 font-medium truncate">
                {reputationTitle}
              </span>
            </div>
          </div>
        </div>

        {/* Progress bar for auto-dismiss */}
        <div className="mt-3 h-1 bg-gray-700/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-[5000ms] ease-linear"
            style={{ width: isVisible ? '0%' : '100%' }}
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
