'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from './Container'

type IconProps = { hovered: boolean }
const c = (hovered: boolean) => hovered ? 'var(--yellow)' : 'var(--dark)'

const PhoneIcon = ({ hovered }: IconProps) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill={c(hovered)}>
    <path d="M6.6 9.8c1.3 2.6 3.5 4.7 6.1 6.1l2-2c.3-.3.6-.3.9-.1 1 .3 2.1.5 3.2.5.5 0 .9.4.9.9v3.1c0 .5-.4.9-.9.9C8.6 19.2 2 12.6 2 4.4c0-.5.4-.9.9-.9H6c.5 0 .9.4.9.9 0 1.1.2 2.2.5 3.2.1.3 0 .7-.2.9l-2 2z"/>
  </svg>
)

const DocumentIcon = ({ hovered }: IconProps) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={c(hovered)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2H6a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V9z"/>
    <polyline points="13 2 13 9 20 9"/>
    <line x1="8" y1="13" x2="14" y2="13"/>
    <line x1="8" y1="17" x2="12" y2="17"/>
  </svg>
)

const DiggerIcon = ({ hovered }: IconProps) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={c(hovered)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="13" width="10" height="6" rx="1"/>
    <path d="M12 16h4l4-5V8h-4"/>
    <path d="M12 10V8l4 2"/>
    <circle cx="5" cy="20" r="1.5" fill={c(hovered)} stroke="none"/>
    <circle cx="9" cy="20" r="1.5" fill={c(hovered)} stroke="none"/>
  </svg>
)

const CheckIcon = ({ hovered }: IconProps) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={c(hovered)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"/>
    <circle cx="11" cy="11" r="9" strokeOpacity="0.3"/>
  </svg>
)

const steps: { num: string; title: string; desc: string; Icon: (p: IconProps) => React.ReactElement }[] = [
  { num: '01', title: 'Poptávka a\u00A0Konzultace', desc: 'Kontaktujte nás — popíšeme rozsah prací, podmínky a\u00A0termíny. Odpovídáme do\u00A024 hodin.', Icon: PhoneIcon },
  { num: '02', title: 'Nacenění a\u00A0Smlouva', desc: 'Vypracujeme cenovou nabídku s\u00A0termínem realizace. Pevná cena, žádná překvapení.', Icon: DocumentIcon },
  { num: '03', title: 'Realizace', desc: 'Terén, technika — vše na\u00A0místě dle plánu. Průběžná komunikace a\u00A0kontrola kvality.', Icon: DiggerIcon },
  { num: '04', title: 'Předání a\nZáruka', desc: 'Předání díla s\u00A0protokolem, záruční lhůta, dostupnost pro případné dotazy.', Icon: CheckIcon },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section ref={ref} style={{ background: 'var(--dark)', padding: '80px 0' }}>
      <Container
        style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 60, alignItems: 'center' }}
        className="grid-cols-1! lg:grid-cols-[320px_1fr]! gap-10! lg:gap-15!"
      >
        {/* Left — heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading-block flex! flex-col!"
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: 11,
            color: 'rgba(255,255,255,0.3)', letterSpacing: '2.86px',
            textTransform: 'uppercase', marginBottom: 16,
          }}>
            <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.3)', display: 'block' }} />
            Jak pracujeme
          </div>
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif", fontWeight: 800,
            fontSize: 'clamp(40px, 4.17vw, 60px)', lineHeight: '55.2px',
            letterSpacing: '-1.8px', textTransform: 'uppercase',
            color: '#fff', margin: 0,
          }}>
            Průběh<br />Zakázky
          </h2>
        </motion.div>

        {/* Right — steps grid */}
        <div
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
          className="grid-cols-1! sm:grid-cols-2!"
        >
          {steps.map((step, i) => {
            const isHovered = hoveredCard === i
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: isHovered ? 'rgba(255,255,255,0.06)' : 'var(--dark)',
                  padding: 'clamp(20px, 3vw, 36px) clamp(16px, 2.5vw, 32px)',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 24,
                  alignItems: 'flex-start',
                  transition: 'background 0.3s',
                  cursor: 'default',
                }}
              >
                {/* Background number */}
                <span className="process-bg-num" style={{
                  position: 'absolute', top: 12, right: 16,
                  fontFamily: "var(--font-syne), sans-serif", fontWeight: 800,
                  fontSize: 64, color: 'transparent',
                  WebkitTextStroke: '1px var(--yellow)',
                  lineHeight: 1, letterSpacing: '-2px',
                  pointerEvents: 'none', userSelect: 'none',
                  opacity: isHovered ? 0.45 : 0.2,
                  transition: 'opacity 0.3s',
                }}>{step.num}</span>

                {/* Icon container — dark on hover to invert */}
                <div style={{
                  width: 44, height: 44,
                  background: isHovered ? 'var(--dark)' : 'var(--yellow)',
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.3s',
                  border: isHovered ? '1px solid var(--yellow)' : '1px solid transparent',
                }}>
                  <step.Icon hovered={isHovered} />
                </div>

                {/* Text */}
                <div style={{ paddingRight: 56 }}>
                  <h3 style={{
                    fontFamily: "var(--font-syne), sans-serif", fontWeight: 700,
                    fontSize: 'clamp(17px, 2.2vw, 24px)', letterSpacing: '-0.48px',
                    color: isHovered ? 'var(--yellow)' : '#fff',
                    margin: '0 0 8px',
                    lineHeight: 1.3, whiteSpace: 'pre-line',
                    transition: 'color 0.3s',
                  }}>{step.title}</h3>

                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 400,
                    fontSize: 'clamp(13px, 1.8vw, 16px)', lineHeight: '1.55',
                    color: isHovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)',
                    margin: 0,
                    transition: 'color 0.3s',
                  }}>{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
