import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personSchema, localBusinessSchema, medicalWebPageSchema } from './lib/schema';
import Analytics from './components/Analytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Mariana Lemes - Fisioterapeuta Pediátrica 👶',
    template: '%s | Mariana Lemes 👶'
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
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  metadataBase: new URL('https://marianalemes.com.br'),
  openGraph: {
    title: 'Mariana Lemes - Fisioterapeuta Pediátrica 👶',
    description: 'Fisioterapeuta pediátrica especializada em desenvolvimento infantil. Atendimento humanizado e personalizado para bebês e crianças em São Paulo.',
    url: 'https://marianalemes.com.br',
    siteName: 'Mariana Lemes 👶',
    images: ['/images/mariana-profissional-picture.png'],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalWebPageSchema),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#2563eb" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-primary-50 text-slate-900 overflow-x-hidden`}>
        <Analytics />
        <div className="min-h-screen w-full max-w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}