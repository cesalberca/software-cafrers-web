'use client'

import { useState } from 'react'

const VIDEOS = [
  {
    id: 'video1',
    name: 'Dev #1',
    quote: 'Lo leí y mi código empeoró un 300%. Totalmente recomendable.',
    thumbnail: 'bg-gradient-to-b from-amber-100/20 to-amber-50/10',
  },
  {
    id: 'video2',
    name: 'Dev #2',
    quote: 'Mi equipo me regaló este libro. Debería preocuparme.',
    thumbnail: 'bg-gradient-to-b from-red-100/20 to-red-50/10',
  },
  {
    id: 'video3',
    name: 'Dev #3',
    quote: 'Ahora escribo código que ni yo entiendo. Gracias, César.',
    thumbnail: 'bg-gradient-to-b from-emerald-100/20 to-emerald-50/10',
  },
]

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-14 h-14 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-gold/80 group-hover:border-gold transition-all duration-300">
        <svg
          className="w-6 h-6 text-white ml-1 group-hover:text-navy transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  )
}

function VideoCard({ video }: { video: (typeof VIDEOS)[number] }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all cursor-pointer"
      onClick={() => setPlaying(!playing)}
    >
      <div className={`aspect-[9/16] ${video.thumbnail} relative`}>
        <div className="absolute inset-0 bg-navy-dark/30" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-dark/90 to-transparent">
          <p className="text-white/90 text-sm font-medium">{video.name}</p>
          <p className="text-white/60 text-xs mt-1 italic">&ldquo;{video.quote}&rdquo;</p>
        </div>
        {!playing && <PlayButton />}
        {playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-dark/80">
            <p className="text-gold font-mono text-sm text-center px-4">
              [Video reproduciéndose]
              <br />
              <span className="text-white/50 text-xs">(Imagina a alguien quejándose de tu código)</span>
            </p>
          </div>
        )}
      </div>
      <div className="absolute top-3 right-3">
        <div className="w-8 h-8 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm">
          <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function VideoTestimonials() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
        {VIDEOS.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <div className="mt-10 text-center border border-dashed border-gold/20 rounded-xl p-6 max-w-xl mx-auto bg-navy-light/10">
        <p className="text-gold font-bold text-lg mb-2">¿Has leído el libro? ¡Grábate!</p>
        <p className="text-white/60 text-sm mb-4">
          Envía un vídeo en <span className="text-gold/80 font-medium">formato horizontal</span> hablando del libro de
          la forma más graciosa que puedas.
        </p>

        <a
          href="mailto:software.cafrers@cesalberca.com?subject=V%C3%ADdeo%20testimonio%20Software%20Cafrers"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-bold text-sm underline underline-offset-4 transition-colors"
        >
          Enviar vídeo
        </a>

        <p className="text-white/30 text-xs mt-3">
          Los mejores vídeos aparecerán aquí. La cabra selecciona personalmente.
        </p>
      </div>
    </div>
  )
}
