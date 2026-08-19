export const navigation = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Precios', href: '#precios' },
  { label: 'Confianza', href: '#confianza' },
  { label: 'Contacto', href: '#contacto' },
]

export const hero = {
  pretitle: 'Desarrollo de software a la medida en Hermosillo',
  title: 'Si lo puedes imaginar, lo podemos crear.',
  description:
    'Ayudamos a PyMEs a escalar con sitios web, plataformas y automatizaciones pensadas para vender más y operar mejor.',
  ctaText: 'Cotiza por WhatsApp',
  ctaLink:
    'https://wa.me/526624311791?text=Hola%2C%20quiero%20cotizar%20un%20proyecto',
  secondaryCtaText: 'Ver planes y precios',
}

export const benefits = [
  {
    icon: "Clock",
    title: "Visibilidad 24/7",
    description:
      "Tu negocio sigue vendiendo aunque tú estés durmiendo. Un cliente potencial siempre te encuentra.",
  },
  {
    icon: "Workflow",
    title: "Automatización de tareas",
    description:
      "Menos trabajo manual, menos errores. Automatizamos citas, cotizaciones y seguimiento de clientes.",
  },
  {
    icon: "Users",
    title: "Captación de clientes",
    description:
      "Diseñado para convertir visitantes en leads reales, no solo para 'verse bonito'.",
  },
  {
    icon: "TrendingUp",
    title: "Escalable a tu crecimiento",
    description:
      "Empiezas simple y tu software crece contigo, sin rehacer todo desde cero.",
  },
]

export const differentiators = [
  "Trato directo y personalizado, sin intermediarios ni call centers",
  "Soluciones escalables, no plantillas genéricas",
  "Enfoque en retorno de inversión (ROI), no solo en estética",
]

export const pricingTiers = [
  {
    id: "nivel-1",
    name: "Nivel 1 — Presencia Digital",
    price: "5,000 MXN",
    tag: "Landing Page / Sitio estático",
    description:
      "Sin base de datos ni lógica de backend. Ideal para informar y mostrar tus servicios.",
    features: ["Diseño responsive", "Hosting y despliegue incluidos", "Optimizado para conversión"],
    ctaType: "whatsapp",
    highlighted: false,
  },
  {
    id: "nivel-2",
    name: "Nivel 2 — Sitio Dinámico",
    price: "10,000 MXN",
    tag: "Con base de datos funcional",
    description:
      "Ideal para capturar leads, agendar citas o gestionar reservas en línea.",
    features: ["Base de datos funcional", "Formularios y captura de leads", "Panel básico de gestión"],
    ctaType: "whatsapp",
    highlighted: true,
  },
  {
    id: "nivel-3",
    name: "Nivel 3 — Software a la Medida",
    price: "Desde 15,000 MXN",
    tag: "Aplicación Web / Software personalizado",
    description:
      "El precio varía según complejidad: dominio, servidor dedicado, base de datos, seguridad, agentes de IA, app móvil y arquitectura escalable.",
    features: ["Arquitectura escalable", "Seguridad de datos", "Agentes de IA / App móvil (opcional)"],
    ctaType: "quote-form",
    highlighted: false,
  },
]

export const processSteps = [
  { step: "01", title: "Levantamiento de requisitos", description: "Entendemos tu negocio y objetivos reales." },
  { step: "02", title: "Diseño", description: "Prototipo visual alineado a tu marca y a la conversión." },
  { step: "03", title: "Desarrollo", description: "Construcción del sitio o software con buenas prácticas." },
  { step: "04", title: "Pruebas", description: "Validamos funcionalidad, velocidad y seguridad." },
  { step: "05", title: "Entrega", description: "Publicación, capacitación básica y soporte inicial." },
]

export const budgetBreakdown = [
  { label: "Horas de programación", percentage: 55 },
  { label: "Diseño UI/UX", percentage: 25 },
  { label: "Infraestructura y hosting", percentage: 20 },
]

export const contact = {
  title: 'Listo para lanzar tu idea?',
  subtitle:
    'Contacta por WhatsApp o deja tus datos. Te responderemos con una propuesta clara y sin compromiso.',
  phone: '+52 662 431 1791',
  email: 'fernandogc.2912@hotmail.com',
  whatsappLink: 'https://wa.me/526624311791?text=Hola%2C%20quiero%20cotizar%20un%20proyecto',
}