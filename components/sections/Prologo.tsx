import Image from 'next/image'

export function Prologo() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-12 text-center">Prólogo</h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-white/90 leading-relaxed">
              El prólogo está escrito por{' '}
              <a
                href="https://www.carlosble.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-bold hover:text-gold-light underline underline-offset-4 transition-colors"
              >
                Carlos Blé
              </a>
              , referente en desarrollo de software, artesanía del código y prácticas ágiles en España y Latinoamérica.
            </p>

            <p className="text-lg text-white/90 leading-relaxed">
              Si alguien sabe lo que es el código limpio, es Carlos. Por eso le pedimos que prologara un libro sobre
              código terrible. La ironía no se le escapó, pero aceptó igualmente. Quizás por compasión.
            </p>

            <div className="border border-gold/20 rounded-xl p-6 bg-navy-light/30">
              <p className="text-white/70 italic text-sm">
                &ldquo;Cuando César me pidió que escribiera el prólogo, pensé que era una broma. Luego leí el manuscrito
                y confirmé que sí, era una broma. Pero de las buenas.&rdquo;
              </p>
              <p className="text-gold text-sm font-bold mt-3">&mdash; Carlos Blé</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <Image
                src="/carlos-ble.jpg"
                alt="Carlos Blé - Autor del prólogo"
                width={280}
                height={280}
                className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-gold/20 object-cover"
              />
              <div className="absolute -bottom-3 -right-3 bg-gold text-navy font-bold text-xs px-3 py-2 rounded-lg rotate-2">
                Prologuista oficial
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
