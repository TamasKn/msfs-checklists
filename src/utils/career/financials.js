import { WeatherBonus } from '@/data/career/weather'
import { JobBonusMultiplier } from '@/data/career/jobs'
import { getUserData } from '@/utils/career/user-data'
import { calculateLevelBonus } from '@/data/career/levels'
import { Aircrafts } from '@/data/aircrafts/aircrafts'

/**
 * Get career data for a specific aircraft
 * @param {string} aircraftName - Name of the aircraft
 * @returns {Object} Career data object
 */
const getAircraftCareerData = (aircraftName) => {
  return Aircrafts.find((aircraft) => aircraft.name === aircraftName)?.career
}

/**
 * Calculates base pay for a flight
 * @param {string} aircraft - Aircraft name
 * @param {string} jobType - Job type (Cargo, Charter, Airline)
 * @param {number} range - Flight range in nautical miles
 * @param {number} duration - Flight duration in minutes
 * @returns {number} Base pay amount
 */
export const calculateBasePay = (aircraft, jobType, range, duration) => {
  const careerData = getAircraftCareerData(aircraft)
  const userData = getUserData()
  const flightHours = duration / 60
  const levelMultiplier = calculateLevelBonus(userData.level)

  // Base reward per hour + (per flight hour * hours) + (per distance * range)
  const basePay = careerData.reward.base * flightHours
  const distancePay = careerData.reward.perDistance * range
  const levelPay = basePay * levelMultiplier

  return Math.round((basePay + distancePay + levelPay) * 100) / 100
}

/**
 * Calculates bonus for a flight (randomized, for entire flight)
 * @param {number} base - calculated base pay
 * @param {string} aircraft - Aircraft name
 * @param {string} jobType - Job type (Cargo, Charter, Airline)
 * @param {number} range - Flight range in nautical miles
 * @param {number} duration - Flight duration in minutes
 * @param {string} weather - Weather type
 * @returns {number} Bonus amount
 */
export const calculateBonus = (
  base,
  aircraft,
  jobType,
  range,
  duration,
  weather
) => {
  const careerData = getAircraftCareerData(aircraft)

  // Random bonus for the entire flight (not multiplied by hours)
  const minBonus = careerData.reward.bonus.min
  const maxBonus = careerData.reward.bonus.max
  // Random bonus divided base on base pay, either fix amount (below 50k) or percentage
  const randomBonus = Math.random() * (maxBonus - minBonus) + minBonus
  const bonusMultiplier =
    base > 50000 ? base * (randomBonus / 1e5) : randomBonus

  // Apply weather multiplier
  const weatherMultiplier = WeatherBonus[weather] || 1

  // Apply job type multiplier
  const jobMultiplier = JobBonusMultiplier[jobType] || 1

  const totalBonus = bonusMultiplier * weatherMultiplier * jobMultiplier

  return Math.round(totalBonus * 100) / 100
}

/**
 * Calculates operation cost for a flight
 * @param {string} aircraft - Aircraft name
 * @param {number} duration - Flight duration in minutes
 * @returns {number} Operation cost amount
 */
export const calculateOperationCost = (aircraft, duration) => {
  const careerData = getAircraftCareerData(aircraft)
  const flightHours = duration / 60

  // (Lease + Insurance) * flight hours
  const regularMaintenance = careerData.costs.maintenance.base * flightHours
  const operationCost =
    (careerData.costs.leasePriceBase + careerData.costs.insuranceBase) *
    flightHours

  return Math.round((operationCost + regularMaintenance) * 100) / 100
}

/**
 * Calculates XP earned for a flight
 * @param {string} aircraft - Aircraft name
 * @param {string} jobType - Job type (Cargo, Charter, Airline)
 * @param {number} range - Flight range in nautical miles
 * @param {number} duration - Flight duration in minutes
 * @param {string} weather - Weather type
 * @returns {number} XP amount
 */
export const calculateXP = (aircraft, jobType, range, duration, weather) => {
  const careerData = getAircraftCareerData(aircraft)
  const flightHours = duration / 60

  // Base XP + (per flight hour * hours) + (per distance * range)
  const baseXP =
    careerData.xp.base +
    careerData.xp.perFlightHour * flightHours +
    careerData.xp.perDistance * range

  // Apply weather multiplier
  const weatherMultiplier = WeatherBonus[weather] || 1

  // Apply bonus XP multiplier from aircraft
  const bonusMultiplier = careerData.reward.bonus.xpMultiplier || 1

  const totalXP = baseXP * weatherMultiplier * bonusMultiplier

  return Math.round(totalXP)
}

/**
 * Calculates maintenance issue cost for a flight (randomized based on occurrence chance)
 * @param {string} aircraft - Aircraft name
 * @param {boolean} forceIssue - If true, forces issues to occur at 100% chance (for testing purposes). Default is false.
 *                                Set to false to use actual 27% occurrence chance.
 * @returns {Object} Object containing total cost and breakdown of issues (1 to 5 issues)
 * @example
 * // For testing (100% chance of issues occurring)
 * calculateMaintenanceIssueCost('A320NEO', true)
 *
 * // For production (27% chance that any issue will occur)
 * calculateMaintenanceIssueCost('A320NEO', false)
 */

const issueSeverityMultiplier = {
  // multiplier for issue cost
  minor: {
    min: 0.7,
    max: 1.1
  },
  medium: {
    min: 1.2,
    max: 2
  },
  major: {
    min: 2.1,
    max: 3.9
  },
  critical: {
    min: 4,
    max: 7
  }
}

/**
 * Finds the closest matching issue based on a random number and issue chances
 * @param {Array} allIssues - Array of [issueType, issueData] entries
 * @param {number} randomNumber - Random number between 0 and 1
 * @returns {Array|null} The closest matching issue entry or null
 */
const findClosestIssue = (allIssues, randomNumber) => {
  let closestIssue = null
  let smallestDifference = Infinity

  allIssues.forEach((issue) => {
    const [issueType, issueData] = issue
    const difference = Math.abs(issueData.chance - randomNumber)

    if (difference < smallestDifference) {
      smallestDifference = difference
      closestIssue = issue
    }
  })

  return closestIssue
}

export const calculateMaintenanceIssueCost = (aircraft, forceIssue = false) => {
  const careerData = getAircraftCareerData(aircraft)
  const maintenanceIssues = careerData.costs.maintenance.issues
  const severityMultipliers = issueSeverityMultiplier

  // Step 1: Check if ANY maintenance issue will occur (17% chance or 100% if forced)
  const maintenanceOccurrenceChance = forceIssue ? 1 : 0.17
  const occurrenceRandom = Math.random()
  const hasMaintenanceIssue = occurrenceRandom < maintenanceOccurrenceChance

  // If no maintenance issue occurs, return empty
  if (!hasMaintenanceIssue) {
    return {
      totalCost: 0,
      issues: []
    }
  }

  // Step 2: Determine how many issues will occur (1 to 5)
  const numberOfIssues = Math.floor(Math.random() * 5) + 1

  // Step 3: Get all available issue types
  const allIssueTypes = Object.entries(maintenanceIssues)

  // Step 4: Generate random numbers and find closest matching issues
  const selectedIssues = []
  const usedIssueTypes = new Set() // Track used issues to avoid duplicates

  for (let i = 0; i < numberOfIssues; i++) {
    const randomNumber = Math.random()

    // Filter out already used issues
    const availableIssues = allIssueTypes.filter(
      ([issueType]) => !usedIssueTypes.has(issueType)
    )

    // If no more available issues, break
    if (availableIssues.length === 0) {
      break
    }

    // Find the closest matching issue based on the random number
    const closestIssue = findClosestIssue(availableIssues, randomNumber)

    if (closestIssue) {
      const [issueType, issueData] = closestIssue
      usedIssueTypes.add(issueType)

      // Randomly select severity level
      const severityLevels = Object.keys(severityMultipliers)
      const randomSeverity =
        severityLevels[Math.floor(Math.random() * severityLevels.length)]
      const severityRange = severityMultipliers[randomSeverity]

      // Calculate random multiplier within severity range
      const multiplier =
        Math.random() * (severityRange.max - severityRange.min) +
        severityRange.min

      // Calculate final cost for this issue
      const issueCost = issueData.base * multiplier

      selectedIssues.push({
        type: issueType,
        severity: randomSeverity,
        baseCost: issueData.base,
        multiplier: Math.round(multiplier * 100) / 100,
        cost: Math.round(issueCost * 100) / 100
      })
    }
  }

  // Calculate total cost
  const totalCost = selectedIssues.reduce((sum, issue) => sum + issue.cost, 0)

  return {
    totalCost: Math.round(totalCost * 100) / 100,
    issues: selectedIssues
  }
}
