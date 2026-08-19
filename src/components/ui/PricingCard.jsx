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
            : `https://wa.me/526624311791?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(
                tier.name
              )}`
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