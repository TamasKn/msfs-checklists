import { NextResponse } from 'next/server'

// Dummy airport database for testing
const AIRPORT_DATABASE = {
  EGLL: {
    ident: 'EGLL',
    type: 'large_airport',
    name: 'London Heathrow Airport',
    country: {
      name: 'United Kingdom'
    },
    runways: [
      {
        le_ident: '09',
        he_ident: '27'
      }
    ]
  },
  EHAM: {
    ident: 'EHAM',
    type: 'large_airport',
    name: 'Amsterdam Airport Schiphol',
    country: {
      name: 'Netherlands'
    },
    runways: [
      {
        le_ident: '09',
        he_ident: '27'
      }
    ]
  },
  KJFK: {
    ident: 'KJFK',
    type: 'large_airport',
    name: 'John F Kennedy International Airport',
    country: {
      name: 'United States'
    },
    runways: [
      {
        le_ident: '04L',
        he_ident: '22R'
      },
      {
        le_ident: '04R',
        he_ident: '22L'
      },
      {
        le_ident: '13L',
        he_ident: '31R'
      },
      {
        le_ident: '13R',
        he_ident: '31L'
      }
    ]
  },
  KLAX: {
    ident: 'KLAX',
    type: 'large_airport',
    name: 'Los Angeles International Airport',
    country: {
      name: 'United States'
    },
    runways: [
      {
        le_ident: '06L',
        he_ident: '24R'
      },
      {
        le_ident: '06R',
        he_ident: '24L'
      },
      {
        le_ident: '07L',
        he_ident: '25R'
      },
      {
        le_ident: '07R',
        he_ident: '25L'
      }
    ]
  },
  LFPG: {
    ident: 'LFPG',
    type: 'large_airport',
    name: 'Paris Charles de Gaulle Airport',
    country: {
      name: 'France'
    },
    runways: [
      {
        le_ident: '09',
        he_ident: '27'
      }
    ]
  },
  EDDF: {
    ident: 'EDDF',
    type: 'large_airport',
    name: 'Frankfurt Airport',
    country: {
      name: 'Germany'
    },
    runways: [
      {
        le_ident: '09',
        he_ident: '27'
      }
    ]
  },
  LEMD: {
    ident: 'LEMD',
    type: 'large_airport',
    name: 'Adolfo Suárez Madrid–Barajas Airport',
    country: {
      name: 'Spain'
    },
    runways: [
      {
        le_ident: '09',
        he_ident: '27'
      }
    ]
  },
  OMDB: {
    ident: 'OMDB',
    type: 'large_airport',
    name: 'Dubai International Airport',
    country: {
      name: 'United Arab Emirates'
    },
    runways: [
      {
        le_ident: '09',
        he_ident: '27'
      }
    ]
  }
}

/**
 * POST /api/airportfinder
 * Finds airport information by ICAO code
 */
export async function POST(request) {
  const { ICAO, airportApiKey } = await request.json()

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
        `https://airportdb.io/api/v1/airport/${ICAO}?apiToken=${airportApiKey}`
      )
      data = await res.json()

      // Check if the production API returned an error
      if (data.statusCode && data.statusCode !== 200) {
        if (data.message === 'Unauthorized') {
          return NextResponse.json(
            { status: 'error', message: 'Unauthorized' },
            { status: 401 }
          )
        }
        return NextResponse.json(
          { status: 'error', message: 'Airport not found' },
          { status: 401 }
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
