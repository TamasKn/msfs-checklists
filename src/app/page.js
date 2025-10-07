'use client';

import { useState } from 'react';
import ChecklistItems from "./components/main/checklist-items";
import AircraftInfo from "./components/main/aircraft-info";
import AircraftSelector from "./components/main/aircraft-selector";
import { Aircrafts } from '@/data/aircrafts/aircrafts';

export default function Home() {
  const [selectedAircraft, setSelectedAircraft] = useState(Aircrafts[0]);

  const handleAircraftSelect = (aircraftName) => {
    const aircraft = Aircrafts.find(a => a.name === aircraftName);
    setSelectedAircraft(aircraft);
  };

  return (
    <div className="text-center p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        MSFS Checklists
      </h1>

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
  );
}