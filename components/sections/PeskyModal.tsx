'use client'

import { useEffect, useState } from 'react'
import { BuyLink } from '@/components/BuyLink'

export function PeskyModal() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrollPercent > 0.4 && !dismissed) {
        setShow(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  const dismissModal = () => {
    setDismissed(true)
  }

  if (!show || dismissed) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismissModal}
        aria-label="Cerrar"
      />
      <div className="relative bg-navy-light border-2 border-gold/40 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-bounce-in">
        <button
          type="button"
          onClick={dismissModal}
          className="absolute top-3 right-4 text-white/40 hover:text-white text-xl"
          aria-label="Cerrar"
        >
          x
        </button>

        <div className="text-center">
          <div className="text-5xl mb-4">🐐</div>
          <h3 className="text-gold font-black text-2xl mb-2">¡SOY UNA MODAL SIN MODALES!</h3>
          <p className="text-white/80 mb-2">¿Ya vas por la mitad de la página y no has comprado el libro?</p>
          <p className="text-white/60 text-sm mb-6">
            Tu código ya es malo, <span className="text-gold font-bold">¿por qué no hacerlo oficial?</span>
          </p>

          <BuyLink goal="buyModal" size="lg" layout="block" animation="pulse" className="mb-3">
            COMPRAR POR FAVOR 🐐
          </BuyLink>

          <button
            type="button"
            onClick={dismissModal}
            className="text-white/30 text-xs hover:text-white/50 transition-colors"
          >
            No gracias, prefiero seguir escribiendo código horrible sin ayuda profesional
          </button>
        </div>
      </div>
    </div>
  )
}
