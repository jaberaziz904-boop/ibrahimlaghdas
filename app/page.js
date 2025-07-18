'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
      }}>
        <Image
          src="/images/hero-background.jpg"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        <div style={{ zIndex: 1 }}>
          <h1 style={{ fontSize: '3rem' }}>مكتب الأستاذ إبراهيم لغداس</h1>
          <p style={{ fontSize: '1.25rem' }}>استشارة، دفاع ومواكبة قانونية موثوقة</p>
          <Link href="/contact" style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '1rem 2rem',
            backgroundColor: 'var(--secondary-color)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}>
            تواصل معنا
          </Link>
        </div>
      </section>
      <section className="container" style={{ padding: '4rem 0', display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)'}}>خبرة قانونية في خدمتكم</h2>
          <p>
            نقدم لكم خبرة واسعة لضمان أفضل النتائج لقضاياكم. يلتزم مكتبنا بمبادئ الدقة، القرب، والشفافية في التعامل مع كل موكل.
          </p>
        </div>
        <Image
          src="/images/ibrahim-laghdas-portrait.jpg"
          alt="Ibrahim Laghdas"
          width={400}
          height={500}
          style={{ borderRadius: '10px' }}
        />
      </section>
    </>
  )
}
