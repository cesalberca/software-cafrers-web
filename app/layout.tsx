import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { FathomAnalytics } from '@/components/Fathom'

const montserrat = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://savvily.es/libros/software-cafrers/'),
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
    'desarrollo software',
    'regalo programador',
    'libro satírico',
    'cabra',
  ],
  authors: [{ name: 'César Alberca', url: 'https://cesalberca.com' }],
  creator: 'César Alberca',
  publisher: 'Savvily',
  openGraph: {
    title: 'Software Cafrers: Haciendo Código que Haría Vomitar a una Cabra',
    description:
      'El libro definitivo para escribir código terrible. Aprende a crear bugs indetectables, bucles infinitos y funciones que devuelven ansiedad.',
    url: 'https://savvily.es/libros/software-cafrers/',
    siteName: 'Software Cafrers',
    images: [
      {
        url: '/cover.png',
        width: 600,
        height: 800,
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
    images: ['/cover.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://savvily.es/libros/software-cafrers/" />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              genre: 'Humor / Programación',
              url: 'https://savvily.es/libros/software-cafrers/',
              image: '/cover.png',
              description:
                'El libro definitivo para escribir código terrible. Aprende a crear bugs indetectables, bucles infinitos y abstracciones que solo entendería un lagarto.',
            }),
          }}
        />
        <title>Software Cafrers: Haciendo Código que Haría Vomitar a una Cabra</title>
      </head>

      <body className={`${montserrat.variable} antialiased`}>
        <FathomAnalytics />
        {children}
      </body>
    </html>
  )
}
