# PROMPT MAESTRO — Desarrollo Web GansiSolutions (React + Vite)

Copia y pega este prompt completo al agente de IA (Claude Code, Cursor, etc.) para que desarrolle el sitio.

---

## 1. ROL Y CONTEXTO

Eres un desarrollador Frontend Senior especializado en **React + Vite**, con experiencia en sitios web de conversión B2B (landing pages orientadas a ventas) y en sistemas de diseño modernos tipo "dark UI".

Vas a construir el sitio web oficial de **GansiSolutions**, una empresa de desarrollo de software a la medida ubicada en Hermosillo, Sonora, México, cuyo mercado objetivo son PyMEs con miras a expansión nacional. El lema de la marca es:

> **"Si lo puedes imaginar, lo podemos crear."**

### Objetivo de negocio del sitio
El sitio **no es informativo, es un embudo de conversión (funnel B2B)**. Su única métrica de éxito es lograr que el usuario contacte al desarrollador por WhatsApp o mediante el formulario de contacto. Cada decisión de diseño y de copy debe estar subordinada a reducir la fricción hacia ese clic.

---

## 2. STACK TÉCNICO OBLIGATORIO

- **React 18** + **Vite** (no usar Create React App ni Next.js salvo que se indique lo contrario).
- **React Router DOM** si se requiere navegación por rutas (opcional, el sitio puede ser una sola página con scroll y anclas `#hero`, `#beneficios`, `#precios`, `#confianza`, `#contacto`).
- **TailwindCSS** para estilos (utility-first, evita CSS-in-JS salvo animaciones puntuales).
- **Framer Motion** (opcional, recomendado) para micro-animaciones de entrada en scroll (fade/slide) que refuercen la persuasión sin afectar el rendimiento.
- **lucide-react** para iconografía (íconos de WhatsApp, check, escudo/seguridad, etc.).
- Componentes funcionales con Hooks. Nada de clases.
- Estructura de carpetas por componentes, no todo en `App.jsx`.

### Estructura de carpetas esperada

```
gansisolutions-web/
├── public/
│   └── images/
│       ├── hero/
│       ├── beneficios/
│       ├── confianza/
│       └── og-image.jpg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── ValueProposition.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── TrustProcess.jsx
│   │   │   └── ContactSection.jsx
│   │   └── ui/
│   │       ├── WhatsAppButton.jsx
│   │       ├── PricingCard.jsx
│   │       ├── SectionTitle.jsx
│   │       └── ImagePlaceholder.jsx
│   ├── data/
│   │   └── content.js       // textos, precios y beneficios centralizados
│   ├── hooks/
│   │   └── useScrollAnalytics.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── index.html
```

---

## 3. SISTEMA DE DISEÑO (DESIGN SYSTEM)

Estética: **moderna, tecnológica, "dark UI"**, con paleta negro/gris y **azul como color de acento/CTA**. Debe transmitir seriedad, confianza y sofisticación técnica (piensa en SaaS moderno, no en "agencia genérica").

### Paleta de colores (Tailwind config)

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#0A0A0C", // fondo principal
          900: "#121215", // fondo secciones alternas
          800: "#1B1B20", // cards
          700: "#2A2A31", // bordes / dividers
        },
        slate: {
          300: "#C3C6CE", // texto secundario
          400: "#9195A0",
        },
        accent: {
          DEFAULT: "#2F6FED", // azul principal (CTA)
          light: "#5B8DFB",
          dark: "#1E4FBF",
          glow: "rgba(47,111,237,0.35)", // para sombras/glow
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "sans-serif"], // para headlines
      },
      boxShadow: {
        "accent-glow": "0 0 40px rgba(47,111,237,0.25)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(47,111,237,0.15), transparent 60%)",
      },
    },
  },
  plugins: [],
};
```

### Reglas de uso del color

- **Fondo base**: `base-950` / `base-900` alternando por sección para crear ritmo visual sin perder la identidad dark.
- **Texto principal**: blanco/`slate-100`; **texto secundario**: `slate-300`/`slate-400`.
- **Azul (`accent`)**: reservado casi exclusivamente para: CTAs primarios, hovers, íconos destacados, bordes activos, el precio del plan recomendado y detalles de acento (líneas, glows). Evita usarlo como color decorativo masivo: su valor es que **dirige el ojo hacia la acción**.
- **Cards**: `base-800` con borde `base-700` y `hover:border-accent/50` + `hover:shadow-accent-glow` para dar sensación de interactividad premium.
- **Tipografía**: display/heading en `font-display` con peso 600–700; cuerpo en `font-sans`.

---

## 4. ESTRUCTURA DEL SITIO (5 BLOQUES FUNCIONALES)

El sitio es de una sola página (`/`) con 5 secciones en este orden. Cada sección debe tener un `id` para anclas de navegación y para el tracking de analítica.

### 4.1 Hero (`#hero`) — Bloque de Impacto

**Función:** captar atención en los primeros 3 segundos.

- Headline grande con el eslogan: *"Si lo puedes imaginar, lo podemos crear."*
- Subheadline corto explicando qué hace GansiSolutions (desarrollo de software a la medida para PyMEs).
- **CTA primario** a WhatsApp, visible sin hacer scroll (above the fold).
- Espacio para imagen/ilustración a la derecha o de fondo (mockup de dashboard, código abstracto, o composición gráfica tech). Usar `ImagePlaceholder` mientras no haya asset final.
- Botón flotante de WhatsApp (`WhatsAppButton`) fijo en la esquina inferior derecha, visible en **todas** las secciones del sitio, no solo el Hero.

```jsx
// src/components/sections/Hero.jsx
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-base-950 bg-grid-fade pt-32 pb-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
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
              href="https://wa.me/52XXXXXXXXXX?text=Hola%2C%20quiero%20cotizar%20un%20proyecto"
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

        <ImagePlaceholder
          label="Imagen: mockup de dashboard / composición tech"
          aspect="aspect-[4/3]"
        />
      </div>
    </section>
  );
}
```

### 4.2 Propuesta de Valor (`#beneficios`) — Persuasión

**Función:** generar deseo y necesidad.

- Grid de 3–4 beneficios tangibles: visibilidad 24/7, automatización de tareas, captación de clientes, escalabilidad.
- Sub-bloque de diferenciadores frente a "agencias genéricas": trato personalizado, soluciones escalables, enfoque en ROI.
- Espacio para íconos o imagen ilustrativa por beneficio.

```jsx
// src/data/content.js (fragmento)
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
];

export const differentiators = [
  "Trato directo y personalizado, sin intermediarios ni call centers",
  "Soluciones escalables, no plantillas genéricas",
  "Enfoque en retorno de inversión (ROI), no solo en estética",
];
```

### 4.3 Transparencia Económica (`#precios`) — Calificación de leads

**Función:** calificar al lead y ajustar expectativas antes de la llamada de ventas.

**Regla de negocio crítica:** el Nivel 3 **nunca** debe mostrar un precio fijo cerrado, solo el rango "Desde $15,000 MXN" y debe forzar al usuario hacia el formulario de cotización personalizada (no hacia un checkout ni precio fijo).

```jsx
// src/data/content.js (fragmento)
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
    highlighted: true, // plan recomendado -> usa acento azul
  },
  {
    id: "nivel-3",
    name: "Nivel 3 — Software a la Medida",
    price: "Desde 15,000 MXN",
    tag: "Aplicación Web / Software personalizado",
    description:
      "El precio varía según complejidad: dominio, servidor dedicado, base de datos, seguridad, agentes de IA, app móvil y arquitectura escalable.",
    features: ["Arquitectura escalable", "Seguridad de datos", "Agentes de IA / App móvil (opcional)"],
    ctaType: "quote-form", // fuerza al formulario, NO a un precio fijo
    highlighted: false,
  },
];
```

```jsx
// src/components/ui/PricingCard.jsx
export default function PricingCard({ tier }) {
  const isQuote = tier.ctaType === "quote-form";

  return (
    <div
      className={`flex flex-col rounded-2xl border p-8 transition ${
        tier.highlighted
          ? "border-accent bg-base-800 shadow-accent-glow"
          : "border-base-700 bg-base-900 hover:border-accent/40"
      }`}
    >
      {tier.highlighted && (
        <span className="mb-4 w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-light">
          Más elegido
        </span>
      )}
      <h3 className="font-display text-xl font-semibold text-white">{tier.name}</h3>
      <p className="mt-1 text-sm text-slate-400">{tier.tag}</p>
      <p className="mt-6 font-display text-3xl font-bold text-white">
        {tier.price}
      </p>
      <p className="mt-4 text-sm text-slate-300">{tier.description}</p>

      <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-300">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={
          isQuote
            ? "#contacto"
            : `https://wa.me/52XXXXXXXXXX?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(tier.name)}`
        }
        className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition ${
          tier.highlighted
            ? "bg-accent text-white hover:bg-accent-dark"
            : "border border-base-700 text-slate-200 hover:border-accent/50"
        }`}
      >
        {isQuote ? "Solicitar cotización personalizada" : "Cotizar por WhatsApp"}
      </a>
    </div>
  );
}
```

### 4.4 Generación de Confianza (`#confianza`) — Seguridad y método

**Función:** reducir la fricción y el miedo a la estafa.

- Timeline/stepper horizontal o vertical con las 5 etapas: **Levantamiento de requisitos → Diseño → Desarrollo → Pruebas → Entrega**.
- Bloque "¿En qué se gasta mi presupuesto?": desglose visual (barras o donut simple) de horas de programación, infraestructura, diseño UI/UX.
- Espacio para imagen que transmita seriedad (foto del proceso de trabajo, captura de herramientas, ilustración de flujo).

```jsx
// src/data/content.js (fragmento)
export const processSteps = [
  { step: "01", title: "Levantamiento de requisitos", description: "Entendemos tu negocio y objetivos reales." },
  { step: "02", title: "Diseño", description: "Prototipo visual alineado a tu marca y a la conversión." },
  { step: "03", title: "Desarrollo", description: "Construcción del sitio o software con buenas prácticas." },
  { step: "04", title: "Pruebas", description: "Validamos funcionalidad, velocidad y seguridad." },
  { step: "05", title: "Entrega", description: "Publicación, capacitación básica y soporte inicial." },
];

export const budgetBreakdown = [
  { label: "Horas de programación", percentage: 55 },
  { label: "Diseño UI/UX", percentage: 25 },
  { label: "Infraestructura y hosting", percentage: 20 },
];
```

### 4.5 Contacto y Cierre (`#contacto`) — Footer / conversión final

**Función:** último punto de rescate para leads que no convirtieron antes.

- Ubicado al final del scroll.
- WhatsApp, correo electrónico, y formulario breve: **Nombre, Empresa, Tipo de proyecto (Estático/Dinámico/App), Teléfono**.
- El campo "Tipo de proyecto" debe estar pre-seleccionado si el usuario llegó desde el CTA del Nivel 3.

```jsx
// src/components/sections/ContactSection.jsx (estructura del formulario)
const projectTypes = ["Estático", "Dinámico", "Aplicación / Software a la medida"];

// Campos: name, company, projectType (select), phone
// Al enviar: idealmente integrar con un backend/endpoint propio o servicio
// tipo Formspree/EmailJS; documentar el TODO si no hay backend aún.
```

---

## 5. COMPONENTES CLAVE TRANSVERSALES

### 5.1 Botón flotante de WhatsApp (visible en todo el sitio)

```jsx
// src/components/ui/WhatsAppButton.jsx
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/52XXXXXXXXXX?text=Hola%2C%20quiero%20más%20información"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-accent-glow transition hover:scale-105 hover:bg-accent-dark"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
```

### 5.2 Placeholder de imagen (para espacios sin asset final)

```jsx
// src/components/ui/ImagePlaceholder.jsx
export default function ImagePlaceholder({ label, aspect = "aspect-video" }) {
  return (
    <div
      className={`${aspect} flex w-full items-center justify-center rounded-2xl border border-dashed border-base-700 bg-base-900 text-center text-sm text-slate-500`}
    >
      {label}
    </div>
  );
}
```

Usa `ImagePlaceholder` en **todos** los espacios donde el brief pide imágenes: Hero, cada beneficio (icono/foto), bloque de confianza (foto del proceso) y opcionalmente en el footer (logo/foto del equipo). Así el sitio queda listo para recibir los assets finales sin romper el layout.

### 5.3 Hook de analítica por sección (scroll tracking)

Requisito técnico explícito del brief: medir en qué sección del bloque de precios se quedan los usuarios.

```jsx
// src/hooks/useScrollAnalytics.js
import { useEffect } from "react";

export default function useScrollAnalytics(sectionIds = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reemplazar con el proveedor real: GA4, Plausible, Meta Pixel, etc.
            window?.gtag?.("event", "section_view", {
              section_id: entry.target.id,
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
}
```

---

## 6. REQUISITOS TÉCNICOS NO NEGOCIABLES

1. **100% responsive**, mobile-first (el canal de contacto principal es WhatsApp, la mayoría del tráfico será móvil).
2. **Rendimiento (Web Vitals)**: imágenes en `webp`/`avif` con `loading="lazy"` (excepto la del Hero, que va `eager`/`priority`), evitar librerías pesadas innecesarias, usar `React.lazy` si el bundle crece.
3. **Accesibilidad básica**: contraste correcto (revisar que el texto sobre `base-950` cumpla AA), `aria-label` en botones de solo ícono, `alt` descriptivo en todas las imágenes.
4. **SEO on-page**: `<title>`, meta description, Open Graph tags, estructura semántica (`<section>`, un solo `<h1>` en el Hero, jerarquía correcta de headings).
5. **Analítica de eventos**: trackear como mínimo: click en CTA de WhatsApp (Hero y flotante), click en cada plan de precios, envío del formulario de contacto, y vista de cada sección (usando `useScrollAnalytics`).
6. **Sin datos sensibles hardcodeados en el repo público**: el número de WhatsApp y el correo pueden ir en `content.js`, pero si se agrega backend para el formulario, las credenciales van en variables de entorno (`.env`, excluido en `.gitignore`).

---

## 7. TONO DE COPY (para el propio agente al redactar textos)

- Directo, claro, sin jerga técnica innecesaria — el público son dueños de PyMEs, no programadores.
- Enfocado en beneficios de negocio (ventas, tiempo, confianza), no en features técnicas.
- Evitar sonar como "agencia genérica": el diferenciador es cercanía, seriedad del proceso y enfoque en retorno de inversión.

---

## 8. ENTREGABLE ESPERADO DEL AGENTE

1. Proyecto React + Vite funcional, `npm run dev` sin errores.
2. Las 5 secciones implementadas en el orden y con la lógica de negocio descrita (especialmente la regla del Nivel 3).
3. Componente `WhatsAppButton` flotante global.
4. Todos los espacios de imagen marcados con `ImagePlaceholder` y comentario indicando qué tipo de imagen debe ir ahí.
5. Paleta de colores y tipografía aplicadas de forma consistente (negro/gris + azul de acento).
6. Código limpio, componentizado, comentado donde la lógica de negocio no sea obvia (ej. por qué el Nivel 3 no muestra precio fijo).

## 9. Base de datos

Guía Técnica del Proyecto 
Descripción 
Este documento describe la arquitectura técnica y el flujo de trabajo para el desarrollo de la aplicación web. El proyecto
utiliza: 
Frontend: React + Vite, con TailwindCSS para estilos.
Backend: Node.js + Express, con Mongoose para la interacción con MongoDB.
Base de datos: MongoDB Atlas (NoSQL).
Despliegue: Vercel, que aloja tanto el frontend como el backend (funciones serverless). 
El objetivo es proporcionar una guía clara para que todo el equipo pueda programar de manera eficiente, manteniendo
buenas prácticas y asegurando un despliegue sin contratiempos. 
Tecnologías utilizadasCapa TecnologíaFrontend React 18, Vite, TailwindCSSBackend Node.js, Express, MongooseComunicación Axios (cliente), CORS (servidor)Base de datos MongoDB AtlasDespliegue VercelEntorno Variables de entorno (.env) 
Estructura del Proyecto 
La estructura de carpetas recomendada es la siguiente (puedes adaptarla según tus necesidades): 
mi-proyecto/
├── api/ # Punto de entrada para el backend en Vercel
│ └── index.js # Configuración de Express y conexión a DB
├── src/ # Código del backend (lógica de negocio)
│ ├── db/
│ │ └── connect.js # Patrón singleton para conexión a MongoDB
│ ├── models/ # Modelos de Mongoose (ej. Usuario, Producto)
│ ├── routes/ # Definición de rutas de la API
│ └── controllers/ # Controladores con la lógica de cada endpoint
├── frontend/ # Aplicación React + Vite
│ ├── src/
│ │ ├── components/ # Componentes reutilizables
│ │ ├── pages/ # Páginas de la aplicación
│ │ ├── services/ # Configuración de Axios y llamadas a la API
│ │ ├── hooks/ # Custom hooks
│ │ └── App.jsx
│ ├── index.html
│ ├── package.json
│ └── vite.config.js
├── vercel.json # Configuración de despliegue en Vercel
├── .env # Variables de entorno (no subir a git)
├── .gitignore
└── package.json # Dependencias del backend y scripts
Nota: Puedes optar por tener un único package.json en la raíz y manejar tanto frontend como backend, o
separar en dos carpetas con sus propios package.json. La estructura anterior es una opción práctica. 
Configuración inicial 
1. Clonar el repositorio 
git clone <url-del-repositorio>
cd mi-proyecto

2. Instalar dependencias 
Backend (raíz del proyecto): 
npm install
Frontend (dentro de la carpeta frontend): 
cd frontend
npm install
cd ..

3. Variables de entorno 
Crea un archivo .env en la raíz del proyecto con las siguientes variables: 
# Conexión a MongoDB Atlas
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.xxxxx.mongodb.net/<nombre_bd>?retryWrites=true&w=majority
# Puerto para el servidor local (opcional)
PORT=5000
Importante: No subas el archivo .env al repositorio. Asegúrate de que esté incluido en .gitignore. 
Desarrollo Local 
Levantar el backend (Express) 
Desde la raíz del proyecto: 
npm run dev
Esto iniciará el servidor en el puerto definido (por defecto 5000) y con recarga automática (usando nodemon si está
configurado). 
Levantar el frontend (React + Vite) 
Desde la carpeta frontend: 
npm run dev
El frontend estará disponible en http://localhost:5173 (por defecto) y se comunicará con el backend a través de la URL
base definida en las variables de entorno del frontend. 
Nota: Para desarrollo, configura en el frontend un proxy o define la URL base de la API en un archivo de
configuración (ej. .env.development en el frontend con VITE_API_URL=http://localhost:5000/api). 
Conexión a MongoDB (Patrón Singleton) 
El archivo src/db/connect.js implementa un patrón singleton para reutilizar la conexión a MongoDB entre distintasinvocaciones de la función serverless. Esto evita el agotamiento de conexiones, especialmente en el entorno de Vercel. 
// src/db/connect.js
import mongoose from 'mongoose';
let cached = global.mongoose;
if (!cached) {
cached = global.mongoose = { conn: null, promise: null };
}
async function connectToDatabase() {
if (cached.conn) {
return cached.conn;
}
 if (!cached.promise) {
const opts = {
bufferCommands: false,
maxPoolSize: 10,
serverSelectionTimeoutMS: 5000,
};
 cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => mongoose);
}
cached.conn = await cached.promise;
return cached.conn;
}
export default connectToDatabase;
Uso en cada ruta o controlador: 
import connectToDatabase from '../db/connect.js';
const obtenerUsuarios = async (req, res) => {
await connectToDatabase();
// Lógica para obtener usuarios...
};

Definición de Endpoints y Controladores 
Estructura de rutas (ejemplo) 
En src/routes/usuarioRoutes.js: 
import express from 'express';
import { getUsuarios, crearUsuario } from '../controllers/usuarioController.js';
const router = express.Router();
router.get('/', getUsuarios);
router.post('/', crearUsuario);
export default router;
Controlador (ejemplo) 
En src/controllers/usuarioController.js: 
import Usuario from '../models/Usuario.js';
import connectToDatabase from '../db/connect.js';
export const getUsuarios = async (req, res) => {
try {
await connectToDatabase();
const usuarios = await Usuario.find();
res.json(usuarios);
} catch (error) {
res.status(500).json({ error: 'Error al obtener usuarios' });
}
};
export const crearUsuario = async (req, res) => {
try {
await connectToDatabase();
const nuevoUsuario = new Usuario(req.body);
await nuevoUsuario.save();
res.status(201).json(nuevoUsuario);
} catch (error) {
res.status(400).json({ error: 'Error al crear usuario' });
}
};

Archivo principal de la API (api/index.js) 
import express from 'express';
import cors from 'cors';
import connectToDatabase from '../src/db/connect.js';
import usuarioRoutes from '../src/routes/usuarioRoutes.js';
const app = express();
app.use(cors());
app.use(express.json());
// Conectar a la base de datos en cada solicitud (el singleton optimiza)
app.use(async (req, res, next) => {
try {
await connectToDatabase();
next();
} catch (error) {
res.status(500).json({ error: 'Error de conexión a la base de datos' });
}
});
// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.get('/', (req, res) => {
res.send('API funcionando correctamente');
});
export default app;
Consumo de la API desde el Frontend (React + Axios) 
Configuración de Axios 
Crea un archivo frontend/src/services/api.js: 
import axios from 'axios';
const api = axios.create({
baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
headers: {
'Content-Type': 'application/json',
},
});
export default api;

Ejemplo de uso en un componente 
import React, { useEffect, useState } from 'react';
import api from '../services/api';
const UsuariosList = () => {
const [usuarios, setUsuarios] = useState([]);
 useEffect(() => {
const fetchUsuarios = async () => {
try {
const res = await api.get('/usuarios');
setUsuarios(res.data);
} catch (error) {
console.error('Error al obtener usuarios', error);
}
};
fetchUsuarios();
}, []);
 return (
<ul>
{usuarios.map(u => <li key={u._id}>{u.nombre}</li>)}
</ul>
);
};
export default UsuariosList;

Despliegue en Vercel 
1. Configurar vercel.json 
En la raíz del proyecto: 
{
"version": 2,}

"builds": [
{
"src": "api/index.js",
"use": "@vercel/node"
},
{
"src": "frontend/**",
"use": "@vercel/static-build",
"config": {
"distDir": "frontend/dist"
}
}
],
"routes": [
{
"src": "/api/(.*)",
"dest": "api/index.js"
},
{
"src": "/(.*)",
"dest": "frontend/dist/$1"
}
]
2. Variables de entorno en Vercel 
En el dashboard de Vercel, ve a tu proyecto > Settings > Environment Variables y agrega: 
MONGODB_URI: la cadena de conexión a MongoDB Atlas.
VITE_API_URL: (opcional) la URL de tu API desplegada (ej. https://tu-app.vercel.app/api). 
3. Comandos de despliegue 
Primera vez: conéctate con vercel (CLI) o conecta tu repositorio de GitHub en el dashboard.
Actualizaciones: cada push a la rama principal (main/master) disparará un despliegue automático si tienes integración
con GitHub. 
4. Verificar despliegue 
Accede a https://tu-app.vercel.app/api para comprobar que el backend responde, y a la raíz para ver el frontend. 
Flujo de trabajo para el equipo 
Crear una nueva rama para cada feature o bugfix desde main.
Desarrollar localmente levantando backend y frontend.
Probar los endpoints con herramientas como Postman o el propio frontend.
Hacer commits con mensajes claros y descriptivos.
Crear un Pull Request hacia main.
Revisión de código y aprobación.
Merge y despliegue automático en Vercel. 
Comandos útilesComandonpm installcd frontend && npm installnpm run devDescripciónInstala dependencias del backend.Instala dependencias del frontend.cd frontend && npm run dev Inicia el frontend en modo desarrollo.npm start Inicia el backend en producción (ej. en Vercel).cd frontend && npm run build Construye el frontend para producción.vercel --prod Despliega a producción usando la CLI de Vercel.Buenas prácticas 

Validación de datos: Usa Mongoose validations o librerías como Joi para validar los datos de entrada.
Manejo de errores: Siempre envía respuestas de error con códigos HTTP apropiados.
Seguridad: No expongas información sensible en los logs. Usa variables de entorno para todo lo que sea secreto.
Rendimiento: Limita el número de documentos devueltos en consultas (usando limit, skip) y utiliza índices en
MongoDB.
CORS: Configura CORS adecuadamente para permitir solo los orígenes necesarios en producción.
Tests: Escribe pruebas unitarias y de integración para asegurar la estabilidad. 
Recursos adicionales 
Documentación de Vercel para Node.js
Mongoose Guide
React + Vite 
¡Listo! Con esta guía, el equipo tendrá una base sólida para desarrollar y desplegar la aplicación de manera eficiente
