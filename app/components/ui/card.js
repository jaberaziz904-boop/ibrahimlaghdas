import Image from 'next/image'

export default function Card({ icon, title, children }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
      {icon && <Image src={icon} alt={`${title} icon`} width={64} height={64} className="mx-auto mb-4" />}
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  )
}
