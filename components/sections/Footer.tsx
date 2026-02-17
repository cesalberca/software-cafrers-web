import Image from 'next/image'
import { SocialLinks } from '@/components/SocialLinks'

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gold/10 flex justify-center">
      <div className="max-w-4xl mx-auto space-y-6 flex flex-col items-center justify-center">
        <a
          href="https://savvily.es/?utm_source=softwarecafrers.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <Image
            src="/savvily.png"
            alt="Savvily - Conocimiento que compartir"
            width={200}
            height={100}
            className="w-auto h-10 mx-auto"
          />
        </a>

        <div className="text-white/50 text-sm space-y-2">
          <p>
            <span className="text-gold/80 font-semibold">
              Software Cafrers: Haciendo Código que Haría Vomitar a una Cabra
            </span>
          </p>
          <p>
            Incluye Prólogo de{' '}
            <a
              href="https://www.carlosble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold underline underline-offset-4 transition-colors"
            >
              Carlos Blé
            </a>{' '}
            y Epílogo de{' '}
            <a
              href="https://adrianferrera.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold underline underline-offset-4 transition-colors"
            >
              Adrián Ferrera
            </a>
          </p>
          <p>
            por{' '}
            <a
              href="https://cesalberca.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold underline underline-offset-4 transition-colors"
            >
              César Alberca
            </a>
          </p>
          <p>
            Ilustraciones por{' '}
            <a
              href="https://aldariasart.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold underline underline-offset-4 transition-colors"
            >
              Marta Aldarias Villacañas
            </a>{' '}
            (
            <a
              href="https://instagram.com/aldarias_art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold underline underline-offset-4 transition-colors"
            >
              @aldarias_art
            </a>
            )
          </p>
          <p>
            Publicado por{' '}
            <a
              href="https://savvily.es/?utm_source=softwarecafrers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold underline underline-offset-4 transition-colors"
            >
              Savvily
            </a>
          </p>
          <p>
            Código{' '}
            <a
              href="https://github.com/cesalberca/software-cafrers-web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold underline underline-offset-4 transition-colors"
            >
              Open Source
            </a>
          </p>

          <p className="text-white/20 text-xs max-w-lg mx-auto mt-4">
            Ningún animal fue dañado durante la creación de este libro. Varios desarrolladores sí, pero eso es
            irrelevante. Todas las reseñas son ficticias. Los nombres de las publicaciones están mal escritos a
            propósito. Si has llegado hasta aquí, probablemente deberías comprar el libro.
          </p>
        </div>

        <SocialLinks className="pt-2" />

        <div className="pt-4 border-t border-gold/5">
          <p className="text-white/15 text-xs">
            &copy; {new Date().getFullYear()} César Alberca. Todos los derechos reservados. Publicado por Savvily.
          </p>
        </div>
      </div>
    </footer>
  )
}
