'use client'
import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'

export default function BookConsultationPage() {
  const [selectedDay, setSelectedDay] = useState()
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })

  const handleDayClick = (day) => {
    setSelectedDay(day)
    setSelectedTime('')
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedDay || !selectedTime) {
      alert('الرجاء اختيار اليوم والوقت')
      return
    }

    const bookingDetails = {
      ...formData,
      date: format(selectedDay, 'yyyy-MM-dd'),
      time: selectedTime,
    }

    try {
      const response = await fetch('/api/calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingDetails),
      })

      if (response.ok) {
        alert('تم حجز موعدك بنجاح!')
        // Reset form
        setSelectedDay(undefined)
        setSelectedTime('')
        setFormData({ name: '', email: '', phone: '' })
      } else {
        alert('حدث خطأ أثناء حجز الموعد. الرجاء المحاولة مرة أخرى.')
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('حدث خطأ فني. الرجاء المحاولة مرة أخرى.')
    }
  }

  // Dummy time slots
  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00']

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">حجز موعد استشارة</h1>
          <p className="text-lg text-gray-600 mt-2">اختر اليوم والوقت المناسبين لك.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">اختر يوماً</h2>
            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={handleDayClick}
              disabled={{ before: new Date() }}
            />
          </div>
          {selectedDay && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">اختر وقتاً</h2>
              <div className="grid grid-cols-3 gap-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`p-4 rounded-lg text-center ${selectedTime === time ? 'bg-primary text-white' : 'bg-gray-200'}`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {selectedTime && (
                <form onSubmit={handleSubmit} className="mt-8 bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">معلوماتك</h3>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم الكامل</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                  </div>
                  <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90">تأكيد الحجز</button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
