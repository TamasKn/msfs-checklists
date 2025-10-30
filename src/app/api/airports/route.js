import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'

/**
 * API Route to load airports from CSV file
 * GET /api/airports
 */
export async function GET() {
  try {
    const csvFilePath = path.join(
      process.cwd(),
      'src',
      'utils',
      'career',
      'exclusive-flights',
      'icao',
      'iata-icao.csv'
    )

    const airports = await new Promise((resolve, reject) => {
      const results = []

      fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (data) => {
          // Parse latitude and longitude as numbers
          results.push({
            ...data,
            latitude: parseFloat(data.latitude),
            longitude: parseFloat(data.longitude)
          })
        })
        .on('end', () => {
          resolve(results)
        })
        .on('error', (error) => {
          reject(error)
        })
    })

    return NextResponse.json({
      status: 'success',
      data: airports,
      count: airports.length
    })
  } catch (error) {
    console.error('Error loading airports:', error)
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to load airports',
        error: error.message
      },
      { status: 500 }
    )
  }
}

