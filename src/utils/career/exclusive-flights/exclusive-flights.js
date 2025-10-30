import csv from 'csv-parser'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Path to the CSV file
const csvFilePath = path.join(__dirname, 'icao', 'iata-icao.csv')

/**
 * Load airports from CSV file
 * @returns {Promise<Array>} Promise that resolves with array of airport objects
 */
const loadAirports = () => {
  return new Promise((resolve, reject) => {
    const airports = []

    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (data) => {
        // Parse latitude and longitude as numbers
        airports.push({
          ...data,
          latitude: parseFloat(data.latitude),
          longitude: parseFloat(data.longitude)
        })
      })
      .on('end', () => {
        console.log(`Loaded ${airports.length} airports from CSV`)
        resolve(airports)
      })
      .on('error', (error) => {
        console.error('Error reading CSV file:', error)
        reject(error)
      })
  })
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
 * Consider given Aircraft's range (min: 15%, max: 80%)
 * Check if nearbyAirports is not null
 * Reward is +30-60%
 * **/

export async function ExclusiveFlight(aircraft) {
  /** --------- **/
  const airports = await loadAirports()
  const orig = pickRandomAirport(airports)

  const nearbyAirports = await findNearbyAirports(
    { lat: orig.latitude, lon: orig.longitude },
    { min: 350, max: 2000 }
  ).then((res) => res)

  const dest = pickRandomAirport(nearbyAirports)
  console.table(orig)
  console.table(dest)

  // return {
  //   aircraft:
  //   departure:
  //   destination:
  //   range:
  //   duration:
  //   reward:
  // }
}
