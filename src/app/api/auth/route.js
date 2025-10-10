import { NextResponse } from 'next/server'

const USER_TOKEN = process.env.USER_TOKEN

export async function POST(request) {
  const { userToken } = await request.json()

  try {
    if (!userToken || userToken !== USER_TOKEN) {
      return NextResponse.json(
        { status: 'error', message: 'Unauthorized' },
        { status: 401 }
      )
    }
    return NextResponse.json(
      { status: 'success', message: 'Authorized' },
      {
        status: 200
      }
    )
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Server error' },
      { status: 500 }
    )
  }
}
