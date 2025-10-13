import { useState } from 'react'

const InfoIcon = () => (
  <svg
    className="w-4 h-4 ml-2 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default function Tooltip({ text }) {
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const showTooltip = () => setTooltipVisible(true)
  const hideTooltip = () => setTooltipVisible(false)

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={() => setTooltipVisible(!tooltipVisible)}
    >
      <InfoIcon />
      {tooltipVisible && (
        <div className="absolute bottom-full mb-2 w-48 sm:w-64 p-2 bg-gray-800 text-white text-sm rounded-md transition-opacity duration-300 z-10 left-1/2 -translate-x-1/2">
          {text}
        </div>
      )}
    </div>
  )
}
