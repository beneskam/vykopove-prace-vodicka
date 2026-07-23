import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServiceLanding, { type ServiceData } from "@/components/ServiceLanding";

const data: ServiceData = {
  title: "Demolice domu a chaty",
  intro:
    "Provádíme demolice rodinných domů, chat a menších staveb v Moravskoslezském kraji, včetně odvozu a likvidace suti. Zajistíme i potřebné doklady pro ohlášení demolice.",
  detail:
    "Demolici přizpůsobíme rozsahu stavby i pozemku — od šetrné ruční demolice v zástavbě po strojní demolici s vlastní technikou. Po demolici pozemek srovnáme a připravíme pro další využití.",
  included: [
    "Demolice rodinných domů a chat",
    "Demolice hospodářských a vedlejších staveb",
    "Odvoz a likvidace stavební suti",
    "Součinnost při ohlášení demolice",
    "Srovnání a úprava pozemku po demolici",
    "Demolice v husté zástavbě i na samotě",
  ],
};

export const metadata: Metadata = {
  title: "Demolice domu a chaty | Moravskoslezský kraj — Vodička",
  description:
    "Demolice domů a chat v Moravskoslezském kraji včetně odvozu suti. 20+ let zkušeností, hodnocení 5,0★. Nezávazná nabídka zdarma. Volejte +420 777 599 092.",
  alternates: {
    canonical: "https://bagr-vykopy.cz/demolice-domu-a-chaty",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Demolice",
  areaServed: { "@type": "AdministrativeArea", name: "Moravskoslezský kraj" },
  provider: {
    "@type": "LocalBusiness",
    name: "Petr Vodička — Zemní práce",
    telephone: "+420777599092",
    url: "https://bagr-vykopy.cz",
  },
  url: "https://bagr-vykopy.cz/demolice-domu-a-chaty",
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
