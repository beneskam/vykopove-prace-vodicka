'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from './Container'

const JCB_IMAGE = 'https://www.figma.com/api/mcp/asset/a8acacbb-ed27-472c-8fa7-2f204df0b340'

const specs = [
  { val: '96', unit: 'kW', label: 'Výkon motoru' },
  { val: '8.1', unit: 't', label: 'Provozní hmotnost' },
  { val: '6', unit: 'm', label: 'Max. hloubka výkopu' },
]

export default function Machine() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="technika"
      ref={ref}
      style={{
        background: 'var(--dark)',
        padding: '100px 0',
        overflow: 'hidden',
      }}
    >
      <Container style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}
        className="grid-cols-1! lg:grid-cols-2! gap-10! lg:gap-[60px]!"
      >
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: "'IBM Plex Mono', monospace", fontSize: 11,
            color: 'rgba(255,255,255,0.3)', letterSpacing: '2.86px',
            textTransform: 'uppercase', marginBottom: 16,
          }}>
            <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.3)', display: 'block', flexShrink: 0 }} />
            Naše Technika
          </div>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(52px, 4.17vw, 60px)',
              lineHeight: 0.88,
              letterSpacing: '-2.5px',
              textTransform: 'uppercase',
              color: '#fff',
              margin: 0,
            }}
          >
            JCB<br />
            <span style={{ color: 'var(--yellow)' }}>3CX</span><br />
            Backhoe
          </h2>

          {/* Specs */}
          <div style={{ display: 'flex', gap: 32, marginTop: 36, flexWrap: 'wrap' }}>
            {specs.map((spec) => (
              <div key={spec.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(24px, 2.5vw, 32px)',
                    color: 'var(--yellow)',
                    letterSpacing: '-1px',
                    lineHeight: 1,
                  }}
                >
                  {spec.val}
                  <small style={{ fontSize: '55%', fontFamily: "'Syne', sans-serif" }}>{spec.unit}</small>
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '1.8px',
                    textTransform: 'uppercase',
                  }}
                >
                  {spec.label}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: 32,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: 32,
              lineHeight: '28px',
              letterSpacing: 0,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: 460,
            }}
          >
            Moderní digr JCB 3CX Backhoe Loader — univerzální stroj pro výkopy,
            nakládání zeminy a práce v stísněných prostorách. Certifikovaný provoz,
            pravidelná údržba, plná pojistná krytí.
          </p>
        </motion.div>

        {/* Right: machine image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 400,
          }}
        >
          {/* Radial glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(252,218,1,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          {/* Big text bg */}
          <span
            style={{
              position: 'absolute',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(80px, 10vw, 140px)',
              color: 'rgba(255,255,255,0.025)',
              letterSpacing: '-4px',
              textTransform: 'uppercase',
              lineHeight: 1,
              textAlign: 'center',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            JCB<br />3CX
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={JCB_IMAGE}
            alt="JCB 3CX Backhoe Loader"
            style={{
              width: '100%',
              maxHeight: 420,
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.6))',
              position: 'relative',
              zIndex: 1,
            }}
            loading="lazy"
          />
        </motion.div>
      </Container>
    </section>
  )
}
