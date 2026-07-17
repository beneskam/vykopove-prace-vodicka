import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import CityLanding, { type CityData } from "@/components/CityLanding";

const data: CityData = {
  city: "Ostrava",
  cityLocative: "Ostravě",
  intro:
    "Nabízíme výkopové a zemní práce v Ostravě a okolních obcích — kanalizační a vodovodní přípojky, výkopy základů, terénní úpravy a demolice. Máme vlastní techniku a přes 20 let praxe na stavbách po celém Moravskoslezském kraji.",
  detail:
    "Od přípojek pro rodinné domy v Porubě či Zábřehu až po větší zemní práce ve Slezské Ostravě — připravíme nezávaznou cenovou nabídku zdarma a nastoupíme v domluveném termínu.",
  distanceNote:
    "Z Dolních Domaslavic obsluhujeme Ostravu i její okrajové části bez problémů.",
  areas: [
    "Poruba",
    "Zábřeh",
    "Slezská Ostrava",
    "Ostrava-Jih",
    "Vítkovice",
    "Mariánské Hory",
    "Hrabová",
    "Michálkovice",
  ],
};

export const metadata: Metadata = {
  title: "Výkopové a zemní práce Ostrava | Přípojky, výkopy — Vodička",
  description:
    "Výkopové a zemní práce Ostrava — kanalizační a vodovodní přípojky, výkopy základů, terénní úpravy, demolice. 20+ let zkušeností, hodnocení 5,0★. Volejte +420 777 599 092.",
  alternates: { canonical: "https://bagr-vykopy.cz/vykopove-prace-ostrava" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Výkopové a zemní práce",
  areaServed: { "@type": "City", name: "Ostrava" },
  provider: {
    "@type": "LocalBusiness",
    name: "Petr Vodička — Zemní práce",
    telephone: "+420777599092",
    url: "https://bagr-vykopy.cz",
  },
  url: "https://bagr-vykopy.cz/vykopove-prace-ostrava",
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
