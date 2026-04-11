"use client";

import Container from "./Container";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--dark)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "80px 0 40px",
      }}
    >
      <Container>
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 220px 200px 1fr",
            gap: 60,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
          className="grid-cols-1! sm:grid-cols-2! lg:grid-cols-[320px_220px_200px_1fr]! gap-8! lg:gap-15!"
        >
          {/* Brand */}
          <div>
            <a
              href="#o-firme"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "var(--yellow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontWeight: 900,
                    fontSize: 26,
                    color: "var(--dark)",
                  }}
                >
                  V
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 800,
                    fontSize: 20,
                    color: "#fff",
                    letterSpacing: "-2.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Vodička
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "1.4px",
                    textTransform: "uppercase",
                  }}
                >
                  Zemní a{"\u00A0"}Výkopové Práce
                </span>
              </div>
            </a>
          </div>

          {/* Kontakt */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: 12,
                color: "var(--yellow)",
                letterSpacing: "2.2px",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Kontakt
            </div>
            {[
              {
                label: "Telefon",
                val: "+420 777 599 092",
                href: "tel:+420777599092",
              },
              {
                label: "Email",
                val: "petrvodas@seznam.cz",
                href: "mailto:petrvodas@seznam.cz",
              },
              { label: "Oblast", val: "Moravskoslezský kraj", href: null },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  padding: "12px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 16,
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--yellow)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    }}
                  >
                    {item.val}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 16,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {item.val}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Navigace */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: 12,
                color: "var(--yellow)",
                letterSpacing: "2.2px",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Rychlé odkazy
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { href: "#o-firme", label: "O firmě" },
                { href: "#sluzby", label: "Služby" },
                { href: "#reference", label: "Reference" },
                { href: "#galerie", label: "Galerie" },
                { href: "#technika", label: "Technika" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 16,
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--yellow)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Služby */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: 12,
                color: "var(--yellow)",
                letterSpacing: "2.2px",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Služby
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Zemní práce",
                "Výkopové práce",
                "Kanalizační přípojky",
                "Vodovodní přípojky",
                "Demolice",
                "Terénní úpravy",
                "Zámkové dlažby",
              ].map((service) => (
                <a
                  key={service}
                  href="#sluzby"
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 16,
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--yellow)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: 10,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "1px",
            }}
          >
            © 2025 Petr Vodička — Zemní práce. Všechna práva vyhrazena.
          </span>
          <span
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: 10,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "1px",
            }}
          >
            GDPR · Obchodní podmínky
          </span>
        </div>
      </Container>
    </footer>
  );
}
