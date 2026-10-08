import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { processSteps, budgetBreakdown } from '../../data/content'

export default function TrustProcess() {
  const stepsRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)

  // El scroll recorre los pasos: 0 cuando la lista llega al centro de la pantalla, 1 cuando la deja
  const { scrollYProgress } = useScroll({ target: stepsRef, offset: ['start center', 'end center'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const index = Math.min(processSteps.length - 1, Math.max(0, Math.floor(value * processSteps.length)))
    setActive(index)
  })

  const current = processSteps[active]

  return (
    <section id="confianza" className="bg-base-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Columna fija: el título y el paso actual acompañan el scroll */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionTitle
              eyebrow="Proceso"
              heading="Cómo trabajamos"
              description="Sabrás en qué etapa va tu proyecto y en qué se invierte tu presupuesto."
            />
            <div className="hidden lg:block" aria-hidden="true">
              <p className="font-display text-8xl font-bold text-accent/20">{current.step}</p>
              <p className="mt-2 text-sm text-slate-400">
                Paso {active + 1} de {processSteps.length}
              </p>
            </div>
          </div>

          {/* Recorrido: la línea se llena conforme avanzas */}
          <div ref={stepsRef} className="relative">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-base-700" aria-hidden="true" />
            <motion.div
              className="absolute bottom-0 left-5 top-0 w-px origin-top bg-accent"
              style={{ scaleY: reduceMotion ? 1 : progress }}
              aria-hidden="true"
            />
            <ol className="space-y-10 lg:space-y-24 lg:py-12">
              {processSteps.map((step, index) => {
                const isReached = reduceMotion || index <= active
                return (
                  <Reveal as="li" key={step.step} x={32} y={0} className="relative flex items-start gap-6">
                    <span
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-300 ${
                        isReached
                          ? 'border-accent bg-accent text-white'
                          : 'border-base-700 bg-base-900 text-slate-400'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`rounded-2xl border p-6 transition-colors duration-300 ${
                        index === active && !reduceMotion
                          ? 'border-accent/50 bg-base-800'
                          : 'border-base-700 bg-base-900'
                      }`}
                    >
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                    </div>
                  </Reveal>
                )
              })}
            </ol>
          </div>
        </div>

        {/* Desglose de presupuesto */}
        <Reveal className="mt-24 max-w-2xl">
          <h3 className="mb-6 text-lg font-semibold text-white">¿En qué se invierte tu presupuesto?</h3>
          <ul className="space-y-5">
            {budgetBreakdown.map((item, index) => (
              <li key={item.label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="font-semibold text-white">{item.percentage}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-base-800" aria-hidden="true">
                  <motion.div
                    className="h-2 origin-left rounded-full bg-accent"
                    style={{ width: `${item.percentage}%` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
