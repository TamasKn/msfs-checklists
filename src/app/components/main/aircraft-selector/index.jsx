'use client';

export default function AircraftSelector({ aircrafts, selectedAircraft, onAircraftSelect }) {
  return (
    <div className="max-w-xs mt-12 mx-auto mb-8">
      <select
        id="aircraft-select"
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        value={selectedAircraft.name}
        onChange={(e) => onAircraftSelect(e.target.value)}
      >
        {aircrafts.map((aircraft) => (
          <option key={aircraft.name} value={aircraft.name}>
            {aircraft.name}
          </option>
        ))}
      </select>
    </div>
  );
};
