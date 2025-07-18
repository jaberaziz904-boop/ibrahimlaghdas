import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">عن مكتبنا</h1>
          <p className="text-lg text-gray-600 mt-2">خبرة، نزاهة، والتزام.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/ibrahim-laghdas-portrait.jpg"
              alt="Ibrahim Laghdas Portrait"
              width={500}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">الأستاذ إبراهيم لغداس</h2>
            <p className="text-gray-600 mb-4">
              محام بهيئة طنجة، يتمتع بخبرة تزيد عن 6 سنوات في مختلف فروع القانون. أسس مكتبه على قيم النزاهة والشفافية والالتزام التام تجاه موكليه.
            </p>
            <p className="text-gray-600 mb-4">
              تخرج الأستاذ لغداس من كلية الحقوق المرموقة، وبدأ مسيرته المهنية في أحد أكبر مكاتب المحاماة في المغرب، حيث اكتسب خبرة واسعة في التعامل مع القضايا المعقدة.
            </p>
            <p className="text-gray-600">
              يؤمن الأستاذ لغداس بأن دور المحامي لا يقتصر على الدفاع في المحاكم، بل يشمل أيضا تقديم النصح والإرشاد للوقاية من النزاعات القانونية.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
