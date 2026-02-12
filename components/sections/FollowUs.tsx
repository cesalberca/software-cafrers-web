import { SocialLinks } from '@/components/SocialLinks'

export function FollowUs() {
  return (
    <section className="py-20 px-4 bg-navy-dark/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4">
          Sigue al Rebaño
        </h2>
        <p className="text-white/60 text-lg mb-8">
          Únete a la comunidad de cafrers en redes sociales. Comparte tu experiencia con el hashtag:
        </p>

        <p className="text-gold font-black text-2xl sm:text-3xl mb-8 font-mono">
          #softwarecafrers
        </p>

        <SocialLinks className="gap-5 [&_a]:text-white/50 [&_a]:hover:text-gold [&_svg]:w-7 [&_svg]:h-7" />

        <p className="text-white/30 text-xs mt-8">
          Publica fotos con el libro, memes de tu código, o capturas de ChatGoat destrozando tus funciones. Todo vale.
        </p>
      </div>
    </section>
  )
}
