/**
 * User data management utilities for career mode
 */

const USER_DATA_KEY = 'user_data'

/**
 * Gets user data from localStorage
 * @returns {Object} User data object with name, funds, and xp
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
      xp: 0
    }
  } catch (error) {
    console.error('Failed to get user data:', error)
    return {
      name: '',
      funds: 0,
      xp: 0
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
 * Resets user funds and XP (keeps name)
 */
export const resetUserProgress = () => {
  const userData = getUserData()
  userData.funds = 0
  userData.xp = 0
  saveUserData(userData)
  return userData
}

