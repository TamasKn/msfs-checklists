'use client'

/**
 * FinancialSummary - Shiny popup showing flight financial details
 * @param {Object} financials - Financial breakdown object
 * @param {Function} onConfirm - Callback when user confirms (optional for view-only mode)
 * @param {Function} onClose - Callback when user closes (for view-only mode)
 * @param {boolean} viewOnly - If true, shows only close button instead of confirm
 */
export default function FinancialSummary({
  financials,
  onConfirm,
  onClose,
  viewOnly = false
}) {
  const { basePay, bonus, operationCost, totalReward, xp, breakdown } =
    financials

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center z-50 p-2 sm:p-4 animate-fadeIn overflow-y-auto">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-2 border-indigo-500/50 shadow-2xl max-w-2xl w-full my-4 sm:my-8 max-h-[95vh] flex flex-col animate-slideUp">
        {/* Header with shine effect - Sticky */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-4 sm:p-6 overflow-hidden flex-shrink-0 rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
          <div className="relative flex items-center justify-center gap-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
              Flight Reward Summary
            </h2>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
          {/* Base Pay */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="bg-blue-500/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
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
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400">Base Pay</p>
                  <p className="text-xs text-gray-500 hidden sm:block">
                    Flight Hours + Distance + Level Multipliers
                  </p>
                </div>
              </div>
              <p className="text-lg sm:text-2xl font-bold text-blue-400 flex-shrink-0">
                €{basePay.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Bonus */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="bg-purple-500/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400"
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
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400">Bonus</p>
                  <p className="text-xs text-gray-500 hidden sm:block">
                    Weather + Job Type Multipliers
                  </p>
                </div>
              </div>
              <p className="text-lg sm:text-2xl font-bold text-purple-400 flex-shrink-0">
                €{bonus.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Operation Cost */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
            <div className="flex justify-between items-center mb-2 sm:mb-3 gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="bg-red-500/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-400"
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
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400">
                    Operation Cost
                  </p>
                  <p className="text-xs text-gray-500 hidden sm:block">
                    Lease + Insurance + Maintenance
                  </p>
                </div>
              </div>
              <p className="text-lg sm:text-2xl font-bold text-red-400 flex-shrink-0">
                -€{operationCost.toLocaleString()}
              </p>
            </div>
            {/* Cost Breakdown */}
            {breakdown && (
              <div className="ml-11 space-y-1 text-xs">
                <div className="flex justify-between text-gray-500">
                  <span>• Lease Cost:</span>
                  <span>
                    €
                    {breakdown.lease.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>• Insurance:</span>
                  <span>
                    €
                    {breakdown.insurance.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>• Regular Maintenance:</span>
                  <span>
                    €
                    {breakdown.maintenance.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Maintenance Issues (if any occurred) */}
          {breakdown && breakdown.maintenanceIssues > 0 && (
            <div className="bg-orange-900/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-orange-500/50 hover:border-orange-400/70 transition-all duration-300">
              <div className="flex justify-between items-start mb-2 sm:mb-3 gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="bg-orange-500/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-orange-400 font-semibold">
                      Aircraft Issues
                    </p>
                    <p className="text-xs text-orange-500/80 hidden sm:block">
                      Unexpected repairs required
                    </p>
                  </div>
                </div>
              </div>
              {/* Issue Details */}
              {breakdown.maintenanceIssueDetails &&
                breakdown.maintenanceIssueDetails.length > 0 && (
                  <div className="ml-7 sm:ml-11 space-y-1 text-xs">
                    {breakdown.maintenanceIssueDetails.map((issue, index) => (
                      <div
                        key={index}
                        className="flex justify-between gap-2 text-orange-400/70"
                      >
                        <span className="capitalize truncate">
                          • {issue.type.replace(/([A-Z])/g, ' $1').trim()} (
                          {issue.severity})
                        </span>
                        <span className="flex-shrink-0">
                          €
                          {issue.cost.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          )}

          {/* Divider */}
          <div className="border-t-2 border-dashed border-gray-700/50" />

          {/* Total Reward */}
          <div
            className={`rounded-xl p-4 sm:p-5 border-2 shadow-lg ${
              totalReward >= 0
                ? 'bg-gradient-to-r from-green-900/30 via-emerald-900/30 to-green-900/30 border-green-500/50 shadow-green-500/20'
                : 'bg-gradient-to-r from-red-900/30 via-rose-900/30 to-red-900/30 border-red-500/50 shadow-red-500/20'
            }`}
          >
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div
                  className={`p-2 sm:p-3 rounded-xl flex-shrink-0 ${
                    totalReward >= 0 ? 'bg-green-500/30' : 'bg-red-500/30'
                  }`}
                >
                  <svg
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${
                      totalReward >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {totalReward >= 0 ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    )}
                  </svg>
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-base sm:text-lg font-semibold ${
                      totalReward >= 0 ? 'text-green-300' : 'text-red-300'
                    }`}
                  >
                    Total {totalReward >= 0 ? 'Reward' : 'Loss'}
                  </p>
                  <p
                    className={`text-xs hidden sm:block ${
                      totalReward >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {totalReward >= 0
                      ? 'Net profit from this flight'
                      : 'Net loss from this flight'}
                  </p>
                </div>
              </div>
              <p
                className={`text-2xl sm:text-4xl font-bold flex-shrink-0 ${
                  totalReward >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {totalReward >= 0 ? '€' : '-€'}
                {Math.abs(totalReward).toLocaleString()}
              </p>
            </div>
          </div>

          {/* XP Earned */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-indigo-500/50">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="bg-indigo-500/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400"
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
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400">
                    Experience Earned
                  </p>
                  <p className="text-xs text-gray-500 hidden sm:block">
                    XP gained from this flight
                  </p>
                </div>
              </div>
              <p className="text-lg sm:text-2xl font-bold text-indigo-400 flex-shrink-0">
                {xp.toLocaleString()} XP
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons - Sticky */}
        <div className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-3 flex-shrink-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-b-2xl">
          {viewOnly ? (
            <button
              onClick={onClose}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Close
              </span>
            </button>
          ) : (
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
                Continue
              </span>
            </button>
          )}
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
