import { TestimonialCard } from './TestimonialCard'

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
  {
    quote: 'Inapetente incluso para rumiantes.',
    author: 'National Geographyc',
  },
  {
    quote:
      'Lo dejé en la oficina y al día siguiente teníamos tres tickets de Jira menos. No sé si es por el libro o porque alguien se fue.',
    author: 'Un Scrum Master Anónimo',
  },
  {
    quote: 'Mi hijo lo leyó y ahora hace código aún peor. 5 estrellas.',
    author: 'Una madre en Amaozn',
  },
  {
    quote: 'Lo usé como referencia en una code review y me ascendieron. No pregunten.',
    author: 'Senior Developer (auto-proclamado)',
  },
  {
    quote: 'Prefiero hacer pair programming con una cabra que volver a leer este libro.',
    author: 'Un reviewer de Googol',
  },
  {
    quote: 'Mi terapeuta dice que no debería leerlo. Mi terapeuta no sabe JavaScript.',
    author: 'Paciente 0 del burnout',
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

        <div className="grid sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.author} quote={t.quote} author={t.author} />
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-8">
          *Ninguna de estas reseñas es real. Ninguna de estas publicaciones se escribe así. Pero tú has leído hasta
          aquí, así que ya da igual.
        </p>
      </div>
    </section>
  )
}
