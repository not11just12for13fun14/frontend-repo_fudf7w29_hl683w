import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ brand = 'Deyu Creative' }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-inner" />
            <span>{brand}</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700 transition-colors">Get a quote</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/80 shadow hover:bg-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-gray-800 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700">Get a quote</a>
          </div>
        </div>
      )}
    </header>
  )
}
