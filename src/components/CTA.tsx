'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from './Container'

const MAILTO = 'mailto:petrvodas@seznam.cz?subject=Popt%C3%A1vka%20zem%C3%ADch%20prac%C3%AD'

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
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 48 }} className="flex-col! lg:flex-row!">
        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading-block flex! flex-col!"
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: "var(--font-ibm-plex-mono), monospace",
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
              fontFamily: "var(--font-barlow), sans-serif",
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
            alignItems: 'stretch',
            width: '100%',
            maxWidth: 360,
            margin: '0 auto',
          }}
        >
          <a
            href={MAILTO}
            style={{
              background: 'var(--dark)',
              color: '#fff',
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 900,
              fontSize: 16,
              letterSpacing: '1.92px',
              textTransform: 'uppercase',
              padding: '20px 32px',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              transition: 'background 0.2s, transform 0.15s',
              border: '2px solid rgba(255,255,255,0.1)',
              textDecoration: 'none',
              width: '100%',
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Napsat e-mail
          </a>

          <a
            href="tel:+420777599092"
            style={{
              border: '2px solid var(--dark)',
              color: 'var(--dark)',
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 900,
              fontSize: 16,
              letterSpacing: '1.92px',
              textTransform: 'uppercase',
              padding: '20px 32px',
              borderRadius: 12,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, transform 0.15s',
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
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: 12,
              color: 'rgba(29,37,44,0.5)',
              letterSpacing: '0.78px',
              textAlign: 'center',
              margin: 0,
            }}
          >
            +420 777 599 092 ·{' '}
            <a
              href={MAILTO}
              style={{ color: 'rgba(29,37,44,0.5)', textDecoration: 'underline' }}
            >
              petrvodas@seznam.cz
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
