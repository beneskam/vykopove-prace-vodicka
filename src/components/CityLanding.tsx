import Container from "./Container";

export type CityData = {
  /** City in the "výkopové práce {city}" nominative, e.g. "Havířov" */
  city: string;
  /** Locative form for "v {cityLocative}", e.g. "Havířově" */
  cityLocative: string;
  /** Short intro paragraph, locally specific */
  intro: string;
  /** Second paragraph, locally specific */
  detail: string;
  /** Nearby towns / districts served from this city */
  areas: string[];
  /** Approx. driving context from the base in Dolní Domaslavice */
  distanceNote: string;
};

const services = [
  "Výkopové a zemní práce",
  "Kanalizační přípojky",
  "Vodovodní přípojky",
  "Základové desky a výkopy základů",
  "Terénní úpravy a srovnání pozemku",
  "Demolice a odvoz suti",
];

const heading: React.CSSProperties = {
  fontFamily: "var(--font-barlow-condensed), sans-serif",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.02em",
};

export default function CityLanding({ data }: { data: CityData }) {
  return (
    <main style={{ background: "#fff" }}>
      {/* Hero */}
      <section
        style={{
          background: "var(--dark)",
          padding: "140px 0 80px",
        }}
      >
        <Container>
          <div style={{ maxWidth: 760 }}>
            <div
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: 12,
                color: "var(--yellow)",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Moravskoslezský kraj · {data.city}
            </div>
            <h1
              style={{
                ...heading,
                fontSize: "clamp(36px, 6vw, 60px)",
                color: "#fff",
                lineHeight: 1.05,
                margin: "0 0 24px",
              }}
            >
              Výkopové a zemní práce {data.city}
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.75)",
                margin: "0 0 16px",
              }}
            >
              {data.intro}
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.6)",
                margin: "0 0 32px",
              }}
            >
              {data.detail}
            </p>
            <a
              href="tel:+420777599092"
              style={{
                display: "inline-block",
                background: "var(--yellow)",
                color: "var(--dark)",
                fontFamily: "var(--font-barlow-condensed), sans-serif",
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "16px 40px",
                textDecoration: "none",
              }}
            >
              Zavolat: +420 777 599 092
            </a>
          </div>
        </Container>
      </section>

      {/* Services + trust */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
            }}
            className="grid-cols-1! md:grid-cols-2! gap-10!"
          >
            <div>
              <h2 style={{ ...heading, fontSize: 30, margin: "0 0 20px" }}>
                Co pro vás v {data.cityLocative} zajistíme
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {services.map((s) => (
                  <li
                    key={s}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "12px 0",
                      borderBottom: "1px solid #eeeff0",
                      fontSize: 16,
                      color: "#1d252c",
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        background: "var(--yellow)",
                        flexShrink: 0,
                      }}
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ ...heading, fontSize: 30, margin: "0 0 20px" }}>
                Proč Vodička
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3a3f43" }}>
                Přes 20 let zkušeností se zemními pracemi — od přípojek pro
                rodinné domy až po infrastrukturní zakázky na dálnicích D48 a
                D55. {data.distanceNote} Pracujeme spolehlivě, s vlastní
                technikou a domluveným termínem.
              </p>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#3a3f43",
                  marginTop: 16,
                }}
              >
                Hodnocení <strong>5,0★</strong> na Google od místních zákazníků.
                Cenovou nabídku pro {data.city} připravíme zdarma — stačí
                zavolat.
              </p>
            </div>
          </div>

          {/* Areas served */}
          <div style={{ marginTop: 56 }}>
            <h3
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: 12,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#777c80",
                margin: "0 0 16px",
              }}
            >
              Působíme také v okolí
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#3a3f43" }}>
              {data.areas.join(" · ")}
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
