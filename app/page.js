import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>مكتب الأستاذ إبراهيم لغداس</h1>
        <p style={{ fontSize: '1.25rem', color: '#555' }}>استشارة، دفاع ومواكبة قانونية موثوقة</p>
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
      </section>
    </div>
  )
}
