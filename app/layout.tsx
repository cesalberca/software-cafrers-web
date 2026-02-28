import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { FathomAnalytics } from '@/components/Fathom'

const montserrat = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin'],
})

const BASE_URL = 'https://www.softwarecafrers.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: 'Software Cafrers',
  title: 'Software Cafrers: Haciendo Código que Haría Vomitar a una Cabra | César Alberca',
  description:
    'El libro definitivo para escribir código terrible. Aprende a crear bugs indetectables, bucles infinitos y abstracciones que solo entendería un lagarto. Por César Alberca. 42a edición.',
  keywords: [
    'Software Cafrers',
    'César Alberca',
    'libro programación',
    'humor programación',
    'código malo',
    'JavaScript',
    'TypeScript',
    'desarrollo software',
    'regalo programador',
    'regalo informático',
    'libro satírico',
    'antipatrones',
    'código espagueti',
    'deuda técnica',
    'clean code',
    'Savvily',
    'cabra',
  ],
  authors: [{ name: 'César Alberca', url: 'https://cesalberca.com' }],
  creator: 'César Alberca',
  publisher: 'Savvily',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Software Cafrers: Haciendo Código que Haría Vomitar a una Cabra',
    description:
      'El libro definitivo para escribir código terrible. Aprende a crear bugs indetectables, bucles infinitos y funciones que devuelven ansiedad.',
    url: BASE_URL,
    siteName: 'Software Cafrers',
    images: [
      {
        url: '/charla-thumbnail.jpg',
        width: 2752,
        height: 1536,
        alt: 'Software Cafrers — Charla de César Alberca sobre el libro',
      },
      {
        url: '/cover.png',
        width: 1082,
        height: 1422,
        alt: 'Portada de Software Cafrers',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Cafrers: Código que Haría Vomitar a una Cabra',
    description: 'El libro definitivo para escribir código terrible. Por César Alberca.',
    creator: '@cesalberca',
    images: ['/charla-thumbnail.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'theme-color': '#d4a017',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Software Cafrers',
    url: BASE_URL,
    description:
      'El libro definitivo para escribir código terrible. Por César Alberca.',
    inLanguage: 'es',
    author: {
      '@type': 'Person',
      name: 'César Alberca',
      url: 'https://cesalberca.com',
      sameAs: [
        'https://twitter.com/cesalberca',
        'https://github.com/cesalberca',
        'https://linkedin.com/in/cesalberca',
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'Software Cafrers: Haciendo Código que Haría Vomitar a una Cabra',
    author: {
      '@type': 'Person',
      name: 'César Alberca',
      url: 'https://cesalberca.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Savvily',
      url: 'https://savvily.es',
    },
    bookEdition: '42a edición',
    inLanguage: 'es',
    genre: ['Humor', 'Programación', 'Tecnología'],
    url: BASE_URL,
    image: `${BASE_URL}/cover.png`,
    description:
      'El libro definitivo para escribir código terrible. Aprende a crear bugs indetectables, bucles infinitos y abstracciones que solo entendería un lagarto.',
    offers: {
      '@type': 'Offer',
      url: 'https://savvily.es/libros/software-cafrers/?utm_source=softwarecafrers.com',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Es este libro para mí?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si escribes código, sí. Si no escribes código, también: es un regalo perfecto para humillar a alguien que sí lo hace. Si eres una cabra, definitivamente no. Ya has sufrido bastante.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Aprenderé algo útil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Define "útil". Si por útil te refieres a técnicas para escribir código que garantice tu puesto de trabajo porque nadie más puede tocarlo, entonces sí. Si te refieres a buenas prácticas... te has equivocado de libro.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo devolverlo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Técnicamente sí, pero ¿emocionalmente? El daño ya está hecho. Es como intentar devolver un tatuaje. El arrepentimiento es irreversible.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Hay descuento por volumen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ofrecemos el plan COMPRA 3, RECIBE 2 Y PAGA 4. Es nuestra oferta más popular porque nadie la entiende y eso genera confianza.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Viene en formato digital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El libro está disponible en formato físico. Consulta la web de Savvily para más detalles.',
        },
      },
      {
        '@type': 'Question',
        name: 'Mi código ya es malo, ¿me servirá?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Siempre se puede empeorar. Esa es la belleza de la programación: el fondo no existe. Este libro te enseñará que lo que creías que era el fondo... era solo el principio.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Es un buen regalo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es el regalo perfecto para: tu compañero de trabajo que rompe producción cada viernes, tu amigo "fullstack" que solo sabe hacer console.log, o tu jefe que insiste en que "refactorizar es perder el tiempo".',
        },
      },
      {
        '@type': 'Question',
        name: '¿Quién hizo las ilustraciones?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Las ilustraciones son obra de Marta Aldarias Villacañas. Puedes ver más de su trabajo en aldariasart.es o en Instagram como @aldarias_art.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Por qué 42a edición?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Porque 42 es la respuesta a la vida, el universo y todo lo demás. Y también es el número de países donde las estructuras de código de este libro son ilegales.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Hay secuelas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, muchas.',
        },
      },
    ],
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <FathomAnalytics />
        {children}
      </body>
    </html>
  )
}
