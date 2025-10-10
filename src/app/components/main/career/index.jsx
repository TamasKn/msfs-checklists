'use client'

import { useEffect, useState } from 'react'
import AddFlight from '@/app/components/elements/career/add-flight'
import FlightHistory from '@/app/components/elements/career/history'
import UserTokenInput from '@/app/components/elements/career/user-token-input'
import { AircraftName } from '@/data/aircrafts/aircraft-names'
import { JobType } from '@/data/career/jobs'
import { WeatherType } from '@/data/career/weather'

const initialFlights = [
  {
    id: 1,
    startTime: '14:00',
    jobType: JobType.Cargo,
    departure: 'EGLL',
    destination: 'EHAM',
    aircraft: AircraftName.CessnaLongitude,
    range: 230,
    duration: 50,
    weather: WeatherType.Clear,
    base: 1500,
    bonus: 200,
    operationCost: 300,
    totalReward: 1400
  }
]

export default function CareerComponent() {
  const [showAddFlight, setShowAddFlight] = useState(false)
  const [flights, setFlights] = useState(initialFlights)
  const [hasToken, setHasToken] = useState(false)

  useEffect(() => {
    // Check if user has already saved token
    const token = localStorage.getItem('user_token')
    setHasToken(!!token)
  }, [])

  const handleTokenSaved = () => {
    setHasToken(true)
  }

  const handleAddFlight = (newFlight) => {
    const newId =
      flights.length > 0 ? Math.max(...flights.map((f) => f.id)) + 1 : 1
    setFlights((prev) => [...prev, { id: newId, ...newFlight }])
    setShowAddFlight(false)
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Career Mode</h1>
        {!hasToken ? (
          <UserTokenInput onTokenSaved={handleTokenSaved} />
        ) : (
          <button
            onClick={() => setShowAddFlight(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            New Flight
          </button>
        )}
      </div>

      {showAddFlight && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <AddFlight
            onAddFlight={handleAddFlight}
            onCancel={() => setShowAddFlight(false)}
          />
        </div>
      )}

      <FlightHistory flights={flights} />
    </div>
  )
}
