const TOC_ITEMS = [
  {
    title: 'Comentarios',
    description: 'Aprende a escribir comentarios que confunden más que el propio código',
    icon: '//',
  },
  {
    title: 'Funciones',
    description: 'Funciones de 800 líneas con 12 parámetros y sin nombre descriptivo',
    icon: 'f()',
  },
  {
    title: 'Errores',
    description: 'try/catch(e){} y a otra cosa, mariposa',
    icon: '!',
  },
  {
    title: 'Principios (y finales) de programación',
    description: 'SOLID? Más bien SÓLIDO como una roca: inamovible e incomprensible',
    icon: 'S',
  },
  {
    title: 'HTML',
    description: 'Todo son divs si eres lo suficientemente valiente',
    icon: '<>',
  },
  {
    title: 'CSS',
    description: '!important !important !important',
    icon: '#',
  },
  {
    title: 'Arquitectura',
    description: 'También conocida como Architecutre',
    icon: '{}',
  },
  {
    title: 'Programación orientada a objetos',
    description: 'Herencia de 47 niveles porque YOLO',
    icon: 'OO',
  },
  {
    title: 'Programación funcional',
    description: 'map.filter.reduce.map.filter.jajas',
    icon: 'fn',
  },
  {
    title: 'Testing',
    description: "expect(true).toBe(true)",
    icon: 'OK',
  },
  {
    title: 'Documentación',
    description: '[...]',
    icon: '?',
  },
  {
    title: 'IA',
    description: 'Escribe código de 💩 aumentado por IA',
    icon: 'AI',
  },
  {
    title: 'Otros consejos',
    description: 'Bonus track de desastres que no cabían en ningún capítulo',
    icon: '+',
  },
]

export function WhatsIncluded() {
  return (
    <section id="contenido" className="py-20 px-4 bg-navy-dark/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4 text-center">Qué Incluye</h2>
        <p className="text-center text-white/60 mb-12 text-lg">13 capítulos de puro desastre profesional</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOC_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="group relative border border-gold/10 rounded-xl p-5 bg-navy-light/20 hover:bg-navy-light/40 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 text-gold font-mono font-bold text-sm flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-gold transition-colors">
                    <span className="text-gold/50 font-mono text-xs mr-2">{String(i + 1).padStart(2, '0')}</span>
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block border border-gold/30 rounded-xl p-6 bg-navy-light/30">
            <p className="text-gold font-bold text-lg mb-2">158 páginas de contenido irresponsable</p>
            <p className="text-white/60 text-sm">Cada página peor que la anterior. Garantizado.</p>
            <p
              className={`text-xs text-white/25`}
            >
              No son muchas páginas, pero vaya páginas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
