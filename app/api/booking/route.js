import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time } = body

    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Here you would typically integrate with a booking system or send an email notification.
    // For this example, we'll just log the data.
    console.log('New booking received:')
    console.log({ name, email, phone, date, time })

    return NextResponse.json({ message: 'Booking received successfully' })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
