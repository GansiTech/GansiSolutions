import { Link } from 'react-router-dom'
import { navigation, contact } from '../../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-base-700 bg-base-900 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 text-sm text-slate-400 sm:grid-cols-3">
        <div>
          <p className="font-display text-base font-semibold text-white">GansiSolutions</p>
          <p className="mt-2">Desarrollo de software a la medida para PyMEs en Hermosillo.</p>
        </div>

        <nav aria-label="Pie de página">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={`/${item.href}`} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/cookie-policy" className="hover:text-white">
                Política de cookies
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="space-y-2">
          <li>
            <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              WhatsApp: {contact.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className="break-all hover:text-white">
              {contact.email}
            </a>
          </li>
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-6 text-xs text-slate-400">© 2026 GansiSolutions</p>
    </footer>
  )
}
