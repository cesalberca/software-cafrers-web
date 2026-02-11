import Image from 'next/image'

export function AboutAuthor() {
  return (
    <section id="autor" className="py-20 px-4 bg-navy-dark/50 bg-pattern-code">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-12 text-center">Sobre el Autor</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
                <span className="text-gold font-bold">César Alberca</span> es Arquitecto Frontend de Software, basado en
                España, con más de 10 años de experiencia. Ufff, qué serio queda esto... ¿Mejor en primera persona? Que
                lo estoy escribiendo yo, al fin y al cabo.
              </p>

              <p className="text-lg text-white/90 leading-relaxed">
                Me interesa mucho la arquitectura, las buenas prácticas, el testing y crear aplicaciones Frontend que
                sobrevivan a las semejantes <span className="text-gold font-bold">bazofias de código que haces</span>.
                Sí, tú, el que está leyendo esto. Sabes perfectamente que llevas años haciendo código que haría{' '}
                <span className="text-gold font-bold">tumbar a un ñu</span>. ¿Cuándo piensas parar?
              </p>

              <p className="text-lg text-white/90 leading-relaxed">
                Mientras tanto, yo sigo a lo mío, promoviendo el intrusismo laboral dando turras técnicas sobre
                arquitectura en el Frontend &mdash;también llamadas{' '}
                <span className="text-gold font-bold italic">arquitecturras&trade;</span>
                &mdash;, viajando por encima de mis posibilidades como nómada digital, y acumulando hobbies con la
                esperanza de olvidar que, efectivamente, aún me dedico a programar.
              </p>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://cesalberca.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
                >
                  cesalberca.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <div className="relative">
              <Image
                src="/author.jpg"
                alt="César Alberca - Autor de Software Cafrers"
                width={400}
                height={400}
                className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-gold/20"
              />
              <div className="absolute -bottom-4 -left-4 bg-gold text-navy font-bold text-xs px-3 py-2 rounded-lg -rotate-3">
                Sí, esta es mi cara de &quot;¿por qué haces ese código?&quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
