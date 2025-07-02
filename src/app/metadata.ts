import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Mariana Lemes - Fisioterapeuta Pediátrica | Desenvolvimento Infantil São Paulo',
    template: '%s | Mariana Lemes - Fisioterapeuta Pediátrica'
  },
  description: 'Fisioterapeuta pediátrica especializada em desenvolvimento infantil em São Paulo. Atendimento humanizado para bebês e crianças com alterações neurológicas, respiratórias e ortopédicas. Estimulação precoce e reabilitação pediátrica. Agende sua consulta.',
  keywords: [
    'fisioterapia pediátrica',
    'fisioterapia pediátrica São Paulo',
    'desenvolvimento infantil',
    'fisioterapeuta pediatra',
    'crianças',
    'bebês',
    'estimulação precoce',
    'reabilitação pediátrica',
    'fisioterapia neurológica infantil',
    'fisioterapia respiratória pediátrica',
    'atraso desenvolvimento motor',
    'mariana lemes fisioterapeuta',
    'fisioterapia para bebês',
    'consultório fisioterapia pediátrica'
  ],
  authors: [{ name: 'Mariana Lemes', url: 'https://marianalemes.com.br' }],
  creator: 'Mariana Lemes',
  publisher: 'Mariana Lemes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://marianalemes.com.br'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
    },
  },
  category: 'healthcare',
  classification: 'Medical Services',
  openGraph: {
    title: 'Mariana Lemes - Fisioterapeuta Pediátrica | Desenvolvimento Infantil São Paulo',
    description: 'Fisioterapeuta pediátrica especializada em desenvolvimento infantil. Atendimento humanizado e personalizado para bebês e crianças em São Paulo.',
    url: 'https://marianalemes.com.br',
    siteName: 'Mariana Lemes - Fisioterapeuta Pediátrica',
    images: [
      {
        url: '/images/mariana-profissional-picture.png',
        width: 1200,
        height: 630,
        alt: 'Mariana Lemes - Fisioterapeuta Pediátrica especializada em desenvolvimento infantil',
        type: 'image/png',
      },
      {
        url: '/images/mariana-careful-specialist.jpg',
        width: 800,
        height: 600,
        alt: 'Mariana Lemes atendendo criança - Fisioterapia Pediátrica',
        type: 'image/jpeg',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
    countryName: 'Brazil',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariana Lemes - Fisioterapeuta Pediátrica | São Paulo',
    description: 'Fisioterapeuta pediátrica especializada em desenvolvimento infantil. Estimulação precoce e reabilitação para bebês e crianças.',
    images: ['/images/mariana-profissional-picture.png'],
    creator: '@marianalemesfisio',
    site: '@marianalemesfisio',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Paulo',
    'geo.position': '-23.5505;-46.6333',
    'ICBM': '-23.5505, -46.6333',
    'theme-color': '#ffffff',
    'msapplication-TileColor': '#2563eb',
    'application-name': 'Mariana Lemes Fisioterapeuta',
  },
}

