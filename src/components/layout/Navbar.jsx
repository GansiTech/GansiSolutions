import { navigation } from '../../data/content'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-base-700/80 bg-base-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#hero" className="font-display text-lg font-semibold text-white">
          GansiSolutions
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
