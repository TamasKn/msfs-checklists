'use client'

/**
 * FinancialSummary - Shiny popup showing flight financial details
 * @param {Object} financials - Financial breakdown object
 * @param {Function} onConfirm - Callback when user confirms
 */
export default function FinancialSummary({ financials, onConfirm }) {
  const { basePay, bonus, operationCost, totalReward, xp, breakdown } =
    financials

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center z-50 p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-2 border-indigo-500/50 shadow-2xl max-w-2xl w-full overflow-hidden animate-slideUp">
        {/* Header with shine effect */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
          <div className="relative flex items-center justify-center gap-3">
            <svg
              className="w-8 h-8 text-yellow-300 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Flight Financial Summary
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Base Pay */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <svg
                    className="w-6 h-6 text-blue-400"
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
                  <p className="text-sm text-gray-400">Base Pay</p>
                  <p className="text-xs text-gray-500">
                    Base + Flight Hours + Distance
                  </p>
                </div>
              </div>
              <p className="text-2xl font-bold text-blue-400">
                €{basePay.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Bonus */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <svg
                    className="w-6 h-6 text-purple-400"
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
                <div>
                  <p className="text-sm text-gray-400">Bonus</p>
                  <p className="text-xs text-gray-500">
                    Weather + Job Type Multipliers
                  </p>
                </div>
              </div>
              <p className="text-2xl font-bold text-purple-400">
                +€{bonus.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Operation Cost */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/20 p-2 rounded-lg">
                  <svg
                    className="w-6 h-6 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Operation Cost</p>
                  <p className="text-xs text-gray-500">
                    Lease + Insurance + Maintenance
                  </p>
                </div>
              </div>
              <p className="text-2xl font-bold text-red-400">
                -€{operationCost.toLocaleString()}
              </p>
            </div>
            {/* Cost Breakdown */}
            {breakdown && (
              <div className="ml-11 space-y-1 text-xs">
                <div className="flex justify-between text-gray-500">
                  <span>• Lease Cost:</span>
                  <span>€{breakdown.lease.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>• Insurance:</span>
                  <span>€{breakdown.insurance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>• Maintenance:</span>
                  <span>€{breakdown.maintenance.toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t-2 border-dashed border-gray-700/50" />

          {/* Total Reward */}
          <div className="bg-gradient-to-r from-green-900/30 via-emerald-900/30 to-green-900/30 rounded-xl p-5 border-2 border-green-500/50 shadow-lg shadow-green-500/20">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/30 p-3 rounded-xl">
                  <svg
                    className="w-8 h-8 text-green-400"
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
                </div>
                <div>
                  <p className="text-lg font-semibold text-green-300">
                    Total Reward
                  </p>
                  <p className="text-xs text-green-500">
                    Net profit from this flight
                  </p>
                </div>
              </div>
              <p className="text-4xl font-bold text-green-400">
                €{totalReward.toLocaleString()}
              </p>
            </div>
          </div>

          {/* XP Earned */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/50">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-500/20 p-2 rounded-lg">
                  <svg
                    className="w-6 h-6 text-indigo-400"
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
                  <p className="text-sm text-gray-400">Experience Earned</p>
                  <p className="text-xs text-gray-500">
                    XP gained from this flight
                  </p>
                </div>
              </div>
              <p className="text-2xl font-bold text-indigo-400">
                {xp.toLocaleString()} XP
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Confirm
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </div>
  )
}
