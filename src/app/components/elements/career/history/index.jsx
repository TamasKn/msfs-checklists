'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import FinancialSummary from '@/app/components/elements/career/financial-summary'

/**
 * Get color classes for job type badge
 * @param {string} jobType - Job type (Cargo, Charter, Airline)
 * @returns {string} Tailwind CSS classes for the job type badge
 */
const getJobTypeColors = (jobType) => {
  switch (jobType) {
    case 'Cargo':
      return 'bg-amber-900/50 text-amber-300 border-amber-700/50'
    case 'Charter':
      return 'bg-purple-900/50 text-purple-300 border-purple-700/50'
    case 'Airline':
      return 'bg-blue-900/50 text-blue-300 border-blue-700/50'
    default:
      return 'bg-indigo-900/50 text-indigo-300 border-indigo-700/50'
  }
}

/**
 * FlightHistory - Displays flight history in a modern, responsive table
 * @param {Array} flights - Array of flight objects
 */
export default function FlightHistory({ flights }) {
  const [selectedFlight, setSelectedFlight] = useState(null)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before using portal
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!flights || flights.length === 0) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-12 text-center">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-400 mb-2">
          No Flights Yet
        </h3>
        <p className="text-gray-500">
          Start your career by adding your first flight
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden shadow-xl">
      <div className="px-6 py-4 border-b border-gray-700/50">
        <h2 className="text-xl font-semibold text-white">Flight History</h2>
        <p className="text-sm text-gray-400 mt-1">
          {flights.length} {flights.length === 1 ? 'flight' : 'flights'} logged
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700/50">
          <thead className="bg-gray-900/50">
            <tr>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Time & Date
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Job
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Route
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Aircraft
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Range
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Weather
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Base
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Bonus
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Operation Cost
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Total Reward
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                XP
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/30">
            {flights.map((flight, index) => (
              <tr
                key={flight.id}
                className="hover:bg-gray-700/20 transition-colors duration-150"
              >
                <td className="px-4 py-4 text-center text-sm text-gray-300">
                  <div className="flex flex-col gap-1">
                    <p>{flight.startTime}</p>
                    {flight.startDate ? (
                      <p className="text-gray-500 text-sm min-w-[6rem]">
                        {flight.startDate}{' '}
                      </p>
                    ) : (
                      <p className="text-gray-600 text-xs">N/A</p>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-center whitespace-nowrap text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getJobTypeColors(
                      flight.jobType
                    )}`}
                  >
                    {flight.jobType}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-300">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold text-blue-400">
                        {flight.departure}
                      </span>
                      <span className="text-gray-600">→</span>
                      <span className="font-mono font-semibold text-purple-400">
                        {flight.destination}
                      </span>
                    </div>
                    {(flight.departureName || flight.destinationName) && (
                      <div className="text-xs text-gray-500">
                        {flight.departureName && (
                          <div className="truncate max-w-xs">
                            {flight.departureName}
                          </div>
                        )}
                        {flight.destinationName && (
                          <div className="truncate max-w-xs">
                            {flight.destinationName}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap text-gray-300 max-w-xs truncate">
                  {flight.aircraft}
                </td>
                <td className="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-300">
                  {flight.range} NM
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                  {flight.duration} min
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400 text-center">
                  {flight.weather}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-right font-mono">
                  €{flight.base.toLocaleString()}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-emerald-400 text-right font-mono">
                  +€{flight.bonus.toLocaleString()}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-red-400 text-right font-mono">
                  -€{flight.operationCost.toLocaleString()}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-base font-bold text-center">
                  <span
                    className={`inline-flex items-center justify-center px-4 w-full py-1.5 rounded-lg font-mono font-bold border ${
                      flight.totalReward >= 0
                        ? 'bg-green-900/30 text-green-400 border-green-700/50'
                        : 'bg-red-900/30 text-red-400 border-red-700/50'
                    }`}
                  >
                    {flight.totalReward >= 0 ? '€' : '-€'}
                    {Math.abs(flight.totalReward).toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-center">
                  <span className="text-indigo-400 font-semibold">
                    {flight.xp ? flight.xp.toLocaleString() : '0'} XP
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-center">
                  {flight.financialBreakdown ? (
                    <button
                      onClick={() => setSelectedFlight(flight)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-400 hover:text-indigo-300 border border-indigo-500/50 hover:border-indigo-400/70 rounded-lg transition-all duration-200 cursor-pointer"
                      title="View Financial Details"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  ) : (
                    <span className="text-gray-600 text-xs">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Financial Summary Modal - Rendered via Portal */}
      {mounted &&
        selectedFlight &&
        selectedFlight.financialBreakdown &&
        createPortal(
          <FinancialSummary
            financials={selectedFlight.financialBreakdown}
            onClose={() => setSelectedFlight(null)}
            viewOnly={true}
          />,
          document.body
        )}
    </div>
  )
}
