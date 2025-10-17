'use client'

import { useState } from 'react'
import ChecklistItems from '@/app/components/elements/checklist/checklist-items'
import AircraftInfo from '@/app/components/elements/checklist/aircraft-info'
import AircraftSelector from '@/app/components/elements/checklist/aircraft-selector'
import { Aircrafts } from '@/data/aircrafts/aircrafts'
import TodCalculator from '@/app/components/elements/checklist/tod-calculator'
import FuelCalculator from '@/app/components/elements/checklist/fuel-calculator'

export default function ChecklistComponent() {
  const [selectedAircraft, setSelectedAircraft] = useState(Aircrafts[0])
  const [activeTab, setActiveTab] = useState('tod')
  const [isExpanded, setIsExpanded] = useState(false)

  // TOD Calculator state
  const [todInput, setTodInput] = useState({
    currentAltitude: '',
    verticalSpeed: '',
    groundSpeed: '',
    destinationElevation: '',
    approachAngle: '',
    approachSpeed: ''
  })
  const [todResult, setTodResult] = useState(null)

  // Fuel Calculator state
  const [fuelRange, setFuelRange] = useState('')
  const [fuelResult, setFuelResult] = useState(null)
  const [fuelUnit, setFuelUnit] = useState('L')

  const handleAircraftSelect = (aircraftName) => {
    const aircraft = Aircrafts.find((a) => a.name === aircraftName)
    setSelectedAircraft(aircraft)
  }

  const handleTabClick = (tab) => {
    if (activeTab === tab && isExpanded) {
      setIsExpanded(false)
    } else {
      setActiveTab(tab)
      setIsExpanded(true)
    }
  }

  return (
    <div className="w-full text-center px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        MSFS Checklists
      </h1>

      <h3 className="text-lg sm:text-xl text-gray-900 dark:text-white mb-6">
        Customized checklist for Microsoft Flight Simulator 2024
      </h3>

      <AircraftSelector
        aircrafts={Aircrafts}
        selectedAircraft={selectedAircraft}
        onAircraftSelect={handleAircraftSelect}
      />

      {selectedAircraft && (
        <>
          <AircraftInfo specs={selectedAircraft.specs} />

          {/* Tabbed Calculator Section */}
          <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            {/* Tab Buttons */}
            <div className="w-full">
              <div className="flex gap-2">
                <button
                  onClick={() => handleTabClick('tod')}
                  className={`flex-1 flex justify-between items-center py-2 px-3 text-left font-medium transition-all duration-200 focus:outline-none border rounded-lg cursor-pointer ${
                    activeTab === 'tod' && isExpanded
                      ? 'text-white bg-indigo-600 hover:bg-indigo-700 border-indigo-600'
                      : 'text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <span>TOD & Approach Calculator</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      isExpanded && activeTab === 'tod' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={() => handleTabClick('fuel')}
                  className={`flex-1 flex justify-between items-center py-2 px-3 text-left font-medium transition-all duration-200 focus:outline-none border rounded-lg cursor-pointer ${
                    activeTab === 'fuel' && isExpanded
                      ? 'text-white bg-indigo-600 hover:bg-indigo-700 border-indigo-600'
                      : 'text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <span>Fuel Calculator</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      isExpanded && activeTab === 'fuel' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {isExpanded && (
              <div className="mt-2">
                {activeTab === 'tod' && (
                  <TodCalculator
                    isTabbed={true}
                    input={todInput}
                    setInput={setTodInput}
                    result={todResult}
                    setResult={setTodResult}
                  />
                )}
                {activeTab === 'fuel' && (
                  <FuelCalculator
                    aircraft={selectedAircraft}
                    isTabbed={true}
                    range={fuelRange}
                    setRange={setFuelRange}
                    result={fuelResult}
                    setResult={setFuelResult}
                    unit={fuelUnit}
                    setUnit={setFuelUnit}
                  />
                )}
              </div>
            )}
          </div>

          <ChecklistItems
            checklist={selectedAircraft.checklist}
            aircraftName={selectedAircraft.name}
          />
        </>
      )}
    </div>
  )
}
