"use client"; // Mark this as a Client Component

import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-PDF43P2REG";
    script.async = true;
    document.head.appendChild(script);

    const gtagScript = document.createElement("script");
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PDF43P2REG');
    `;
    document.head.appendChild(gtagScript);
  }, []);

  return null; // No UI, just for script injection
}
