import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import CityLanding, { type CityData } from "@/components/CityLanding";

const data: CityData = {
  city: "Karviná",
  cityLocative: "Karviné",
  intro:
    "Nabízíme výkopové a zemní práce v Karviné a okolí — kanalizační a vodovodní přípojky, výkopy základů, terénní úpravy a demolice. Máme přes 20 let zkušeností se zemními pracemi po celém Moravskoslezském kraji a vlastní strojní techniku.",
  detail:
    "Ať už jde o přípojku pro rodinný dům, výkop základů nebo srovnání pozemku, připravíme cenovou nabídku zdarma a domluvíme termín podle vašich potřeb.",
  distanceNote:
    "Z Dolních Domaslavic obsluhujeme celý region Karvinska spolehlivě a včas.",
  areas: [
    "Karviná-Fryštát",
    "Nové Město",
    "Ráj",
    "Staré Město",
    "Darkov",
    "Orlová",
    "Petřvald",
    "Stonava",
  ],
};

export const metadata: Metadata = {
  title: "Výkopové a zemní práce Karviná | Přípojky, výkopy — Vodička",
  description:
    "Výkopové a zemní práce Karviná — kanalizační a vodovodní přípojky, výkopy základů, terénní úpravy, demolice. 20+ let zkušeností, hodnocení 5,0★. Volejte +420 777 599 092.",
  alternates: { canonical: "https://bagr-vykopy.cz/vykopove-prace-karvina" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Výkopové a zemní práce",
  areaServed: { "@type": "City", name: "Karviná" },
  provider: {
    "@type": "LocalBusiness",
    name: "Petr Vodička — Zemní práce",
    telephone: "+420777599092",
    url: "https://bagr-vykopy.cz",
  },
  url: "https://bagr-vykopy.cz/vykopove-prace-karvina",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <CityLanding data={data} />
      <CTA />
      <Footer />
    </>
  );
}
