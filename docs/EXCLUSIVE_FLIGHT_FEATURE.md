# Exclusive Flight Feature

## Overview
The Exclusive Flight feature adds special flight opportunities to the Career Mode with enhanced rewards. When clicking "New Flight", there's a 30% chance that an Exclusive Flight opportunity will appear instead of the regular flight creation modal.

## Features

### 1. Random Occurrence
- **30% Chance**: Each time a user clicks "New Flight", there's a 30% probability of triggering an Exclusive Flight
- **Pre-determined Route**: The system automatically generates a random route based on the aircraft's range
- **Enhanced Rewards**: Exclusive Flights offer 30-60% bonus rewards on top of the base pay

### 2. Route Generation
The route is automatically generated using the following criteria:
- **Distance Range**: Between 15% and 80% of the selected aircraft's maximum range
- **Random Airports**: Origin and destination are randomly selected from the global airport database
- **Duration Calculation**: Automatically calculated based on distance and aircraft cruise speed

### 3. Reward System
- **Base Reward Markup**: Randomly generated between 30% and 60%
- **Job Type**: Set to "Exclusive" with a 1.55x bonus multiplier (defined in `src/data/career/jobs.js`)
- **Normal Costs**: Operation costs, maintenance issues, and XP are calculated normally
- **Enhanced Base Pay**: The reward markup is applied to the base pay before other bonuses

### 4. Aircraft Selection
- **Single Aircraft**: If the user has only one leased aircraft, it's automatically selected
- **Multiple Aircraft**: If the user has multiple leased aircraft, they can choose which one to use
- **No Aircraft**: If the user has no leased aircraft, the regular "Add Flight" modal appears instead

## User Flow

1. User clicks "New Flight" button
2. System checks if user has leased aircraft
3. 30% chance triggers Exclusive Flight modal (or 100% if force flag is enabled)
4. Modal displays:
   - Reward bonus percentage (30-60%)
   - Departure and destination airports
   - Distance and estimated duration
   - Aircraft selection (if multiple leased)
5. User can either:
   - **Accept**: Creates a draft flight with the exclusive route and enhanced rewards
   - **Decline**: Closes the modal without creating a flight
6. If accepted, the flight proceeds through the normal flow:
   - Flight Progress tracking
   - Financial Summary with enhanced rewards
   - XP and funds update

## Testing

### Force Exclusive Flight Occurrence
For testing purposes, you can force Exclusive Flights to appear every time:

**Using Browser Console:**
```javascript
// Enable force mode
localStorage.setItem('force_exclusive_flight', 'true')

// Disable force mode
localStorage.removeItem('force_exclusive_flight')

// Check current status
localStorage.getItem('force_exclusive_flight')
```

**Steps:**
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Run the command above
4. Click "New Flight" - Exclusive Flight will appear every time
5. To disable, remove the localStorage item

## Technical Implementation

### Files Modified/Created

1. **`src/utils/career/exclusive-flights/exclusive-flights.js`**
   - Added `ExclusiveFlight()` function to generate random routes
   - Helper functions to extract aircraft specs (range, cruise speed)
   - Distance calculation and duration estimation
   - Uses API route to load airports (client-side compatible)

2. **`src/app/api/airports/route.js`** (NEW)
   - Server-side API route to read CSV file
   - Parses airport data with latitude/longitude
   - Returns JSON response with airport list

3. **`src/app/components/elements/career/exclusive-flight-modal/index.jsx`**
   - New modal component for presenting exclusive flight opportunities
   - Aircraft selection UI for multiple leased aircraft
   - Accept/Decline buttons

4. **`src/app/components/main/career/index.jsx`**
   - Added state management for exclusive flight modal
   - `handleNewFlightClick()` - 30% chance logic
   - `handleAcceptExclusiveFlight()` - Creates draft with reward markup
   - `handleFinishFlight()` - Applies reward markup to base pay

5. **`src/data/career/jobs.js`**
   - Already contains `Exclusive` job type with 1.55x multiplier

### Data Flow

```
User clicks "New Flight"
    ↓
handleNewFlightClick()
    ↓
30% chance check (or force flag)
    ↓
ExclusiveFlight() generates route
    ↓
Modal displays opportunity
    ↓
User accepts
    ↓
handleAcceptExclusiveFlight()
    ↓
Creates draft with rewardMarkup
    ↓
Normal flight flow
    ↓
handleFinishFlight() applies markup
    ↓
Financial summary shows enhanced rewards
```

### Reward Calculation

```javascript
// Base pay calculation (normal)
let basePay = calculateBasePay(aircraft, jobType, range, duration)

// Apply exclusive flight markup
if (jobType === 'Exclusive' && rewardMarkup) {
  const markupAmount = basePay * rewardMarkup
  basePay = basePay + markupAmount
}

// Then normal bonus calculation
const bonus = calculateBonus(basePay, aircraft, jobType, range, duration, weather)

// Final reward
const totalReward = basePay + bonus - operationCost
```

### Example Calculation

**Scenario:**
- Base Pay: $10,000
- Reward Markup: 45% (0.45)
- Job Bonus Multiplier: 1.55x
- Normal Bonus: $2,000
- Operation Cost: $3,000

**Calculation:**
1. Base Pay with Markup: $10,000 + ($10,000 × 0.45) = $14,500
2. Bonus (with job multiplier): $2,000 × 1.55 = $3,100
3. Total Reward: $14,500 + $3,100 - $3,000 = $14,600

## Future Enhancements

Potential improvements for the feature:
- Add time-limited exclusive flights (expires after X minutes)
- Special exclusive routes (e.g., scenic routes, challenging weather)
- Exclusive flight history tracking
- Achievement system for completing exclusive flights
- Difficulty levels with varying reward multipliers
- Seasonal or event-based exclusive flights

## Notes

- Exclusive Flights cannot be edited - the route is pre-determined
- Job type is locked to "Exclusive" and cannot be changed
- Weather is set to "Clear" by default for exclusive flights
- The feature requires at least one leased aircraft to trigger
- If route generation fails (no valid destinations), it retries automatically
- The reward markup is stored in the draft flight data for accurate calculation

