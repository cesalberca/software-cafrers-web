import Image from 'next/image'

export function Epilogo() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-12 text-center">Epílogo</h2>

        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <Image
                src="/adrian-ferrera.jpg"
                alt="Adrián Ferrera - Autor del epílogo"
                width={280}
                height={280}
                className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-gold/20 object-cover"
              />
              <div className="absolute -bottom-3 -left-3 bg-gold text-navy font-bold text-xs px-3 py-2 rounded-lg -rotate-2">
                Epiloguista oficial
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-white/90 leading-relaxed">
              El epílogo corre a cargo de{' '}
              <a
                href="https://adrianferrera.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-bold hover:text-gold-light underline underline-offset-4 transition-colors"
              >
                Adrián Ferrera
              </a>
              , Lead Software Developer & Consultant en{' '}
              <a
                href="https://leanmind.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-bold hover:text-gold-light underline underline-offset-4 transition-colors"
              >
                LeanMind
              </a>
              , desarrollador de software y divulgador técnico, conocido por su enfoque práctico y su capacidad para
              explicar conceptos complejos con claridad.
            </p>

            <p className="text-lg text-white/90 leading-relaxed">
              Adrián confabuló la idea una charla que más tarde inspiraría la creación de este libro. Por tanto, en caso
              de hate o repercusiones legales debemos responsabilizarlo a él.
            </p>

            <div className="border border-gold/20 rounded-xl p-6 bg-navy-light/30">
              <p className="text-white/70 italic text-sm">
                &ldquo;Escribir el epílogo de este libro fue como hacer una code review del apocalipsis. Cada página era
                peor que la anterior, y aun así no podía parar de leer.&rdquo;
              </p>
              <p className="text-gold text-sm font-bold mt-3">&mdash; Adrián Ferrera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
