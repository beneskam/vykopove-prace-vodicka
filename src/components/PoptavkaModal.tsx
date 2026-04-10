'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  onClose: () => void
}

export default function PoptavkaModal({ onClose }: Props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#f8f5ef',
    border: '1.5px solid #eeeff0',
    borderRadius: 10,
    padding: '13px 16px',
    fontFamily: 'var(--font-dm-sans), sans-serif',
    fontSize: 15,
    color: '#1d252c',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-ibm-plex-mono), monospace',
    fontSize: 11,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#777c80',
    marginBottom: 6,
  }

  if (!mounted) return null

  return createPortal(
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(29,37,44,0.55)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 20,
          width: '100%',
          maxWidth: 520,
          padding: 'clamp(28px, 5vw, 48px)',
          position: 'relative',
          boxShadow: '0 24px 80px rgba(29,37,44,0.18)',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Zavřít"
          style={{
            position: 'absolute',
            top: 18,
            right: 18,
            background: '#f8f5ef',
            border: 'none',
            borderRadius: 8,
            width: 36,
            height: 36,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#777c80',
            fontSize: 20,
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <span className="section-label section-label-dark-subtle" style={{ marginBottom: 10 }}>
            Nezávazná poptávka
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(22px, 4vw, 30px)',
              color: '#1d252c',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Napište nám
          </h2>
        </div>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div
              style={{
                width: 56,
                height: 56,
                background: 'var(--yellow)',
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#1d252c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: 17,
                fontWeight: 600,
                color: '#1d252c',
                margin: '0 0 8px',
              }}
            >
              Zpráva odeslána!
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: 14,
                color: '#777c80',
                margin: 0,
              }}
            >
              Ozveme se vám co nejdříve.
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: 28,
                background: 'var(--yellow)',
                color: '#1d252c',
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 900,
                fontSize: 14,
                letterSpacing: '1.56px',
                textTransform: 'uppercase',
                padding: '12px 32px',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Zavřít
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={labelStyle}>Jméno *</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jan Novák"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--yellow)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#eeeff0')}
              />
            </div>

            <div>
              <label style={labelStyle}>Telefon *</label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+420 777 000 000"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--yellow)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#eeeff0')}
              />
            </div>

            <div>
              <label style={labelStyle}>E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jan@example.cz"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--yellow)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#eeeff0')}
              />
            </div>

            <div>
              <label style={labelStyle}>Zpráva *</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Popište svůj požadavek…"
                rows={4}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--yellow)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#eeeff0')}
              />
            </div>

            {status === 'error' && (
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: 13,
                  color: '#c0392b',
                  margin: 0,
                }}
              >
                Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                background: 'var(--yellow)',
                color: '#1d252c',
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 900,
                fontSize: 14,
                letterSpacing: '1.56px',
                textTransform: 'uppercase',
                padding: '13px 32px',
                borderRadius: 12,
                border: 'none',
                cursor: status === 'sending' ? 'default' : 'pointer',
                opacity: status === 'sending' ? 0.7 : 1,
                transition: 'background 0.2s, transform 0.1s',
                marginTop: 4,
                alignSelf: 'flex-start',
              }}
              onMouseEnter={(e) => {
                if (status !== 'sending') {
                  e.currentTarget.style.background = '#e8c800'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--yellow)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {status === 'sending' ? 'Odesílám…' : 'Odeslat poptávku'}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body
  )
}
