'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './ui/button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/logo-main.svg" alt="Laghdas Avocat Logo" width={150} height={50} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">
                الرئيسية
              </Link>
              <Link href="/practice-areas" className="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">
                مجالات الخبرة
              </Link>
              <Link href="/contact" className="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">
                اتصل بنا
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Button href="/book-consultation" variant="secondary">
              حجز استشارة
            </Button>
          </div>
          {/* Mobile menu button will be added later */}
        </div>
      </div>
    </nav>
  )
}
