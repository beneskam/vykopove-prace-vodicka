import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServiceLanding, { type ServiceData } from "@/components/ServiceLanding";

const data: ServiceData = {
  title: "Vodovodní a kanalizační přípojky",
  intro:
    "Zajišťujeme kompletní realizaci vodovodních a kanalizačních přípojek v Moravskoslezském kraji — od výkopu přes uložení potrubí až po zpětné zasypání a úpravu terénu.",
  detail:
    "Spolupracujeme s ověřenými instalatéry a zajistíme celý proces přípojky na klíč, včetně jednání se správci sítí. Cenovou nabídku připravíme zdarma po prohlídce lokality.",
  included: [
    "Vodovodní přípojky pro rodinné domy",
    "Kanalizační přípojky na klíč",
    "Výkop a uložení potrubí",
    "Součinnost se správci inženýrských sítí",
    "Zpětné zasypání a úprava terénu",
    "Napojení na stávající řad",
  ],
};

export const metadata: Metadata = {
  title: "Vodovodní a kanalizační přípojky | Moravskoslezský kraj — Vodička",
  description:
    "Vodovodní a kanalizační přípojky na klíč v Moravskoslezském kraji. 20+ let zkušeností, hodnocení 5,0★. Nezávazná nabídka zdarma. Volejte +420 777 599 092.",
  alternates: {
    canonical: "https://bagr-vykopy.cz/vodovodni-a-kanalizacni-pripojky",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Vodovodní a kanalizační přípojky",
  areaServed: { "@type": "AdministrativeArea", name: "Moravskoslezský kraj" },
  provider: {
    "@type": "LocalBusiness",
    name: "Petr Vodička — Zemní práce",
    telephone: "+420777599092",
    url: "https://bagr-vykopy.cz",
  },
  url: "https://bagr-vykopy.cz/vodovodni-a-kanalizacni-pripojky",
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
