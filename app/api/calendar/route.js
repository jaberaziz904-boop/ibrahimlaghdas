import { NextResponse } from 'next/server'
import { createBooking } from '../../lib/googleCalendar'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time } = body

    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const eventDetails = {
      summary: `استشارة قانونية - ${name}`,
      description: `حجز موعد استشارة من الموقع.\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nالهاتف: ${phone}`,
      start: {
        dateTime: `${date}T${time}:00`,
        timeZone: 'Africa/Casablanca',
      },
      end: {
        dateTime: `${date}T${parseInt(time.split(':')[0]) + 1}:00:00`,
        timeZone: 'Africa/Casablanca',
      },
      attendees: [{ email }],
    }

    const result = await createBooking(eventDetails)

    if (result.success) {
      return NextResponse.json({ message: 'Booking created successfully', event: result.event })
    } else {
      return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 })
    }
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
