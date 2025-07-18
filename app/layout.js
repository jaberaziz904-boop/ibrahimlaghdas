import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'مكتب الأستاذ إبراهيم لغداس',
  description: 'استشارة، دفاع ومواكبة قانونية موثوقة تجمع بين الأصالة والخبرة الحديثة.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="bg-white font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
