import { useEffect } from "react";

export default function useScrollAnalytics(sectionIds = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check cookie consent before tracking
            const consentGiven = localStorage.getItem('cookieConsent') === 'true';
            if (consentGiven) {
              // Reemplazar con el proveedor real: GA4, Plausible, Meta Pixel, etc.
              window?.gtag?.("event", "section_view", {
                section_id: entry.target.id,
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
}