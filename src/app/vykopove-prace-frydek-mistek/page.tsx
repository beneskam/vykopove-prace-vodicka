import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import CityLanding, { type CityData } from "@/components/CityLanding";

const data: CityData = {
  city: "Frýdek-Místek",
  cityLocative: "Frýdku-Místku",
  intro:
    "Provádíme výkopové a zemní práce ve Frýdku-Místku a okolí — kanalizační a vodovodní přípojky, výkopy základů, terénní úpravy a demolice. Naše základna v Dolních Domaslavicích leží přímo v okrese Frýdek-Místek, takže jsme u vás rychle a bez zbytečných nákladů na dopravu.",
  detail:
    "Od výkopu základů rodinného domu po přípojky inženýrských sítí — připravíme nezávaznou cenovou nabídku zdarma a nastoupíme v domluveném termínu. Pracujeme s vlastní technikou od 3 do 20 tun.",
  distanceNote:
    "Dolní Domaslavice spadají přímo pod okres Frýdek-Místek — jsme prakticky za rohem.",
  areas: [
    "Frýdek",
    "Místek",
    "Dobrá",
    "Staré Město",
    "Sviadnov",
    "Baška",
    "Frýdlant nad Ostravicí",
    "Paskov",
  ],
};

export const metadata: Metadata = {
  title: "Výkopové a zemní práce Frýdek-Místek | Přípojky — Vodička",
  description:
    "Výkopové a zemní práce Frýdek-Místek — kanalizační a vodovodní přípojky, výkopy základů, terénní úpravy, demolice. 20+ let zkušeností, hodnocení 5,0★. Volejte +420 777 599 092.",
  alternates: {
    canonical: "https://bagr-vykopy.cz/vykopove-prace-frydek-mistek",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Výkopové a zemní práce",
  areaServed: { "@type": "City", name: "Frýdek-Místek" },
  provider: {
    "@type": "LocalBusiness",
    name: "Petr Vodička — Zemní práce",
    telephone: "+420777599092",
    url: "https://bagr-vykopy.cz",
  },
  url: "https://bagr-vykopy.cz/vykopove-prace-frydek-mistek",
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
