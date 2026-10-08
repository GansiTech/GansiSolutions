import { motion } from "framer-motion";

// Hace aparecer su contenido (sube y se desvanece) cuando entra en pantalla al hacer scroll.
// `once` evita que el contenido vuelva a ocultarse al subir: lo ya leído se queda visible.
export default function Reveal({ children, delay = 0, y = 24, x = 0, className, as = "div" }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
