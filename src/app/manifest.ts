import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mariana Lemes 👶',
    short_name: 'Mariana Lemes 👶',
    description: 'Fisioterapeuta pediátrica especializada em desenvolvimento infantil em São Paulo. Estimulação precoce e reabilitação para bebês e crianças.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait',
    categories: ['medical', 'health', 'pediatric'],
    lang: 'pt-BR',
    scope: '/',
    icons: [
      {
        src: '/images/mariana-profile.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'maskable'
      },
      {
        src: '/images/mariana-profissional-picture.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ]
  }
}
