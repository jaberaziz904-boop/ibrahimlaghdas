'use client'
import './globals.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <html lang="ar">
      <body>
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <nav className="nav container">
            <Link href="/">
              <img src="/images/logo-main.svg" alt="Laghdas Avocat Logo" width={150} height={50} />
            </Link>
            <div>
              <Link href="/">الرئيسية</Link>
              <Link href="/about">عن المكتب</Link>
              <Link href="/practice-areas">مجالات الخبرة</Link>
              <Link href="/contact">اتصل بنا</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} مكتب الأستاذ إبراهيم لغداس. جميع الحقوق محفوظة.</p>
        </footer>
      </body>
    </html>
  )
}
