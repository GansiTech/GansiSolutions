import SectionTitle from '../ui/SectionTitle'
import { trustItems } from '../../data/content'
import { ShieldCheck } from 'lucide-react'

export default function TrustProcess() {
  return (
    <section id="confianza" className="bg-base-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          heading="Un proceso claro y profesional"
          description="Así trabajamos: con entregables definidos, comunicación directa y resultados que puedes medir desde el lanzamiento." 
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {trustItems.map((item) => (
            <article key={item.title} className="rounded-[28px] border border-base-700 bg-base-800 p-8 transition hover:border-accent/50 hover:shadow-accent-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <ShieldCheck className="h-5 w-5" />
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
