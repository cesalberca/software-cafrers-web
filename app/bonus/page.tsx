import type { Metadata } from 'next'
import Image from 'next/image'
import { ReaderForm } from './reader-form'

// Full talk ("La Charla"), unlisted on YouTube. Just the video id.
const YOUTUBE_VIDEO_ID = 'P82xrtozsw4'

const CHATGOAT_URL = 'https://chatgpt.com/g/g-698daba62f1c8191a8a3f0c06934490f-software-cafrers'

const STICKERS = [
  { src: '/sticker-5000.jpg', alt: 'Cuando encuentras tu primer fichero de 5.000 líneas', rotate: -7 },
  { src: '/sticker-testing.jpg', alt: 'No hace falta hacer tests si confías en tu código', rotate: 4 },
  { src: '/sticker-clown.jpg', alt: 'Voy a usar la IA solo para guiarme... Seguro que lo entiendo', rotate: -3 },
  { src: '/sticker-fry.jpg', alt: 'Los tests pasan a la primera... Quizá no cubren nada', rotate: 6 },
  { src: '/sticker-thisisfine.jpg', alt: 'Después de leer Software Cafrers - This is fine', rotate: -5 },
  { src: '/sticker-history.jpg', alt: '¿Cómo sabemos que funciona? Confianza', rotate: 3 },
  { src: '/sticker-batman.jpg', alt: 'Porque el que lo hizo ya no trabaja aquí', rotate: -6 },
  { src: '/sticker-handshake.jpg', alt: 'Deuda técnica - Lo arreglamos luego', rotate: 5 },
]

export const metadata: Metadata = {
  title: 'Tus bonus | Software Cafrers',
  description: 'Material exclusivo para lectores del libro Software Cafrers.',
  // Unlisted: keep it out of search engines either way.
  robots: { index: false, follow: false },
}

function Gate() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <div className="mb-6 flex justify-center">
        <Image
          src="/right-goat.svg"
          alt=""
          width={826}
          height={1192}
          className="h-24 w-24 animate-float object-contain"
          aria-hidden="true"
          priority
        />
      </div>

      <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gold-dark">Lo que viene con el libro</p>
      <h1 className="mb-4 text-3xl font-black text-gold sm:text-4xl md:text-5xl">Tu bonus cafre te espera</h1>
      <p className="mx-auto mb-8 max-w-md text-lg leading-relaxed text-white/70">
        Has hecho lo correcto: escanear el QR en vez de leer el libro. Déjanos tu email y desbloqueas el botín al
        instante. De paso te apuntas a la newsletter, donde César comparte código que haría vomitar a una cabra.
      </p>

      <div className="rounded-2xl border border-gold/20 bg-navy-light/30 p-6 text-left sm:p-8">
        <ReaderForm />
      </div>

      <p className="mt-8 text-sm text-white/40">
        ¿Te has perdido?{' '}
        <a
          href="https://www.softwarecafrers.com"
          className="text-gold/60 underline underline-offset-4 transition-colors hover:text-gold"
        >
          Volver a softwarecafrers.com
        </a>
      </p>
    </div>
  )
}

function BonusContent() {
  return (
    <div className="mx-auto max-w-4xl">
      <header className="mb-14 text-center">
        <div className="mb-4 text-5xl">🐐</div>
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gold-dark">
          Material exclusivo para lectores
        </p>
        <h1 className="mb-4 text-3xl font-black text-gold sm:text-4xl md:text-5xl">Tus bonus cafres</h1>
        <p className="mx-auto max-w-md text-lg leading-relaxed text-white/70">
          Gracias por escanear el QR del libro. Aquí tienes todo el botín. Úsalo con responsabilidad cero.
        </p>
      </header>

      {/* Bonus 1: la charla completa */}
      <section className="mb-16">
        <h2 className="mb-2 text-2xl font-black text-gold sm:text-3xl">La charla completa</h2>
        <p className="mb-6 text-white/50">Los 42 minutos enteros sobre el origen del libro. Sin teaser que valga.</p>

        <div className="overflow-hidden rounded-2xl border border-gold/20">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`}
            title="La charla completa de Software Cafrers"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full"
          />
        </div>
      </section>

      {/* Bonus 2: ChatGoat */}
      <section className="mb-16">
        <h2 className="mb-2 text-2xl font-black text-gold sm:text-3xl">ChatGoat&trade; GPT</h2>
        <p className="mb-6 text-white/50">La cabra que empeora tu código, ahora en ChatGPT. Gratis.</p>

        <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
          <p className="mb-6 text-lg text-white/80">
            &ldquo;Pásame tu código limpio y te lo devuelvo <span className="font-bold text-gold">irreconocible</span>.
            Beeeh.&rdquo;
          </p>
          <a
            href={CHATGOAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-lg font-black text-navy transition-all hover:bg-gold-dark hover:scale-105"
          >
            Abrir ChatGoat&trade; en ChatGPT
          </a>
        </div>
      </section>

      {/* Bonus 3: stickers */}
      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-black text-gold sm:text-3xl">Los stickers</h2>
        <p className="mb-8 text-white/50">
          Para el grupo de trabajo. O para tu terapeuta. Haz clic en cada uno para descargarlo.
        </p>

        <div className="grid grid-cols-2 items-start justify-items-center gap-x-6 gap-y-10 px-2 sm:grid-cols-3 md:grid-cols-4">
          {STICKERS.map((sticker) => (
            <a
              key={sticker.src}
              href={sticker.src}
              download
              style={{ transform: `rotate(${sticker.rotate}deg)` }}
              className="group relative block overflow-hidden rounded-sm border-[10px] border-white shadow-[0_6px_24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:z-10 hover:rotate-0 hover:scale-110"
              aria-label={`Descargar sticker: ${sticker.alt}`}
            >
              <Image
                src={sticker.src}
                alt={sticker.alt}
                width={640}
                height={480}
                className="block h-auto w-full object-contain"
              />
            </a>
          ))}
        </div>
      </section>

      <p className="mt-16 text-center text-sm text-white/30">
        ¿Te has perdido?{' '}
        <a
          href="https://www.softwarecafrers.com"
          className="text-gold/60 underline underline-offset-4 transition-colors hover:text-gold"
        >
          Volver a softwarecafrers.com
        </a>
      </p>
    </div>
  )
}

export default async function BonusPage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const { token } = await searchParams
  // Read directly (not via the throwing env helper) so the page still renders the gate
  // if BONUS_TOKEN isn't configured yet, instead of crashing for visitors.
  const expected = process.env.BONUS_TOKEN
  const unlocked = Boolean(expected) && token === expected

  return (
    <main className="min-h-screen bg-navy bg-pattern-code px-4 py-16">{unlocked ? <BonusContent /> : <Gate />}</main>
  )
}
