'use client'

import { useState } from 'react'
import { AircraftName } from '@/data/aircrafts/aircraft-names'
import { JobType } from '@/data/career/jobs'
import { WeatherType } from '@/data/career/weather'

export default function FlightHistory({ flights }) {

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-neutral-700">
        <thead className="bg-neutral-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Start Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Job Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Departure</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Destination</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Aircraft</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Range</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Duration</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Weather</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Base</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Bonus</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Op. Cost</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Reward</th>
          </tr>
        </thead>
        <tbody className="bg-neutral-900 divide-y divide-neutral-700">
          {flights.map(flight => (
            <tr key={flight.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{flight.startTime}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{flight.jobType}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{flight.departure}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{flight.destination}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{flight.aircraft}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{flight.range}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{flight.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{flight.weather}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{flight.base}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{flight.bonus}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{flight.operationCost}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-400">{flight.totalReward}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}