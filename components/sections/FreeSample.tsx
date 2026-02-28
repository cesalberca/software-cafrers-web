'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { TrackedLink } from '@/components/TrackedLink'

const PAGES = [
  ...[1, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34].map((page) => ({
    src: `/book-pages/page-${page}.jpg`,
    alt: `Página ${page} de Software Cafrers`,
    width: 1270,
    height: 1667,
  })),
  {
    src: '/backcover.png',
    alt: 'Contraportada de Software Cafrers',
    width: 1082,
    height: 1422,
  },
]

export function FreeSample() {
  const [selected, setSelected] = useState<number | null>(null)

  const close = useCallback(() => setSelected(null), [])

  const prev = useCallback(() => setSelected((i) => (i !== null && i > 0 ? i - 1 : i)), [])
  const next = useCallback(
    () => setSelected((i) => (i !== null && i < PAGES.length - 1 ? i + 1 : i)),
    [],
  )

  useEffect(() => {
    if (selected === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <>
      <section id="muestra" className="py-20 bg-pattern-code">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4">Muestra Gratuita</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            ¿Sigues creyendo que no vamos en serio? Normal. Echa un vistazo a las primeras páginas para que lo
            confirmes con tus propios ojos.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto px-8 pb-6 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PAGES.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setSelected(i)}
                className="flex-none snap-center w-[18.2rem] sm:w-[20.8rem] rounded-xl overflow-hidden border border-gold/10 hover:border-gold/40 shadow-xl hover:shadow-gold/10 transition-all hover:scale-[1.02] cursor-zoom-in"
                aria-label={`Ver ${p.alt} en grande`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  className="w-full h-auto object-contain block"
                />
              </button>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-navy to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-navy to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto text-center px-4 mt-10">
          <p className="text-white/40 text-sm mb-8">← Desliza para ver más páginas · Haz clic para ampliar →</p>

          <div className="inline-block border-2 border-dashed border-gold/30 rounded-2xl p-8 bg-navy-light/20">
            <div className="text-6xl mb-4">📄</div>
            <p className="text-white/80 font-medium mb-2">Capítulo de muestra en PDF</p>
            <p className="text-white/50 text-sm mb-6">Nada de pirateo que me cabreo</p>
            <TrackedLink
              href="https://savvily.es/libros/software-cafrers/muestra-software-cafrers.pdf?utm_source=softwarecafrers.com"
              goal="sampleDownload"
            >
              Descargar Muestra Gratis
            </TrackedLink>
          </div>
        </div>
      </section>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev() }}
            disabled={selected === 0}
            className="absolute left-3 sm:left-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-20 transition-all"
            aria-label="Página anterior"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw] sm:max-w-2xl rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PAGES[selected].src}
              alt={PAGES[selected].alt}
              width={PAGES[selected].width}
              height={PAGES[selected].height}
              className="max-h-[90vh] w-auto object-contain"
              priority
            />
            <p className="absolute bottom-2 left-0 right-0 text-center text-white/50 text-xs">
              {selected + 1} / {PAGES.length}
            </p>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next() }}
            disabled={selected === PAGES.length - 1}
            className="absolute right-3 sm:right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-20 transition-all"
            aria-label="Página siguiente"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Close */}
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
