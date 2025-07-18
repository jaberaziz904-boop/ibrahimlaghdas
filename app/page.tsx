import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/images/hero-bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className={`container ${styles.heroContent}`}>
          <h1>مكتب الأستاذ إبراهيم لغداس</h1>
          <p>استشارة، دفاع ومواكبة قانونية لحماية حقوقكم ومصالحكم</p>
          <div className={styles.heroButtons}>
            <Link href="/practice-areas" className="btn btn-secondary">
              اكتشف مجالات خبرتنا
            </Link>
            <Link href="/contact" className="btn btn-outline">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      <section className={`container ${styles.aboutBrief}`}>
        <h2>نبذة عن الأستاذ إبراهيم لغداس</h2>
        <p>محام بهيئة سطات، يقدم لكم خبرة واسعة لضمان أفضل النتائج لقضاياكم. يلتزم مكتبنا بمبادئ الدقة، القرب، والشفافية في التعامل مع كل موكل.</p>
        <Link href="/about" className="btn btn-secondary">
          اعرف المزيد
        </Link>
      </section>

      <section className={styles.testimonials}>
        <div className="container">
          <h2>قالوا عنا</h2>
          <div className={styles.testimonialSlider}>
            <div className={`${styles.testimonialItem} ${styles.active}`}>
              <p>"خدمة ممتازة واحترافية عالية. تم التعامل مع قضيتي بكفاءة وسرعة. أنصح بشدة بالتعامل مع مكتب الأستاذ لغداس."</p>
              <h4>- موكل راضٍ</h4>
            </div>
            <div className={styles.testimonialItem}>
              <p>"متابعة دقيقة للقضية وتواصل مستمر. شعرت بالاطمئنان طوال فترة التعامل معهم."</p>
              <h4>- س. العلوي</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
