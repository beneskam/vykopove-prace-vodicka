import type { Metadata } from "next";
import {
  Syne,
  Barlow,
  Barlow_Condensed,
  DM_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bagr-vykopy.cz"),
  title: {
    default: "Zemní práce Vodička — Výkopy, Přípojky, Demolice | bagr-vykopy.cz",
    template: "%s | Zemní práce Vodička",
  },
  description:
    "Profesionální zemní a výkopové práce, kanalizační a vodovodní přípojky, terénní úpravy a demolice. Přes 20 let zkušeností na dálnicích D48, D55 a infrastrukturních projektech po celé ČR. Volejte: +420 777 599 092",
  keywords: [
    "zemní práce",
    "výkopové práce",
    "kanalizační přípojky",
    "vodovodní přípojky",
    "demolice",
    "terénní úpravy",
    "zámková dlažba",
    "bagr",
    "výkop základů",
    "zemní práce cena",
    "výkopové práce ČR",
    "kanalizace přípojka",
    "vodovod přípojka",
    "Vodička zemní práce",
    "Petr Vodička",
    // Lokální klíčová slova — Moravskoslezský kraj
    "zemní práce Havířov",
    "zemní práce Ostrava",
    "zemní práce Karviná",
    "zemní práce Frýdek-Místek",
    "zemní práce Orlová",
    "zemní práce Bohumín",
    "zemní práce Třinec",
    "zemní práce Opava",
    "zemní práce Český Těšín",
    "zemní práce Kopřivnice",
    "kanalizační přípojka Havířov",
    "kanalizační přípojka Ostrava",
    "kanalizační přípojka Karviná",
    "výkopové práce Moravskoslezský kraj",
    "výkopové práce Havířov",
    "výkopové práce Ostrava",
    "vodovodní přípojka Havířov",
    "vodovodní přípojka Ostrava",
    "demolice Havířov",
    "demolice Ostrava",
    "terénní úpravy Havířov",
    "Petřvald zemní práce",
    "Rychvald zemní práce",
    "Šenov zemní práce",
    "Horní Suchá zemní práce",
    "Dolní Lutyně zemní práce",
    "Těrlicko zemní práce",
    "Albrechtice zemní práce",
  ],
  authors: [{ name: "Petr Vodička" }],
  creator: "Zemní práce Vodička",
  publisher: "Zemní práce Vodička",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Zemní práce Vodička — Výkopy, Přípojky, Demolice",
    description:
      "Profesionální zemní a výkopové práce. Kanalizační a vodovodní přípojky, terénní úpravy, demolice. Přes 20 let zkušeností — dálnice D48, D55 a stovky menších zakázek po celé ČR.",
    url: "https://bagr-vykopy.cz",
    siteName: "Zemní práce Vodička",
    type: "website",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zemní práce Vodička — Výkopy, Přípojky, Demolice",
    description:
      "Profesionální zemní práce, kanalizační a vodovodní přípojky, demolice. Přes 20 let zkušeností na klíčových projektech ČR.",
  },
  alternates: {
    canonical: "https://bagr-vykopy.cz",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bagr-vykopy.cz/#business",
  name: "Zemní práce Vodička",
  alternateName: "Petr Vodička — Zemní a výkopové práce",
  url: "https://bagr-vykopy.cz",
  telephone: "+420777599092",
  email: "petrvodas@seznam.cz",
  description:
    "Profesionální zemní a výkopové práce, kanalizační a vodovodní přípojky, terénní úpravy a demolice. Přes 20 let zkušeností. Působíme v Havířově, Ostravě, Karviné, Frýdku-Místku a celém Moravskoslezském kraji.",
  foundingDate: "2005",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Havířov" },
    { "@type": "City", name: "Ostrava" },
    { "@type": "City", name: "Karviná" },
    { "@type": "City", name: "Frýdek-Místek" },
    { "@type": "City", name: "Orlová" },
    { "@type": "City", name: "Bohumín" },
    { "@type": "City", name: "Třinec" },
    { "@type": "City", name: "Opava" },
    { "@type": "AdministrativeArea", name: "Moravskoslezský kraj" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby zemních prací",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zemní a výkopové práce" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kanalizační přípojky" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vodovodní přípojky" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terénní úpravy a dlažby" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Demolice" } },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="cs"
      className={`scroll-smooth ${syne.variable} ${barlow.variable} ${barlowCondensed.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
