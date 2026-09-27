import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(() => {
    const consent = localStorage.getItem('cookieConsent');
    return consent === null; // show if not set
  });

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
    <div className="fixed bottom-0 left-0 right-0 bg-base-800/90 backdrop-blur-sm text-base-200 p-4 mx-auto max-w-xl z-50">
      <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="mb-2">
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al continuar navegando, aceptas nuestro. <br />
            <Link to="/cookie-policy" className="text-accent underline">
              política de cookies
            </Link>
          </p>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <button
              onClick={accept}
              className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition"
            >
              Aceptar
            </button>
            <button
              onClick={reject}
              className="px-4 py-2 border border-base-600 text-base-300 rounded hover:bg-base-700 transition"
            >
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}