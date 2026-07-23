import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServiceLanding, { type ServiceData } from "@/components/ServiceLanding";

const data: ServiceData = {
  title: "Zemní a výkopové práce",
  intro:
    "Realizujeme zemní a výkopové práce v Moravskoslezském kraji — od výkopů základů rodinných domů po rozsáhlejší zemní práce pro firmy. Pracujeme s vlastní technikou od 3 do 20 tun.",
  detail:
    "Ať už potřebujete výkop pro základovou desku, srovnání pozemku nebo zemní práce v rámci větší zakázky, připravíme nezávaznou cenovou nabídku zdarma a domluvíme termín, který vám vyhovuje.",
  included: [
    "Výkopy základových desek a pásů",
    "Zemní práce pro rodinné domy i firmy",
    "Výkopy pro inženýrské sítě",
    "Svahování a modelace terénu",
    "Výkopy bazénů a jímek",
    "Odvoz a likvidace vytěžené zeminy",
  ],
};

export const metadata: Metadata = {
  title: "Zemní a výkopové práce | Moravskoslezský kraj — Vodička",
  description:
    "Zemní a výkopové práce v Moravskoslezském kraji — výkopy základů, terénní úpravy, inženýrské sítě. 20+ let zkušeností, hodnocení 5,0★. Volejte +420 777 599 092.",
  alternates: {
    canonical: "https://bagr-vykopy.cz/zemni-a-vykopove-prace",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Zemní a výkopové práce",
  areaServed: { "@type": "AdministrativeArea", name: "Moravskoslezský kraj" },
  provider: {
    "@type": "LocalBusiness",
    name: "Petr Vodička — Zemní práce",
    telephone: "+420777599092",
    url: "https://bagr-vykopy.cz",
  },
  url: "https://bagr-vykopy.cz/zemni-a-vykopove-prace",
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
