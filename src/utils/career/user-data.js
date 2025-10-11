/**
 * User data management utilities for career mode
 */

import { getLevelProgress, calculateLevelUp } from '@/data/career/levels'

const USER_DATA_KEY = 'user_data'

/**
 * Gets user data from localStorage
 * @returns {Object} User data object with name, funds, xp, level, and leasedAircraft
 */
export const getUserData = () => {
  try {
    const data = localStorage.getItem(USER_DATA_KEY)
    if (data) {
      const parsed = JSON.parse(data)
      // Ensure level exists (for backward compatibility)
      if (!parsed.level) {
        parsed.level = 1
      }
      return parsed
    }
    return {
      name: '',
      funds: 0,
      xp: 0,
      level: 1,
      leasedAircraft: []
    }
  } catch (error) {
    console.error('Failed to get user data:', error)
    return {
      name: '',
      funds: 0,
      xp: 0,
      level: 1,
      leasedAircraft: []
    }
  }
}

/**
 * Saves user data to localStorage
 * @param {Object} userData - User data object
 */
export const saveUserData = (userData) => {
  try {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData))
  } catch (error) {
    console.error('Failed to save user data:', error)
  }
}

/**
 * Updates user funds and XP after a flight
 * Handles level ups and XP reset
 * @param {number} reward - Total reward from flight
 * @param {number} earnedXP - XP earned from flight
 * @returns {Object} Updated user data with level up information
 */
export const updateUserAfterFlight = (reward, earnedXP) => {
  const userData = getUserData()

  // Update funds
  userData.funds = (userData.funds || 0) + reward

  // Calculate level up
  const currentXP = userData.xp || 0
  const currentLevel = userData.level || 1
  const levelUpResult = calculateLevelUp(currentXP, currentLevel, earnedXP)

  // Update XP and level
  userData.xp = levelUpResult.newXP
  userData.level = levelUpResult.newLevel

  // Save updated data
  saveUserData(userData)

  return {
    ...userData,
    levelUpInfo: levelUpResult
  }
}

/**
 * Resets user funds, XP, and level (keeps name and leased aircraft)
 */
export const resetUserProgress = () => {
  const userData = getUserData()
  userData.funds = 0
  userData.xp = 0
  userData.level = 1
  saveUserData(userData)
  return userData
}

/**
 * Leases an aircraft for the user
 * @param {string} aircraftName - Name of the aircraft to lease
 * @param {number} leaseFee - One-time lease fee
 * @returns {Object} Updated user data
 */
export const leaseAircraft = (aircraftName, leaseFee) => {
  const userData = getUserData()

  // Check if aircraft is already leased
  if (userData.leasedAircraft && userData.leasedAircraft.includes(aircraftName)) {
    return userData
  }

  // Deduct lease fee (can go negative)
  userData.funds -= leaseFee

  // Add aircraft to leased list
  if (!userData.leasedAircraft) {
    userData.leasedAircraft = []
  }
  userData.leasedAircraft.push(aircraftName)

  // Save updated data
  saveUserData(userData)

  return userData
}

/**
 * Checks if user has leased a specific aircraft
 * @param {string} aircraftName - Name of the aircraft
 * @returns {boolean} True if aircraft is leased
 */
export const hasLeasedAircraft = (aircraftName) => {
  const userData = getUserData()
  return userData.leasedAircraft && userData.leasedAircraft.includes(aircraftName)
}

/**
 * Gets all leased aircraft
 * @returns {Array} Array of leased aircraft names
 */
export const getLeasedAircraft = () => {
  const userData = getUserData()
  return userData.leasedAircraft || []
}

/**
 * Gets user data with level information
 * @returns {Object} User data object with level info included
 */
export const getUserDataWithLevel = () => {
  const userData = getUserData()
  const levelInfo = getLevelProgress(userData.xp || 0, userData.level || 1)

  return {
    ...userData,
    reputationTitle: levelInfo.title,
    levelProgress: levelInfo
  }
}
