'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/about', label: 'عن المكتب' },
    { href: '/practice-areas', label: 'مجالات الخبرة' },
    { href: '/contact', label: 'اتصل بنا' },
  ]

  return (
    <header className={styles.stickyHeader}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          مكتب لغداس
        </Link>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={pathname === link.href ? styles.activeLink : ''}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className={`btn btn-primary ${styles.contactBtn}`}>
          طلب استشارة
        </Link>
        <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
