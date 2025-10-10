'use client'

import axios from 'axios'

import { useState, useEffect } from 'react'
import { AircraftName } from '@/data/aircrafts/aircraft-names'
import { JobType } from '@/data/career/jobs'
import { WeatherType } from '@/data/career/weather'

export default function AddFlight({ onAddFlight, onCancel }) {
  const [newFlight, setNewFlight] = useState({
    startTime: '',
    jobType: JobType.Cargo,
    departure: '',
    destination: '',
    aircraft: AircraftName.Cessna172,
    range: 0,
    duration: 0,
    weather: WeatherType.Clear,
    base: 0,
    bonus: 0,
    operationCost: 0,
    totalReward: 0
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewFlight((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddFlight(newFlight)
  }

  const findICAO = (code) => {
    const res = axios.post('/api/airportfinder', {
      ICAO: code,
      userToken: userToken
    })
    return 'EGLL'
  }

  return (
    <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Add New Flight</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Form fields */}
          <div className="col-span-1">
            <label
              htmlFor="startTime"
              className="block text-sm font-medium text-gray-300"
            >
              Start Time
            </label>
            <input
              type="time"
              name="startTime"
              value={newFlight.startTime}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="jobType"
              className="block text-sm font-medium text-gray-300"
            >
              Job Type
            </label>
            <select
              name="jobType"
              value={newFlight.jobType}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {Object.values(JobType).map((job) => (
                <option key={job} value={job}>
                  {job}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="departure"
              className="block text-sm font-medium text-gray-300"
            >
              Departure
            </label>
            <input
              type="text"
              name="departure"
              value={newFlight.departure}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-300"
            >
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={newFlight.destination}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="aircraft"
              className="block text-sm font-medium text-gray-300"
            >
              Aircraft
            </label>
            <select
              name="aircraft"
              value={newFlight.aircraft}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {Object.values(AircraftName).map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="range"
              className="block text-sm font-medium text-gray-300"
            >
              Range
            </label>
            <input
              type="number"
              name="range"
              value={newFlight.range}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-300"
            >
              Duration
            </label>
            <input
              type="number"
              name="duration"
              value={newFlight.duration}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="weather"
              className="block text-sm font-medium text-gray-300"
            >
              Weather
            </label>
            <select
              name="weather"
              value={newFlight.weather}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {Object.values(WeatherType).map((weather) => (
                <option key={weather} value={weather}>
                  {weather}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="base"
              className="block text-sm font-medium text-gray-300"
            >
              Base
            </label>
            <input
              type="number"
              name="base"
              value={newFlight.base}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="bonus"
              className="block text-sm font-medium text-gray-300"
            >
              Bonus
            </label>
            <input
              type="number"
              name="bonus"
              value={newFlight.bonus}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="operationCost"
              className="block text-sm font-medium text-gray-300"
            >
              Operation Cost
            </label>
            <input
              type="number"
              name="operationCost"
              value={newFlight.operationCost}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="totalReward"
              className="block text-sm font-medium text-gray-300"
            >
              Total Reward
            </label>
            <input
              type="number"
              name="totalReward"
              value={newFlight.totalReward}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="py-2 px-4 bg-neutral-600 hover:bg-neutral-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Flight
          </button>
        </div>
      </form>
    </div>
  )
}
