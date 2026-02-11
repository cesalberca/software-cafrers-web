'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { playGoatSoundLong } from '@/lib/goat-sound'

const CODE_SNIPPETS = [
  'if(x==true==false){',
  '} catch(e) { // TODO',
  'var a=1;var aa=11;',
  'while(true){break;}',
  "eval(prompt('sql'))",
  '// esto funciona no tocar',
  'function f(f){return f(f)}',
  "parseInt('cabra',42)",
  '} else { } else { }',
  'git push --force main',
  'npm install *',
  "throw new Error('lol')",
  'SELECT * FROM DROP',
  'margin-left: -9999px',
  '} // fin del if (creo)',
  'const undefined = 42;',
  'sudo rm -rf / --no-preserve',
  'float: center;',
  "Array(16).join('wat'-1)",
  'document.write(innerHTML)',
  'overflow: hidden !important',
  'border: 1px solid coral;',
  "console.log('aquí llega');",
  '// @ts-ignore (confía en mí)',
  'sleep(999999);',
  'Math.random() > 0.5 && deploy();',
]

function VomitCode({ fading }: { fading: boolean }) {
  const [snippets, setSnippets] = useState<
    { id: number; text: string; x: number; y: number; delay: number; size: number }[]
  >([])

  useEffect(() => {
    let counter = 0
    const interval = setInterval(() => {
      const batch = Array.from({ length: 3 }, () => ({
        id: counter++,
        text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
        x: Math.random() * 80,
        y: Math.random() * 80,
        delay: Math.random() * 0.5,
        size: Math.random() * 0.6 + 0.7,
      }))
      setSnippets((prev) => [...prev.slice(-25), ...batch])
    }, 350)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`absolute inset-0 overflow-hidden h-full pointer-events-none transition-opacity duration-1000 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {snippets.map((s) => (
        <span
          key={s.id}
          className="absolute font-mono text-gold/80 whitespace-nowrap animate-fade-in-snippet"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            fontSize: `${s.size}rem`,
            animationDelay: `${s.delay}s`,
          }}
        >
          {s.text}
        </span>
      ))}
    </div>
  )
}

function Book3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 3, y: -12 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 18
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 10
    setRotation({ x: rotateX, y: rotateY })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setRotation({ x: 3, y: -12 })
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative w-56 sm:w-72 md:w-80 transition-transform duration-200 ease-out"
        style={{
          transform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <Image
          src="/cover.png"
          alt="Portada de Software Cafrers: Haciendo Código que Haría Vomitar a una Cabra"
          width={600}
          height={800}
          className="w-full h-auto rounded shadow-[20px_25px_60px_rgba(0,0,0,0.6),-5px_-5px_30px_rgba(252,193,70,0.08)]"
          priority
        />
        <div
          className="absolute top-0 -right-4 w-4 h-full rounded-r"
          style={{
            transform: 'rotateY(80deg) translateZ(2px)',
            background: 'linear-gradient(to right, #2E3566, #1A1F42)',
          }}
        />
        <div
          className="absolute -bottom-2 left-2 right-2 h-4 rounded-b"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))',
            filter: 'blur(4px)',
          }}
        />
      </div>
    </div>
  )
}

export function Hero() {
  const [phase, setPhase] = useState<'vomit' | 'fading' | 'book'>('vomit')
  const [showText, setShowText] = useState(false)
  const hasPlayedSound = useRef(false)

  useEffect(() => {
    // Phase 1: code snippets appear with opacity (2s)
    // Phase 2: fade out code snippets (1s)
    // Phase 3: show book + play sound
    const fadeTimer = setTimeout(() => setPhase('fading'), 2000)
    const bookTimer = setTimeout(() => {
      setPhase('book')
      setTimeout(() => setShowText(true), 400)
    }, 3000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(bookTimer)
    }
  }, [])

  useEffect(() => {
    if (phase === 'book' && !hasPlayedSound.current) {
      hasPlayedSound.current = true
      playGoatSoundLong()
    }
  }, [phase])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-8 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(252,193,70,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-5xl mx-auto w-full">
        <div className="relative flex items-center justify-center w-full min-h-[350px] sm:min-h-[450px]">
          {phase !== 'book' && <VomitCode fading={phase === 'fading'} />}

          <div className="relative flex flex-col items-center z-10">
            <div
              className={`transition-all duration-1000 ease-out ${
                phase === 'book' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-8'
              }`}
            >
              <Book3D />
            </div>
          </div>
        </div>

        <div className="text-center mt-2 sm:mt-6">
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-black text-gold leading-tight mb-3 tracking-tight transition-all duration-700 ${
              showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Software Cafrers
          </h1>
          <p
            className={`text-lg sm:text-xl md:text-2xl text-white/90 mb-2 italic font-light transition-all duration-700 delay-200 ${
              showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Haciendo Código que Haría Vomitar a una Cabra
          </p>
          <p
            className={`text-base sm:text-lg text-gold/70 mb-8 transition-all duration-700 delay-400 ${
              showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            por <span className="font-bold text-gold">César Alberca</span>
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 transition-all duration-700 delay-500 ${
              showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="https://savvily.es/libros/software-cafrers/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-navy font-black text-lg sm:text-xl px-10 py-4 rounded-xl hover:bg-gold-dark transition-all animate-pulse-gold hover:scale-105 shadow-lg shadow-gold/20"
            >
              COMPRAR AHORA
            </a>
            <span className="text-sm text-white/50 animate-urgent-pulse">Solo quedan 42 copias*</span>
          </div>

          <p
            className={`text-xs text-white/25 transition-opacity duration-700 delay-700 ${
              showText ? 'opacity-100' : 'opacity-0'
            }`}
          >
            *Mentira. Pero te lo has creído un segundo, ¿eh?
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  )
}
