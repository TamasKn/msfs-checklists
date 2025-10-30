/**
 * Load airports from API
 * @returns {Promise<Array>} Promise that resolves with array of airport objects
 */
const loadAirports = async () => {
  try {
    const response = await fetch('/api/airports')
    const result = await response.json()

    if (result.status === 'success') {
      console.log(`Loaded ${result.count} airports from API`)
      return result.data
    } else {
      throw new Error(result.message || 'Failed to load airports')
    }
  } catch (error) {
    console.error('Error loading airports:', error)
    throw error
  }
}

/**
 * Calculate distance between two coordinates in nautical miles
 * @param {number} originLatitude - Latitude of point 1 (degrees)
 * @param {number} originLongitude - Longitude of point 1 (degrees)
 * @param {number} destinationLatitude - Latitude of point 2 (degrees)
 * @param {number} destinationLongitude - Longitude of point 2 (degrees)
 * @returns {number} Distance in nautical miles
 */
export function distanceNauticalMiles(
  originLatitude,
  originLongitude,
  destinationLatitude,
  destinationLongitude
) {
  const toRadians = (deg) => (deg * Math.PI) / 180

  const R = 3443.93 // Earth's equatorial radius in nautical miles
  const origRad = toRadians(originLatitude)
  const destRad = toRadians(destinationLatitude)
  const latDegree = toRadians(destinationLatitude - originLatitude)
  const longDegree = toRadians(destinationLongitude - originLongitude)

  const a =
    Math.sin(latDegree / 2) ** 2 +
    Math.cos(origRad) * Math.cos(destRad) * Math.sin(longDegree / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}

const pickRandomAirport = (airports) => {
  const randomIndex = Math.floor(Math.random() * airports.length)
  return airports[randomIndex]
}

/**
 * Find airports within a specified radius of a location
 * @param {Object} center - Center location object with lat, lon, and optional name
 * @param {number} center.lat - Latitude of center point
 * @param {number} center.lon - Longitude of center point
 * @param {string} [center.name] - Optional name of center location
 * @param {Object} distance - Search radius in nautical miles
 * @param {number} distance.min - Minimum distance in nautical miles
 * @param {number} distance.max - Maximum distance in nautical miles
 * @returns {Promise<Array>} Promise that resolves with array of nearby airports
 */
export const findNearbyAirports = async (center, distance) => {
  try {
    const airports = await loadAirports()

    return airports
      .map((a) => ({
        ...a,
        distance: distanceNauticalMiles(
          center.lat,
          center.lon,
          a.latitude,
          a.longitude
        )
      }))
      .filter(
        (a) =>
          a.distance <= distance.max &&
          a.distance >= distance.min &&
          !isNaN(a.distance)
      )
      .sort((a, b) => a.distance - b.distance)
  } catch (error) {
    console.error('Error finding nearby airports:', error)
    return []
  }
}

/**
 * Extract numeric value from spec string (e.g., '3,500 NM' -> 3500)
 * @param {string} value - Spec value string
 * @returns {number} Numeric value
 */
const extractNumericValue = (value) => {
  if (typeof value === 'number') return value
  if (typeof value !== 'string') return 0

  // Remove commas and extract first number
  const match = value.replace(/,/g, '').match(/[\d.]+/)
  return match ? parseFloat(match[0]) : 0
}

/**
 * Get aircraft range from specs
 * @param {Object} aircraftSpecs - Aircraft specs object
 * @returns {number} Range in nautical miles
 */
const getAircraftRange = (aircraftSpecs) => {
  if (!aircraftSpecs?.specs?.[0]?.items) return 0

  const rangeItem = aircraftSpecs.specs[0].items.find((item) => item['Range'])
  return rangeItem ? extractNumericValue(rangeItem['Range']) : 0
}

/**
 * Get aircraft cruise speed from specs
 * @param {Object} aircraftSpecs - Aircraft specs object
 * @returns {number} Cruise speed in knots
 */
const getAircraftCruiseSpeed = (aircraftSpecs) => {
  if (!aircraftSpecs?.specs?.[0]?.items) return 0

  const speedItem = aircraftSpecs.specs[0].items.find(
    (item) => item['Cruise Speed']
  )
  return speedItem ? extractNumericValue(speedItem['Cruise Speed']) : 0
}

/**
 * Generate an Exclusive Flight opportunity
 * @param {Object} aircraftSpecs - Aircraft specs object containing range and cruise speed
 * @param {string} aircraftName - Name of the aircraft
 * @returns {Promise<Object>} Exclusive flight details with departure, destination, range, duration, and reward markup
 *
 * @example
 * const flight = await ExclusiveFlight(airbusA320neoSpecs, 'Airbus A320neo')
 * // Returns:
 * // {
 * //   aircraft: 'Airbus A320neo',
 * //   departure: 'KJFK',
 * //   departureName: 'John F Kennedy Intl',
 * //   destination: 'EGLL',
 * //   destinationName: 'London Heathrow',
 * //   range: 2850.5,
 * //   duration: 375.2,
 * //   rewardMarkup: 0.45 // 45% bonus
 * // }
 */
export async function ExclusiveFlight(aircraftSpecs, aircraftName) {
  // Get aircraft range and cruise speed
  const maxRange = getAircraftRange(aircraftSpecs)
  const cruiseSpeed = getAircraftCruiseSpeed(aircraftSpecs)

  if (maxRange === 0 || cruiseSpeed === 0) {
    throw new Error('Invalid aircraft specs: missing range or cruise speed')
  }

  // Calculate distance range (15% to 80% of max range)
  const minDistance = maxRange * 0.15
  const maxDistance = maxRange * 0.8

  // Load all airports
  const airports = await loadAirports()

  // Pick random origin airport
  const origin = pickRandomAirport(airports)

  // Find airports within the distance range
  const nearbyAirports = await findNearbyAirports(
    { lat: origin.latitude, lon: origin.longitude },
    { min: minDistance, max: maxDistance }
  )

  // Check if we have valid destinations
  if (!nearbyAirports || nearbyAirports.length === 0) {
    // Retry with a different origin
    return ExclusiveFlight(aircraftSpecs, aircraftName)
  }

  // Pick random destination from nearby airports
  const destination = pickRandomAirport(nearbyAirports)

  // Calculate actual distance
  const actualDistance = distanceNauticalMiles(
    origin.latitude,
    origin.longitude,
    destination.latitude,
    destination.longitude
  )

  // Calculate duration in minutes (distance / speed * 60)
  const duration = (actualDistance / cruiseSpeed) * 60

  // Generate random reward markup between 30% and 60%
  const rewardMarkup = Math.random() * 0.3 + 0.3 // 0.3 to 0.6

  return {
    aircraft: aircraftName,
    departure: origin.icao,
    departureName: origin.airport || origin.name || origin.icao,
    departureCountry: origin.country_code || '',
    destination: destination.icao,
    destinationName: destination.airport || destination.name || destination.icao,
    destinationCountry: destination.country_code || '',
    range: Math.round(actualDistance * 100) / 100,
    duration: Math.round(duration * 100) / 100,
    rewardMarkup: Math.round(rewardMarkup * 100) / 100
  }
}
