import SectionTitle from '../ui/SectionTitle'
import PricingCard from '../ui/PricingCard'
import Reveal from '../ui/Reveal'
import { pricingTiers } from '../../data/content'

export default function Pricing() {
  return (
    <section id="precios" className="bg-base-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Precios"
          heading="Planes y precios"
          description="Elige el nivel que necesitas hoy. Si tu negocio crece, puedes pasar al siguiente sin empezar de cero."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.id} delay={index * 0.12} y={40} className="h-full">
              <PricingCard tier={tier} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
