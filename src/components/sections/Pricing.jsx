import SectionTitle from '../ui/SectionTitle'
import PricingCard from '../ui/PricingCard'
import { pricingTiers } from '../../data/content'

export default function Pricing() {
  return (
    <section id="precios" className="bg-base-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          heading="Transparencia económica"
          description="Elige el nivel que mejor se ajuste a tus necesidades actuales, con camino claro para escalar."
        />
        <div className="grid gap-8 xl:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  )
}