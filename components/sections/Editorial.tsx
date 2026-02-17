import Image from 'next/image'

export function Editorial() {
  return (
    <section id="editorial" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-8">Editorial</h2>

        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Publicado por{' '}
          <a
            href="https://savvily.es/?utm_source=softwarecafrers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-bold hover:text-gold-light underline underline-offset-4 transition-colors"
          >
            Savvily
          </a>
          , la editorial que tuvo el valor (o la falta de criterio) de publicar este libro. Su lema es
          &quot;Conocimiento que compartir&quot;, aunque en este caso quizás deberían haber compartido... menos.
        </p>

        <a
          href="https://savvily.es/?utm_source=softwarecafrers.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8 hover:opacity-80 transition-opacity max-w-[200]"
        >
          <Image
            src="/savvily.png"
            alt="Savvily - Conocimiento que compartir"
            width={400}
            height={200}
            className="w-auto"
          />
        </a>

        <div className="border border-gold/20 rounded-xl p-8 bg-navy-light/30 max-w-2xl mx-auto">
          <p className="text-white/70 italic text-sm mb-4">
            &quot;Cuando César nos envió el manuscrito, el antivirus saltó, vimos entonces el potencial de que se
            expandiese como una plaga. A veces el mercado premia lo que la dignidad castiga.&quot;
          </p>
          <p className="text-gold text-sm font-bold">&mdash; Departamento editorial de Savvily</p>
        </div>

        <div className="mt-8">
          <p className="text-white/50 text-sm">
            Ilustraciones por <span className="text-gold/80 font-semibold">Marta Aldarias Villacañas</span>
          </p>
          <div className="flex items-center justify-center gap-4 mt-2 text-sm">
            <a
              href="https://aldariasart.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors underline underline-offset-4"
            >
              aldariasart.es
            </a>
            <a
              href="https://instagram.com/aldarias_art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors underline underline-offset-4"
            >
              @aldarias_art
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
