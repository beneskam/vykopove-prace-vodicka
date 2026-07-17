"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "./Container";

const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/JqWSBTDpFsHm7NmH7";

type Review = { name: string; text: string };

// Verbatim 5★ reviews from the Google Business Profile (10 reviews, 5.0 avg).
const reviews: Review[] = [
  {
    name: "Hana Krůčková",
    text: "Firmu Petr Vodička mohu vřele doporučit, výkopové práce i následné terénní úpravy byly provedeny kvalitně, rychle a podle domluvy. Oceňuji zejména precizně odvedenou práci, spolehlivost, dodržení domluvených termínů a vstřícnou komunikaci. Vše proběhlo přesně podle mých představ.",
  },
  {
    name: "Ing. Jiří Mika",
    text: "Velmi dobrá spolupráce, profesionalita a lidský přístup. Při výstavbě nám pomáhal s přepravou materiálu, při výkopech, s pokládkou těžkých žlabů, s urovnáním lomového kamene a s ukládáním potrubí. Mohu jen doporučit pro všechny druhy zemních prací.",
  },
  {
    name: "Pavel Bobek",
    text: "Naprosto pana Vodičku doporučuji. Mám s ním jen výborné zkušenosti. Je přesný na čas, je slušný a je perfekcionista při úpravách terénu do opětovného stavu.",
  },
  {
    name: "Václav Klimeš",
    text: "S firmou Petr Vodička jsem byl velmi spokojen. Skvěle odvedená práce, profesionální přístup a výborná komunikace. Firmu mohu jen doporučit!",
  },
];

function Stars({ size = 16 }: { size?: number }) {
  return (
    <span
      style={{ color: "var(--yellow)", fontSize: size, letterSpacing: 2 }}
      aria-hidden
    >
      ★★★★★
    </span>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="recenze"
      ref={ref}
      style={{ background: "var(--dark)", padding: "100px 0" }}
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 56,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: 11,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "2.86px",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 1,
                  background: "rgba(255,255,255,0.35)",
                  display: "block",
                }}
              />
              Recenze
            </div>
            <h2
              style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(40px, 4.17vw, 60px)",
                lineHeight: 0.92,
                letterSpacing: "-1.8px",
                textTransform: "uppercase",
                color: "#fff",
                margin: 0,
              }}
            >
              Co říkají
              <br />
              zákazníci
            </h2>
          </div>

          {/* Aggregate rating */}
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "var(--font-barlow-condensed), sans-serif",
                fontWeight: 800,
                fontSize: 72,
                lineHeight: 1,
                color: "var(--yellow)",
              }}
            >
              5,0
            </div>
            <Stars size={20} />
            <div
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: 12,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "1px",
                marginTop: 8,
              }}
            >
              10 hodnocení na Googlu
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
          }}
          className="grid-cols-1! md:grid-cols-2! gap-6!"
        >
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "28px 28px 24px",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <Stars />
              <blockquote
                style={{
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                „{r.text}"
              </blockquote>
              <figcaption
                style={{
                  marginTop: "auto",
                  fontFamily: "var(--font-barlow-condensed), sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Link to Google */}
        <div style={{ marginTop: 40 }}>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: 12,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "var(--yellow)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(252,218,1,0.4)",
              paddingBottom: 4,
            }}
          >
            Zobrazit všechny recenze na Googlu →
          </a>
        </div>
      </Container>
    </section>
  );
}
