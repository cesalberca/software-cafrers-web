export function FreeSample() {
  return (
    <section id="muestra" className="py-20 px-4 bg-pattern-code">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4">Muestra Gratuita</h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
          ¿No te fías? Normal. Descarga un capítulo gratis para que confirmes con tus propios ojos que este libro no
          debería existir.
        </p>

        <div className="inline-block border-2 border-dashed border-gold/30 rounded-2xl p-8 bg-navy-light/20 mb-8">
          <div className="text-6xl mb-4">📄</div>
          <p className="text-white/80 font-medium mb-2">Capítulo de muestra en PDF</p>
          <p className="text-white/50 text-sm mb-6">Las primeras páginas, suficientes para sentir el arrepentimiento</p>
          <a
            href="https://savvily.es/libros/software-cafrers/muestra-software-cafrers.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-gold text-gold font-bold px-6 py-3 rounded-lg hover:bg-gold hover:text-navy transition-all"
          >
            Descargar Muestra Gratis
          </a>
        </div>

        <p className="text-white/40 text-xs">
          Advertencia: leer la muestra puede causar una necesidad irrefrenable de comprar el libro completo. O de
          dejarlo para siempre. No hay término medio.
        </p>
      </div>
    </section>
  )
}
