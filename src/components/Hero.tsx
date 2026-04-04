"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* Shared easing — fast-out, natural deceleration */
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  /* Parallax: outer wrapper — only translateY, leaves child transforms intact */
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.08}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="o-firme"
      style={{
        marginTop: 72,
        height: "auto",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
        background: "#fff",
        paddingBottom: "clamp(40px, 6vh, 80px)",
      }}
    >
      {/* ─────────── Machine — parallax outer + float+entrance inner ─────────── */}
      <div
        ref={parallaxRef}
        style={{
          position: "absolute",
          top: 0,
          right: "max(0px, calc((100vw - 1440px) / 2))",
          width: "64%",
          height: "clamp(420px, calc(100vw * 0.52), 780px)",
          willChange: "transform",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {/*
          Entrance: slides in from the right + fades + scales up.
          Float loop: starts after entrance, gently bobs up/down forever.
          The parent div carries the parallax translateY; this child handles
          its own transforms — they compose independently on different elements.
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: 80 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: [0, -14, 0],
          }}
          transition={{
            opacity: { duration: 1.1, delay: 0.25, ease: "easeOut" },
            scale: { duration: 1.1, delay: 0.25, ease: EASE },
            x: { duration: 1.1, delay: 0.25, ease: EASE },
            y: {
              delay: 1.5,
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            src="/assets/hero-background.webp"
            alt="JCB 3CX Backhoe Loader — Zemní práce Vodička"
            fill
            sizes="64vw"
            style={{ objectFit: "contain", objectPosition: "top right" }}
            priority
          />
        </motion.div>
      </div>

      {/* ─────────── Text content ─────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          paddingLeft: "clamp(24px, 6.25vw, 100px)",
          paddingRight: "clamp(24px, 6.25vw, 100px)",
          paddingTop: "clamp(32px, 4vh, 60px)",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        {/* Eyebrow
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: 11,
            color: "var(--mid-gray)",
            letterSpacing: "2.86px",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 28,
              height: 1,
              background: "var(--mid-gray)",
              display: "block",
              flexShrink: 0,
            }}
          />
          Praha &amp; Střední Čechy · Zemní práce od 2005
        </motion.div> */}

        {/*
          H1 — word-by-word masked slide-up.
          Each word has overflow:hidden wrapper so it clips the upward motion,
          creating the classic "text reveal from below" cinema effect.
        */}
        <h1
          style={{
            margin: 0,
          }}
        >
          {[
            { word: "Zemní", delay: 0.12 },
            { word: "Práce", delay: 0.24 },
            { word: "Vodička", delay: 0.36 },
          ].map(({ word, delay }) => (
            <div
              key={word}
              style={{
                clipPath: "inset(-0.4em 0 0 0)",
                display: "block",
              }}
            >
              <motion.span
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay, ease: EASE }}
                style={{
                  display: "block",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(48px, 5.97vw, 86px)",
                  lineHeight: "0.92",
                  letterSpacing: "-2.58px",
                  textTransform: "uppercase",
                  color: "var(--dark)",
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 400,
            fontSize: 32,
            lineHeight: "28px",
            letterSpacing: 0,
            color: "#4d5156",
            margin: 0,
            maxWidth: 480,
          }}
        >
          Profesionální zemní a výkopové práce, kanalizační přípojky a demolice.
          Přes 20 let zkušeností na klíčových infrastrukturních projektech ČR.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          style={{
            borderTop: "1px solid rgba(29,37,44,0.15)",
            paddingTop: 22,
            display: "flex",
            gap: 48,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "20", label: "Let praxe" },
            { num: "5", label: "Stát. projektů" },
          ].map((s) => (
            <div
              key={s.label}
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: 36,
                  color: "#FCDA01",
                  letterSpacing: "-0.72px",
                  lineHeight: "36px",
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  color: "var(--dark)",
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+420777599092"
            style={{
              background: "var(--yellow)",
              color: "#1D252C",
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 900,
              fontSize: 24,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              padding: "18px 44px",
              borderRadius: 10,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              transition: "background 0.2s, transform 0.15s",
              border: "2px solid #b8b8b8",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(252,218,1,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e8c800";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.color = "#1D252C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--yellow)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.color = "#1D252C";
            }}
          >
            <Image
              src="/assets/phone_26x26.png"
              alt=""
              width={26}
              height={26}
              style={{ display: "block", flexShrink: 0 }}
            />
            +420 777 599 092
          </a>

          <a
            href="#reference"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
              fontSize: 17,
              color: "rgba(29,37,44,0.5)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(29,37,44,0.2)",
              paddingBottom: 3,
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--dark)";
              e.currentTarget.style.borderColor = "var(--dark)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(29,37,44,0.5)";
              e.currentTarget.style.borderColor = "rgba(29,37,44,0.2)";
            }}
          >
            Naše reference
          </a>
        </motion.div>
      </div>
    </section>
  );
}
