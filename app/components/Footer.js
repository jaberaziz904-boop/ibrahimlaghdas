import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Image src="/images/logo-main.svg" alt="Laghdas Avocat Logo" width={150} height={50} className="mb-4" />
            <p className="text-sm text-gray-300">
              مكتب محاماة يلتزم بتقديم أفضل الخدمات القانونية لعملائه، مع التركيز على النزاهة والاحترافية.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-secondary">الرئيسية</Link></li>
              <li><Link href="/about" className="hover:text-secondary">عن المكتب</Link></li>
              <li><Link href="/practice-areas" className="hover:text-secondary">مجالات الخبرة</Link></li>
              <li><Link href="/contact" className="hover:text-secondary">اتصل بنا</Link></li>
              <li><Link href="/book-consultation" className="hover:text-secondary">حجز استشارة</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">معلومات الاتصال</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="ml-2">📍</span>
                <span>شارع محمد الخامس، الطابق 4، مكتب 12، سطات، المغرب</span>
              </li>
              <li className="flex items-start">
                <span className="ml-2">📞</span>
                <a href="tel:+212627609789" className="hover:text-secondary">+212 627-609789</a>
              </li>
              <li className="flex items-start">
                <span className="ml-2">✉️</span>
                <a href="mailto:contact@laghdasavocat.com" className="hover:text-secondary">contact@laghdasavocat.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">أوقات العمل</h3>
            <p className="text-sm">الإثنين - الجمعة: 9:00 صباحاً - 5:00 مساءً</p>
            <p className="text-sm">السبت - الأحد: مغلق</p>
            <div className="flex space-x-4 mt-4">
              {/* Add social media links here */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} مكتب الأستاذ إبراهيم لغداس. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
