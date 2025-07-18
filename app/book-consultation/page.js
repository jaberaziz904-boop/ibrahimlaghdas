'use client'
import { useState } from 'react'

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('تم حجز موعدك بنجاح!')
        setFormData({ name: '', email: '', phone: '', date: '', time: '' })
      } else {
        alert('حدث خطأ أثناء حجز الموعد. الرجاء المحاولة مرة أخرى.')
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('حدث خطأ فني. الرجاء المحاولة مرة أخرى.')
    }
  }

  return (
    <div className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">حجز موعد استشارة</h1>
          <p className="text-lg text-gray-600 mt-2">املأ النموذج التالي لحجز موعدك.</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
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
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">التاريخ</label>
              <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">الوقت</label>
              <input type="time" name="time" id="time" value={formData.time} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
          </div>
          <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90">تأكيد الحجز</button>
        </form>
      </div>
    </div>
  )
}
