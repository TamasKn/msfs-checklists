'use client'

import { useState } from 'react'

/**
 * FlightHistory - Displays flight history in a modern, responsive table
 * @param {Array} flights - Array of flight objects
 */
export default function FlightHistory({ flights }) {
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
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Time
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Job
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Route
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Aircraft
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Range
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Weather
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Base
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Bonus
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Operation Cost
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Total Reward
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">
                XP
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/30">
            {flights.map((flight, index) => (
              <tr
                key={flight.id}
                className="hover:bg-gray-700/20 transition-colors duration-150"
              >
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                  {flight.startTime}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300 border border-indigo-700/50">
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
                <td className="px-4 py-4 text-sm text-gray-300 max-w-xs truncate">
                  {flight.aircraft}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {flight.range} NM
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                  {flight.duration} min
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400">
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
                <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-right">
                  <span className="text-green-400 font-mono">
                    €{flight.totalReward.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
                  <span className="text-indigo-400 font-semibold">
                    {flight.xp ? flight.xp.toLocaleString() : '0'} XP
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
