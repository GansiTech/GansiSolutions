export default function SectionTitle({ heading, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent/80">Sección clave</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{heading}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
    </div>
  )
}
