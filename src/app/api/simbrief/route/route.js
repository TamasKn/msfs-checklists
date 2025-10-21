import { NextResponse } from 'next/server'

export async function POST(request) {
  const { pilotID } = await request.json()

  if (!pilotID) {
    return NextResponse.json(
      { status: 'error', message: 'SimBrief pilot ID is required' },
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
        { status: 'error', message: 'Pilot ID or route not found' },
        { status: 400 }
      )
    }

    const {
      flight_number,
      costindex,
      initial_altitude,
      route_distance,
      cruise_tas,
      cruise_mach,
      passengers,
      route
    } = response.general

    const dep = response.origin
    const dest = response.destination

    const data = {
      general: {
        flight_number,
        costindex,
        initial_altitude,
        route_distance,
        cruise_tas,
        cruise_mach,
        passengers,
        route
      },
      origin: {
        icao_code: dep.icao_code,
        name: dep.name,
        plan_rwy: dep.plan_rwy,
        trans_alt: dep.trans_alt,
        metar: dep.metar
      },
      destination: {
        icao_code: dest.icao_code,
        name: dest.name,
        plan_rwy: dest.plan_rwy,
        trans_alt: dest.trans_alt,
        metar: dest.metar
      },
      aircraft: response.aircraft,
      fuel: response.fuel,
      times: response.times,
      weights: response.weights,
      impacts: response.impacts,
      crew: response.crew,
      ofp: `${response.files.directory}${response.files.pdf.link}`,
      skyvector: response.links.skyvector,
      api_params: response.api_params
    }

    return NextResponse.json({ status: 'success', data: data }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Internal server error' },
      { status: 500 }
    )
  }
}
