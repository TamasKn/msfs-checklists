'use client'

import { useState } from 'react'
import ChecklistItems from './components/main/checklist-items'
import AircraftInfo from './components/main/aircraft-info'
import AircraftSelector from './components/main/aircraft-selector'
import { Aircrafts } from '@/data/aircrafts/aircrafts'
import github from '/public/github_logo.png'
import Image from 'next/image'

export default function Home() {
  const [selectedAircraft, setSelectedAircraft] = useState(Aircrafts[0])

  const handleAircraftSelect = (aircraftName) => {
    const aircraft = Aircrafts.find((a) => a.name === aircraftName)
    setSelectedAircraft(aircraft)
  }

  return (
    <div className="text-center p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        MSFS Checklists
      </h1>

      <h3 className="text-xl sm:text-xl text-gray-900 dark:text-white mb-6">
        Simplified checklist for Microsoft Flight Simulator 2024
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
      <footer className="mt-8">
        <a
          href="https://github.com/TamasKn/msfs-checklists"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <Image src={github} alt="GitHub logo" width={24} height={24} />
        </a>
      </footer>
    </div>
  )
}
