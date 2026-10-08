import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(() => {
    const consent = localStorage.getItem('cookieConsent');
    return consent === null; // show if not set
  });

  // Permite reabrir el banner (p. ej. desde la política de cookies) para cambiar la elección
  useEffect(() => {
    const open = () => setShowBanner(true);
    window.addEventListener('cookie-preferences-open', open);
    return () => window.removeEventListener('cookie-preferences-open', open);
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    // Optionally dispatch event for analytics
    window.dispatchEvent(new Event('cookie-consent'));
  };

  const reject = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-4 bottom-24 z-50 rounded-2xl border border-base-700 bg-base-800/95 p-5 text-sm text-slate-300 shadow-2xl backdrop-blur-sm sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-md"
    >
      <p>
        Usamos cookies de analítica para saber qué secciones son útiles y mejorar el sitio. Solo se activan si las aceptas.{' '}
        <Link to="/cookie-policy" className="text-accent-light underline">
          Ver política de cookies
        </Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={accept}
          className="flex-1 rounded-lg bg-accent px-4 py-2.5 font-semibold text-white transition hover:bg-accent-dark"
        >
          Aceptar
        </button>
        <button
          onClick={reject}
          className="flex-1 rounded-lg border border-base-700 px-4 py-2.5 font-semibold text-slate-200 transition hover:bg-base-700"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
