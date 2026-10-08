import { MessageCircle, Mail, Phone } from 'lucide-react'
import { contact } from '../../data/content'
import { useState } from 'react'
import Reveal from '../ui/Reveal'

const initialForm = {
  name: '',
  company: '',
  projectType: 'Estático',
  phone: ''
}

const inputClass =
  'w-full rounded-lg border bg-base-900 px-4 py-3 text-white placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40'

function validate(field, value) {
  if (field === 'name' && !value.trim()) return 'Escribe tu nombre.'
  if (field === 'phone') {
    const digits = value.replace(/\D/g, '')
    if (!digits) return 'Escribe un teléfono para poder contactarte.'
    if (digits.length < 10) return 'El teléfono debe tener al menos 10 dígitos.'
  }
  return ''
}

export default function ContactSection() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sentUrl, setSentUrl] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Si el campo ya tenía error, se corrige mientras el usuario escribe
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: validate(name, value) }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {
      name: validate('name', formData.name),
      phone: validate('phone', formData.phone)
    }
    setErrors(newErrors)
    const firstInvalid = Object.keys(newErrors).find((key) => newErrors[key])
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    const company = formData.company.trim() ? ` de ${formData.company.trim()}` : ''
    const message = `
Hola, soy ${formData.name.trim()}${company}.
Mi teléfono es: ${formData.phone}
Tipo de proyecto: ${formData.projectType}

Quisiera cotizar un proyecto de desarrollo de software a la medida.
    `.trim()

    const whatsappUrl = `https://wa.me/526624311791?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener')
    setSentUrl(whatsappUrl)
    setFormData(initialForm)
  }

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: formData[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: `${inputClass} ${errors[name] ? 'border-red-400' : 'border-base-700'}`
  })

  const fieldError = (name) =>
    errors[name] && (
      <p id={`contact-${name}-error`} className="mt-2 text-sm text-red-400">
        {errors[name]}
      </p>
    )

  return (
    <section id="contacto" className="bg-base-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-[1.3fr_1fr]">
          {/* Información de contacto */}
          <Reveal>
            <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
              Contacto
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
                <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="block font-medium text-white">WhatsApp</span>
                  <span className="text-sm text-slate-300">{contact.phone}</span>
                </div>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-xl border border-base-700 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-accent/50"
              >
                <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <span className="block font-medium text-white">Correo electrónico</span>
                  <span className="break-all text-sm text-slate-300">{contact.email}</span>
                </div>
              </a>
            </div>
          </Reveal>

          {/* Formulario de contacto */}
          <Reveal delay={0.15} className="rounded-2xl border border-base-700 bg-base-800 p-8">
            <h3 className="font-display text-xl font-semibold text-white">
              Cuéntanos de tu proyecto
            </h3>
            <p className="mt-2 mb-6 text-sm text-slate-400">
              Al enviar se abrirá WhatsApp con tu mensaje listo.
            </p>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">
                    Nombre
                  </label>
                  <input type="text" autoComplete="name" placeholder="Tu nombre" {...fieldProps('name')} />
                  {fieldError('name')}
                </div>
                <div>
                  <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-slate-300">
                    Empresa <span className="font-normal text-slate-400">(opcional)</span>
                  </label>
                  <input type="text" autoComplete="organization" placeholder="Nombre de tu empresa" {...fieldProps('company')} />
                </div>
              </div>

              <div>
                <label htmlFor="contact-projectType" className="mb-2 block text-sm font-medium text-slate-300">
                  ¿Qué necesitas?
                </label>
                <select {...fieldProps('projectType')}>
                  <option value="Estático">Página informativa (Nivel 1)</option>
                  <option value="Dinámico">Sitio con reservas o clientes (Nivel 2)</option>
                  <option value="Aplicación / Software a la medida">Software a la medida (Nivel 3)</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-slate-300">
                  Teléfono
                </label>
                <input type="tel" autoComplete="tel" inputMode="tel" placeholder="662 123 4567" {...fieldProps('phone')} />
                {fieldError('phone')}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-white transition hover:bg-accent-dark"
              >
                Continuar en WhatsApp
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </button>

              <div role="status" aria-live="polite">
                {sentUrl && (
                  <p className="text-sm text-slate-300">
                    Listo, tu mensaje está en WhatsApp. Solo presiona enviar ahí.{' '}
                    <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="text-accent-light underline">
                      ¿No se abrió? Ábrelo aquí
                    </a>
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
