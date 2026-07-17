import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import CityLanding, { type CityData } from "@/components/CityLanding";

const data: CityData = {
  city: "Havířov",
  cityLocative: "Havířově",
  intro:
    "Provádíme výkopové a zemní práce v Havířově a okolí — kanalizační a vodovodní přípojky, výkopy základů, terénní úpravy i demolice. Sídlíme v Dolních Domaslavicích, pár minut od Havířova, takže jsme na místě rychle.",
  detail:
    "Ať už stavíte rodinný dům v Šumbarku, řešíte přípojku v Bludovicích nebo úpravu pozemku v Životicích, připravíme cenovou nabídku zdarma a domluvíme termín, který vám vyhovuje.",
  distanceNote:
    "Z naší základny v Dolních Domaslavicích jsme v Havířově do 15 minut.",
  areas: [
    "Havířov-Město",
    "Šumbark",
    "Bludovice",
    "Životice",
    "Prostřední Suchá",
    "Dolní Datyně",
    "Těrlicko",
    "Horní Bludovice",
  ],
};

export const metadata: Metadata = {
  title: "Výkopové a zemní práce Havířov | Přípojky, výkopy — Vodička",
  description:
    "Výkopové a zemní práce Havířov — kanalizační a vodovodní přípojky, výkopy základů, terénní úpravy, demolice. 20+ let zkušeností, hodnocení 5,0★. Volejte +420 777 599 092.",
  alternates: { canonical: "https://bagr-vykopy.cz/vykopove-prace-havirov" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Výkopové a zemní práce",
  areaServed: { "@type": "City", name: "Havířov" },
  provider: {
    "@type": "LocalBusiness",
    name: "Petr Vodička — Zemní práce",
    telephone: "+420777599092",
    url: "https://bagr-vykopy.cz",
  },
  url: "https://bagr-vykopy.cz/vykopove-prace-havirov",
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
