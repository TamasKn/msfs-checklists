import { NextResponse } from 'next/server'

const API_KEY = process.env.AIRPORTDB_API_KEY
const USER_TOKEN = process.env.USER_TOKEN

export async function POST(request) {
  const { ICAO, userToken } = await request.json()
  if (!userToken || userToken !== USER_TOKEN) {
    return NextResponse.json(
      { status: 'error', message: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    // const res = await fetch(
    //   `https://airportdb.io/api/v1/airport/${ICAO}?apiToken=${API_KEY}`
    // )
    //
    // const data = await res.json()

    // temp
    const data = {
      ident: 'EGLL',
      type: 'large_airport',
      name: 'London Heathrow Airport'
    }

    return NextResponse.json({ status: 'success', data }, { status: 200 })
  } catch (error) {
    return NextResponse.error(error)
  }
}
