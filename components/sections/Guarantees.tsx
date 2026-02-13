'use client'

import { useState, useEffect } from 'react'

function NegativeCounter() {
  const [seconds, setSeconds] = useState(-1)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const abs = Math.abs(seconds)
  const mins = Math.floor(abs / 60)
  const secs = abs % 60

  return (
    <span className="text-gold font-bold font-mono">
      -{mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')} minutos
    </span>
  )
}

const GUARANTEES = [
  {
    icon: '🐐',
    title: 'Garantía de Vómito Caprino',
    description:
      'Si una cabra lee este libro y NO vomita, te devolvemos el dinero. Solo tienes que traer la cabra, el ticket de compra, y un veterinario certificado que confirme que la cabra estaba sana antes de la lectura.',
  },
  {
    icon: '💀',
    title: 'Garantía de Empeoramiento',
    description:
      'Garantizamos que tu código será PEOR después de leer este libro. Si por alguna razón mejora, contáctanos y te enviamos un capítulo extra para arreglarlo.',
  },
  {
    icon: '🔥',
    title: 'Garantía de Indispensabilidad',
    description:
      "Aplica las técnicas de este libro y nadie podrá despedirte. Porque nadie más podrá tocar tu código. Es job security con pasos extra. Y si te despiden... Haber estudiao'.",
  },
  {
    icon: '📦',
    title: 'Garantía de Devolución Inversa',
    description:
      'Compra 3, recibe 2, paga 4 y devuelve 5. Así de buena es nuestra política de devolución. Descuida, nosotros tampoco la entendemos.',
  },
]

export function Guarantees() {
  return (
    <section id="garantias" className="py-20 px-4 bg-navy-dark/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4 text-center">
          Garantías Inquebrantables*
        </h2>
        <p className="text-center text-white/60 mb-12 text-lg">Compromisos que cumpliremos al pie de la letra**</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {GUARANTEES.map((g) => (
            <div
              key={g.title}
              className="border border-gold/10 rounded-xl p-6 bg-navy-light/20 hover:border-gold/30 transition-all"
            >
              <div className="text-4xl mb-4">{g.icon}</div>
              <h3 className="text-gold font-bold text-lg mb-2">{g.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border border-gold/20 rounded-xl p-8 bg-gold/5 max-w-2xl mx-auto">
          <p className="text-gold font-black text-xl mb-2 animate-urgent-pulse">
            OFERTA EXCLUSIVA LIMITADA IRREPETIBLE ÚNICA
          </p>
          <p className="text-white/80 mb-4">
            Compra el libro en los próximos <NegativeCounter /> y recibe... exactamente lo mismo. Pero con la
            satisfacción de haber comprado rápido.
          </p>
          <a
            href="https://savvily.es/libros/software-cafrers/?utm_source=softwarecafrers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-navy font-black text-lg px-8 py-4 rounded-lg hover:bg-gold-dark transition-all animate-pulse-gold hover:scale-105"
          >
            COMPRAR ANTES DE QUE SEA TARDE***
          </a>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          *Muy quebrantables. **No. ***Nunca es tarde, pero quedaba dramático.
        </p>
      </div>
    </section>
  )
}
