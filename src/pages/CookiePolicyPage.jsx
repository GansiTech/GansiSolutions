import { motion } from "framer-motion";

export default function CookiePolicyPage() {
  return (
    <section
      id="cookie-policy"
      className="relative overflow-hidden bg-base-950 pt-32 pb-24"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-6"
      >
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Política de Cookies
        </h1>
        <div className="prose prose-lg text-slate-300">
          <p className="mb-4">
            En <strong>GansiSolutions</strong> utilizamos cookies y tecnologías similares para mejorar su experiencia
            en nuestro sitio web, analizar el tráfico y personalizar el contenido. Esta política explica qué son las
            cookies, cómo las utilizamos y sus opciones respecto a su uso.
          </p>

          <h2 className="text-2xl font-semibold text-accent mt-6 mb-3">¿Qué son las cookies?</h2>
          <p className="mb-4">
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil)
            cuando visita un sitio web. Nos ayudamos a recordar información sobre su visita, como sus preferencias
            y configuraciones, para hacer que su próxima visita sea más útil y el sitio sea más personal para usted.
          </p>

          <h2 className="text-2xl font-semibold text-accent mt-6 mb-3">Tipos de cookies que utilizamos</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              <strong>Cookies esenciales:</strong> Necesarias para que el sitio web funcione correctamente. No pueden
              desactivarse en nuestros sistemas. Por lo general, solo se establecen en respuesta a acciones realizadas
              por usted, como iniciar sesión o completar formularios.
            </li>
            <li>
              <strong>Cookies de rendimiento y analítica:</strong> Nos permiten contar visitas y fuentes de tráfico para
              poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos
              populares y ver cómo se mueven los visitantes por el sitio. Todas la información que estas cookies
              recopilan es agregada y, por lo tanto, anónima.
            </li>
            <li>
              <strong>Cookies de funcionalidad:</strong> Permiten que el sitio web proporcione una mejor funcionalidad
              y personalización. Podrían ser establecidas por nosotros o por proveedores externos cuyos servicios hemos
              añadido a nuestras páginas.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-accent mt-6 mb-3">Gestión de cookies</h2>
          <p className="mb-4">
            Puede aceptar o rechazar las cookies mediante el banner de consentimiento que aparece en nuestra primera
            visita. También puede administrar las cookies a través de la configuración de su navegador. La mayoría de los
            navegadores le permiten:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Ver qué cookies tiene almacenadas</li>
            <li>Eliminar cookies individuales</li>
            <li>Bloquear cookies de terceros</li>
            <li>Bloquear todas las cookies</li>
            <li>Eliminar todas las cookies al cerrar el navegador</li>
          </ul>
          <p className="mb-4">
            Tenga en cuenta que si bloquea todas las cookies, algunas funcionalidades de nuestro sitio podrían no
            funcionar correctamente.
          </p>

          <h2 className="text-2xl font-semibold text-accent mt-6 mb-3">Cambios en esta política</h2>
          <p className="mb-4">
            Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios en nuestras prácticas
            o por razones operativas, legales o regulatorias. Le recomendamos que revise esta política periódicamente
            para estar informado sobre cómo utilizamos las cookies.
          </p>

          <h2 className="text-2xl font-semibold text-accent mt-6 mb-3">Contacto</h2>
          <p className="mb-4">
            Si tiene alguna pregunta sobre nuestra utilización de cookies o esta política, puede contactarnos a través
            de:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              WhatsApp: <a href="https://wa.me/526624311791?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20las%20cookies"
                className="text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >+52 662 431 1791</a>
            </li>
            <li>
              Correo electrónico: <a href="mailto:fernandogc.2912@hotmail.com"
                className="text-accent underline"
              >fernandogc.2912@hotmail.com</a>
            </li>
          </ul>
        </div>
        <button onClick={() => window.location.href = '/'} className="mt-6 px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition">Volver a la página principal</button>
      </motion.div>
    </section>
  );
}