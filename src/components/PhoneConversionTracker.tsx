"use client";

import { useEffect } from "react";

// Google Ads conversion label for a phone-call click.
// TODO: replace with a dedicated "Kliknutí na telefon" conversion action
// created in Google Ads (Cíle → Konverze → + Nová akce → ručně z kliknutí).
// Until then we reuse the account's existing conversion label so Ads
// starts receiving conversion signals again immediately.
const PHONE_CONVERSION_SEND_TO = "AW-18089310567/bfdnCNSj3p0cEOfy07FD";

export default function PhoneConversionTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (!link) return;
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "conversion", {
          send_to: PHONE_CONVERSION_SEND_TO,
        });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
