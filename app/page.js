import Image from 'next/image'
import Button from './components/ui/button'
import Card from './components/ui/card'

const practiceAreas = [
  {
    icon: '/images/icon-commercial-law.svg',
    title: 'القانون التجاري',
    description: 'نقدم استشارات شاملة في القانون التجاري، بما في ذلك العقود التجارية والنزاعات.',
  },
  {
    icon: '/images/icon-corporate-law.svg',
    title: 'قانون الشركات',
    description: 'نساعد في تأسيس الشركات، وإعادة الهيكلة، وجميع المسائل المتعلقة بحوكمة الشركات.',
  },
  {
    icon: '/images/icon-real-estate-law.svg',
    title: 'القانون العقاري',
    description: 'متخصصون في قضايا العقارات، من البيع والشراء إلى النزاعات العقارية.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/images/hero-background.jpg"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">مكتب الأستاذ إبراهيم لغداس، محام بهيئة طنجة</h1>
          <p className="text-xl mb-8">استشارة، دفاع ومواكبة قانونية موثوقة تجمع بين الأصالة والخبرة الحديثة.</p>
          <div className="space-x-4">
            <Button href="/book-consultation" variant="primary">حجز استشارة قانونية</Button>
            <Button href="#practice-areas" variant="outline">اكتشف مجالات خبرتنا</Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">خبرة قانونية تزيد عن 6 سنوات في خدمتكم</h2>
            <p className="text-gray-600 mb-4">
              يضع مكتب الأستاذ إبراهيم لغداس في خدمة الأفراد والمهنيين والشركات خبرة واسعة في معالجة الملفات القانونية المعقدة. نواكبكم بصرامة، وضوح، والتزام للدفاع عن حقوقكم.
            </p>
          </div>
          <div>
            <Image
              src="/images/ibrahim-laghdas-portrait.jpg"
              alt="Ibrahim Laghdas Portrait"
              width={400}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">مجالات الخبرة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <Card key={area.title} icon={area.icon} title={area.title}>
                {area.description}
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/practice-areas" variant="secondary">عرض كل مجالات الخبرة</Button>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl font-bold text-primary mb-4">
            "المحامي ليس موجوداً للمرافعة فحسب، بل للوقاية، الحماية، وإحقاق الحقوق بنزاهة ودقة."
          </p>
          <p className="text-xl text-gray-700">- الأستاذ إبراهيم لغداس</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding text-white">
        <Image
          src="/images/cta-background.jpg"
          alt="CTA Background"
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
        />
        <div className="absolute inset-0 bg-primary opacity-70"></div>
        <div className="z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى استشارة قانونية عاجلة؟</h2>
          <p className="text-lg mb-8">
            نلتزم بتوفير إصغاء فعال، وتقديم إجابة قانونية واضحة، ودفاع حازم في جميع المراحل.
          </p>
          <Button href="/contact" variant="secondary">تواصل معنا الآن</Button>
        </div>
      </section>
    </>
  )
}
