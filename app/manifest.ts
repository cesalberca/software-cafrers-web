import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Software Cafrers',
    short_name: 'Software Cafrers',
    description:
      'El libro definitivo para escribir código terrible. Por César Alberca.',
    start_url: '/',
    display: 'browser',
    background_color: '#0f1629',
    theme_color: '#d4a017',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
