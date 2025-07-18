import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerCol}>
          <Link href="/" className={styles.logo}>
            مكتب لغداس
          </Link>
          <p>محام بهيئة سطات، ملتزمون بالدفاع عن حقوقكم.</p>
        </div>
        <div className={styles.footerCol}>
          <h4>روابط سريعة</h4>
          <ul>
            <li><Link href="/">الرئيسية</Link></li>
            <li><Link href="/about">عن المكتب</Link></li>
            <li><Link href="/practice-areas">مجالات الخبرة</Link></li>
            <li><Link href="/contact">اتصل بنا</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>معلومات الاتصال</h4>
          <p>العنوان: شارع محمد الخامس، سطات، المغرب</p>
          <p>الهاتف: <a href="tel:+212662100852">+212 662-100852</a></p>
          <p>البريد: <a href="mailto:contact@cabinetlaghdas.ma">contact@cabinetlaghdas.ma</a></p>
        </div>
        <div className={styles.footerCol}>
          <h4>أوقات العمل</h4>
          <p>الإثنين - الجمعة: 9:00 صباحاً - 5:00 مساءً</p>
          <p>السبت - الأحد: مغلق</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} مكتب الأستاذ إبراهيم لغداس. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}
