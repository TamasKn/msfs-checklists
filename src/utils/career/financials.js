import { cessnaLongitudeCareer } from '@/data/cessna-longitude/career'
import { cessna172Career } from '@/data/cessna-172/career'
import { pilatusPc12Career } from '@/data/pilatus-pc-12/career'
import { diamondDA62Career } from '@/data/diamond-da62/career'
import { visionJetG2Career } from '@/data/vision-jet-g2/career'
import { airbusA320neoCareer } from '@/data/airbus-a320neo/career'
import { boeing737MaxCareer } from '@/data/boeing-737-max/career'
import { AircraftName } from '@/data/aircrafts/aircraft-names'
import { WeatherBonus } from '@/data/career/weather'
import { JobBonusMultiplier } from '@/data/career/jobs'

/**
 * Get career data for a specific aircraft
 * @param {string} aircraftName - Name of the aircraft
 * @returns {Object} Career data object
 */
const getAircraftCareerData = (aircraftName) => {
  switch (aircraftName) {
    case AircraftName.Cessna172:
      return cessna172Career
    case AircraftName.DiamondDA62:
      return diamondDA62Career
    case AircraftName.PilatusPC12:
      return pilatusPc12Career
    case AircraftName.VisionJetG2:
      return visionJetG2Career
    case AircraftName.CessnaLongitude:
      return cessnaLongitudeCareer
    case AircraftName.AirbusA320neo:
      return airbusA320neoCareer
    case AircraftName.Boeing737Max:
      return boeing737MaxCareer
    default:
      return cessna172Career
  }
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
  const flightHours = duration / 60

  // Base reward + (per flight hour * hours) + (per distance * range)
  const basePay =
    careerData.reward.base +
    careerData.reward.perFlightHour * flightHours +
    careerData.reward.perDistance * range

  return Math.round(basePay * 100) / 100
}

/**
 * Calculates bonus for a flight (randomized, for entire flight)
 * @param {string} aircraft - Aircraft name
 * @param {string} jobType - Job type (Cargo, Charter, Airline)
 * @param {number} range - Flight range in nautical miles
 * @param {number} duration - Flight duration in minutes
 * @param {string} weather - Weather type
 * @returns {number} Bonus amount
 */
export const calculateBonus = (aircraft, jobType, range, duration, weather) => {
  const careerData = getAircraftCareerData(aircraft)

  // Random bonus for the entire flight (not multiplied by hours)
  const minBonus = careerData.reward.bonus.min
  const maxBonus = careerData.reward.bonus.max
  const randomBonus = Math.random() * (maxBonus - minBonus) + minBonus

  // Apply weather multiplier
  const weatherMultiplier = WeatherBonus[weather] || 1

  // Apply job type multiplier
  const jobMultiplier = JobBonusMultiplier[jobType] || 1

  const totalBonus = randomBonus * weatherMultiplier * jobMultiplier

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

  // (Lease + Insurance + Maintenance) * flight hours
  const operationCost =
    (careerData.costs.leasePriceBase +
      careerData.costs.insuranceBase +
      careerData.costs.maintenance.base) *
    flightHours

  return Math.round(operationCost * 100) / 100
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
 * @param {boolean} forceIssue - If true, forces issues to occur at 100% chance (for testing purposes). Default is true.
 *                                Set to false to use actual occurrence chances from career data.
 * @returns {Object} Object containing total cost and breakdown of issues (max 4 issues)
 * @example
 * // For testing (100% chance of issues occurring)
 * calculateMaintenanceIssueCost('A320NEO', true)
 *
 * // For production (uses actual chance percentages)
 * calculateMaintenanceIssueCost('A320NEO', false)
 */
export const calculateMaintenanceIssueCost = (aircraft, forceIssue = false) => {
  const careerData = getAircraftCareerData(aircraft)
  const maintenanceIssues = careerData.costs.maintenance.issues
  const severityMultipliers =
    careerData.costs.maintenance.issueSeverityMultiplier

  // Randomly decide how many issues will occur (1 to 5)
  const numberOfIssues = Math.floor(Math.random() * 5) + 1

  // Get all available issue types
  const allIssueTypes = Object.entries(maintenanceIssues)

  // Filter issues based on occurrence chance (or force all if forceIssue is true)
  let eligibleIssues = allIssueTypes.filter(([issueType, issueData]) => {
    const occurrenceChance = forceIssue ? 1 : issueData.chance
    return Math.random() < occurrenceChance
  })

  // If no issues are eligible (unlikely in production, impossible in test mode), return empty
  if (eligibleIssues.length === 0) {
    return {
      totalCost: 0,
      issues: []
    }
  }

  // Randomly select up to numberOfIssues from eligible issues
  const selectedIssues = []
  const issuesToSelect = Math.min(numberOfIssues, eligibleIssues.length)

  // Shuffle and select random issues
  const shuffledIssues = [...eligibleIssues].sort(() => Math.random() - 0.5)
  const finalSelectedIssues = shuffledIssues.slice(0, issuesToSelect)

  let totalCost = 0

  // Calculate cost for each selected issue
  finalSelectedIssues.forEach(([issueType, issueData]) => {
    const { base } = issueData

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
    const issueCost = base * multiplier

    totalCost += issueCost

    selectedIssues.push({
      type: issueType,
      severity: randomSeverity,
      baseCost: base,
      multiplier: Math.round(multiplier * 100) / 100,
      cost: Math.round(issueCost * 100) / 100
    })
  })

  return {
    totalCost: Math.round(totalCost * 100) / 100,
    issues: selectedIssues
  }
}
