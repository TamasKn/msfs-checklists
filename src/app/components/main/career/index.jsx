'use client'

import { useState, useEffect, useRef } from 'react'
import AddFlight from '@/app/components/elements/career/add-flight'
import FlightProgress from '@/app/components/elements/career/flight-progress'
import FinancialSummary from '@/app/components/elements/career/financial-summary'
import FlightHistory from '@/app/components/elements/career/history'
import DraftFlights from '@/app/components/elements/career/draft-flights'
import UserComponent from '@/app/components/elements/career/user'
import LeaseAircraft from '@/app/components/elements/career/lease-aircraft'
import LevelUpNotification from '@/app/components/elements/career/level-up-notification'
import { updateUserAfterFlight } from '@/utils/career/user-data'
import {
  getDraftFlights,
  saveDraftFlight,
  deleteDraftFlight
} from '@/utils/career/draft-flights'
import {
  calculateBasePay,
  calculateBonus,
  calculateOperationCost,
  calculateXP,
  calculateMaintenanceIssueCost
} from '@/utils/career/financials'
import { Aircrafts } from '@/data/aircrafts/aircrafts'

const STORAGE_KEY = 'career_flight_history'
const isIssueForced = process.env.NEXT_PUBLIC_FORCE_ISSUE === 'true'

/**
 * CareerComponent - Main component for career mode
 * Manages flight history with localStorage persistence
 */
export default function CareerComponent() {
  const [showAddFlight, setShowAddFlight] = useState(false)
  const [showLeaseAircraft, setShowLeaseAircraft] = useState(false)
  const [showFlightProgress, setShowFlightProgress] = useState(false)
  const [showFinancialSummary, setShowFinancialSummary] = useState(false)
  const [currentDraft, setCurrentDraft] = useState(null)
  const [calculatedFinancials, setCalculatedFinancials] = useState(null)
  const [flights, setFlights] = useState([])
  const [draftFlights, setDraftFlights] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [userDataKey, setUserDataKey] = useState(0) // Key to force UserComponent re-render
  const [levelUpInfo, setLevelUpInfo] = useState(null)
  const userComponentRef = useRef(null)

  // Load flights and drafts from localStorage on mount
  useEffect(() => {
    try {
      const savedFlights = localStorage.getItem(STORAGE_KEY)
      if (savedFlights) {
        const parsedFlights = JSON.parse(savedFlights)
        setFlights(parsedFlights)
      }

      // Load draft flights
      const drafts = getDraftFlights()
      setDraftFlights(drafts)
    } catch (error) {
      console.error('Failed to load flight history:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Save flights to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(flights))
      } catch (error) {
        console.error('Failed to save flight history:', error)
      }
    }
  }, [flights, isLoading])

  // Add/remove modal-open class to body when modals are open
  useEffect(() => {
    if (showAddFlight || showLeaseAircraft || showFlightProgress || showFinancialSummary) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [showAddFlight, showLeaseAircraft, showFlightProgress, showFinancialSummary])

  /**
   * Get aircraft career data
   */
  const getAircraftCareerData = (aircraftName) => {
    return Aircrafts.find((aircraft) => aircraft.name === aircraftName)?.career
  }

  /**
   * Saves draft flight and shows flight progress popup
   * @param {Object} draftData - Draft flight data
   */
  const handleSaveDraft = (draftData) => {
    const savedDraft = saveDraftFlight(draftData)
    setDraftFlights(getDraftFlights())
    setCurrentDraft(savedDraft)
    setShowAddFlight(false)
    setShowFlightProgress(true)
  }

  /**
   * Continues a draft flight
   * @param {Object} draft - Draft flight to continue
   */
  const handleContinueDraft = (draft) => {
    setCurrentDraft(draft)
    setShowFlightProgress(true)
  }

  /**
   * Deletes a draft flight
   * @param {number} draftId - ID of draft to delete
   */
  const handleDeleteDraft = (draftId) => {
    deleteDraftFlight(draftId)
    setDraftFlights(getDraftFlights())
  }

  /**
   * Finishes a flight in progress and shows financial summary
   * @param {number} duration - Flight duration in minutes
   */
  const handleFinishFlight = (duration) => {
    if (!currentDraft) return

    // Update current draft with duration
    const updatedDraft = {
      ...currentDraft,
      duration: parseFloat(duration)
    }
    setCurrentDraft(updatedDraft)

    const range = parseFloat(currentDraft.range)
    const durationNum = parseFloat(duration)

    // Calculate financials
    const basePay = calculateBasePay(
      currentDraft.aircraft,
      currentDraft.jobType,
      range,
      durationNum
    )

    const bonus = calculateBonus(
      basePay,
      currentDraft.aircraft,
      currentDraft.jobType,
      range,
      durationNum,
      currentDraft.weather
    )

    const operationCost = calculateOperationCost(currentDraft.aircraft, durationNum)

    // Calculate maintenance issues (hidden cost)
    const maintenanceIssueResult = calculateMaintenanceIssueCost(
      currentDraft.aircraft,
      isIssueForced
    )
    const maintenanceIssueCost = maintenanceIssueResult.totalCost

    const xp = calculateXP(
      currentDraft.aircraft,
      currentDraft.jobType,
      range,
      durationNum,
      currentDraft.weather
    )

    // Total operation cost includes maintenance issues
    const totalOperationCost = operationCost + maintenanceIssueCost
    const totalReward = basePay + bonus - totalOperationCost

    // Get cost breakdown
    const careerData = getAircraftCareerData(currentDraft.aircraft)
    const flightHours = durationNum / 60

    // Calculate raw breakdown values
    const rawLease = careerData.costs.leasePriceBase * flightHours
    const rawInsurance = careerData.costs.insuranceBase * flightHours
    const rawMaintenance = careerData.costs.maintenance.base * flightHours

    // Round each component
    const roundedLease = Math.round(rawLease * 100) / 100
    const roundedInsurance = Math.round(rawInsurance * 100) / 100
    const roundedMaintenance = Math.round(rawMaintenance * 100) / 100

    // Calculate the difference between sum of rounded components and actual total
    const roundedSum = roundedLease + roundedInsurance + roundedMaintenance
    const difference = Math.round((operationCost - roundedSum) * 100) / 100

    // Adjust the largest component to match the total exactly
    const breakdown = {
      lease: roundedLease,
      insurance: roundedInsurance,
      maintenance: roundedMaintenance + difference,
      maintenanceIssues: maintenanceIssueCost,
      maintenanceIssueDetails: maintenanceIssueResult.issues
    }

    // Set calculated financials
    setCalculatedFinancials({
      basePay,
      bonus,
      operationCost: totalOperationCost,
      totalReward,
      xp,
      breakdown
    })

    // Show financial summary
    setShowFlightProgress(false)
    setShowFinancialSummary(true)
  }

  /**
   * Confirms the flight and adds it to history
   */
  const handleConfirmFlight = () => {
    if (!currentDraft || !calculatedFinancials) return

    // Destructure to exclude draft id and other temporary fields
    const { id: draftId, createdAt, updatedAt, departureRunway, destinationRunway, ...draftFlightData } = currentDraft

    const flightData = {
      ...draftFlightData,
      range: parseFloat(currentDraft.range),
      duration: parseFloat(currentDraft.duration),
      base: calculatedFinancials.basePay,
      bonus: calculatedFinancials.bonus,
      operationCost: calculatedFinancials.operationCost,
      totalReward: calculatedFinancials.totalReward,
      xp: calculatedFinancials.xp,
      // Save complete financial breakdown for viewing later
      financialBreakdown: {
        basePay: calculatedFinancials.basePay,
        bonus: calculatedFinancials.bonus,
        operationCost: calculatedFinancials.operationCost,
        totalReward: calculatedFinancials.totalReward,
        xp: calculatedFinancials.xp,
        breakdown: calculatedFinancials.breakdown
      }
    }

    const newId =
      flights.length > 0 ? Math.max(...flights.map((f) => f.id)) + 1 : 1

    // Add flight to history with new ID
    setFlights((prev) => [...prev, { id: newId, ...flightData }])

    // Update user funds, XP, and flight minutes (returns level up info)
    const result = updateUserAfterFlight(flightData.totalReward, flightData.xp, flightData.duration)

    // Show level up notification if leveled up
    if (result.levelUpInfo && result.levelUpInfo.leveledUp) {
      setLevelUpInfo(result.levelUpInfo)
    }

    // Force UserComponent to re-render by updating key
    setUserDataKey((prev) => prev + 1)

    // Delete draft from localStorage
    deleteDraftFlight(currentDraft.id)
    setDraftFlights(getDraftFlights())

    // Close modals and reset state
    setShowFinancialSummary(false)
    setCurrentDraft(null)
    setCalculatedFinancials(null)
  }

  /**
   * Logs out the user
   */
  const handleLogout = () => {
    localStorage.removeItem('user_token')
    window.location.reload()
  }

  /**
   * Handles lease aircraft completion
   */
  const handleLeaseComplete = () => {
    // Force UserComponent to re-render to show updated funds
    setUserDataKey((prev) => prev + 1)
  }

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <svg
            className="animate-spin h-12 w-12 mx-auto mb-4 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-gray-400">Loading flight history...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="max-w-[95%] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  Career Mode
                </h1>
                <p className="text-gray-400 text-sm sm:text-base">
                  Track your flight history and manage your aviation career
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowLeaseAircraft(true)}
              className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.8286 1.72758C19.618 1.37176 21.0449 0.981099 22.1457 2.08172C23.2466 3.18244 22.8558 4.60949 22.5 5.39885C22.2409 5.97353 21.8851 6.58498 21.4343 7.03586L18.3035 10.1667L20.75 19.9527C21.0686 21.2273 19.4017 22.0136 18.6208 20.957L13.9001 14.5701L11.0678 17.4024L10.4818 21.504C10.326 22.5944 8.90642 22.9164 8.29541 21.9999L5.86325 18.3517L1.89476 15.6042C0.960857 14.9577 1.36456 13.4958 2.49799 13.4203L6.85509 13.1298L9.65741 10.3275L3.27054 5.60674C2.21395 4.82579 3.00021 3.1589 4.27485 3.47756L14.0608 5.92406L17.1916 2.7933C17.6424 2.34244 18.254 1.98663 18.8286 1.72758ZM18.5828 4.23053L15.1548 7.65856C14.8567 7.95662 14.4241 8.07643 14.0152 7.9742L7.70352 6.39628L11.5932 9.27129C12.1832 9.70735 12.2473 10.5661 11.7285 11.0848L8.05676 14.7566C7.85123 14.9621 7.57808 15.086 7.28807 15.1054L4.91621 15.2635L7.31557 16.9246L8.79804 19.1483L9.12556 16.8556C9.16228 16.5986 9.28139 16.3604 9.46498 16.1768L13.1427 12.499C13.6615 11.9803 14.5202 12.0443 14.9562 12.6343L17.8312 16.524L16.2533 10.2123C16.1511 9.80342 16.2709 9.37083 16.569 9.07277L19.997 5.64474C20.0811 5.54456 20.4407 5.10051 20.6767 4.57691C20.9648 3.93787 20.8835 3.64788 20.7316 3.49604C20.5796 3.34411 20.2895 3.26286 19.6505 3.5509C19.127 3.78691 18.683 4.14648 18.5828 4.23053Z"
                    fill="#0F0F0F"
                  />
                </svg>
                Lease Aircraft
              </span>
            </button>
            <button
              onClick={() => setShowAddFlight(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                New Flight
              </span>
            </button>
            {/* Small Logout Icon */}
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-gray-300 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer"
              title="Logout"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="mb-8">
          <UserComponent key={userDataKey} ref={userComponentRef} />
        </div>

        {/* Modal for Lease Aircraft */}
        {showLeaseAircraft && (
          <LeaseAircraft
            onClose={() => setShowLeaseAircraft(false)}
            onLeaseComplete={handleLeaseComplete}
          />
        )}

        {/* Modal for Add Flight */}
        {showAddFlight && (
          <div className="fixed inset-0 bg-opacity-20 backdrop-blur-lg flex justify-center items-center z-50 p-4 animate-fadeIn">
            <AddFlight
              onSaveDraft={handleSaveDraft}
              onCancel={() => setShowAddFlight(false)}
            />
          </div>
        )}

        {/* Modal for Flight Progress */}
        {showFlightProgress && currentDraft && (
          <div className="fixed inset-0 bg-opacity-20 backdrop-blur-lg flex justify-center items-center z-50 p-4 animate-fadeIn">
            <FlightProgress
              draftFlight={currentDraft}
              onFinishFlight={handleFinishFlight}
              onCancel={() => {
                setShowFlightProgress(false)
                setCurrentDraft(null)
              }}
            />
          </div>
        )}

        {/* Modal for Financial Summary */}
        {showFinancialSummary && calculatedFinancials && (
          <FinancialSummary
            financials={calculatedFinancials}
            onConfirm={handleConfirmFlight}
          />
        )}

        {/* Draft Flights Section */}
        <DraftFlights
          draftFlights={draftFlights}
          onContinue={handleContinueDraft}
          onDelete={handleDeleteDraft}
        />

        {/* Flight History Section */}
        <FlightHistory flights={flights} />

        {/* Level Up Notification */}
        {levelUpInfo && levelUpInfo.leveledUp && (
          <LevelUpNotification
            levelUpInfo={levelUpInfo}
            onClose={() => setLevelUpInfo(null)}
          />
        )}
      </div>
    </div>
  )
}
