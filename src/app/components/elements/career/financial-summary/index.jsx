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
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-xs flex justify-center items-center z-50 p-2 sm:p-4 animate-fadeIn">
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
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Zm.59-13.33a3.34,3.34,0,0,1,2.62,1.38,1,1,0,0,0,1.4.19,1,1,0,0,0,.18-1.41,5.32,5.32,0,0,0-4.2-2.16A5.57,5.57,0,0,0,7.46,9.5H6a1,1,0,0,0,0,2H7c0,.17,0,.33,0,.5s0,.33,0,.5H6a1,1,0,0,0,0,2H7.46a5.57,5.57,0,0,0,5.13,3.83,5.32,5.32,0,0,0,4.2-2.16A1,1,0,1,0,15.21,15a3.34,3.34,0,0,1-2.62,1.38A3.42,3.42,0,0,1,9.67,14.5H12a1,1,0,0,0,0-2H9.05A4.23,4.23,0,0,1,9,12a4.23,4.23,0,0,1,.05-.5H12a1,1,0,0,0,0-2H9.67A3.42,3.42,0,0,1,12.59,7.67Z" />
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
                    fill="currentColor"
                    viewBox="0 0 612 712"
                  >
                    <g>
                      <path
                        d="M612,553.586v32.107c0,5.911-4.792,10.702-10.702,10.702H10.702C4.792,596.396,0,591.604,0,585.693v-32.107
		c0-5.91,4.792-10.702,10.702-10.702h590.596C607.208,542.884,612,547.675,612,553.586z M122.021,491.431h53.512
		c11.821,0,21.405-9.583,21.405-21.404V202.131h34.823c16.478,0,26.776-17.839,18.536-32.109L167.305,26.305
		c-8.24-14.268-28.834-14.267-37.073,0.001L47.255,170.023c-8.239,14.27,2.059,32.107,18.537,32.107h34.825v267.896
		C100.617,481.848,110.2,491.431,122.021,491.431z M443.104,491.431h53.512c11.821,0,21.404-9.583,21.404-21.404V202.131h34.827
		c16.478,0,26.776-17.839,18.535-32.109L488.39,26.305c-8.239-14.268-28.834-14.267-37.072,0.001l-82.977,143.717
		c-8.239,14.27,2.06,32.107,18.536,32.107h34.821v267.896C421.698,481.848,431.282,491.431,443.104,491.431z"
                      />
                    </g>
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
                      d="M7.09878 1.25004C7.14683 1.25006 7.19559 1.25008 7.24508 1.25008H16.7551C16.8045 1.25008 16.8533 1.25006 16.9014 1.25004C17.9181 1.2496 18.6178 1.24929 19.2072 1.45435C20.3201 1.84161 21.1842 2.73726 21.5547 3.86559L20.8421 4.09954L21.5547 3.86559C21.7507 4.46271 21.7505 5.17254 21.7501 6.22655C21.7501 6.27372 21.7501 6.32158 21.7501 6.37014V20.3743C21.7501 21.8395 20.0231 22.7118 18.8857 21.671C18.8062 21.5983 18.694 21.5983 18.6145 21.671L18.1314 22.1131C17.2032 22.9624 15.7969 22.9624 14.8688 22.1131C14.5138 21.7882 13.9864 21.7882 13.6314 22.1131C12.7032 22.9624 11.2969 22.9624 10.3688 22.1131C10.0138 21.7882 9.48637 21.7882 9.13138 22.1131C8.20319 22.9624 6.79694 22.9624 5.86875 22.1131L5.38566 21.671C5.30618 21.5983 5.19395 21.5983 5.11448 21.671C3.97705 22.7118 2.25007 21.8395 2.25007 20.3743V6.37014C2.25007 6.32158 2.25005 6.27372 2.25003 6.22655C2.24965 5.17255 2.24939 4.46271 2.44545 3.86559C2.81591 2.73726 3.68002 1.84161 4.79298 1.45435C5.3823 1.24929 6.08203 1.2496 7.09878 1.25004ZM7.24508 2.75008C6.024 2.75008 5.6034 2.76057 5.28593 2.87103C4.62655 3.10047 4.09919 3.63728 3.8706 4.3335C3.75951 4.67183 3.75007 5.11796 3.75007 6.37014V20.3743C3.75007 20.4933 3.80999 20.5661 3.88517 20.6009C3.92434 20.619 3.96264 20.6237 3.99456 20.6194C4.0227 20.6156 4.05911 20.6035 4.10185 20.5644C4.75453 19.9671 5.74561 19.9671 6.39828 20.5644L6.88138 21.0065C7.23637 21.3313 7.76377 21.3313 8.11875 21.0065C9.04694 20.1571 10.4532 20.1571 11.3814 21.0065C11.7364 21.3313 12.2638 21.3313 12.6188 21.0065C13.5469 20.1571 14.9532 20.1571 15.8814 21.0065C16.2364 21.3313 16.7638 21.3313 17.1188 21.0065L17.6019 20.5644C18.2545 19.9671 19.2456 19.9671 19.8983 20.5644C19.941 20.6035 19.9774 20.6156 20.0056 20.6194C20.0375 20.6237 20.0758 20.619 20.115 20.6009C20.1901 20.5661 20.2501 20.4934 20.2501 20.3743V6.37014C20.2501 5.11797 20.2406 4.67183 20.1295 4.3335C19.9009 3.63728 19.3736 3.10047 18.7142 2.87103C18.3967 2.76057 17.9761 2.75008 16.7551 2.75008H7.24508ZM6.25007 7.50008C6.25007 7.08587 6.58585 6.75008 7.00007 6.75008H7.50007C7.91428 6.75008 8.25007 7.08587 8.25007 7.50008C8.25007 7.9143 7.91428 8.25008 7.50007 8.25008H7.00007C6.58585 8.25008 6.25007 7.9143 6.25007 7.50008ZM9.75007 7.50008C9.75007 7.08587 10.0859 6.75008 10.5001 6.75008H17.0001C17.4143 6.75008 17.7501 7.08587 17.7501 7.50008C17.7501 7.9143 17.4143 8.25008 17.0001 8.25008H10.5001C10.0859 8.25008 9.75007 7.9143 9.75007 7.50008ZM6.25007 11.0001C6.25007 10.5859 6.58585 10.2501 7.00007 10.2501H7.50007C7.91428 10.2501 8.25007 10.5859 8.25007 11.0001C8.25007 11.4143 7.91428 11.7501 7.50007 11.7501H7.00007C6.58585 11.7501 6.25007 11.4143 6.25007 11.0001ZM9.75007 11.0001C9.75007 10.5859 10.0859 10.2501 10.5001 10.2501H17.0001C17.4143 10.2501 17.7501 10.5859 17.7501 11.0001C17.7501 11.4143 17.4143 11.7501 17.0001 11.7501H10.5001C10.0859 11.7501 9.75007 11.4143 9.75007 11.0001ZM6.25007 14.5001C6.25007 14.0859 6.58585 13.7501 7.00007 13.7501H7.50007C7.91428 13.7501 8.25007 14.0859 8.25007 14.5001C8.25007 14.9143 7.91428 15.2501 7.50007 15.2501H7.00007C6.58585 15.2501 6.25007 14.9143 6.25007 14.5001ZM9.75007 14.5001C9.75007 14.0859 10.0859 13.7501 10.5001 13.7501H17.0001C17.4143 13.7501 17.7501 14.0859 17.7501 14.5001C17.7501 14.9143 17.4143 15.2501 17.0001 15.2501H10.5001C10.0859 15.2501 9.75007 14.9143 9.75007 14.5001Z"
                      fill="none"
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
    </div>
  )
}
