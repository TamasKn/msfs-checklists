'use client'

import { Aircrafts } from '@/data/aircrafts/aircrafts'

export default function SimbriefDetails({ simbriefData, newFlight, modal }) {
  // Add New Flight Modal
  if (modal === 'new-flight') {
    return (
      <details
        className="mt-6 bg-gray-900/50 border border-blue-500/30 rounded-xl"
        open
      >
        <summary className="cursor-pointer text-lg font-semibold text-blue-400 p-6  rounded-xl transition-colors">
          SimBrief Flight Plan Details
        </summary>
        <div className="px-6 pb-6">
          {/* Aircraft Warning */}
          {simbriefData.aircraft.icao_code !==
            Aircrafts.find((a) => a.name === newFlight.aircraft)?.id && (
            <div className="mb-4 p-3 bg-yellow-900/20 border border-yellow-500/50 rounded-lg">
              <p className="text-sm text-yellow-400 flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Aircraft mismatch: SimBrief plan is for{' '}
                {simbriefData.aircraft.icao_code}, but you selected{' '}
                {newFlight.aircraft}.
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div className="p-3 bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-400 mb-1 uppercase">
                Flight Number
              </p>
              <p className="text-sm font-semibold text-white">
                {simbriefData.general.flight_number}
              </p>
            </div>
            <div className="p-3 bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-400 mb-1 uppercase">
                Cruise Altitude
              </p>
              <p className="text-sm font-semibold text-white">
                FL{simbriefData.general.initial_altitude / 100}
              </p>
            </div>
            <div className="p-3 flex justify-between bg-gray-800/50 rounded-lg">
              <div>
                <p className="text-xs text-gray-400 mb-1 uppercase">
                  Passengers
                </p>
                <p className="text-sm font-semibold text-white">
                  {simbriefData.general.passengers}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1 uppercase">
                  Weight per Pax
                </p>
                <p className="text-sm font-semibold text-white">
                  {Math.round(simbriefData.weights.pax_weight)} kg
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1 uppercase">Cargo</p>
                <p className="text-sm font-semibold text-white">
                  {simbriefData.weights.cargo} kg
                </p>
              </div>
            </div>

            <div className="p-3 bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-400 mb-1 uppercase">
                Total Payload
              </p>
              <p className="text-sm font-semibold text-white">
                {simbriefData.weights.payload} kg
              </p>
            </div>
            <div className="p-3 bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-400 mb-1 uppercase">
                Rec. Takeoff Fuel
              </p>
              <p className="text-sm font-semibold text-white">
                {simbriefData.fuel.plan_ramp} kg
              </p>
            </div>
            <div className="p-3 bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-400 mb-1 uppercase">
                Est. Duration
              </p>
              <p className="text-sm font-semibold text-white">
                {Math.floor(simbriefData.times.est_block / 3600)}h{' '}
                {Math.floor((simbriefData.times.est_block % 3600) / 60)}m
              </p>
            </div>
          </div>
          {/* Collapsible Sections */}
          <details className="mb-3">
            <summary className="cursor-pointer text-sm font-semibold text-blue-300 hover:text-blue-200 p-2 bg-gray-800/30 rounded">
              Route
            </summary>
            <div className="p-4 bg-gray-800/30 rounded text-xs text-gray-300 font-mono break-all">
              {simbriefData.general.route}
            </div>
          </details>

          <details className="mb-3">
            <summary className="cursor-pointer text-sm font-semibold text-blue-300 hover:text-blue-200 p-2 bg-gray-800/30 rounded">
              Origin METAR
            </summary>
            <div className="p-4 bg-gray-800/30 rounded text-xs text-gray-300 font-mono break-all">
              {simbriefData.origin.metar}
            </div>
          </details>

          <details className="mb-4">
            <summary className="cursor-pointer text-sm font-semibold text-blue-300 hover:text-blue-200 p-2 bg-gray-800/30 rounded">
              Destination METAR
            </summary>
            <div className="p-4 bg-gray-800/30 rounded text-xs text-gray-300 font-mono break-all">
              {simbriefData.destination.metar}
            </div>
          </details>

          {/* External Links */}
          <div className="flex gap-3">
            <a
              href={simbriefData.ofp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              See Full Briefing
            </a>
            <a
              href={simbriefData.skyvector}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Track on Skyvector
            </a>
          </div>
        </div>
      </details>
    )
  }

  // Flight In Progress modal
  if (modal === 'in-progress') {
    return (
      <details
        className="mt-6 p-4 bg-blue-900/10 border border-blue-500/20 rounded-xl cursor-pointer"
        closed
      >
        <summary className="text-sm font-semibold text-blue-300">
          SimBrief Flight Plan Info
        </summary>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-xs mt-2">
          <div className="p-2  rounded">
            <p className="text-gray-400 mb-0.5 uppercase">Flight Number</p>
            <p className="font-semibold text-white">
              {simbriefData.general.flight_number}
            </p>
          </div>
          <div className="p-2 rounded">
            <p className="text-gray-400 mb-0.5 uppercase">Cruise Alt</p>
            <p className="font-semibold text-white">
              FL{simbriefData.general.initial_altitude / 100}
            </p>
          </div>
          <div className="p-2 rounded">
            <p className="text-gray-400 mb-0.5 uppercase">Passengers</p>
            <p className="font-semibold text-white">
              {simbriefData.general.passengers}
            </p>

            <p className="text-xs text-gray-400 my-1 uppercase">
              Weight per Pax
            </p>
            <p className="text-sm font-semibold text-white">
              {Math.round(simbriefData.weights.pax_weight)} kg
            </p>

            <p className="text-xs text-gray-400 my-1 uppercase">Cargo</p>
            <p className="text-sm font-semibold text-white">
              {simbriefData.weights.cargo} kg
            </p>
          </div>
          <div className="p-2 rounded">
            <p className="text-gray-400 mb-0.5 uppercase">Payload</p>
            <p className="font-semibold text-white">
              {simbriefData.weights.payload} kg
            </p>
          </div>
          <div className="p-2 rounded">
            <p className="text-gray-400 mb-0.5 uppercase">Fuel</p>
            <p className="font-semibold text-white">
              {simbriefData.fuel.plan_ramp} kg
            </p>
          </div>
          <div className="p-2 rounded">
            <p className="text-gray-400 mb-0.5 uppercase">Est. Duration</p>
            <p className="font-semibold text-white">
              {Math.floor(simbriefData.times.est_block / 3600)}h{' '}
              {Math.floor((simbriefData.times.est_block % 3600) / 60)}m
            </p>
          </div>
        </div>
        {/* Collapsible Sections */}
        <details className="mb-3">
          <summary className="cursor-pointer text-sm font-semibold text-blue-300 hover:text-blue-200 p-2">
            Route
          </summary>
          <div className="p-4 text-xs text-gray-300 font-mono break-all">
            {simbriefData.general.route}
          </div>
        </details>

        {/* External Links */}
        <div className="flex gap-3">
          <a
            href={simbriefData.ofp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            See Full Briefing
          </a>
          <a
            href={simbriefData.skyvector}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Track on Skyvector
          </a>
        </div>
      </details>
    )
  }
}
