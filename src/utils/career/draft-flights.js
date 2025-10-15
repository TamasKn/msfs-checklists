/**
 * Draft flight management utilities for career mode
 */

const DRAFT_FLIGHTS_KEY = 'draft_flights'

/**
 * Gets all draft flights from localStorage
 * @returns {Array} Array of draft flight objects
 */
export const getDraftFlights = () => {
  try {
    const data = localStorage.getItem(DRAFT_FLIGHTS_KEY)
    if (data) {
      return JSON.parse(data)
    }
    return []
  } catch (error) {
    console.error('Failed to get draft flights:', error)
    return []
  }
}

/**
 * Saves a new draft flight to localStorage
 * @param {Object} draftFlight - Draft flight data
 * @returns {Object} Saved draft flight with ID
 */
export const saveDraftFlight = (draftFlight) => {
  try {
    const drafts = getDraftFlights()
    
    // Generate new ID
    const newId = drafts.length > 0 
      ? Math.max(...drafts.map((d) => d.id)) + 1 
      : 1
    
    const newDraft = {
      id: newId,
      ...draftFlight,
      createdAt: new Date().toISOString()
    }
    
    drafts.push(newDraft)
    localStorage.setItem(DRAFT_FLIGHTS_KEY, JSON.stringify(drafts))
    
    return newDraft
  } catch (error) {
    console.error('Failed to save draft flight:', error)
    throw error
  }
}

/**
 * Updates an existing draft flight
 * @param {number} draftId - ID of the draft to update
 * @param {Object} updates - Updated draft flight data
 * @returns {Object} Updated draft flight
 */
export const updateDraftFlight = (draftId, updates) => {
  try {
    const drafts = getDraftFlights()
    const index = drafts.findIndex((d) => d.id === draftId)
    
    if (index === -1) {
      throw new Error('Draft flight not found')
    }
    
    drafts[index] = {
      ...drafts[index],
      ...updates,
      updatedAt: new Date().toISOString()
    }
    
    localStorage.setItem(DRAFT_FLIGHTS_KEY, JSON.stringify(drafts))
    
    return drafts[index]
  } catch (error) {
    console.error('Failed to update draft flight:', error)
    throw error
  }
}

/**
 * Deletes a draft flight from localStorage
 * @param {number} draftId - ID of the draft to delete
 * @returns {boolean} True if deleted successfully
 */
export const deleteDraftFlight = (draftId) => {
  try {
    const drafts = getDraftFlights()
    const filtered = drafts.filter((d) => d.id !== draftId)
    
    localStorage.setItem(DRAFT_FLIGHTS_KEY, JSON.stringify(filtered))
    
    return true
  } catch (error) {
    console.error('Failed to delete draft flight:', error)
    return false
  }
}

/**
 * Gets a specific draft flight by ID
 * @param {number} draftId - ID of the draft to retrieve
 * @returns {Object|null} Draft flight object or null if not found
 */
export const getDraftFlightById = (draftId) => {
  try {
    const drafts = getDraftFlights()
    return drafts.find((d) => d.id === draftId) || null
  } catch (error) {
    console.error('Failed to get draft flight by ID:', error)
    return null
  }
}

