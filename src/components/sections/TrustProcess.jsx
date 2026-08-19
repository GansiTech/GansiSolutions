import SectionTitle from '../ui/SectionTitle'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { processSteps, budgetBreakdown } from '../../data/content'

export default function TrustProcess() {
  return (
    <section id="confianza" className="base-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          heading="Nuestro proceso de trabajo"
          description="Transparencia en cada etapa para que sepas exactamente en qué se invierte tu presupuesto."
        />

        {/* Proceso paso a paso */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Steps vertical timeline */}
          <div className="space-y-6">
            {processSteps.map((step) => (
              <div key={step.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-semibold">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Imagen del proceso */}
          <ImagePlaceholder
            label="Foto del proceso de trabajo / captura de herramientas / ilustración de flujo"
            aspect="aspect-[4/3]"
          />
        </div>

        {/* Desglose de presupuesto */}
        <div className="mt-16">
          <h3 className="mb-6 font-semibold text-white text-lg">¿En qué se gasta mi presupuesto?</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {budgetBreakdown.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 base-800 rounded-xl p-6 border border-base-700 transition hover:border-accent/50 hover:shadow-accent-glow">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  {item.percentage}%
                </div>
                <p className="text-center text-sm font-medium text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}