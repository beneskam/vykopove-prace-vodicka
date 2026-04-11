"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Container from "./Container";

const INITIAL_COUNT = 3;

const bigProjects = [
  {
    num: "01",
    title: "Rekonstrukce ul. Horní Valy — Uherský Brod",
    sub: "Komplexní rekonstrukce povrchů a\u00A0inženýrských sítí",
    badge: "Rekonstrukce",
    badgeColor: "#16a34a",
    badgeBg: "#f0fdf4",
    year: "2022–2023",
  },
  {
    num: "02",
    title: "Plavební komora — Baťův kanál, Rohatec",
    sub: "Zemní práce a\u00A0přípojky pro vodní stavbu",
    badge: "Vodní stavby",
    badgeColor: "#0891b2",
    badgeBg: "#eff9ff",
    year: "2021–2022",
  },
  {
    num: "03",
    title: "Dálnice D55 — Staré Město u\u00A0Uh. Hradiště",
    sub: "Přeložky a\u00A0přípojky v\u00A0koridoru dálnice D55",
    badge: "Dálnice",
    badgeColor: "#2563eb",
    badgeBg: "#ebf5ff",
    year: "2020–2022",
  },
  {
    num: "04",
    title: "Dálnice D48 — Český Těšín · Třanovice",
    sub: "Napojení na\u00A0dálniční síť, přeložky vedení v\u00A0koridoru D48",
    badge: "Dálnice",
    badgeColor: "#2563eb",
    badgeBg: "#ebf5ff",
    year: "2019–2021",
  },
  {
    num: "05",
    title: "Obchvat Frýdek-Místek",
    sub: "Vodovodní a\u00A0kanalizační přípojky — kompletní infrastruktura dopravní stavby",
    badge: "Silnice",
    badgeColor: "#2563eb",
    badgeBg: "#ebf5ff",
    year: "2018–2020",
  },
  {
    num: "06",
    title: "Přeložka vodovodu DN 300 — Zlín",
    sub: "Přeložení hlavního vodovodního řadu v\u00A0délce 420 m, koordinace s\u00A0ŘSD",
    badge: "Vodovod",
    badgeColor: "#0891b2",
    badgeBg: "#eff9ff",
    year: "2017–2018",
  },
  {
    num: "07",
    title: "Průmyslová zóna Holešov — kanalizace",
    sub: "Gravitační splašková kanalizace a\u00A0dešťová kanalizace pro průmyslový areál",
    badge: "Průmysl",
    badgeColor: "#7c3aed",
    badgeBg: "#f5f3ff",
    year: "2016–2017",
  },
  {
    num: "08",
    title: "Rekonstrukce vodovodu — Kroměříž centrum",
    sub: "Výměna zastaralého litinového řadu DN 150, délka 680 m",
    badge: "Vodovod",
    badgeColor: "#0891b2",
    badgeBg: "#eff9ff",
    year: "2015–2016",
  },
];

const smallProjects = [
  {
    num: "01",
    title: "Zpevněná příjezdová cesta — Hodoňovice",
    sub: "Betonová plocha, drenáž, lemování zámkovou dlažbou",
    badge: "Dlažby",
    badgeColor: "#d97706",
    badgeBg: "#fffbeb",
    year: "2026",
  },
  {
    num: "02",
    title: "Vodovodní a\u00A0kanalizační přípojka — Ostrava-Jih",
    sub: "Kompletní přípojky pro nový rodinný dům, koordinace se správci sítí",
    badge: "Přípojky",
    badgeColor: "#2563eb",
    badgeBg: "#ebf5ff",
    year: "2025",
  },
  {
    num: "03",
    title: "Demolice staré stodoly — Karviná",
    sub: "Odstranění zemědělské stavby, odvoz materiálu, rekultivace půdy",
    badge: "Demolice",
    badgeColor: "#dc2626",
    badgeBg: "#fef2f2",
    year: "2024",
  },
  {
    num: "04",
    title: "Terénní úpravy zahrady — Orlová",
    sub: "Modelování terénu, zpevněné plochy a\u00A0odvodnění pozemku",
    badge: "Terénní úpravy",
    badgeColor: "#16a34a",
    badgeBg: "#f0fdf4",
    year: "2024",
  },
  {
    num: "05",
    title: "Kanalizační přípojka — RD Havířov-Bludovice",
    sub: "Napojení rodinného domu na\u00A0veřejnou kanalizaci, 18 m přípojky",
    badge: "Rodinné domy",
    badgeColor: "#7c3aed",
    badgeBg: "#f5f3ff",
    year: "2023",
  },
  {
    num: "06",
    title: "Bazénová technická přípojka — Brno-Bystrc",
    sub: "Výkop a\u00A0pokládka přípojek pro zahradní bazén, zpětné uvedení terénu",
    badge: "Přípojky",
    badgeColor: "#2563eb",
    badgeBg: "#ebf5ff",
    year: "2023",
  },
  {
    num: "07",
    title: "Výkop základových pasů — RD Třebíč",
    sub: "Zemní práce pro novostavbu rodinného domu, přesné dodržení projektové dokumentace",
    badge: "Rodinné domy",
    badgeColor: "#7c3aed",
    badgeBg: "#f5f3ff",
    year: "2022",
  },
  {
    num: "08",
    title: "Zámková dlažba dvorek — Opava",
    sub: "Výkop, štěrkové lože, pokládka betonové zámkové dlažby 120 m²",
    badge: "Dlažby",
    badgeColor: "#d97706",
    badgeBg: "#fffbeb",
    year: "2022",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeTab, setActiveTab] = useState<"firmy" | "fyzicke">("fyzicke");
  const [showAll, setShowAll] = useState(false);

  const list = activeTab === "firmy" ? bigProjects : smallProjects;
  const visible = showAll ? list : list.slice(0, INITIAL_COUNT);

  const handleTabChange = (tab: "firmy" | "fyzicke") => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <section
      id="reference"
      ref={ref}
      style={{ background: "#f8f5ef", padding: "100px 0" }}
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 48 }}
          className="section-heading-block flex! flex-col!"
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: 11,
              color: "var(--mid-gray)",
              letterSpacing: "2.86px",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 24,
                height: 1,
                background: "var(--mid-gray)",
                display: "block",
              }}
            />
            Reference
          </div>
          <h2
            style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 4.17vw, 60px)",
              lineHeight: 0.92,
              letterSpacing: "-1.8px",
              textTransform: "uppercase",
              color: "var(--dark)",
              margin: 0,
            }}
          >
            Reference
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="projects-tabs"
          style={{
            display: "flex",
            gap: 8,
            background: "rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 14,
            padding: 5,
            width: "fit-content",
            marginBottom: 40,
          }}
        >
          {[
            { id: "fyzicke", label: "Pro fyzické osoby" },
            { id: "firmy", label: "Pro firmy" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id as "firmy" | "fyzicke")}
              style={{
                fontFamily: "var(--font-barlow-condensed), sans-serif",
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                color:
                  activeTab === tab.id ? "var(--dark)" : "rgba(29,37,44,0.4)",
                padding: "14px 32px",
                borderRadius: 10,
                cursor: "pointer",
                border: "none",
                background:
                  activeTab === tab.id ? "var(--yellow)" : "transparent",
                boxShadow:
                  activeTab === tab.id
                    ? "0 2px 12px rgba(252,218,1,0.3)"
                    : "none",
                transition: "all 0.25s",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence initial={false}>
              {visible.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.35,
                    delay:
                      i < INITIAL_COUNT ? i * 0.08 : (i - INITIAL_COUNT) * 0.07,
                  }}
                  className="project-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "32px 0",
                    borderBottom: "1px solid #eeeff0",
                    gap: 32,
                    cursor: "default",
                    transition: "padding-left 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = "12px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  <span
                    className="project-row-num"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: 12,
                      color: "#a5a8ab",
                      letterSpacing: "1.54px",
                      minWidth: 36,
                    }}
                  >
                    {p.num}
                  </span>
                  <div
                    className="project-row-body"
                    style={{ flex: 1, minWidth: 0 }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-syne), sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(16px, 2.2vw, 22px)",
                        letterSpacing: "-0.3px",
                        color: "var(--dark)",
                        margin: "0 0 4px",
                      }}
                    >
                      {p.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "clamp(13px, 1.6vw, 16px)",
                        lineHeight: "1.5",
                        color: "var(--mid-gray)",
                        margin: 0,
                      }}
                    >
                      {p.sub}
                    </p>
                  </div>
                  <span
                    className="project-row-badge"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "1.4px",
                      textTransform: "uppercase",
                      padding: "6px 14px",
                      background: p.badgeBg,
                      color: p.badgeColor,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {p.badge}
                  </span>
                  <span
                    className="project-row-year"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: 12,
                      color: "#a5a8ab",
                      minWidth: 80,
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    {p.year}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 32,
                marginTop: 8,
                flexWrap: "wrap",
                gap: 16,
                flexDirection: "column",
              }}
              className="sm:flex-row!"
            >
              <span
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: 12,
                  color: "var(--mid-gray)",
                  letterSpacing: "1.54px",
                  textTransform: "uppercase",
                }}
              >
                {showAll
                  ? `Celkem ${list.length} referenčních projektů`
                  : `Zobrazeno ${INITIAL_COUNT} z ${list.length} projektů`}
              </span>
              {!showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  style={{
                    background: "var(--dark)",
                    color: "#fff",
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontWeight: 900,
                    fontSize: 16,
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    padding: "16px 42px",
                    borderRadius: 12,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    border: "2px solid #c0c0c0",
                    transition: "background 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2a3540";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--dark)";
                  }}
                >
                  Všechny reference
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: 11,
                      opacity: 0.5,
                      fontWeight: 400,
                      letterSpacing: 0,
                      textTransform: "none",
                    }}
                  >
                    +{list.length - INITIAL_COUNT}
                  </span>
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
