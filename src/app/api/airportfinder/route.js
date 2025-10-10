import { NextResponse } from 'next/server'

const API_KEY = process.env.AIRPORTDB_API_KEY
const USER_TOKEN = process.env.USER_TOKEN

// Dummy airport database for testing
const AIRPORT_DATABASE = {
  EGLL: {
    ident: 'EGLL',
    type: 'large_airport',
    name: 'London Heathrow Airport'
  },
  EHAM: {
    ident: 'EHAM',
    type: 'large_airport',
    name: 'Amsterdam Airport Schiphol'
  },
  KJFK: {
    ident: 'KJFK',
    type: 'large_airport',
    name: 'John F Kennedy International Airport'
  },
  KLAX: {
    ident: 'KLAX',
    type: 'large_airport',
    name: 'Los Angeles International Airport'
  },
  LFPG: {
    ident: 'LFPG',
    type: 'large_airport',
    name: 'Paris Charles de Gaulle Airport'
  },
  EDDF: {
    ident: 'EDDF',
    type: 'large_airport',
    name: 'Frankfurt Airport'
  },
  LEMD: {
    ident: 'LEMD',
    type: 'large_airport',
    name: 'Adolfo Suárez Madrid–Barajas Airport'
  },
  LIRF: {
    ident: 'LIRF',
    type: 'large_airport',
    name: 'Leonardo da Vinci–Fiumicino Airport'
  },
  OMDB: {
    ident: 'OMDB',
    type: 'large_airport',
    name: 'Dubai International Airport'
  },
  WSSS: {
    ident: 'WSSS',
    type: 'large_airport',
    name: 'Singapore Changi Airport'
  },
  RJTT: {
    ident: 'RJTT',
    type: 'large_airport',
    name: 'Tokyo Haneda Airport'
  },
  YSSY: {
    ident: 'YSSY',
    type: 'large_airport',
    name: 'Sydney Kingsford Smith International Airport'
  }
}

/**
 * POST /api/airportfinder
 * Finds airport information by ICAO code
 */
export async function POST(request) {
  const { ICAO, userToken } = await request.json()

  if (!userToken || userToken !== USER_TOKEN) {
    return NextResponse.json(
      { status: 'error', message: 'Unauthorized' },
      { status: 401 }
    )
  }

  if (!ICAO) {
    return NextResponse.json(
      { status: 'error', message: 'ICAO code is required' },
      { status: 400 }
    )
  }

  try {
    // Uncomment when using real API
    // const res = await fetch(
    //   `https://airportdb.io/api/v1/airport/${ICAO}?apiToken=${API_KEY}`
    // )
    // const data = await res.json()

    // Using dummy data for now
    const icaoUpper = ICAO.toUpperCase()
    const data = AIRPORT_DATABASE[icaoUpper]

    if (!data) {
      return NextResponse.json(
        { status: 'error', message: 'Airport not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ status: 'success', data }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Internal server error' },
      { status: 500 }
    )
  }
}
