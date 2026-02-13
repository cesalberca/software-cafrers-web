'use client'

import { useState, useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { label: 'Libro', href: '#libro' },
  { label: 'Autor', href: '#autor' },
  { label: 'Contenido', href: '#contenido' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Muestra', href: '#muestra', superheading: 'Gratis' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > lastScrollY.current && currentY > 100)
      setScrolled(currentY > 50)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold/10' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="text-gold font-black text-sm sm:text-base tracking-tight leading-tight">
          <span>Software Cafrers</span>
          <span className="block text-[0.55rem] sm:text-[0.6rem] text-white font-medium tracking-normal">
            Haciendo Código que Haría Vomitar a una Cabra
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white/60 hover:text-gold text-sm px-3 py-1.5 rounded-lg hover:bg-gold/5 transition-all"
            >
              {'superheading' in item && item.superheading && (
                <span className="absolute -top-0.5 left-10 text-[0.55rem] font-bold text-gold bg-navy-dark/80 px-1.5 py-0 rounded-sm leading-tight">
                  {item.superheading}
                </span>
              )}
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://savvily.es/libros/software-cafrers/?utm_source=softwarecafrers"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-navy font-bold text-xs sm:text-sm px-4 py-1.5 rounded-lg hover:bg-gold-dark transition-all"
        >
          Comprar
        </a>
      </div>
    </header>
  )
}
