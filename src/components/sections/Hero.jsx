import { ArrowRight } from 'lucide-react'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { hero } from '../../data/content'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-base-950 bg-grid-fade pt-28 pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
            {hero.pretitle}
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={hero.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-3xl bg-accent px-6 py-4 text-sm font-semibold text-white shadow-accent-glow transition hover:bg-accent-dark"
            >
              {hero.ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#precios"
              className="inline-flex items-center justify-center rounded-3xl border border-base-700 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-200 transition hover:border-accent/50"
            >
              {hero.secondaryCtaText}
            </a>
          </div>
        </div>
        <ImagePlaceholder label="" />
      </div>
    </section>
  )
}
