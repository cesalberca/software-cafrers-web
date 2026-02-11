import Image from 'next/image'

export function AboutBook() {
  return (
    <section id="libro" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-12 text-center">Sobre el Libro</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <Image
                src="/cover.png"
                alt="Software Cafrers - Portada"
                width={400}
                height={533}
                className="rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_50px_rgba(252,193,70,0.2)] transition-shadow duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-gold text-navy font-black text-sm px-3 py-2 rounded-full rotate-12">
                158 páginas
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-white/90 leading-relaxed">
              Este libro ha llegado a ti por una razón muy concreta: el código que haces es...{' '}
              <span className="text-gold font-bold italic">Pésimo. Vergonzoso. Ofensivo.</span>{' '}
              <strong>Y encima en JavaScript.</strong> Así que sí, este libro es para ti. Para que sigas escribiendo
              código que solo <em>&quot;funciona&quot;</em> en tu local y nadie sabe por qué.{' '}
              <strong>Porque si nadie entiende tu código... Eres indispensable.</strong>
            </p>

            <p className="text-lg text-white/90 leading-relaxed">
              Con este libro aprenderás a crear <span className="text-gold font-bold">bugs indetectables</span>,{' '}
              <span className="text-gold font-bold">bucles anidados recursivos infinitos</span>, estructuras de código
              que son <span className="text-gold font-bold">ilegales en 42 países</span>, abstracciones que{' '}
              <span className="text-gold font-bold">solo entendería un lagarto</span> y funciones que devuelven{' '}
              <span className="text-gold font-bold">ansiedad</span>.
            </p>

            <p className="text-lg text-white/90 leading-relaxed">
              En definitiva, reforzarás tu maestría en escribir código que haría vomitar a una cabra para convertirte en
              un auténtico cafre del desarrollo: un{' '}
              <span className="text-gold font-black">&quot;Software Cafrer&quot;</span>. Y sí, es un{' '}
              <strong>buen regalo</strong> para esa persona que se dedica a &quot;eso&quot; de la informática y que no
              te cae <em>tan bien</em>.
            </p>

            <div className="pt-4">
              <a
                href="https://savvily.es/libros/software-cafrers/?utm_source=softwarecafrers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-6 py-3 rounded-lg hover:bg-gold-dark transition-all hover:scale-105"
              >
                Quiero ser un Software Cafrer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
