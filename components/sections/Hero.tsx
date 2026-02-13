'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { SocialLinks } from '@/components/SocialLinks'

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

// Predefined non-overlapping grid positions for code snippets
const GRID_POSITIONS = [
  { x: 2, y: 5 },
  { x: 35, y: 3 },
  { x: 65, y: 2 },
  { x: 5, y: 22 },
  { x: 40, y: 18 },
  { x: 72, y: 20 },
  { x: 8, y: 38 },
  { x: 38, y: 35 },
  { x: 68, y: 37 },
  { x: 3, y: 55 },
  { x: 35, y: 52 },
  { x: 70, y: 55 },
  { x: 10, y: 72 },
  { x: 42, y: 68 },
  { x: 75, y: 72 },
  { x: 20, y: 85 },
  { x: 55, y: 85 },
  { x: 80, y: 88 },
]

function VomitCode({ fading }: { fading: boolean }) {
  const [snippets, setSnippets] = useState<
    { id: number; text: string; x: number; y: number; delay: number; size: number }[]
  >([])

  useEffect(() => {
    let counter = 0
    let posIndex = 0
    const interval = setInterval(() => {
      const batch = Array.from({ length: 3 }, () => {
        const pos = GRID_POSITIONS[posIndex % GRID_POSITIONS.length]
        posIndex++
        return {
          id: counter++,
          text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
          x: pos.x + (Math.random() * 6 - 3),
          y: pos.y + (Math.random() * 4 - 2),
          delay: Math.random() * 0.5,
          size: Math.random() * 0.6 + 0.7,
        }
      })
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
  const [isFlipped, setIsFlipped] = useState(false)

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

  const handleClick = useCallback(() => {
    setIsFlipped((prev) => !prev)
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="cursor-pointer"
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative w-56 sm:w-72 md:w-80 transition-transform duration-700 ease-out"
        style={{
          transform: `rotateY(${rotation.y + (isFlipped ? 180 : 0)}deg) rotateX(${rotation.x}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front cover */}
        <div style={{ backfaceVisibility: 'hidden' }}>
          <Image
            src="/cover.png"
            alt="Portada de Software Cafrers: Haciendo Código que Haría Vomitar a una Cabra"
            width={600}
            height={800}
            className="w-full h-auto rounded shadow-[20px_25px_60px_rgba(0,0,0,0.6),-5px_-5px_30px_rgba(252,193,70,0.08)]"
            priority
          />
        </div>
        {/* Back cover */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <Image
            src="/backcover.png"
            alt="Contraportada de Software Cafrers"
            width={600}
            height={800}
            className="w-full h-auto rounded shadow-[20px_25px_60px_rgba(0,0,0,0.6),-5px_-5px_30px_rgba(252,193,70,0.08)]"
          />
        </div>
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
  const [showGoats, setShowGoats] = useState(false)
  const [onlineCount, setOnlineCount] = useState(0)

  useEffect(() => {
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
    if (showText) {
      const goatTimer = setTimeout(() => setShowGoats(true), 600)
      return () => clearTimeout(goatTimer)
    }
  }, [showText])

  useEffect(() => {
    setOnlineCount(Math.floor(Math.random() * 30) + 85)
    const interval = setInterval(() => {
      setOnlineCount((prev) => prev + Math.floor(Math.random() * 7) - 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mt-16 relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-8 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(252,193,70,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-5xl mx-auto w-full">
        <div className="relative flex items-center justify-center w-full min-h-[350px] sm:min-h-[450px]">
          {phase !== 'book' && <VomitCode fading={phase === 'fading'} />}

          {/* Left goat */}
          <div
            className={`hidden sm:block absolute left-0 bottom-0 sm:bottom-4 z-0 transition-transform duration-700 ease-out ${
              showGoats ? 'translate-x-0' : '-translate-x-[200%]'
            }`}
          >
            <Image
              src="/left-goat.svg"
              alt=""
              width={826}
              height={1192}
              className="w-20 sm:w-28 md:w-106 h-auto opacity-80"
              aria-hidden="true"
            />
          </div>

          <div className="relative flex flex-col items-center z-10">
            <div
              className={`transition-all duration-1000 ease-out ${
                phase === 'book' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-8'
              }`}
            >
              <Book3D />
            </div>
          </div>

          {/* Right goat */}
          <div
            className={`hidden sm:block absolute right-0 bottom-0 sm:bottom-4 z-0 transition-transform duration-700 ease-out ${
              showGoats ? 'translate-x-0' : 'translate-x-[200%]'
            }`}
          >
            <Image
              src="/right-goat.svg"
              alt=""
              width={826}
              height={1192}
              className="w-20 sm:w-28 md:w-72 h-auto opacity-80"
              aria-hidden="true"
            />
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
              href="https://savvily.es/libros/software-cafrers/?utm_source=softwarecafrers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-navy font-black text-lg sm:text-xl px-10 py-4 rounded-xl hover:bg-gold-dark transition-all animate-pulse-gold hover:scale-105 shadow-lg shadow-gold/20"
            >
              COMPRAR AHORA
            </a>
            <div className="flex flex-col items-start gap-1">
              <span className="text-sm text-white/50 animate-urgent-pulse">
                Solo quedan <u>42 copias</u>*
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                {onlineCount} personas viendo esto ahora
              </span>
            </div>
          </div>

          <p
            className={`text-xs text-white/25 transition-opacity duration-700 delay-700 ${
              showText ? 'opacity-100' : 'opacity-0'
            }`}
          >
            *Mentira, pero necesitamos las ventas y esto suele funcionar.
          </p>

          <SocialLinks
            className={`mt-4 transition-all duration-700 delay-700 ${showText ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  )
}
