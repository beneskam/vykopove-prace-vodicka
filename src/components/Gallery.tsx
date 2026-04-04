'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Container from './Container'

const photos = [
  { src: '/photos/20220730_113215.jpg', caption: 'Výkopové práce 2022' },
  { src: '/photos/20220801_184223.jpg', caption: 'Terénní úpravy' },
  { src: '/photos/20220807_081434.jpg', caption: 'Přípojka kanalizace' },
  { src: '/photos/20220807_113518.jpg', caption: 'Zemní práce' },
  { src: '/photos/20230701_170614.jpg', caption: 'Výkop přípojky' },
  { src: '/photos/20230701_170642.jpg', caption: 'Realizace sítí' },
  { src: '/photos/20230702_125142.jpg', caption: 'JCB v akci' },
  { src: '/photos/20230702_151542.jpg', caption: 'Práce na projektu' },
  { src: '/photos/20230705_151754.jpg', caption: 'Kanalizační práce' },
  { src: '/photos/20231012_102444.jpg', caption: 'Podzimní práce 2023' },
  { src: '/photos/20240215_124036.jpg', caption: 'Zemní práce 2024' },
  { src: '/photos/20240327_095133.jpg', caption: 'Jarní projekt' },
  { src: '/photos/20250127_110928.jpg', caption: 'Zimní práce 2025' },
  { src: '/photos/20250219_095754.jpg', caption: 'Výkop přípojky' },
  { src: '/photos/20250501_131513.jpg', caption: 'Terénní úpravy' },
  { src: '/photos/20250501_133649.jpg', caption: 'Práce JCB' },
  { src: '/photos/20250501_160954.jpg', caption: 'Zemní výkop' },
  { src: '/photos/20250501_193839.jpg', caption: 'Dokončení prací' },
  { src: '/photos/20250703_132506.jpg', caption: 'Léto 2025' },
]

const TOTAL = photos.length
const RADIUS = 560

function getSlideTransform(diff: number): {
  tx: number; tz: number; scale: number; opacity: number; zIndex: number; filter: string
} {
  const angle = diff * (360 / TOTAL)
  const rad = (angle * Math.PI) / 180
  const depth = Math.cos(rad)
  const tx = Math.sin(rad) * RADIUS
  const tz = (depth - 1) * 180
  const scale = 0.6 + 0.4 * Math.max(0, depth)
  const absAngle = Math.abs(angle)
  const opacity = absAngle > 90 ? 0 : 0.25 + 0.75 * Math.max(0, depth)
  const zIndex = Math.round(100 + depth * 50)
  const brightness = diff === 0 ? 1 : 0.5 + 0.5 * Math.max(0, depth)
  const filter = `brightness(${brightness})`
  return { tx, tz, scale, opacity, zIndex, filter }
}

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const sceneRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((index: number) => {
    setCurrent(((index % TOTAL) + TOTAL) % TOTAL)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  const startAutoplay = useCallback(() => {
    autoplayRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % TOTAL)
    }, 4500)
  }, [])

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
  }, [])

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [startAutoplay, stopAutoplay])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox !== null) {
        if (e.key === 'ArrowRight') setLightbox((l) => l !== null ? (l + 1) % TOTAL : null)
        if (e.key === 'ArrowLeft') setLightbox((l) => l !== null ? (l - 1 + TOTAL) % TOTAL : null)
        if (e.key === 'Escape') setLightbox(null)
      } else {
        if (e.key === 'ArrowRight') next()
        if (e.key === 'ArrowLeft') prev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, next, prev])

  useEffect(() => {
    if (lightbox !== null) {
      document.body.classList.add('lightbox-open')
    } else {
      document.body.classList.remove('lightbox-open')
    }
    return () => document.body.classList.remove('lightbox-open')
  }, [lightbox])

  return (
    <section
      id="galerie"
      ref={ref}
      style={{
        background: 'var(--dark)',
        padding: '100px 0 120px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Grid pattern bg */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.02) 59px, rgba(255,255,255,0.02) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.02) 59px, rgba(255,255,255,0.02) 60px)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 64,
          position: 'relative',
          zIndex: 2,
        }}
        className="!flex-col lg:!flex-row !items-start lg:!items-end !gap-6 lg:!gap-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              color: 'var(--yellow)',
              letterSpacing: '2.86px',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--yellow)', flexShrink: 0 }} />
            Fotogalerie
          </div>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(52px, 5.5vw, 80px)',
              lineHeight: 0.9,
              letterSpacing: '-2px',
              textTransform: 'uppercase',
              color: '#fff',
              margin: 0,
            }}
          >
            GALERIE
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: 360,
            margin: 0,
          }}
        >
          Dokumentace reálných projektů — od výkopů kanalizačních přípojek
          po rozsáhlé terénní úpravy a demolice po celé Praze a Středočeském kraji.
        </motion.p>
      </Container>

      {/* 3D Carousel */}
      <div
        ref={sceneRef}
        style={{
          position: 'relative',
          height: 480,
          perspective: 1200,
          perspectiveOrigin: '50% 50%',
          cursor: 'grab',
        }}
        onMouseEnter={stopAutoplay}
        onMouseLeave={() => { if (!isDragging) startAutoplay() }}
        onMouseDown={(e) => {
          setIsDragging(true)
          dragStartX.current = e.clientX
        }}
        onMouseUp={(e) => {
          if (!isDragging) return
          setIsDragging(false)
          const delta = e.clientX - dragStartX.current
          if (Math.abs(delta) > 50) delta > 0 ? prev() : next()
          startAutoplay()
        }}
        onMouseMove={(e) => {
          if (isDragging) e.preventDefault()
        }}
        onTouchStart={(e) => {
          dragStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          const delta = e.changedTouches[0].clientX - dragStartX.current
          if (Math.abs(delta) > 50) delta > 0 ? prev() : next()
        }}
        onWheel={(e) => {
          if (e.deltaX > 20 || e.deltaY > 20) next()
          else if (e.deltaX < -20 || e.deltaY < -20) prev()
        }}
      >
        <div style={{ position: 'absolute', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}>
          {photos.map((photo, i) => {
            let diff = i - current
            if (diff > TOTAL / 2) diff -= TOTAL
            if (diff < -TOTAL / 2) diff += TOTAL
            const { tx, tz, scale, opacity, zIndex, filter } = getSlideTransform(diff)
            const isActive = diff === 0

            return (
              <div
                key={photo.src}
                onClick={() => {
                  if (isActive) setLightbox(i)
                  else goTo(i)
                }}
                style={{
                  position: 'absolute',
                  width: 480,
                  height: 360,
                  left: '50%',
                  top: '50%',
                  marginLeft: -240,
                  marginTop: -180,
                  transform: `translateX(${tx}px) translateZ(${tz}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  filter,
                  transition: 'transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease, filter 0.5s ease',
                  cursor: isActive ? 'zoom-in' : 'pointer',
                  userSelect: 'none',
                  pointerEvents: Math.abs(diff) > 4 ? 'none' : 'auto',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                  draggable={false}
                />
                {/* Frame */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: `1px solid ${isActive ? 'rgba(252,218,1,0.6)' : 'rgba(252,218,1,0.12)'}`,
                    boxShadow: isActive ? '0 0 40px rgba(252,218,1,0.12), 0 20px 60px rgba(0,0,0,0.6)' : 'none',
                    transition: 'border-color 0.4s, box-shadow 0.4s',
                    pointerEvents: 'none',
                  }}
                />
                {/* Corner accents on active */}
                {isActive && (
                  <>
                    <div style={{ position: 'absolute', top: -1, left: -1, width: 20, height: 20, borderTop: '2px solid var(--yellow)', borderLeft: '2px solid var(--yellow)' }} />
                    <div style={{ position: 'absolute', bottom: -1, right: -1, width: 20, height: 20, borderBottom: '2px solid var(--yellow)', borderRight: '2px solid var(--yellow)' }} />
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Controls */}
      <Container
        style={{
          marginTop: 48,
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {[prev, next].map((fn, i) => (
          <button
            key={i}
            onClick={fn}
            style={{
              width: 52,
              height: 52,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              fontSize: 22,
              flexShrink: 0,
              transition: 'background 0.2s, border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--yellow)'
              e.currentTarget.style.borderColor = 'var(--yellow)'
              e.currentTarget.style.color = 'var(--dark)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.color = '#fff'
            }}
            aria-label={i === 0 ? 'Předchozí' : 'Další'}
          >
            {i === 0 ? '←' : '→'}
          </button>
        ))}

        {/* Dots */}
        <div style={{ display: 'flex', gap: 6, flex: 1, flexWrap: 'wrap' }}>
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 48 : 24,
                height: 2,
                background: i === current ? 'var(--yellow)' : 'rgba(255,255,255,0.15)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.3s, background 0.3s',
              }}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '1.5px',
            minWidth: 60,
            textAlign: 'right',
            flexShrink: 0,
          }}
        >
          <strong style={{ color: 'rgba(255,255,255,0.7)' }}>
            {String(current + 1).padStart(2, '0')}
          </strong>{' '}
          / {String(TOTAL).padStart(2, '0')}
        </span>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.target === e.currentTarget && setLightbox(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(29,37,44,0.97)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.img
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={photos[lightbox].src}
              alt={photos[lightbox].caption}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                boxShadow: '0 40px 120px rgba(0,0,0,0.8)',
              }}
              draggable={false}
            />

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute',
                top: 32,
                right: 40,
                width: 48,
                height: 48,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                fontSize: 20,
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--yellow)'
                e.currentTarget.style.color = 'var(--dark)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.color = '#fff'
              }}
              aria-label="Zavřít"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={() => setLightbox((l) => l !== null ? (l - 1 + TOTAL) % TOTAL : null)}
              style={{
                position: 'absolute',
                left: 40,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 52,
                height: 52,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                fontSize: 22,
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--yellow)'; e.currentTarget.style.color = 'var(--dark)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff' }}
              aria-label="Předchozí"
            >
              ←
            </button>

            {/* Next */}
            <button
              onClick={() => setLightbox((l) => l !== null ? (l + 1) % TOTAL : null)}
              style={{
                position: 'absolute',
                right: 40,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 52,
                height: 52,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                fontSize: 22,
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--yellow)'; e.currentTarget.style.color = 'var(--dark)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff' }}
              aria-label="Další"
            >
              →
            </button>

            {/* Counter */}
            <div
              style={{
                position: 'absolute',
                bottom: 32,
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '2px',
              }}
            >
              {lightbox + 1} / {TOTAL}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
