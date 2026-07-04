import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů (GDPR) | Petr Vodička — Zemní práce",
  description:
    "Zásady zpracování osobních údajů a používání cookies na webu bagr-vykopy.cz.",
  robots: { index: false },
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-barlow-condensed), sans-serif",
  fontWeight: 700,
  fontSize: 24,
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  margin: "40px 0 12px",
};

const text: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.7,
  margin: "0 0 12px",
  color: "#3a3f43",
};

export default function GdprPage() {
  return (
    <main style={{ padding: "120px 0 80px", background: "#fff" }}>
      <Container>
        <div style={{ maxWidth: 720 }}>
          <h1
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 900,
              fontSize: 40,
              textTransform: "uppercase",
              margin: "0 0 8px",
            }}
          >
            Ochrana osobních údajů
          </h1>
          <p style={{ ...text, color: "#777c80" }}>
            Zásady zpracování osobních údajů a používání cookies na webu
            bagr-vykopy.cz
          </p>

          <h2 style={sectionTitle}>1. Správce osobních údajů</h2>
          <p style={text}>
            Petr Vodička, IČO: 09278061, se sídlem Dolní Domaslavice 44, 739 38 Dolní Domaslavice
            (dále jen „správce&ldquo;). Kontakt: telefon{" "}
            <a href="tel:+420777599092">+420 777 599 092</a>, e-mail{" "}
            <a href="mailto:petrvodas@seznam.cz">petrvodas@seznam.cz</a>.
          </p>

          <h2 style={sectionTitle}>2. Jaké údaje zpracováváme</h2>
          <p style={text}>
            <strong>Poptávky:</strong> web neobsahuje žádný formulář —
            kontaktujete nás přímo telefonicky nebo e-mailem. Údaje, které
            nám při poptávce sdělíte (jméno, telefon, e-mail, popis
            zakázky), zpracováváme za účelem vyřízení poptávky a přípravy
            nabídky (právní základ: plnění smlouvy, resp. jednání o jejím
            uzavření dle čl. 6 odst. 1 písm. b) GDPR). Uchováváme je po dobu
            nezbytnou k vyřízení poptávky, nejdéle 3 roky.
          </p>
          <p style={text}>
            <strong>Cookies a měření:</strong> se souhlasem uděleným v
            cookie liště používáme měřicí nástroje Google (Google Ads) pro
            vyhodnocení účinnosti reklamy. Bez souhlasu se žádné marketingové
            cookies neukládají.
          </p>

          <h2 style={sectionTitle}>3. Cookies</h2>
          <p style={text}>
            Web používá pouze nezbytné technické cookies a — pouze po vašem
            souhlasu — marketingové cookies služby Google Ads
            (googletagmanager.com). Souhlas můžete kdykoli změnit nebo
            odvolat kliknutím na „Nastavení cookies&ldquo; v patičce webu.
          </p>

          <h2 style={sectionTitle}>4. Komu údaje předáváme</h2>
          <p style={text}>
            Údaje z poptávek nepředáváme třetím stranám. Měřicí data
            zpracovává společnost Google Ireland Ltd. jako poskytovatel
            služby Google Ads. Web je provozován na platformě Netlify.
          </p>

          <h2 style={sectionTitle}>5. Vaše práva</h2>
          <p style={text}>
            Máte právo na přístup ke svým údajům, jejich opravu či výmaz,
            omezení zpracování, přenositelnost a právo vznést námitku.
            Uplatnit je můžete na výše uvedených kontaktech. Máte rovněž
            právo podat stížnost u Úřadu pro ochranu osobních údajů
            (www.uoou.cz).
          </p>

          <p style={{ ...text, marginTop: 40, color: "#777c80" }}>
            Tyto zásady jsou účinné od 1. 7. 2026.
          </p>
        </div>
      </Container>
    </main>
  );
}
