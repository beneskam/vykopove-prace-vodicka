'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from './Container'

/* Inline SVG icons — white, 22×22, matching Figma process icons */
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="white">
    <path d="M6.6 9.8c1.3 2.6 3.5 4.7 6.1 6.1l2-2c.3-.3.6-.3.9-.1 1 .3 2.1.5 3.2.5.5 0 .9.4.9.9v3.1c0 .5-.4.9-.9.9C8.6 19.2 2 12.6 2 4.4c0-.5.4-.9.9-.9H6c.5 0 .9.4.9.9 0 1.1.2 2.2.5 3.2.1.3 0 .7-.2.9l-2 2z"/>
  </svg>
)

const DocumentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2H6a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V9z"/>
    <polyline points="13 2 13 9 20 9"/>
    <line x1="8" y1="13" x2="14" y2="13"/>
    <line x1="8" y1="17" x2="12" y2="17"/>
  </svg>
)

const DiggerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="13" width="10" height="6" rx="1"/>
    <path d="M12 16h4l4-5V8h-4"/>
    <path d="M12 10V8l4 2"/>
    <circle cx="5" cy="20" r="1.5" fill="white" stroke="none"/>
    <circle cx="9" cy="20" r="1.5" fill="white" stroke="none"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"/>
    <circle cx="11" cy="11" r="9" strokeOpacity="0.3"/>
  </svg>
)

const steps = [
  { num: '01', title: 'Poptávka & Konzultace', desc: 'Kontaktujte nás — popíšeme rozsah prací, podmínky a termíny. Odpovídáme do 24 hodin.', Icon: PhoneIcon },
  { num: '02', title: 'Nacenění & Smlouva', desc: 'Vypracujeme cenovou nabídku s termínem realizace. Pevná cena, žádná překvapení.', Icon: DocumentIcon },
  { num: '03', title: 'Realizace', desc: 'Terén, technika, tým — vše na místě dle plánu. Průběžná komunikace a kontrola kvality.', Icon: DiggerIcon },
  { num: '04', title: 'Předání & Záruka', desc: 'Předání díla s protokolem, záruční lhůta, dostupnost pro případné dotazy.', Icon: CheckIcon },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ background: '#fff', padding: '100px 0' }}>
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 60 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: "'IBM Plex Mono', monospace", fontSize: 11,
            color: 'var(--mid-gray)', letterSpacing: '2.86px',
            textTransform: 'uppercase', marginBottom: 16,
          }}>
            <span style={{ width: 24, height: 1, background: 'var(--mid-gray)', display: 'block' }} />
            Jak pracujeme
          </div>
          <h2 style={{
            fontFamily: "'Barlow', sans-serif", fontWeight: 800,
            fontSize: 'clamp(40px, 4.17vw, 60px)', lineHeight: '55.2px',
            letterSpacing: '-1.8px', textTransform: 'uppercase',
            color: 'var(--dark)', margin: 0,
          }}>
            Průběh<br />Zakázky
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}
          className="grid-cols-1! sm:grid-cols-2! lg:grid-cols-4!">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                background: '#f8f5ef',
                padding: '44px 36px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              {/* Background number */}
              <span style={{
                position: 'absolute', top: 12, right: 20,
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: 88, color: 'rgba(29,37,44,0.05)',
                lineHeight: 1, letterSpacing: '-3.2px',
                pointerEvents: 'none', userSelect: 'none',
              }}>{step.num}</span>

              {/* Dark icon container — 44×44 as in Figma */}
              <div style={{
                width: 44, height: 44,
                background: 'var(--dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, marginBottom: 36,
              }}>
                <step.Icon />
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                fontSize: 18, letterSpacing: '-0.18px',
                color: 'var(--dark)', margin: '0 0 12px',
                lineHeight: 1.25,
              }}>{step.title}</h3>

              {/* Desc */}
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                fontSize: 14, lineHeight: '23.1px',
                color: '#4d5156', margin: 0,
              }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
