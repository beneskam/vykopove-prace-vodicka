import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vodička — Zemní & Výkopové Práce | Praha & Střední Čechy',
  description: 'Profesionální zemní a výkopové práce, kanalizační přípojky a demolice. 20 let zkušeností na klíčových infrastrukturních projektech ČR. Praha a Střední Čechy.',
  keywords: 'zemní práce, výkopové práce, kanalizační přípojky, demolice, terénní úpravy, Praha, Střední Čechy, Vodička',
  openGraph: {
    title: 'Vodička — Zemní & Výkopové Práce',
    description: 'Profesionální zemní a výkopové práce v Praze a Středočeském kraji. 20 let zkušeností, moderní technika JCB.',
    type: 'website',
    locale: 'cs_CZ',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
