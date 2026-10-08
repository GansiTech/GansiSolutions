import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigation, hero } from '../../data/content'

// Marca en el menú la sección que está en pantalla ("estás aquí")
function useActiveSection(ids, enabled) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!enabled) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids, enabled])

  return enabled ? active : null
}

const sectionIds = navigation.map((item) => item.href.slice(1))

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const active = useActiveSection(sectionIds, isHome)
  const [open, setOpen] = useState(false)

  // Fuera del inicio, los enlaces regresan a la sección correspondiente
  const hrefFor = (href) => (isHome ? href : `/${href}`)

  return (
    <header className="sticky top-0 z-40 border-b border-base-700/80 bg-base-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-lg font-semibold text-white"
          onClick={() => setOpen(false)}
        >
          <img src="/favicon-192x192.png" alt="" width="36" height="36" className="h-9 w-9" />
          GansiSolutions
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={hrefFor(item.href)}
                aria-current={isActive ? 'location' : undefined}
                className={`text-sm font-medium transition ${
                  isActive ? 'text-white underline decoration-accent decoration-2 underline-offset-8' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            )
          })}
          <a
            href={hero.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            {hero.ctaText}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-base-700 px-3 text-sm font-medium text-slate-200 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          Menú
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Principal" className="border-t border-base-700 px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={hrefFor(item.href)}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-base font-medium ${
                    active === item.href.slice(1) ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={hero.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center rounded-xl bg-accent px-6 py-3 font-semibold text-white"
          >
            {hero.ctaText}
          </a>
        </nav>
      )}
    </header>
  )
}
