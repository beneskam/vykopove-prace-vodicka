import type { Metadata } from 'next'
import { Syne, Barlow, Barlow_Condensed, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zemní a výkopové práce Vodička',
  description: 'Profesionální zemní a výkopové práce, kanalizační přípojky a demolice. 20 let zkušeností na klíčových infrastrukturních projektech ČR. Praha a Střední Čechy.',
  keywords: 'zemní práce, výkopové práce, kanalizační přípojky, demolice, terénní úpravy, Praha, Střední Čechy, Vodička',
  openGraph: {
    title: 'Vodička — Zemní a Výkopové Práce',
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
    <html
      lang="cs"
      className={`scroll-smooth ${syne.variable} ${barlow.variable} ${barlowCondensed.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
