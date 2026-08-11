import SectionTitle from '../ui/SectionTitle'
import PricingCard from '../ui/PricingCard'
import { pricingPlans } from '../../data/content'

export default function Pricing() {
  return (
    <section id="precios" className="bg-base-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          heading="Planes pensados para PyMEs en crecimiento"
          description="Desde una página de lanzamiento hasta plataformas a medida; elige la propuesta que mejor se adapte a tu ritmo y objetivos." 
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
