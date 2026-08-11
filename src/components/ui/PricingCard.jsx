import { Check } from 'lucide-react'

export default function PricingCard({ plan }) {
  return (
    <article className={`group rounded-3xl border p-8 shadow-sm transition hover:border-accent/50 hover:shadow-accent-glow ${plan.highlight ? 'border-accent/40 bg-base-800' : 'border-base-700 bg-base-900'}`}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent/80">{plan.badge}</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{plan.name}</h3>
        </div>
        {plan.highlight ? (
          <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Recomendado
          </span>
        ) : null}
      </div>
      <p className="mt-6 text-lg font-semibold text-white">{plan.price}</p>
      <p className="mt-4 text-slate-300">{plan.description}</p>
      <ul className="mt-8 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-slate-300">
            <Check className="mt-1 h-4 w-4 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/526621234567?text=Hola%2C%20quiero%20más%20información%20sobre%20este%20plan"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
      >
        Cotizar este plan
      </a>
    </article>
  )
}
