'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#o-firme', label: 'O firmě' },
  { href: '#sluzby', label: 'Služby' },
  { href: '#reference', label: 'Reference' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('o-firme')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['o-firme', 'sluzby', 'reference', 'galerie', 'kontakt']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: 72,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? '#eeeff0' : '#eeeff0'}`,
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 6.25vw, 100px)',
          paddingRight: 'clamp(24px, 6.25vw, 100px)',
          width: '100%',
        }}
        className="h-full flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#o-firme" className="flex items-center gap-[14px] no-underline flex-shrink-0">
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{ width: 38, height: 38, background: 'var(--dark)' }}
          >
            <span
              style={{
                fontFamily: "var(--font-barlow-condensed), sans-serif",
                fontWeight: 900,
                fontSize: 22,
                color: 'var(--yellow)',
                letterSpacing: '-0.4px',
              }}
            >
              V
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: 20,
                color: '#1D252C',
                letterSpacing: '0px',
                lineHeight: '21px',
              }}
            >
              VODIČKA
            </span>
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: 9,
                color: 'var(--mid-gray)',
                letterSpacing: '1.44px',
                textTransform: 'uppercase',
              }}
            >
              Zemní &amp; Výkopové Práce
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: active === link.href.slice(1) ? 700 : 500,
                fontSize: 14,
                color: active === link.href.slice(1) ? 'var(--dark)' : 'var(--mid-gray)',
                textDecoration: 'none',
                letterSpacing: '1.04px',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = active === link.href.slice(1) ? 'var(--dark)' : 'var(--mid-gray)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: phone + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+420777599092"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: 14,
              color: 'var(--dark)',
              textDecoration: 'none',
              letterSpacing: '0.5px',
            }}
          >
            +420 777 599 092
          </a>
          <a
            href="#kontakt"
            style={{
              background: 'var(--yellow)',
              color: 'var(--dark)',
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 900,
              fontSize: 14,
              letterSpacing: '1.56px',
              textTransform: 'uppercase',
              padding: '11px 28px',
              borderRadius: 12,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'background 0.2s, transform 0.1s',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e8c800'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--yellow)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Poptávka
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: 'var(--dark)',
              transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: 'var(--dark)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: 'var(--dark)',
              transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #eeeff0',
          maxHeight: menuOpen ? 400 : 0,
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: 'var(--dark)',
                textDecoration: 'none',
                letterSpacing: '1.04px',
                textTransform: 'uppercase',
                padding: '12px 0',
                borderBottom: '1px solid #eeeff0',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+420777599092"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: 15,
              color: 'var(--dark)',
              textDecoration: 'none',
              padding: '12px 0',
            }}
          >
            +420 777 599 092
          </a>
        </div>
      </div>
    </nav>
  )
}
