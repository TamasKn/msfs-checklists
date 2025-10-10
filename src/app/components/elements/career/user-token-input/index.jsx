'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function UserTokenInput({ onTokenSaved }) {
  const [showTokenInput, setShowTokenInput] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [userToken, setUserToken] = useState('')

  useEffect(() => {
    setMounted(true)

    // Check if user has already saved token
    const token = localStorage.getItem('user_token')
    if (!token) {
      setShowTokenInput(true)
    }
  }, [])

  const handleTokenSave = () => {
    localStorage.setItem('user_token', userToken)
    setShowTokenInput(false)
    onTokenSaved?.() // Notify parent component
  }

  const handleTokenInputChange = (e) => {
    const { value } = e.target
    setUserToken(value)
  }

  const handleTokenSubmit = (e) => {
    e.preventDefault()
    handleTokenSave()
  }

  const authUser = async () => {
    const res = await axios.post('/api/auth', {
      userToken: userToken
    })

    if (res.data.status === 'success') {
      handleTokenSave()
      console.log('Authorized')
    } else {
      console.log('Unauthorized')
    }
  }

  // Prevent hydration mismatch
  if (!mounted || !showTokenInput) {
    return null
  }

  return (
    <div>
      <div className="col-span-1">
        <label
          htmlFor="startTime"
          className="block text-sm font-medium text-gray-300"
        >
          User Token Required
        </label>
        <input
          type="text"
          name="userToken"
          value={userToken}
          onChange={handleTokenInputChange}
          className="mt-1 block w-full bg-neutral-700 border-transparent rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="button"
        onClick={authUser}
        className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Add
      </button>
    </div>
  )
}
