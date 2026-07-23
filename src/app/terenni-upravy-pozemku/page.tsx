import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServiceLanding, { type ServiceData } from "@/components/ServiceLanding";

const data: ServiceData = {
  title: "Terénní úpravy pozemku",
  intro:
    "Provádíme terénní úpravy pozemků v Moravskoslezském kraji — srovnání terénu, modelaci svahů i přípravu pozemku pro stavbu nebo zahradní úpravy.",
  detail:
    "Terén upravíme podle vašich potřeb, ať už jde o přípravu stavební parcely, srovnání pozemku po výstavbě nebo úpravu zahrady. Pracujeme s vlastní technikou a nabídku připravíme zdarma.",
  included: [
    "Srovnání a modelace terénu",
    "Příprava pozemku pro stavbu",
    "Svahování a zpevnění terénu",
    "Navážky a odtěžení zeminy",
    "Úprava pozemku po výstavbě",
    "Příprava podkladu pro zahradní úpravy",
  ],
};

export const metadata: Metadata = {
  title: "Terénní úpravy pozemku | Moravskoslezský kraj — Vodička",
  description:
    "Terénní úpravy pozemků v Moravskoslezském kraji — srovnání terénu, modelace, příprava pro stavbu. 20+ let zkušeností, hodnocení 5,0★. Volejte +420 777 599 092.",
  alternates: {
    canonical: "https://bagr-vykopy.cz/terenni-upravy-pozemku",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Terénní úpravy",
  areaServed: { "@type": "AdministrativeArea", name: "Moravskoslezský kraj" },
  provider: {
    "@type": "LocalBusiness",
    name: "Petr Vodička — Zemní práce",
    telephone: "+420777599092",
    url: "https://bagr-vykopy.cz",
  },
  url: "https://bagr-vykopy.cz/terenni-upravy-pozemku",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <ServiceLanding data={data} />
      <CTA />
      <Footer />
    </>
  );
}
