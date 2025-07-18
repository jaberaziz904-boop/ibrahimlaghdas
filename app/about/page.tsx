import Image from 'next/image'
import styles from './about.module.css'

export default function AboutPage() {
  return (
    <div className="container page-content">
      <h1 className="page-title">من نحن</h1>
      <section className={styles.aboutDetailed}>
        <div className={styles.aboutImage}>
          <Image src="/images/lawyer-portrait.jpg" alt="الأستاذ إبراهيم لغداس" width={400} height={500} />
        </div>
        <div className={styles.aboutText}>
          <h2>مسيرة من الخبرة والتفاني</h2>
          <p>الأستاذ إبراهيم لغداس، محام بهيئة سطات، كرس مسيرته المهنية للدفاع عن حقوق الأفراد والشركات على حد سواء. بخبرة تمتد لسنوات في مختلف فروع القانون، أسس مكتبه ليكون منارة للعدالة والاستشارة القانونية الموثوقة.</p>
          <h3>قيمنا الأساسية</h3>
          <ul>
            <li><strong>الدقة:</strong> تحليل دقيق لكل قضية لضمان بناء استراتيجية دفاع متكاملة.</li>
            <li><strong>القرب:</strong> نحن نستمع لموكلينا ونتفهم أوضاعهم لنقدم لهم الدعم الكامل.</li>
            <li><strong>الشفافية:</strong> نؤمن بالتواصل الواضح والصريح مع موكلينا في جميع مراحل القضية.</li>
          </ul>
          <p>نحن هنا لنواكبكم في كل خطوة، ونوفر لكم الحماية القانونية التي تستحقونها. هدفنا ليس فقط الفوز بالقضايا، بل بناء علاقة ثقة دائمة مع كل من يطرق باب مكتبنا.</p>
        </div>
      </section>
    </div>
  )
}
