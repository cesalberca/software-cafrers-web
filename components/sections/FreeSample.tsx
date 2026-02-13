import { TrackedLink } from '@/components/TrackedLink'

export function FreeSample() {
  return (
    <section id="muestra" className="py-20 px-4 bg-pattern-code">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4">Muestra Gratuita</h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
          ¿Sigues creyendo que no vamos en serio? Normal. Descarga un par de capítulos gratis para que lo confirmes con
          tus propios ojos.
        </p>

        <div className="inline-block border-2 border-dashed border-gold/30 rounded-2xl p-8 bg-navy-light/20 mb-8">
          <div className="text-6xl mb-4">📄</div>
          <p className="text-white/80 font-medium mb-2">Capítulo de muestra en PDF</p>
          <p className="text-white/50 text-sm mb-6">Nada de pirateo que me cabreo</p>
          <TrackedLink
            href="https://savvily.es/libros/software-cafrers/muestra-software-cafrers.pdf?utm_source=softwarecafrers"
            goal="sampleDownload"
          >
            Descargar Muestra Gratis
          </TrackedLink>
        </div>
      </div>
    </section>
  )
}
