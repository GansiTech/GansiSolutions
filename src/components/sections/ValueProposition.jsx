import SectionTitle from '../ui/SectionTitle'
import { benefits, differentiators } from '../../data/content'
import { Clock, Workflow, Users, TrendingUp } from 'lucide-react'
import { motion } from "framer-motion"

export default function ValueProposition() {
  return (
    <section id="beneficios" className="base-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          heading="Beneficios tangibles"
          description="Cada desarrollo está pensado para generar resultados medibles en tu negocio."
        />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => {
              // Asignar icono basado en el índice o título
              let Icon;
              switch (index) {
                case 0: Icon = Clock; break;
                case 1: Icon = Workflow; break;
                case 2: Icon = Users; break;
                case 3: Icon = TrendingUp; break;
                default: Icon = CheckCircle2;
              }

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                >
                  <article className="flex flex-col items-start gap-4 base-800 rounded-2xl border border-base-700 p-6 transition hover:border-accent/50 hover:shadow-accent-glow">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{benefit.description}</p>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Diferenciadores */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              >
                <p className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-accent/10 text-accent shrink-0">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span>{diff}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}