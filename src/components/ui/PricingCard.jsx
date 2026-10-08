import { Check } from "lucide-react";

export default function PricingCard({ tier }) {
  const isQuote = tier.ctaType === "quote-form";
  const whatsappHref = `https://wa.me/526624311791?text=${encodeURIComponent(
    `Hola, me interesa el plan ${tier.name} (${tier.price})`
  )}`;

  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-8 ${
        tier.highlighted
          ? "border-accent bg-base-800 shadow-accent-glow"
          : "border-base-700 bg-base-900"
      }`}
    >
      {tier.highlighted && (
        <span className="mb-4 w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-light">
          Más elegido
        </span>
      )}
      <p className="text-sm text-slate-400">{tier.tag}</p>
      <h3 className="mt-1 font-display text-xl font-semibold text-white">{tier.name}</h3>
      <p className="mt-6 font-display text-3xl font-bold text-white">{tier.price}</p>
      <p className="mt-4 text-sm text-slate-300">{tier.description}</p>

      <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={isQuote ? "#contacto" : whatsappHref}
        {...(!isQuote && { target: "_blank", rel: "noopener noreferrer" })}
        className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition ${
          tier.highlighted
            ? "bg-accent text-white hover:bg-accent-dark"
            : "border border-base-700 text-slate-200 hover:border-accent/50"
        }`}
      >
        {isQuote ? "Pedir cotización detallada" : "Cotizar por WhatsApp"}
      </a>
    </div>
  );
}
