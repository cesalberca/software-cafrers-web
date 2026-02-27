import Image from 'next/image'

const STICKERS = [
  {
    src: '/sticker-5000.jpg',
    alt: 'Cuando encuentras tu primer fichero de 5.000 líneas de código',
    width: 640,
    height: 480,
    rotate: -7,
  },
  {
    src: '/sticker-testing.jpg',
    alt: 'No hace falta hacer tests si confías en tu código',
    width: 640,
    height: 480,
    rotate: 4,
  },
  {
    src: '/sticker-clown.jpg',
    alt: 'Voy a usar la IA solo para guiarme... Seguro que lo entiendo',
    width: 640,
    height: 720,
    rotate: -3,
  },
  {
    src: '/sticker-fry.jpg',
    alt: 'Los tests pasan a la primera... Quizá los tests no cubren nada',
    width: 640,
    height: 480,
    rotate: 6,
  },
  {
    src: '/sticker-thisisfine.jpg',
    alt: 'Después de leer Software Cafrers — This is fine',
    width: 640,
    height: 320,
    rotate: -5,
  },
  {
    src: '/sticker-history.jpg',
    alt: '¿Cómo sabemos que funciona? Confianza',
    width: 640,
    height: 480,
    rotate: 3,
  },
  {
    src: '/sticker-batman.jpg',
    alt: '¿Por qué está hecho así? Porque el que lo hizo ya no trabaja aquí',
    width: 640,
    height: 480,
    rotate: -6,
  },
  {
    src: '/sticker-handshake.jpg',
    alt: 'Deuda técnica — Lo arreglamos luego / No tenemos tiempo para hacerlo bien',
    width: 640,
    height: 640,
    rotate: 5,
  },
]

export function Stickers() {
  return (
    <section id="stickers" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4 text-center">
          BONUS III: Stickers de WhatsApp
        </h2>
        <p className="text-center text-white/60 mb-4 text-lg">
          Para compartir con tu equipo. O con tu terapeuta.
        </p>
        <p className="text-center text-white/40 mb-12 text-sm">
          15 stickers de alta cafrez-idad para el grupo de trabajo
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10 px-4 items-start justify-items-center">
          {STICKERS.map((sticker) => (
            <div
              key={sticker.src}
              style={{ transform: `rotate(${sticker.rotate}deg)` }}
              className="rounded-sm overflow-hidden border-[10px] border-white shadow-[0_6px_24px_rgba(0,0,0,0.5)] hover:scale-110 hover:rotate-0 hover:z-10 relative transition-all duration-300 cursor-pointer"
            >
              <Image
                src={sticker.src}
                alt={sticker.alt}
                width={sticker.width}
                height={sticker.height}
                className="w-full h-auto object-contain block"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-14">
          Incluidos al comprar el libro. La cabra aprueba su uso en reuniones.
        </p>
      </div>
    </section>
  )
}
