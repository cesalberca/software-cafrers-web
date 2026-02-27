'use client'

import Image from 'next/image'
import { useState } from 'react'

export function Talk() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="charla" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4 text-center">
          BONUS II: La "Charla"
        </h2>
        <p className="text-center text-white/60 mb-4 text-lg">
          42 minutos explicando el origen del libro, los retos y el cómo
        </p>
        <p className="text-center text-white/40 mb-12 text-sm">
          Aquí tienes un teaser de 4 minutos para que veas lo que te espera.
        </p>

        <div className="max-w-3xl mx-auto">
          {!playing ? (
            <button
              type="button"
              className="group relative w-full rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all cursor-pointer"
              onClick={() => setPlaying(true)}
              aria-label="Reproducir teaser de la charla"
            >
              <Image
                src="/charla-thumbnail.jpg"
                alt="Charla Software Cafrers — Yo vengo a hablar de mi libro, por César Alberca"
                width={1456}
                height={816}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-navy-dark/20 transition-all" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-gold/60 group-hover:bg-gold/80 group-hover:border-gold transition-all duration-300">
                  <svg
                    className="w-9 h-9 text-gold ml-1 group-hover:text-navy transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                  Teaser · 4 minutos
                </span>
              </div>
            </button>
          ) : (
            <div className="rounded-2xl overflow-hidden border border-gold/20">
              <video
                src="/charla-teaser.mp4"
                poster="/charla-thumbnail.jpg"
                controls
                autoPlay
                className="w-full"
              />
            </div>
          )}

          <p className="text-center text-white/40 text-xs mt-4">
            Charla completa disponible cuando compres el dichoso libro.
          </p>
        </div>
      </div>
    </section>
  )
}
