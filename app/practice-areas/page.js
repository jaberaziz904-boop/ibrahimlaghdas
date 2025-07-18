import Card from '../components/ui/card'

const practiceAreas = [
  {
    icon: '/images/icon-commercial-law.svg',
    title: 'القانون التجاري',
    description: 'نقدم استشارات شاملة في القانون التجاري، بما في ذلك العقود التجارية، والنزاعات بين الشركات، والإفلاس والتصفية.',
  },
  {
    icon: '/images/icon-corporate-law.svg',
    title: 'قانون الشركات',
    description: 'نساعد في تأسيس الشركات، وإعادة الهيكلة، وعمليات الاندماج والاستحواذ، وجميع المسائل المتعلقة بحوكمة الشركات.',
  },
  {
    icon: '/images/icon-real-estate-law.svg',
    title: 'القانون العقاري',
    description: 'متخصصون في قضايا العقارات، من البيع والشراء إلى عقود الإيجار، والنزاعات العقارية، والتحفيظ العقاري.',
  },
  {
    icon: '/images/icon-labor-law.svg',
    title: 'قانون الشغل',
    description: 'ندافع عن حقوق العمال وأصحاب العمل في جميع جوانب قانون العمل، بما في ذلك عقود العمل، والفصل، والتعويضات.',
  },
  {
    icon: '/images/icon-family-law.svg',
    title: 'قانون الأسرة',
    description: 'نتعامل مع قضايا الأسرة، بما في ذلك الزواج، والطلاق، وحضانة الأطفال، والنفقة، والميراث.',
  },
  {
    icon: '/images/icon-criminal-law.svg',
    title: 'القانون الجنائي',
    description: 'نوفر دفاعًا قويًا في القضايا الجنائية، من الجنح إلى الجنايات، في جميع مراحل الدعوى.',
  },
]

export default function PracticeAreasPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">مجالات الخبرة</h1>
          <p className="text-lg text-gray-600 mt-2">نقدم خدمات قانونية متكاملة في مختلف المجالات.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <Card key={area.title} icon={area.icon} title={area.title}>
              {area.description}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
