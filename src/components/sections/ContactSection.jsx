import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { contact } from '../../data/content'

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-base-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[32px] border border-base-700 bg-base-900 p-10 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent/80">Contacto</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                {contact.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">{contact.subtitle}</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-base-700 bg-white/5 p-5 text-left transition hover:border-accent/50"
                >
                  <div className="flex items-center gap-3 text-accent">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold text-white">WhatsApp</span>
                  </div>
                  <p className="mt-3 text-slate-300">{contact.phone}</p>
                </a>
                <div className="rounded-3xl border border-base-700 bg-white/5 p-5">
                  <div className="flex items-center gap-3 text-accent">
                    <Mail className="h-5 w-5" />
                    <span className="font-semibold text-white">Correo</span>
                  </div>
                  <p className="mt-3 text-slate-300">{contact.email}</p>
                </div>
              </div>
            </div>
            <div className="rounded-[28px] border border-base-700 bg-base-800 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent/80">Nuestro proceso</p>
              <div className="mt-8 space-y-4 text-slate-300">
                <p className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    1
                  </span>
                  Análisis rápido de tu proyecto y alcance.
                </p>
                <p className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    2
                  </span>
                  Diseño y prototipo ajustado a tu marca.
                </p>
                <p className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    3
                  </span>
                  Entrega con pruebas, capacitación y soporte inicial.
                </p>
              </div>
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-3xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
              >
                Escribir por WhatsApp
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
