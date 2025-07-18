import './globals.css'
import type { Metadata } from 'next'
import { Tajawal, Montserrat } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const tajawal = Tajawal({
  subsets: ['arabic'],
  variable: '--font-tajawal',
  weight: ['400', '700']
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'مكتب الأستاذ إبراهيم لغداس - محامي بهيئة سطات',
  description: 'استشارة، دفاع ومواكبة قانونية لحماية حقوقكم ومصالحكم',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} ${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
