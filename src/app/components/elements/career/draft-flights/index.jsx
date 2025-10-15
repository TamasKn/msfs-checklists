'use client'

/**
 * Get color classes for job type badge
 * @param {string} jobType - Job type (Cargo, Charter, Airline)
 * @returns {string} Tailwind CSS classes for the job type badge
 */
const getJobTypeColors = (jobType) => {
  switch (jobType) {
    case 'Cargo':
      return 'bg-amber-900/50 text-amber-300 border-amber-700/50'
    case 'Charter':
      return 'bg-purple-900/50 text-purple-300 border-purple-700/50'
    case 'Airline':
      return 'bg-blue-900/50 text-blue-300 border-blue-700/50'
    default:
      return 'bg-indigo-900/50 text-indigo-300 border-indigo-700/50'
  }
}

/**
 * DraftFlights - Displays draft flights in a table
 * @param {Array} draftFlights - Array of draft flight objects
 * @param {Function} onContinue - Callback when user clicks continue
 * @param {Function} onDelete - Callback when user clicks delete
 */
export default function DraftFlights({ draftFlights, onContinue, onDelete }) {
  if (!draftFlights || draftFlights.length === 0) {
    return null
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-orange-700/50 overflow-hidden shadow-xl mb-8">
      <div className="px-6 py-4 border-b border-orange-700/50 bg-orange-900/20">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <svg
            className="w-5 h-5 text-orange-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Flights in Progress
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          {draftFlights.length}{' '}
          {draftFlights.length === 1 ? 'flight' : 'flights'} waiting to be
          completed
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700/50">
          <thead className="bg-gray-900/50">
            <tr>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Time & Date
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Job
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Route
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Aircraft
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Range
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Weather
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800/30 divide-y divide-gray-700/50">
            {draftFlights.map((draft) => (
              <tr
                key={draft.id}
                className="hover:bg-gray-700/20 transition-colors duration-150"
              >
                <td className="px-4 py-4 text-center text-sm text-gray-300">
                  <div className="flex flex-col gap-1 min-w-[3rem]">
                    <p>{draft.startTime}</p>
                    {draft.startDate ? (
                      <p className="text-gray-500 text-sm">{draft.startDate}</p>
                    ) : (
                      <p className="text-gray-600 text-xs">N/A</p>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-center whitespace-nowrap text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getJobTypeColors(
                      draft.jobType
                    )}`}
                  >
                    {draft.jobType}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-300">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold text-blue-400">
                        {draft.departure}
                      </span>
                      <span className="text-gray-600">→</span>
                      <span className="font-mono font-semibold text-purple-400">
                        {draft.destination}
                      </span>
                    </div>
                    {(draft.departureName || draft.destinationName) && (
                      <div className="text-xs text-gray-500">
                        {draft.departureName && (
                          <div className="truncate max-w-xs">
                            {draft.departureName}
                          </div>
                        )}
                        {draft.destinationName && (
                          <div className="truncate max-w-xs">
                            {draft.destinationName}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap text-gray-300 max-w-xs truncate">
                  {draft.aircraft}
                </td>
                <td className="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-300">
                  {draft.range} NM
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400 text-center">
                  {draft.weather}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => onContinue(draft)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-600/20 hover:bg-orange-600/40 text-orange-400 hover:text-orange-300 border border-orange-500/50 hover:border-orange-400/70 rounded-lg transition-all duration-200 cursor-pointer"
                      title="Continue Flight"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Continue
                    </button>
                    <button
                      onClick={() => onDelete(draft.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-red-300 border border-red-500/50 hover:border-red-400/70 rounded-lg transition-all duration-200 cursor-pointer"
                      title="Delete Draft"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
