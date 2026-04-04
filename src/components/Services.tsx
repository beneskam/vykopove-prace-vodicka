'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from './Container'

/* Inline SVG icons matching the Figma icon set */
const IconExcavation = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M8 36V20C8 15.6 11.6 12 16 12H32C36.4 12 40 15.6 40 20V36" stroke="#fcda01" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M5 36H43L38 44H10L5 36Z" fill="#fcda01"/>
    <rect x="21" y="5" width="6" height="10" rx="2" fill="#fcda01"/>
    <path d="M16 20H32" stroke="#fcda01" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const IconKanalizace = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="20" y="6" width="8" height="36" rx="2" stroke="#1d252c" strokeWidth="2.5"/>
    <rect x="8" y="18" width="32" height="8" rx="2" stroke="#1d252c" strokeWidth="2.5"/>
    <circle cx="24" cy="22" r="4" fill="#1d252c"/>
    <path d="M8 22H6M42 22H40M24 6V4M24 44V42" stroke="#1d252c" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)

const IconTerrain = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M6 32L16 20L26 28L36 14L42 22" stroke="#1d252c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 38H42" stroke="#1d252c" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M30 8L34 14H26L30 8Z" fill="#1d252c"/>
  </svg>
)

const IconDemolice = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="8" y="10" width="14" height="18" rx="1" stroke="#1d252c" strokeWidth="2.5"/>
    <rect x="26" y="10" width="14" height="18" rx="1" stroke="#1d252c" strokeWidth="2.5"/>
    <rect x="8" y="32" width="32" height="6" rx="1" stroke="#1d252c" strokeWidth="2.5"/>
    <path d="M20 19L28 19" stroke="#1d252c" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M35 7L39 11" stroke="#1d252c" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M39 7L35 11" stroke="#1d252c" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)

const services = [
  {
    num: '01',
    title: 'Zemní & Výkopové práce',
    desc: 'Výkopy základů, inženýrských sítí, přeložky vedení a zemní práce veškerého rozsahu.',
    dark: true,
    Icon: IconExcavation,
  },
  {
    num: '02',
    title: 'Kanalizační přípojky',
    desc: 'Pokládka kanalizačních a vodovodních potrubí, revizních a vodovodních šachet.',
    dark: false,
    Icon: IconKanalizace,
  },
  {
    num: '03',
    title: 'Terénní úpravy & Dlažby',
    desc: 'Modelování terénu, násypy a zpevněné plochy, zámkové dlažby, příjezdové cesty.',
    dark: false,
    Icon: IconTerrain,
  },
  {
    num: '04',
    title: 'Demolice',
    desc: 'Bourání stavebních objektů, odvoz suti a příprava pozemku pro novou výstavbu.',
    dark: false,
    Icon: IconDemolice,
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sluzby" ref={ref} style={{ background: '#fff', padding: '100px 0' }}>
      <Container
        style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 100, alignItems: 'start' }}
        className="grid-cols-1! lg:grid-cols-[380px_1fr]! gap-10! lg:gap-[100px]!"
      >
        {/* Left: heading block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel text="Co provádíme" />
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(40px, 4.17vw, 60px)',
            lineHeight: '55.2px',
            letterSpacing: '-1.8px',
            textTransform: 'uppercase',
            color: 'var(--dark)',
            margin: '0 0 24px',
          }}>
            Naše<br />Služby
          </h2>
          <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 400,
            fontSize: 32,
            lineHeight: '28px',
            letterSpacing: 0,
            color: '#4d5156',
            margin: '0 0 32px',
            maxWidth: 380,
          }}>
            Komplexní realizace zemních prací od přípojek po dálniční stavby.
            Moderní technika, zkušený tým, precizní realizace.
          </p>
          <a
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
          </a>
        </motion.div>

        {/* Right: 2×2 card grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              style={{
                background: s.dark ? 'var(--dark)' : '#f8f5ef',
                padding: '44px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                overflow: 'hidden',
                transition: 'transform 0.25s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <span style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: 11,
                letterSpacing: '1.98px',
                color: s.dark ? 'rgba(255,255,255,0.25)' : 'var(--mid-gray)',
              }}>{s.num}</span>

              <s.Icon />

              <h3 style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: 20,
                letterSpacing: '-0.4px',
                color: s.dark ? 'var(--yellow)' : 'var(--dark)',
                margin: 0,
                lineHeight: 1.2,
              }}>{s.title}</h3>

              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: '23.1px',
                color: s.dark ? 'rgba(255,255,255,0.45)' : '#4d5156',
                margin: 0,
                flex: 1,
              }}>{s.desc}</p>

              <span style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: 13,
                color: s.dark ? 'var(--yellow)' : 'var(--dark)',
              }}>Zjistit více →</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function SectionLabel({ text, light }: { text: string; light?: boolean }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: "var(--font-ibm-plex-mono), monospace",
      fontSize: 11,
      color: light ? 'var(--yellow)' : 'var(--mid-gray)',
      letterSpacing: '2.86px',
      textTransform: 'uppercase',
      marginBottom: 16,
    }}>
      <span style={{ width: 24, height: 1, background: light ? 'var(--yellow)' : 'var(--mid-gray)', display: 'block', flexShrink: 0 }} />
      {text}
    </div>
  )
}
