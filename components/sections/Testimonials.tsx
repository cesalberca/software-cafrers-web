import { TestimonialCard } from './TestimonialCard'
import {VideoTestimonials} from "@/components/sections/VideoTestimonials";

const TESTIMONIALS = [
  {
    quote: 'Más que un libro técnico, técnicamente es un libro.',
    author: 'Neu York Times',
  },
  {
    quote: 'Ideal para calzar monitores.',
    author: 'Revista Forves',
  },
  {
    quote: 'Lo tuvimos que leer con guantes.',
    author: 'The Gaurdian',
  },
  {
    quote: 'Una obra que redefine el concepto de "publicable".',
    author: 'The Washingon Post',
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4 text-center">
          Lo Que Dicen De Este Libro
        </h2>
        <p className="text-center text-white/60 mb-12 text-lg">
          Reseñas 100% reales* de publicaciones 100% existentes*
        </p>

        <VideoTestimonials/>

        <div className="grid sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.author} quote={t.quote} author={t.author} />
          ))}
        </div>

        <div className="mt-10 text-center border border-dashed border-gold/20 rounded-xl p-6 max-w-xl mx-auto bg-navy-light/10">
          <p className="text-gold font-bold text-lg mb-2">
            ¿Has leído el libro? ¡Deja tu reseña!
          </p>
          <p className="text-white/60 text-sm mb-4">
            Envíanos tu testimonio y puede que aparezca aquí.
          </p>
          <a
            href="mailto:software.cafrers@cesalberca.com?subject=Testimonio%20Software%20Cafrers"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-bold text-sm underline underline-offset-4 transition-colors"
          >
            Enviar testimonio
          </a>
          <p className="text-white/30 text-xs mt-3">
            La cabra se reserva el derecho de editar tu reseña para hacerla más dramática.
          </p>
        </div>

        <p className="text-center text-white/30 text-xs mt-8">
          *Ninguna de estas reseñas es real. Ninguna de estas publicaciones se escribe así. Pero tú has leído hasta
          aquí, así que ya da igual.
        </p>
      </div>
    </section>
  )
}
