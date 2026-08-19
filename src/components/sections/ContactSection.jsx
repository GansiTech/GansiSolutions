import { MessageCircle, Mail, Phone } from 'lucide-react'
import { contact } from '../../data/content'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    projectType: 'Estático',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Validate form
    if (!formData.name || !formData.company || !formData.phone) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Create WhatsApp message with form data
    const message = `
Hola, soy ${formData.name} de ${formData.company}.
Mi teléfono es: ${formData.phone}
Tipo de proyecto interestado: ${formData.projectType}

Quisiera cotizar un proyecto de desarrollo de software a la medida.
    `.trim()

    // URL encode the message
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/526624311791?text=${encodedMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')

    // Show success status
    setSubmitStatus('success')

    // Reset form after success
    setFormData({
      name: '',
      company: '',
      projectType: 'Estático',
      phone: ''
    })

    // Reset submitting state after a brief delay
    setTimeout(() => {
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contacto" className="base-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] items-start">
          {/* Información de contacto */}
          <div>
            <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
              Contacto directo
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {contact.subtitle}
            </p>
            <div className="mt-10 space-y-6">
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-base-700 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-accent/50"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div>
                  <span className="block font-medium text-white">WhatsApp</span>
                  <span className="text-sm text-slate-300">{contact.phone}</span>
                </div>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-xl border border-base-700 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-accent/50"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <div>
                  <span className="block font-medium text-white">Correo electrónico</span>
                  <span className="text-sm text-slate-300">{contact.email}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="base-800 rounded-2xl border border-base-700 p-8">
            <h3 className="mb-6 font-display text-xl font-semibold text-white">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-300">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-base-700 bg-base-900 text-white placeholder-slate-400 focus:border-accent/50 focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-300">
                    Empresa u organización
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-base-700 bg-base-900 text-white placeholder-slate-400 focus:border-accent/50 focus:outline-none"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Tipo de proyecto
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-base-700 bg-base-900 text-white placeholder-slate-400 focus:border-accent/50 focus:outline-none"
                >
                  <option value="Estático">Sitio web estático / Landing page</option>
                  <option value="Dinámico">Portal web con base de datos</option>
                  <option value="Aplicación / Software a la medida">Software personalizado</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Teléfono de contacto
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-base-700 bg-base-900 text-white placeholder-slate-400 focus:border-accent/50 focus:outline-none"
                  placeholder="+52 1 234 567 8900"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white transition ${
                    isSubmitting
                      ? "bg-accent/50 cursor-not-allowed"
                      : "bg-accent hover:bg-accent-dark"
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  {!isSubmitting && (
                    <MessageCircle className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Mensaje de estado */}
              {submitStatus === 'success' && (
                <p className="mt-4 text-sm text-accent/80">
                  ¡Listo! Se ha abierto WhatsApp para enviarnos tu mensaje.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-sm text-red-500">
                  Por favor completa todos los campos requeridos.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}