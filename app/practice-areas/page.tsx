import styles from './practice-areas.module.css'

// You would typically fetch this data from a CMS or API
const practiceAreas = [
  {
    icon: 'fas fa-briefcase',
    title: 'القانون التجاري',
    description: 'تأسيس الشركات، العقود التجارية، النزاعات بين الشركاء، وكل ما يتعلق بأنشطتكم التجارية.',
  },
  {
    icon: 'fas fa-users',
    title: 'قانون الأسرة',
    description: 'قضايا الزواج، الطلاق، الحضانة، النفقة، وكل ما يخص الأحوال الشخصية.',
  },
  {
    icon: 'fas fa-home',
    title: 'القانون العقاري',
    description: 'عقود البيع والشراء، التحفيظ العقاري، النزاعات العقارية، وكل ما يتعلق بملكيتكم.',
  },
  {
    icon: 'fas fa-gavel',
    title: 'القانون الجنائي',
    description: 'الدفاع عن المتهمين في مختلف القضايا الجنائية، من الجنح إلى الجنايات.',
  },
  {
    icon: 'fas fa-file-signature',
    title: 'قانون الشغل',
    description: 'عقود العمل، نزاعات الشغل، التعويضات، وحماية حقوق العمال وأرباب العمل.',
  },
  {
    icon: 'fas fa-car-crash',
    title: 'حوادث السير',
    description: 'المطالبة بالتعويضات المادية والجسدية الناتجة عن حوادث السير.',
  },
]

export default function PracticeAreasPage() {
  return (
    <div className="container page-content">
      <h1 className="page-title">مجالات خبرة تغطي كافة احتياجاتكم القانونية</h1>
      <p className="page-subtitle">نقدم استشارات ودفاع في مجموعة واسعة من التخصصات القانونية لضمان حماية حقوقكم.</p>
      <section className={styles.practiceAreasGrid}>
        {practiceAreas.map((area) => (
          <div key={area.title} className={styles.practiceCard}>
            <i className={area.icon}></i>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
