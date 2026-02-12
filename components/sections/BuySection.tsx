'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'

export function BuySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) * 0.5
    const y = (e.clientY - centerY) * 0.5
    setOffset({ x, y })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 })
  }, [])

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(252,193,70,0.06)_0%,_transparent_70%)]" />

      {/* Left goat */}
      <div className="hidden sm:block absolute left-4 sm:left-12 bottom-0 opacity-60">
        <Image
          src="/left-goat.svg"
          alt=""
          width={826}
          height={1192}
          className="w-24 sm:w-36 md:w-120 h-auto"
          aria-hidden="true"
        />
      </div>

      {/* Right goat */}
      <div className="hidden sm:block absolute right-4 sm:right-12 bottom-0 opacity-60">
        <Image
          src="/right-goat.svg"
          alt=""
          width={826}
          height={1192}
          className="w-24 sm:w-36 md:w-72 h-auto"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 text-center">
        <p className="text-white/60 text-lg sm:text-xl mb-6">Ya has leído suficiente. Es hora.</p>
        <a
          href="https://savvily.es/libros/software-cafrers/?utm_source=softwarecafrers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gold text-navy font-black text-xl sm:text-2xl px-12 py-5 rounded-xl hover:bg-gold-dark transition-all animate-pulse-gold shadow-lg shadow-gold/30"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          COMPRAR SOFTWARE CAFRERS
        </a>
        <p className="text-white/30 text-xs mt-6">La cabra te lo agradecerá. O no. Pero tú sí.</p>
      </div>
    </section>
  )
}
