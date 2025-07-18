import Link from 'next/link'

export default function Button({ href, children, variant = 'primary', className = '' }) {
  const baseClasses = 'px-8 py-3 rounded-md font-bold transition-all duration-300'
  const variants = {
    primary: 'bg-primary text-white hover:bg-opacity-90',
    secondary: 'bg-secondary text-white hover:bg-opacity-90',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary',
  }

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
