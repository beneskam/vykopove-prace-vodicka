import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import CityLanding, { type CityData } from "@/components/CityLanding";

const data: CityData = {
  city: "Třinec",
  cityLocative: "Třinci",
  intro:
    "Provádíme výkopové a zemní práce v Třinci a okolí — kanalizační a vodovodní přípojky, výkopy základů, terénní úpravy a demolice. Díky vlastní technice a dlouholeté praxi zvládneme zakázky v členitém terénu podhůří Beskyd.",
  detail:
    "Od přípojek a výkopů základů po srovnání pozemku a bourací práce — připravíme nezávaznou cenovou nabídku zdarma a nastoupíme v domluveném termínu.",
  distanceNote:
    "Do Třince a okolních obcí v podhůří Beskyd pravidelně vyjíždíme z Dolních Domaslavic.",
  areas: [
    "Třinec-Lyžbice",
    "Kanada",
    "Konská",
    "Nebory",
    "Český Těšín",
    "Jablunkov",
    "Bystřice",
    "Vendryně",
  ],
};

export const metadata: Metadata = {
  title: "Výkopové a zemní práce Třinec | Přípojky, výkopy — Vodička",
  description:
    "Výkopové a zemní práce Třinec — kanalizační a vodovodní přípojky, výkopy základů, terénní úpravy, demolice. 20+ let zkušeností, hodnocení 5,0★. Volejte +420 777 599 092.",
  alternates: { canonical: "https://bagr-vykopy.cz/vykopove-prace-trinec" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Výkopové a zemní práce",
  areaServed: { "@type": "City", name: "Třinec" },
  provider: {
    "@type": "LocalBusiness",
    name: "Petr Vodička — Zemní práce",
    telephone: "+420777599092",
    url: "https://bagr-vykopy.cz",
  },
  url: "https://bagr-vykopy.cz/vykopove-prace-trinec",
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
