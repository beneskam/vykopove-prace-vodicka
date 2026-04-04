'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from './Container'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="kontakt"
      ref={ref}
      style={{
        background: 'var(--yellow)',
        padding: '100px 0',
        overflow: 'hidden',
      }}
    >
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 48 }}>
        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              color: 'rgba(29,37,44,0.5)',
              letterSpacing: '2.64px',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            <span style={{ width: 24, height: 1, background: 'rgba(29,37,44,0.3)', display: 'block' }} />
            Máte projekt?
          </div>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(52px, 5.5vw, 72px)',
              lineHeight: 1.0,
              letterSpacing: '-1.92px',
              textTransform: 'uppercase',
              color: 'var(--dark)',
              margin: 0,
            }}
          >
            Pojďme<br />kopat<br />společně.
          </h2>
        </motion.div>

        {/* Right: buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'flex-start',
          }}
        >
          <a
            href="tel:+420777599092"
            style={{
              background: 'var(--dark)',
              color: '#fff',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(15px, 1.4vw, 17px)',
              letterSpacing: '1.92px',
              textTransform: 'uppercase',
              padding: '20px 52px',
              borderRadius: 12,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              transition: 'background 0.2s, transform 0.15s',
              border: '2px solid rgba(255,255,255,0.1)',
              minWidth: 300,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2a3540'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--dark)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Nezávazná poptávka
          </a>

          <a
            href="tel:+420777599092"
            style={{
              border: '2px solid var(--dark)',
              color: 'var(--dark)',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 16,
              padding: '18px 52px',
              borderRadius: 12,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, transform 0.15s',
              minWidth: 300,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(29,37,44,0.08)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Zavolat nám
          </a>

          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 13,
              color: 'rgba(29,37,44,0.5)',
              letterSpacing: '0.78px',
              textAlign: 'center',
              margin: 0,
            }}
          >
            +420 777 599 092 · petrvodas@seznam.cz
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
