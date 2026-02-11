'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { playGoatSound } from '@/lib/goat-sound'

const GOAT_MESSAGES = [
  '¡Beeeh! ¡Compra el libro ya!',
  '¿Sigues aquí sin comprarlo? ¡Beeeh!',
  'Mi estómago está listo para vomitar tu código...',
  'Llevas mucho rato leyendo sin comprar, ¡beeeh!',
  '¿Qué haces scrolleando? ¡COMPRA!',
  'He visto tu código. Necesitas este libro. BEEEH.',
  'Solo quedan 42 copias (no es verdad, beeeh)',
  'Una cabra no miente. Compra. Beeeh.',
  'Te estoy juzgando desde aquí abajo, beeeh.',
  'Mi abuela cabra dice que compres, beeeh.',
  'Cada segundo sin comprar, un var nace en tu código.',
  'ÚLTIMO AVISO (de los 47 que te voy a dar), beeeh.',
  'Si no compras, haré un fork de tu repo. Beeeh.',
  '¿Qué es eso? ¿Un console.log en producción? COMPRA YA.',
  'Estoy aquí abajo esperando. Beeeh. Sin prisa. BEEEH.',
  '¡No me obligues a subir ahí arriba, beeeh!',
  'Tu código huele peor que mi establo, beeeh.',
]

export function GoatChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState(GOAT_MESSAGES[0])
  const [showBubble, setShowBubble] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const getRandomMessage = useCallback(() => {
    const msg = GOAT_MESSAGES[Math.floor(Math.random() * GOAT_MESSAGES.length)]
    setMessage(msg)
  }, [])

  useEffect(() => {
    const bubbleTimer = setTimeout(() => {
      setShowBubble(true)
      getRandomMessage()
    }, 5000)

    return () => clearTimeout(bubbleTimer)
  }, [getRandomMessage])

  useEffect(() => {
    if (!hasInteracted) return

    const nagInterval = setInterval(() => {
      if (!isOpen) {
        setShowBubble(true)
        getRandomMessage()
      }
    }, 15000)

    return () => clearInterval(nagInterval)
  }, [hasInteracted, isOpen, getRandomMessage])

  const handleToggle = () => {
    setIsOpen(!isOpen)
    setShowBubble(false)
    setHasInteracted(true)
    playGoatSound()
    if (!isOpen) {
      getRandomMessage()
    }
  }

  const handleDismissBubble = () => {
    setShowBubble(false)
    setHasInteracted(true)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {showBubble && !isOpen && (
        <div
          className="bg-gold text-navy rounded-2xl rounded-br-sm p-3 max-w-[250px] shadow-lg animate-bounce-in cursor-pointer"
          onClick={handleDismissBubble}
        >
          <p className="text-sm font-bold">{message}</p>
          <div className="text-xs text-navy/60 mt-1">Click para callar a la cabra</div>
        </div>
      )}

      {isOpen && (
        <div className="bg-navy-light border-2 border-gold/30 rounded-2xl rounded-br-sm w-[300px] shadow-2xl animate-bounce-in overflow-hidden">
          <div className="bg-gold/10 border-b border-gold/20 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/right-goat.svg" alt="" width={826} height={1192} className="w-6 h-6 object-contain" />
              <div>
                <p className="text-gold font-bold text-sm">CabraBot&trade;</p>
                <p className="text-white/50 text-xs">Asistente de compras no solicitado</p>
              </div>
            </div>
            <button
              onClick={handleToggle}
              className="text-white/50 hover:text-white text-lg leading-none"
              aria-label="Cerrar chat de la cabra"
            >
              x
            </button>
          </div>

          <div className="p-4 space-y-3 max-h-[300px] overflow-y-auto">
            <div className="bg-navy-dark/50 rounded-xl rounded-tl-sm p-3">
              <p className="text-white/80 text-sm">{message}</p>
            </div>

            <div className="bg-gold/10 rounded-xl rounded-tr-sm p-3 ml-8">
              <p className="text-white/60 text-xs italic">[Tú, intentando ignorar a una cabra digital]</p>
            </div>

            <div className="bg-navy-dark/50 rounded-xl rounded-tl-sm p-3">
              <p className="text-white/80 text-sm">
                Mira, los dos sabemos cómo acaba esto. Tú comprando el libro y yo dejando de molestarte. Beeeh. 🐐
              </p>
            </div>
          </div>

          <div className="p-3 border-t border-gold/20">
            <a
              href="https://savvily.es/libros/software-cafrers/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gold text-navy font-black text-center py-3 rounded-lg hover:bg-gold-dark transition-all animate-urgent-pulse"
            >
              VALE, COMPRO 🐐
            </a>
            <button
              onClick={() => {
                getRandomMessage()
              }}
              className="block w-full text-white/40 text-xs text-center mt-2 hover:text-white/60 transition-colors"
            >
              No gracias (la cabra insistirá)
            </button>
          </div>
        </div>
      )}

      <button
        onClick={handleToggle}
        className="w-16 h-16 rounded-full bg-navy-light shadow-lg shadow-gold/30 hover:shadow-gold/50 border-2 border-gold transition-all animate-goat-bounce hover:scale-110 flex items-center justify-center relative"
        aria-label="Abrir chat de la cabra para comprar el libro"
      >
        <Image
          src="/right-goat.svg"
          alt=""
          width={826}
          height={1192}
          className="w-10 h-10 object-contain"
          aria-hidden="true"
        />
        {!hasInteracted && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />}
      </button>
    </div>
  )
}
