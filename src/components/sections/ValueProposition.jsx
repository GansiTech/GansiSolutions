import SectionTitle from '../ui/SectionTitle'
import { benefits, differentiators } from '../../data/content'
import { Clock, Workflow, Users, TrendingUp, Check } from 'lucide-react'
import { motion } from "framer-motion"
import Reveal from '../ui/Reveal'

const icons = { Clock, Workflow, Users, TrendingUp }

export default function ValueProposition() {
  return (
    <section id="beneficios" className="bg-base-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Beneficios"
          heading="Lo que gana tu negocio"
          description="Cada desarrollo está pensado para generar resultados medibles, no solo para verse bien."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon] ?? Check

            return (
              <motion.article
                key={benefit.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className="flex flex-col items-start gap-4 rounded-2xl border border-base-700 bg-base-800 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-light">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{benefit.description}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Diferenciadores */}
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {differentiators.map((diff, index) => (
            <Reveal as="li" key={diff} delay={index * 0.1} className="flex items-start gap-3 text-sm text-slate-300">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden="true" />
              <span>{diff}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
