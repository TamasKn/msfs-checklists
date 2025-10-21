import { NextResponse } from 'next/server'

export async function POST(request) {
  const { pilotID } = await request.json()

  if (!pilotID) {
    return NextResponse.json(
      { status: 'error', message: 'Pilot ID required' },
      { status: 400 }
    )
  }

  try {
    // production API
    const res = await fetch(
      `https://www.simbrief.com/api/xml.fetcher.php?userid=${pilotID}&json=1`
    )
    const response = await res.json()

    // Check if API returned an error
    if (response.fetch.status && response.fetch.status !== 'Success') {
      return NextResponse.json(
        { status: 'error', message: 'Pilot ID not found' },
        { status: 403 }
      )
    }

    return NextResponse.json(
      { status: 'success', message: 'Authenticated' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Internal server error' },
      { status: 500 }
    )
  }
}
