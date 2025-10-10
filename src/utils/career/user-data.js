/**
 * User data management utilities for career mode
 */

const USER_DATA_KEY = 'user_data'

/**
 * Gets user data from localStorage
 * @returns {Object} User data object with name, funds, xp, and leasedAircraft
 */
export const getUserData = () => {
  try {
    const data = localStorage.getItem(USER_DATA_KEY)
    if (data) {
      return JSON.parse(data)
    }
    return {
      name: '',
      funds: 0,
      xp: 0,
      leasedAircraft: []
    }
  } catch (error) {
    console.error('Failed to get user data:', error)
    return {
      name: '',
      funds: 0,
      xp: 0,
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
 * @param {number} reward - Total reward from flight
 * @param {number} xp - XP earned from flight
 * @returns {Object} Updated user data
 */
export const updateUserAfterFlight = (reward, xp) => {
  const userData = getUserData()
  
  // Update funds and XP
  userData.funds = (userData.funds || 0) + reward
  userData.xp = (userData.xp || 0) + xp
  
  // Save updated data
  saveUserData(userData)
  
  return userData
}

/**
 * Resets user funds and XP (keeps name and leased aircraft)
 */
export const resetUserProgress = () => {
  const userData = getUserData()
  userData.funds = 0
  userData.xp = 0
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

