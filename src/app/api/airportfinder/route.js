import { NextResponse } from 'next/server'

const API_KEY = process.env.AIRPORTDB_API_KEY
const USER_TOKEN = process.env.USER_TOKEN

// Dummy airport database for testing
const AIRPORT_DATABASE = {
  EGLL: {
    ident: 'EGLL',
    type: 'large_airport',
    name: 'London Heathrow Airport',
    country: {
      name: 'United Kingdom'
    }
  },
  EHAM: {
    ident: 'EHAM',
    type: 'large_airport',
    name: 'Amsterdam Airport Schiphol',
    country: {
      name: 'Netherlands'
    }
  },
  KJFK: {
    ident: 'KJFK',
    type: 'large_airport',
    name: 'John F Kennedy International Airport',
    country: {
      name: 'United States'
    }
  },
  KLAX: {
    ident: 'KLAX',
    type: 'large_airport',
    name: 'Los Angeles International Airport',
    country: {
      name: 'United States'
    }
  },
  LFPG: {
    ident: 'LFPG',
    type: 'large_airport',
    name: 'Paris Charles de Gaulle Airport',
    country: {
      name: 'France'
    }
  },
  EDDF: {
    ident: 'EDDF',
    type: 'large_airport',
    name: 'Frankfurt Airport',
    country: {
      name: 'Germany'
    }
  },
  LEMD: {
    ident: 'LEMD',
    type: 'large_airport',
    name: 'Adolfo Suárez Madrid–Barajas Airport',
    country: {
      name: 'Spain'
    }
  },
  LIRF: {
    ident: 'LIRF',
    type: 'large_airport',
    name: 'Leonardo da Vinci–Fiumicino Airport',
    country: {
      name: 'Italy'
    }
  },
  OMDB: {
    ident: 'OMDB',
    type: 'large_airport',
    name: 'Dubai International Airport',
    country: {
      name: 'United Arab Emirates'
    }
  },
  WSSS: {
    ident: 'WSSS',
    type: 'large_airport',
    name: 'Singapore Changi Airport',
    country: {
      name: 'Singapore'
    }
  },
  RJTT: {
    ident: 'RJTT',
    type: 'large_airport',
    name: 'Tokyo Haneda Airport',
    country: {
      name: 'Japan'
    }
  },
  YSSY: {
    ident: 'YSSY',
    type: 'large_airport',
    name: 'Sydney Kingsford Smith International Airport',
    country: {
      name: 'Australia'
    }
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
    let data

    if (process.env.NODE_ENV === 'production') {
      // production API
      const res = await fetch(
        `https://airportdb.io/api/v1/airport/${ICAO}?apiToken=${API_KEY}`
      )
      data = await res.json()

      // Check if the production API returned an error
      if (data.statusCode && data.statusCode !== 200) {
        return NextResponse.json(
          { status: 'error', message: 'Airport not found' },
          { status: data.statusCode }
        )
      }
    } else {
      // Using dummy data for development
      const icaoUpper = ICAO.toUpperCase()
      data = AIRPORT_DATABASE[icaoUpper]

      // If airport not found in dummy database
      if (!data) {
        return NextResponse.json(
          { status: 'error', message: 'Airport not found' },
          { status: 404 }
        )
      }
    }

    return NextResponse.json({ status: 'success', data }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Internal server error' },
      { status: 500 }
    )
  }
}
