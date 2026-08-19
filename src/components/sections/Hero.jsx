import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-base-950 bg-grid-fade pt-32 pb-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <span className="mb-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm text-accent-light">
              Desarrollo de software a la medida en Hermosillo
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Si lo puedes imaginar,{" "}
              <span className="text-accent">lo podemos crear.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-300">
              Convertimos tu idea de negocio en un sitio web o aplicación real,
              diseñado para vender y crecer contigo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/526624311791?text=Hola%2C%20quiero%20cotizar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-white shadow-accent-glow transition hover:bg-accent-dark"
              >
                Cotiza por WhatsApp
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#precios"
                className="inline-flex items-center gap-2 rounded-xl border border-base-700 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-accent/50"
              >
                Ver planes y precios
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <ImagePlaceholder
            label="Imagen: mockup de dashboard / composición tech"
            aspect="aspect-[4/3]"
          />
        </motion.div>
      </div>
    </section>
  );
}