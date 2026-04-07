'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from './Container'

const stats = [
  { num: '20', sup: '+', label: 'Let zkušeností na náročných projektech' },
  { num: '5',  sup: '',  label: 'Státních infrastrukturních projektů' },
  { num: '4',  sup: '',  label: 'Profesionální stroje JCB v provozu' },
  { num: '100',sup: '%', label: 'Dokončených zakázek včas a\u00A0v\u00A0rozpočtu' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={{ background: 'var(--dark)', padding: '80px 0' }}>
      <Container
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}
        className="grid-cols-1! lg:grid-cols-2! gap-10! lg:gap-[60px]!"
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: 11,
            color: 'rgba(255,255,255,0.3)', letterSpacing: '2.86px',
            textTransform: 'uppercase', marginBottom: 16,
          }}>
            <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.3)', display: 'block' }} />
            Zkušenost — každý výkop
          </div>
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(40px, 4.17vw, 60px)',
            lineHeight: '55.2px',
            letterSpacing: '-1.8px',
            textTransform: 'uppercase',
            color: '#fff',
            margin: 0,
          }}>
            Čísla,<br />která<br />mluví
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ padding: '40px 36px', background: 'var(--dark)', display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              <span style={{
                fontFamily: "var(--font-syne), sans-serif", fontWeight: 800,
                fontSize: 'clamp(48px, 5vw, 72px)',
                color: 'var(--yellow)', letterSpacing: '-2px', lineHeight: 1,
              }}>
                {s.num}
                {s.sup && <sup style={{ fontSize: '50%', fontFamily: "var(--font-syne), sans-serif", fontWeight: 800 }}>{s.sup}</sup>}
              </span>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55, margin: 0, maxWidth: 200 }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
