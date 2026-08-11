import SectionTitle from '../ui/SectionTitle'
import { benefits } from '../../data/content'
import { CheckCircle2 } from 'lucide-react'

export default function ValueProposition() {
  return (
    <section id="beneficios" className="bg-base-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          heading="Beneficios que impulsan tu crecimiento"
          description="Proyectos construidos para ventas, operaciones más ágiles y resultados medibles desde el primer día."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-[28px] border border-base-700 bg-base-800 p-8 transition hover:border-accent/50 hover:shadow-accent-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
