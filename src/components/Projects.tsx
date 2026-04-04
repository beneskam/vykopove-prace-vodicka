'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Container from './Container'

const bigProjects = [
  { num: '01', title: 'Obchvat Frýdek-Místek', sub: 'Vodovodní & kanalizační přípojky — kompletní infrastruktura dopravní stavby', badge: 'Silnice', badgeColor: '#2563eb', badgeBg: '#ebf5ff', year: '2018–2020' },
  { num: '02', title: 'Dálnice D48 — Český Těšín · Třanovice', sub: 'Napojení na dálniční síť, přeložky vedení v koridoru D48', badge: 'Dálnice', badgeColor: '#2563eb', badgeBg: '#ebf5ff', year: '2019–2021' },
  { num: '03', title: 'Dálnice D55 — Staré Město u Uh. Hradiště', sub: 'Přeložky a přípojky v koridoru dálnice D55', badge: 'Dálnice', badgeColor: '#2563eb', badgeBg: '#ebf5ff', year: '2020–2022' },
  { num: '04', title: 'Plavební komora — Baťův kanál, Rohatec', sub: 'Zemní práce a přípojky pro vodní stavbu', badge: 'Vodní stavby', badgeColor: '#0891b2', badgeBg: '#eff9ff', year: '2021–2022' },
  { num: '05', title: 'Rekonstrukce ul. Horní Valy — Uherský Brod', sub: 'Komplexní rekonstrukce povrchů a inženýrských sítí', badge: 'Rekonstrukce', badgeColor: '#16a34a', badgeBg: '#f0fdf4', year: '2022–2023' },
]

const smallProjects = [
  { num: '01', title: 'Kanalizační přípojka — RD Praha-Západ', sub: 'Napojení rodinného domu na veřejnou kanalizaci, 18 m přípojky', badge: 'Rodinné domy', badgeColor: '#7c3aed', badgeBg: '#f5f3ff', year: '2023' },
  { num: '02', title: 'Terénní úpravy zahrady — Mělník', sub: 'Modelování terénu, zpevněné plochy a odvodnění pozemku', badge: 'Terénní úpravy', badgeColor: '#16a34a', badgeBg: '#f0fdf4', year: '2024' },
  { num: '03', title: 'Demolice staré stodoly — Středočeský kraj', sub: 'Odstranění zemědělské stavby, odvoz materiálu, rekultivace půdy', badge: 'Demolice', badgeColor: '#dc2626', badgeBg: '#fef2f2', year: '2024' },
  { num: '04', title: 'Vodovodní + kanalizační přípojka — Kladno', sub: 'Kompletní přípojky pro nový rodinný dům, koordinace se správci sítí', badge: 'Přípojky', badgeColor: '#2563eb', badgeBg: '#ebf5ff', year: '2025' },
  { num: '05', title: 'Zpevněná příjezdová cesta — Praha-východ', sub: 'Betonová plocha, drenáž, lemování zámkovou dlažbou', badge: 'Dlažby', badgeColor: '#d97706', badgeBg: '#fffbeb', year: '2025' },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [activeTab, setActiveTab] = useState<'firmy' | 'fyzicke'>('firmy')
  const list = activeTab === 'firmy' ? bigProjects : smallProjects

  return (
    <section id="reference" ref={ref} style={{ background: '#f8f5ef', padding: '100px 0' }}>
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: 11,
            color: 'var(--mid-gray)', letterSpacing: '2.86px',
            textTransform: 'uppercase', marginBottom: 16,
          }}>
            <span style={{ width: 24, height: 1, background: 'var(--mid-gray)', display: 'block' }} />
            Reference
          </div>
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif", fontWeight: 800,
            fontSize: 'clamp(40px, 4.17vw, 60px)', lineHeight: '55.2px',
            letterSpacing: '-1.8px', textTransform: 'uppercase',
            color: 'var(--dark)', margin: 0,
          }}>
            Velké<br />Projekty
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex', gap: 8,
            background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 14, padding: 5, width: 'fit-content', marginBottom: 40,
          }}
        >
          {[{ id: 'firmy', label: 'Pro firmy' }, { id: 'fyzicke', label: 'Pro fyzické osoby' }].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'firmy' | 'fyzicke')}
              style={{
                fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 800,
                fontSize: 13, letterSpacing: '1.4px', textTransform: 'uppercase',
                color: activeTab === tab.id ? 'var(--dark)' : 'rgba(29,37,44,0.4)',
                padding: '12px 28px', borderRadius: 10, cursor: 'pointer', border: 'none',
                background: activeTab === tab.id ? 'var(--yellow)' : 'transparent',
                boxShadow: activeTab === tab.id ? '0 2px 12px rgba(252,218,1,0.3)' : 'none',
                transition: 'all 0.25s', whiteSpace: 'nowrap',
              }}
            >{tab.label}</button>
          ))}
        </motion.div>

        {/* List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}
          >
            {list.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  display: 'flex', alignItems: 'center',
                  padding: '28px 0', borderBottom: '1px solid #eeeff0',
                  gap: 32, cursor: 'pointer', transition: 'padding-left 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = '12px' }}
                onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = '0' }}
              >
                <span style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: 11, color: '#a5a8ab', letterSpacing: '1.54px', minWidth: 36 }}>
                  {p.num}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: '-0.18px', color: 'var(--dark)', margin: '0 0 4px' }}>{p.title}</p>
                  <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: 'var(--mid-gray)', margin: 0 }}>{p.sub}</p>
                </div>
                <span style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: 10,
                  letterSpacing: '1.4px', textTransform: 'uppercase',
                  padding: '6px 14px', background: p.badgeBg, color: p.badgeColor,
                  whiteSpace: 'nowrap', flexShrink: 0,
                }}>{p.badge}</span>
                <span style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: 11, color: '#a5a8ab', minWidth: 80, textAlign: 'right', flexShrink: 0 }}>
                  {p.year}
                </span>
              </motion.div>
            ))}

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, marginTop: 8, flexWrap: 'wrap', gap: 16 }}>
              <span style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: 11, color: 'var(--mid-gray)', letterSpacing: '1.54px', textTransform: 'uppercase' }}>
                Celkem {list.length} referenčních projektů zobrazeno
              </span>
              <a href="#kontakt" style={{
                background: 'var(--dark)', color: '#fff',
                fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 900,
                fontSize: 15, letterSpacing: '1.8px', textTransform: 'uppercase',
                padding: '16px 42px', borderRadius: 12, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center',
                border: '2px solid #c0c0c0', transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#2a3540' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--dark)' }}
              >
                Všechny reference
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
