"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "./Container";

/* Inline SVG icons — accept dark prop to switch colors on hover */
const IconExcavation = ({ dark }: { dark: boolean }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path
      d="M8 36V20C8 15.6 11.6 12 16 12H32C36.4 12 40 15.6 40 20V36"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path d="M5 36H43L38 44H10L5 36Z" fill={dark ? "#fcda01" : "#1d252c"} />
    <rect
      x="21"
      y="5"
      width="6"
      height="10"
      rx="2"
      fill={dark ? "#fcda01" : "#1d252c"}
    />
    <path
      d="M16 20H32"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconKanalizace = ({ dark }: { dark: boolean }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect
      x="20"
      y="6"
      width="8"
      height="36"
      rx="2"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
    />
    <rect
      x="8"
      y="18"
      width="32"
      height="8"
      rx="2"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
    />
    <circle cx="24" cy="22" r="4" fill={dark ? "#fcda01" : "#1d252c"} />
    <path
      d="M8 22H6M42 22H40M24 6V4M24 44V42"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconTerrain = ({ dark }: { dark: boolean }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path
      d="M6 32L16 20L26 28L36 14L42 22"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 38H42"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path d="M30 8L34 14H26L30 8Z" fill={dark ? "#fcda01" : "#1d252c"} />
  </svg>
);

const IconDemolice = ({ dark }: { dark: boolean }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect
      x="8"
      y="10"
      width="14"
      height="18"
      rx="1"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
    />
    <rect
      x="26"
      y="10"
      width="14"
      height="18"
      rx="1"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
    />
    <rect
      x="8"
      y="32"
      width="32"
      height="6"
      rx="1"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
    />
    <path
      d="M20 19L28 19"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M35 7L39 11"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M39 7L35 11"
      stroke={dark ? "#fcda01" : "#1d252c"}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const services = [
  {
    num: "01",
    title: "Zemní a\u00A0Výkopové práce",
    desc: "Výkopy základů, inženýrských sítí, přeložky vedení a\u00A0zemní práce veškerého rozsahu.",
    dark: false,
    Icon: IconExcavation,
  },
  {
    num: "02",
    title: "Kanalizační přípojky",
    desc: "Pokládka kanalizačních a\u00A0vodovodních potrubí, revizních a\u00A0vodovodních šachet.",
    dark: false,
    Icon: IconKanalizace,
  },
  {
    num: "03",
    title: "Terénní úpravy a\u00A0Dlažby",
    desc: "Modelování terénu, násypy a\u00A0zpevněné plochy, zámkové dlažby, příjezdové cesty.",
    dark: false,
    Icon: IconTerrain,
  },
  {
    num: "04",
    title: "Demolice",
    desc: "Bourání stavebních objektů, odvoz suti a\u00A0příprava pozemku pro novou výstavbu.",
    dark: false,
    Icon: IconDemolice,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="sluzby"
      ref={ref}
      style={{ background: "#fff", padding: "100px 0" }}
    >
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "380px 1fr",
          gap: 100,
          alignItems: "start",
        }}
        className="grid-cols-1! lg:grid-cols-[380px_1fr]! gap-10! lg:gap-[100px]!"
      >
        {/* Left: heading block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading-block flex! flex-col!"
        >
          <SectionLabel text="Co provádíme" />
          <h2
            style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 4.17vw, 60px)",
              lineHeight: "55.2px",
              letterSpacing: "-1.8px",
              textTransform: "uppercase",
              color: "var(--dark)",
              margin: "0 0 24px",
            }}
          >
            Naše
            <br />
            Služby
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2.5vw, 20px)",
              lineHeight: "1.55",
              letterSpacing: 0,
              color: "#4d5156",
              margin: "0 0 32px",
              maxWidth: 380,
            }}
          >
            Komplexní realizace zemních prací od přípojek po dálniční stavby.
            Moderní technika, zkušený tým, precizní realizace.
          </p>
          {/* <a
            href="#kontakt"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: 14,
              color: 'var(--dark)',
              textDecoration: 'none',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '14px' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '8px' }}
          >
            Zjistit více →
          </a> */}
        </motion.div>

        {/* Right: 2×2 card grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
          className="grid-cols-1! sm:grid-cols-2!"
        >
          {services.map((s, i) => {
            const isDark = s.dark || hoveredCard === i;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                style={{
                  background: isDark ? "var(--dark)" : "#f8f5ef",
                  padding: "clamp(24px, 4vw, 44px) clamp(20px, 3.5vw, 40px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  overflow: "hidden",
                  borderRadius: 10,
                  transition: "background 0.3s, transform 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: 11,
                    letterSpacing: "1.98px",
                    color: isDark
                      ? "rgba(255,255,255,0.25)"
                      : "var(--mid-gray)",
                    transition: "color 0.3s",
                  }}
                >
                  {s.num}
                </span>

                <s.Icon dark={isDark} />

                <h3
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(18px, 2.5vw, 24px)",
                    letterSpacing: "-0.48px",
                    color: isDark ? "var(--yellow)" : "var(--dark)",
                    margin: 0,
                    lineHeight: 1.3,
                    transition: "color 0.3s",
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 2vw, 18px)",
                    lineHeight: "1.55",
                    letterSpacing: 0,
                    color: isDark ? "rgba(255,255,255,0.45)" : "#4d5156",
                    margin: 0,
                    marginTop: "auto",
                    transition: "color 0.3s",
                  }}
                >
                  {s.desc}
                </p>

                {/* <span style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: isDark ? 'var(--yellow)' : 'var(--dark)',
                }}>Zjistit více →</span> */}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function SectionLabel({ text, light }: { text: string; light?: boolean }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-ibm-plex-mono), monospace",
        fontSize: 11,
        color: light ? "var(--yellow)" : "var(--mid-gray)",
        letterSpacing: "2.86px",
        textTransform: "uppercase",
        marginBottom: 16,
      }}
    >
      <span
        style={{
          width: 24,
          height: 1,
          background: light ? "var(--yellow)" : "var(--mid-gray)",
          display: "block",
          flexShrink: 0,
        }}
      />
      {text}
    </div>
  );
}
