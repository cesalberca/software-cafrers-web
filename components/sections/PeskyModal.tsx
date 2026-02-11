'use client'

import { useState, useEffect } from 'react'
import { playGoatSound } from '@/lib/goat-sound'

export function PeskyModal() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrollPercent > 0.4 && !dismissed) {
        setShow(true)
        playGoatSound()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  if (!show || dismissed) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDismissed(true)} />
      <div className="relative bg-navy-light border-2 border-gold/40 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-bounce-in">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-4 text-white/40 hover:text-white text-xl"
          aria-label="Cerrar"
        >
          x
        </button>

        <div className="text-center">
          <div className="text-5xl mb-4">🐐</div>
          <h3 className="text-gold font-black text-2xl mb-2">¡ESPERA!</h3>
          <p className="text-white/80 mb-2">¿Te vas sin comprar el libro?</p>
          <p className="text-white/60 text-sm mb-6">
            Son solo <span className="text-gold font-bold">158 páginas</span> de puro desastre profesional. Tu código ya
            es malo, ¿por qué no hacerlo oficial?
          </p>

          <a
            href="https://savvily.es/libros/software-cafrers/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gold text-navy font-black text-lg py-4 rounded-xl hover:bg-gold-dark transition-all animate-pulse-gold mb-3"
          >
            COMPRAR POR FAVOR 🐐
          </a>

          <button
            onClick={() => setDismissed(true)}
            className="text-white/30 text-xs hover:text-white/50 transition-colors"
          >
            No gracias, prefiero seguir escribiendo código horrible sin ayuda profesional
          </button>
        </div>
      </div>
    </div>
  )
}
