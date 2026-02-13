import Image from 'next/image'

const CHATGOAT_FEATURES = [
  {
    icon: '💀',
    title: 'Empeora tu código',
    description:
      'Pásale cualquier función limpia y te la devuelve con vars, nesting extremo y console.logs de producción.',
  },
  {
    icon: '🐐',
    title: 'Personalidad cabra',
    description:
      'Responde con "beeehs", te juzga constantemente, y nunca pide disculpas. Como un code reviewer pero peor.',
  },
  {
    icon: '🔥',
    title: 'Anti-patrones premium',
    description:
      'Domina 15+ técnicas: catch vacíos, números mágicos, copy-paste compulsivo, eval(), any en TypeScript...',
  },
  {
    icon: '📦',
    title: 'Código certificado',
    description:
      'Cada respuesta viene firmada con "Código certificado por ChatGoat\u2122 🐐". Job security garantizada.',
  },
]

export function Bonus() {
  return (
    <section id="bonus" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4 text-center">
          BONUS: ChatGoat&trade; GPT
        </h2>
        <p className="text-center text-white/60 mb-4 text-lg">La cabra que empeora tu código, ahora en ChatGPT</p>
        <p className="text-center text-white/40 mb-12 text-sm">
          Un GPT personalizado con la personalidad del libro. Gratis. Porque el daño no tiene precio.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {CHATGOAT_FEATURES.map((f) => (
            <div
              key={f.title}
              className="border border-gold/10 rounded-xl p-6 bg-navy-light/20 hover:border-gold/30 transition-all"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-gold font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="border border-gold/20 rounded-2xl p-8 bg-gold/5 max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/right-goat.svg"
              alt=""
              width={826}
              height={1192}
              className="w-16 h-16 object-contain"
              aria-hidden="true"
            />
          </div>
          <p className="text-white/80 mb-2 text-lg">
            &ldquo;Pásame tu código limpio y te lo devuelvo <span className="text-gold font-bold">irreconocible</span>.
            Beeeh.&rdquo;
          </p>
          <p className="text-white/40 text-sm mb-6">&mdash; ChatGoat&trade;, Asistente Cafre de Código</p>
          <a
            href="https://chatgpt.com/g/g-698daba62f1c8191a8a3f0c06934490f-software-cafrers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-navy font-black text-lg px-8 py-4 rounded-xl hover:bg-gold-dark transition-all hover:scale-105"
          >
            Probar ChatGoat&trade; en ChatGPT
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/50 text-sm">
            ChatGoat&trade; es un GPT personalizado gratuito basado en el universo de Software Cafrers. No nos hacemos
            responsables de despidos, demandas, ni incidentes veterinarios.
          </p>
        </div>
      </div>
    </section>
  )
}
