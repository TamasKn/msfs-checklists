'use client'

import { useState } from 'react'
import ChecklistItems from '@/app/components/elements/checklist-items'
import AircraftInfo from '@/app/components/elements/aircraft-info'
import AircraftSelector from '@/app/components/elements/aircraft-selector'
import { Aircrafts } from '@/data/aircrafts/aircrafts'

export default function ChecklistComponent() {
  const [selectedAircraft, setSelectedAircraft] = useState(Aircrafts[0])

  const handleAircraftSelect = (aircraftName) => {
    const aircraft = Aircrafts.find((a) => a.name === aircraftName)
    setSelectedAircraft(aircraft)
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
          <ChecklistItems checklist={selectedAircraft.checklist} />
        </>
      )}
    </div>
  )
}
