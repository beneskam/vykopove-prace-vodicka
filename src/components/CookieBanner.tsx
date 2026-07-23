"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "cookie-consent";

function applyConsent(granted: boolean) {
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
    });
  }
  // Generic hook for any other marketing/retargeting script (e.g. Sklik) —
  // listen for this instead of loading unconditionally on page load.
  window.dispatchEvent(
    new CustomEvent("marketing-consent-changed", { detail: { granted } })
  );
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") {
      applyConsent(true);
    } else if (stored === null) {
      setVisible(true);
    }
    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-banner", reopen);
    return () => window.removeEventListener("open-cookie-banner", reopen);
  }, []);

  const decide = (granted: boolean) => {
    localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    applyConsent(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Souhlas s cookies"
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 100,
        maxWidth: 560,
        margin: "0 auto",
        background: "var(--dark)",
        border: "1px solid rgba(255,255,255,0.1)",
        padding: "20px 24px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      <p
        style={{
          color: "#fff",
          fontSize: 14,
          lineHeight: 1.6,
          margin: "0 0 16px",
        }}
      >
        Tento web používá soubory cookies pro měření návštěvnosti a účinnosti
        reklamy (Google Ads). Kliknutím na „Přijmout&ldquo; souhlasíte s jejich
        používáním. Více v{" "}
        <a
          href="/gdpr"
          style={{ color: "var(--yellow)", textDecoration: "underline" }}
        >
          zásadách ochrany osobních údajů
        </a>
        .
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <button
          onClick={() => decide(true)}
          style={{
            background: "var(--yellow)",
            color: "var(--dark)",
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontWeight: 700,
            fontSize: 16,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            border: "none",
            padding: "10px 24px",
            cursor: "pointer",
          }}
        >
          Přijmout
        </button>
        <button
          onClick={() => decide(false)}
          style={{
            background: "transparent",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontWeight: 700,
            fontSize: 16,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "10px 24px",
            cursor: "pointer",
          }}
        >
          Odmítnout
        </button>
      </div>
    </div>
  );
}
