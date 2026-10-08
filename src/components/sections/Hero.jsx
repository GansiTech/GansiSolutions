import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { hero } from "../../data/content";
import heroImage from "../../assets/firstImage.jpg";

export default function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  // El scroll controla la animación: 0 = Hero completo en pantalla, 1 = Hero fuera de pantalla
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative overflow-hidden bg-base-950 bg-grid-fade pt-20 pb-24 lg:pt-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}>
            <span className="mb-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm text-accent-light">
              {hero.pretitle}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Si lo puedes imaginar,{" "}
              <span className="text-accent-light">lo podemos crear.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-300">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={hero.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-white shadow-accent-glow transition hover:bg-accent-dark"
              >
                {hero.ctaText}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#precios"
                className="inline-flex items-center gap-2 rounded-xl border border-base-700 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-accent/50"
              >
                {hero.secondaryCtaText}
              </a>
            </div>
            <p className="mt-5 text-sm text-slate-400">{hero.priceHint}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <motion.div
            style={reduceMotion ? undefined : { y: imageY }}
            className="overflow-hidden rounded-3xl border border-base-700 shadow-accent-glow"
          >
            <motion.img
              src={heroImage}
              alt="Desarrollador programando un sitio web en dos monitores"
              width="1408"
              height="768"
              style={reduceMotion ? undefined : { scale: imageScale }}
              className="w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
