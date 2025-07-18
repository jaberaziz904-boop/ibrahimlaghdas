'use client'
import styles from './contact.module.css'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="container page-content">
      <h1 className="page-title">تواصلوا معنا للحصول على استشارة قانونية</h1>
      <p className="page-subtitle">املأ النموذج أدناه أو استخدم معلومات الاتصال للتواصل المباشر.</p>

      <div className={styles.contactLayout}>
        <div className={styles.contactFormContainer}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">الاسم الكامل</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">البريد الإلكتروني</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">الموضوع</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">رسالتكم</label>
              <textarea id="message" name="message" rows={6} required></textarea>
            </div>
            <button type="submit" className="btn btn-secondary">إرسال الرسالة</button>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <h3>معلومات المكتب</h3>
          <p><strong>العنوان:</strong> شارع محمد الخامس، الطابق 4، مكتب 12، سطات، المغرب</p>
          <p><strong>الهاتف:</strong> <a href="tel:+212662100852">+212 662-100852</a></p>
          <p><strong>البريد الإلكتروني:</strong> <a href="mailto:contact@cabinetlaghdas.ma">contact@cabinetlaghdas.ma</a></p>

          <h3>أوقات العمل</h3>
          <p>الإثنين - الجمعة: 9:00 صباحاً - 5:00 مساءً</p>
          <p>السبت - الأحد: مغلق</p>

          <div className={styles.mapPlaceholder}>
            <p>هنا مكان الخريطة المضمنة</p>
          </div>
        </div>
      </div>
    </div>
  )
}
