'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">اتصل بمكتبنا</h1>
          <p className="text-lg text-gray-600 mt-2">نحن هنا لمساعدتك.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">معلومات الاتصال</h2>
            <div className="space-y-4">
              <p><strong>العنوان:</strong> شارع محمد الخامس، الطابق 4، مكتب 12، سطات، المغرب</p>
              <p><strong>الهاتف:</strong> <a href="tel:+212627609789" className="text-secondary hover:underline">+212 627-609789</a></p>
              <p><strong>البريد الإلكتروني:</strong> <a href="mailto:contact@laghdasavocat.com" className="text-secondary hover:underline">contact@laghdasavocat.com</a></p>
            </div>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">أوقات العمل</h2>
            <p>الإثنين - الجمعة: 9:00 صباحاً - 5:00 مساءً</p>
            <p>السبت - الأحد: مغلق</p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم الكامل</label>
                <input type="text" name="name" id="name" onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                <input type="email" name="email" id="email" onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
                <input type="tel" name="phone" id="phone" onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">رسالتك</label>
                <textarea name="message" id="message" rows="4" onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90">إرسال</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
