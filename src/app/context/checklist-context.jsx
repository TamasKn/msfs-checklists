'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ChecklistContext = createContext(undefined)

/**
 * ChecklistProvider component that manages checklist state with localStorage persistence
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Provider component
 */
export const ChecklistProvider = ({ children }) => {
  const [checklistStates, setChecklistStates] = useState({})
  const [isHydrated, setIsHydrated] = useState(false)

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedStates = localStorage.getItem('msfs-checklist-states')
      if (savedStates) {
        setChecklistStates(JSON.parse(savedStates))
      }
    } catch (error) {
      console.error('Error loading checklist states from localStorage:', error)
    }
    setIsHydrated(true)
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(
          'msfs-checklist-states',
          JSON.stringify(checklistStates)
        )
      } catch (error) {
        console.error('Error saving checklist states to localStorage:', error)
      }
    }
  }, [checklistStates, isHydrated])

  /**
   * Get the state for a specific aircraft
   * @param {string} aircraftName - Name of the aircraft
   * @returns {Object} Aircraft checklist state
   */
  const getAircraftState = useCallback((aircraftName) => {
    return (
      checklistStates[aircraftName] || {
        checkedItems: {},
        openSections: [],
        autoEngineStartUsed: false
      }
    )
  }, [checklistStates])

  /**
   * Update the state for a specific aircraft
   * @param {string} aircraftName - Name of the aircraft
   * @param {Object} newState - New state to merge
   */
  const updateAircraftState = useCallback((aircraftName, newState) => {
    setChecklistStates((prev) => ({
      ...prev,
      [aircraftName]: {
        ...prev[aircraftName],
        ...newState
      }
    }))
  }, [])

  /**
   * Reset the state for a specific aircraft
   * @param {string} aircraftName - Name of the aircraft
   */
  const resetAircraftState = useCallback((aircraftName) => {
    setChecklistStates((prev) => {
      const newStates = { ...prev }
      delete newStates[aircraftName]
      return newStates
    })
  }, [])

  /**
   * Reset all checklist states
   */
  const resetAllStates = useCallback(() => {
    setChecklistStates({})
  }, [])

  const value = {
    getAircraftState,
    updateAircraftState,
    resetAircraftState,
    resetAllStates,
    isHydrated
  }

  return (
    <ChecklistContext.Provider value={value}>
      {children}
    </ChecklistContext.Provider>
  )
}

/**
 * Custom hook to use the checklist context
 * @returns {Object} Checklist context value
 * @throws {Error} If used outside of ChecklistProvider
 */
export const useChecklistContext = () => {
  const context = useContext(ChecklistContext)
  if (context === undefined) {
    throw new Error(
      'useChecklistContext must be used within a ChecklistProvider'
    )
  }
  return context
}

